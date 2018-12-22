import interactiveSetup from './js/interactive-setup'
import Scrolling from './js/scrolling'
import breakpoints from './js/breakpoints'
import makeGLMap from './js/makeGLMap'
import makeLLMap from './js/makeLLMap'
import mapboxgl from 'mapbox-gl'
import { polyfill } from 'es6-promise'
polyfill()
import { fetch as fetchPolyfill } from 'whatwg-fetch'

import './scss/main.scss'

const spreadsheetID = '115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc'

let IE = /*@cc_on!@*/ false || !!document.documentMode

let Edge = !mapboxgl.supported()

window.isIE = IE || Edge

let chapterURL =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/2/public/values?alt=json'

if (window.isIE) {
  chapterURL =
    'https://spreadsheets.google.com/feeds/list/' +
    spreadsheetID +
    '/3/public/values?alt=json'
} else {
  chapterURL =
    'https://spreadsheets.google.com/feeds/list/' +
    spreadsheetID +
    '/2/public/values?alt=json'
}

const container = document.getElementById('scrolly-island-interactive')

let countryColors = [],
  paintMap,
  chinaPopup,
  exclude = ['Introduction', 'Conclusion'],
  nations = ['Australia', 'New Zealand', 'United States', 'France', 'China'],
  special = ['United States', 'France'],
  currentStep = 0

if (!window.isIE) {
  chinaPopup = new mapboxgl.Popup({
    closeButton: false
  })
}
window.stepActions = []

const init = () => {
  if (!container) {
    return
  }

  fetchPolyfill(chapterURL)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      window.isMobile = window.innerWidth < 1040
      window.stepActions = parseChapterData(json.feed.entry)

      countryColors = window.stepActions
        .filter(c => !(exclude.indexOf(c.name) > -1))
        .map(c => [c.name, c.color])
        .reduce((a, b) => a.concat(b))

      paintMap = ['match', ['get', 'country']]
        .concat(countryColors)
        .concat(['#e06b91'])

      return json
    })
    .then(function(ex) {
      let values = Object.keys(window.stepActions).map(function(key) {
        return window.stepActions[key]
      })

      interactiveSetup({
        container: container,
        initialDesc: `${
          window.stepActions[0] ? `${window.stepActions[0].text}` : ``
        }`,
        steps: values
      })

      Scrolling({ stepActions: window.stepActions })

      if (window.isIE) {
        makeLLMap()
      } else {
        makeGLMap()
      }
      window.addEventListener('resize', resize)
      return ex
    })
    .catch(function(ex) {
      console.log('i parsing failed', ex)
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
      if (column.indexOf('gsx$') > -1) {
        let columnName = column.replace('gsx$', '')
        chapterData[columnName] = row[column]['$t']
      }
    })

    let latKey, lngKey

    if (!isMobile) {
      latKey = 'latitude'
      lngKey = 'longitude'
    } else {
      latKey = 'mobile-latitude'
      lngKey = 'mobile-longitude'
      chapterData.zoom = chapterData['mobile-zoom']
    }

    chapterData.lng =
      parseFloat(chapterData[lngKey]) < 0 && window.isIE
        ? 360 + parseFloat(chapterData[lngKey])
        : parseFloat(chapterData[lngKey])

    chapterData.lat = parseFloat(chapterData[latKey])

    chapterData.center = [chapterData.lng, chapterData.lat]

    chapterData.text = `<h3 class="title">${chapterData.title}</h3>
<p class="story">${chapterData.text}</p>`

    chapterData.fly = () => {
      fly(chapterData)

      window.nation = chapterData.name

      if (window.isIE) {
        highlightLLChapter(chapterData)
        // setLLPopup(chapterData)
      } else {
        if (window.map.getSource('United States_clusters')) {
          highlightGLChapter(chapterData)
          setGLPopup(chapterData)
        }
      }
    }

    return chapterData
  })
  return d
}

const setLLPopup = chapterData => {
  if (window.nation.indexOf('China') > -1) {
    let index = parseInt(window.nation.replace('China-', ''), 10)
    let layers = nation_marker_clusters['China'].getLayers()
    layers.forEach((layer, i) => {
      let coordinates = layer.toGeoJSON().geometry.coordinates
      let latlng = new L.LatLng(coordinates[1], coordinates[0])
      let popup = L.popup({ closeButton: true })

      popup
        .setLatLng(latlng)
        .setContent(layer.getPopup()._content)
        .openOn(window.map)
    })
  }
}

const setGLPopup = chapterData => {
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
            return allowedHeaders.indexOf(p) > -1
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
      .setHTML(`${description}`)
      .addTo(map)
  }
  if (!(chapterData.name.indexOf('China') > -1)) chinaPopup.remove()
}

const fly = chapterData => {
  if (window.isIE) {
    window.map.flyTo(
      [chapterData.center[1], chapterData.center[0]],
      parseInt(chapterData.zoom, 10) + 1,
      {
        animate: true,
        easeLinearity: 2,
        duration: 1.5
      }
    )
  } else {
    window.map.flyTo(chapterData)
  }
}

const chapterColors = {
  'United States': `#6688b9`,
  France: `#f89c74`,
  'New Zealand': `#00ad3b`,
  Australia: `#f6cf71`,
  China: '#e06b91'
}

const highlightLLChapter = chapterData => {
  let chapterName =
    chapterData.name.indexOf('-') > -1
      ? chapterData.name.substring(0, chapterData.name.indexOf('-'))
      : chapterData.name

  if (!(exclude.indexOf(chapterName) > -1)) {
    nations.forEach(nation => {
      if (window.nation_marker_clusters[nation]) {
        window.map.removeLayer(window.nation_marker_clusters[nation])
      }
    })

    nations.forEach(nation => {
      if (nation === chapterName && nations.indexOf(chapterName) > -1) {
        window.map.addLayer(window.layer_cache[chapterName])
      }
    })
  } else if (chapterName === 'Introduction') {
    nations.forEach(nation => {
      if (window.nation_marker_clusters[nation]) {
        window.map.removeLayer(window.nation_marker_clusters[nation])
      }
    })
  } else {
    nations.forEach(nation => {
      window.map.addLayer(window.layer_cache[nation])
    })
  }
}

const highlightGLChapter = chapterData => {
  let chapterName =
    chapterData.name.indexOf('-') > -1
      ? chapterData.name.substring(0, chapterData.name.indexOf('-'))
      : chapterData.name

  if (!(exclude.indexOf(chapterName) > -1)) {
    let newFillMap = !(chapterName.indexOf('China') > -1)
      ? [
          'match',
          ['get', 'country'],
          `${chapterName}`,
          `${window.stepActions.find(c => c.name === chapterName).color}`,
          'transparent'
        ]
      : ['match', ['get', 'chinese-involvement'], '', 'transparent', '#e06b91']

    let newStrokeMap = !(chapterName.indexOf('China') > -1)
      ? ['match', ['get', 'country'], `${chapterName}`, '#fff', 'transparent']
      : ['match', ['get', 'chinese-involvement'], '', 'transparent', '#fff']

    nations.forEach(nation => {
      if (nation === chapterName && nations.indexOf(chapterName) > -1) {
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
