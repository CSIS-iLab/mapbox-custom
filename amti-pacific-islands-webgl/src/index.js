import interactiveSetup from './js/interactive-setup'
import Scrolling from './js/scrolling'
import breakpoints from './js/breakpoints'
import makeMap from './js/makeMap'
import mapboxgl from 'mapbox-gl'
import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
polyfill()

import './scss/main.scss'

const spreadsheetID = '115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc'

const chapterURL =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/2/public/values?alt=json'

const container = document.getElementById('scrolly-island-interactive')

let countryColors = [],
  paintMap,
  chinaPopup = new mapboxgl.Popup({
    closeButton: false
  }),
  exclude = ['Introduction', 'Conclusion'],
  nations = ['Australia', 'New Zealand', 'United States', 'France', 'China'],
  special = ['United States', 'France'],
  currentStep = 0

window.stepActions = []

const init = () => {
  if (!container) {
    return
  }

  fetch(chapterURL)
    .then(resp => resp.json())
    .then(json => {
      window.isMobile = window.screen.availWidth < 768
      window.stepActions = parseChapterData(json.feed.entry)

      countryColors = window.stepActions
        .filter(c => !exclude.includes(c.name))
        .map(c => [c.name, c.color])
        .reduce((a, b) => a.concat(b))

      paintMap = ['match', ['get', 'country']]
        .concat(countryColors)
        .concat(['#e06b91'])
    })
    .then(x => {
      interactiveSetup({
        container: container,
        initialDesc: `${
          window.stepActions[0] ? `${window.stepActions[0].text}` : ``
        }`,
        steps: Object.values(window.stepActions)
      })

      if (window.isMobile) {
        Scrolling({ stepActions: window.stepActions })
      }

      makeMap()

      window.addEventListener('resize', resize)
    })
}

init()

const resize = () => {
  window.stepActions[currentStep].fly()
}

const parseChapterData = rawData => {
  let d = rawData.map(r => {
    let row = r
    let chapterData = {}
    Object.keys(row).forEach((c, i) => {
      let column = c
      if (column.includes('gsx$')) {
        let columnName = column.replace('gsx$', '')
        chapterData[columnName] = row[column]['$t']
      }
    })

    if (!isMobile) {
      chapterData.center = [
        parseFloat(chapterData['latitude']),
        parseFloat(chapterData['longitude'])
      ]
    } else {
      chapterData.center = [
        parseFloat(chapterData['mobile-latitude']),
        parseFloat(chapterData['mobile-longitude'])
      ]

      chapterData.zoom = chapterData['mobile-zoom']
    }

    chapterData.text = `<h3 class="title">${chapterData.title}</h3>
<p class="story">${chapterData.text}</p>`

    chapterData.fly = () => {
      fly(chapterData)

      window.nation = chapterData.name

      if (window.map.getSource('United States_clusters')) {
        highlightChapter(chapterData)
        setPopup(chapterData)
      }
    }

    return chapterData
  })
  return d
}

const setPopup = chapterData => {
  let chapterName = chapterData.name

  let features = window.map.getSource('interests')._data.features

  let feature = features.find(f => {
    return f.properties.country === chapterName
  })

  if (feature) {
    let properties = feature.properties
    let allowedHeaders = [
      'type',
      'number-of-ships-permanently-based',
      'number-of-troops-stationed',
      'number-of-aircraft-based',
      'chinese-involvement'
    ]
    let description

    if (!isMobile) {
      description = Object.keys(properties)
        .filter(p => p !== 'country')
        .map(p => {
          if (properties[p])
            return allowedHeaders.includes(p)
              ? `<div class=
          "popupHeaderStyle">${p
            .toUpperCase()
            .replace(/-/g, ' ')
            .replace('NUMBER', '#')}</div><div class="popupEntryStyle">${
                  properties[p]
                }</div>`
              : `<div class="popupEntryStyle">${properties[p]}</div>`
        })
        .filter(p => p)
        .join('')
    } else {
      Object.keys(properties)
        .filter(p => p !== 'country')
        .map(p => {
          description = `<div class="popupEntryStyle">${
            properties['port-or-base']
          }</div>`
        })
    }

    chinaPopup
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<div class="leaflet-popup-content-wrapper">${description}</div>`
      )
      .addTo(map)
  }
  if (!chapterData.name.includes('China')) chinaPopup.remove()
}

const fly = chapterData => {
  window.map.flyTo(chapterData)
}

const chapterColors = {
  'United States': `#6688b9`,
  France: `#f89c74`,
  'New Zealand': `#00ad3b`,
  Australia: `#f6cf71`,
  China: '#e06b91'
}

const highlightChapter = chapterData => {
  let chapterName =
    chapterData.name.indexOf('-') > 0
      ? chapterData.name.substring(0, chapterData.name.indexOf('-'))
      : chapterData.name

  if (!exclude.includes(chapterName)) {
    let newFillMap = !chapterName.includes('China')
      ? [
          'match',
          ['get', 'country'],
          `${chapterName}`,
          `${window.stepActions.find(c => c.name === chapterName).color}`,
          'transparent'
        ]
      : ['match', ['get', 'chinese-involvement'], '', 'transparent', '#e06b91']

    let newStrokeMap = !chapterName.includes('China')
      ? ['match', ['get', 'country'], `${chapterName}`, '#fff', 'transparent']
      : ['match', ['get', 'chinese-involvement'], '', 'transparent', '#fff']

    nations.forEach(nation => {
      if (nation === chapterName && nations.includes(chapterName)) {
        window.map.setPaintProperty(
          `${nation}_clusters`,
          'circle-color',
          newFillMap
        )

        window.map.setPaintProperty(
          `${nation}_clusters`,
          'circle-stroke-color',
          newStrokeMap
        )

        window.map.setPaintProperty(
          `${nation}_cluster-count-color`,
          'circle-color',
          chapterColors[nation]
        )

        window.map.setPaintProperty(
          `${nation}_cluster-count-color`,
          'circle-stroke-color',
          '#fff'
        )

        window.map.setLayoutProperty(`${nation}_cluster-count`, 'text-size', 18)
      } else {
        window.map.setPaintProperty(
          `${nation}_clusters`,
          'circle-color',
          'transparent'
        )

        window.map.setPaintProperty(
          `${nation}_clusters`,
          'circle-stroke-color',
          'transparent'
        )

        window.map.setPaintProperty(
          `${nation}_cluster-count-color`,
          'circle-color',
          'transparent'
        )

        window.map.setPaintProperty(
          `${nation}_cluster-count-color`,
          'circle-stroke-color',
          'transparent'
        )

        window.map.setLayoutProperty(`${nation}_cluster-count`, 'text-size', 0)
      }
    })
  } else if (chapterName === 'Introduction') {
    nations.forEach(nation => {
      window.map.setPaintProperty(
        `${nation}_clusters`,
        'circle-color',
        'transparent'
      )

      window.map.setPaintProperty(
        `${nation}_clusters`,
        'circle-stroke-color',
        'transparent'
      )

      window.map.setPaintProperty(
        `${nation}_cluster-count-color`,
        'circle-color',
        'transparent'
      )

      window.map.setPaintProperty(
        `${nation}_cluster-count-color`,
        'circle-stroke-color',
        'transparent'
      )
      window.map.setLayoutProperty(`${nation}_cluster-count`, 'text-size', 0)
    })
  } else {
    nations.forEach(nation => {
      window.map.setPaintProperty(
        `${nation}_clusters`,
        'circle-color',
        chapterColors[nation]
      )

      window.map.setPaintProperty(
        `${nation}_clusters`,
        'circle-stroke-color',
        '#fff'
      )
      window.map.setLayoutProperty(`${nation}_cluster-count`, 'text-size', 18)
    })
  }
}
