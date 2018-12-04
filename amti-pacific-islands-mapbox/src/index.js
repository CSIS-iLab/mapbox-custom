import interactiveSetup from './js/interactive-setup'

import Scrolling from './js/scrolling'
import breakpoints from './js/breakpoints'

import makeMap from './js/makeMap'
import mapboxgl from 'mapbox-gl'

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
  isMobile,
  stepActions = [],
  currentStep = 0

const init = () => {
  if (!container) {
    return
  }

  fetch(chapterURL)
    .then(resp => resp.json())
    .then(json => {
      stepActions = parseChapterData(json.feed.entry)

      countryColors = stepActions
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
        initialDesc: `${stepActions[0] ? `${stepActions[0].text}` : ``}`,
        steps: Object.values(stepActions).slice(1)
      })

      Scrolling({ stepActions: stepActions })

      makeMap()

      isMobile = window.screen.availWidth < 768

      window.addEventListener('resize', resize)
    })
}

init()

const resize = () => {
  stepActions[currentStep].fly()
  isMobile = window.screen.availWidth < 768
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
    chapterData.center = [
      parseFloat(chapterData.latitude) + 5,
      parseFloat(chapterData.longitude) + 2
    ]

    chapterData.text = `<h3 class="title">${chapterData.title}</h3>
<p class="story">${chapterData.text}</p>`

    chapterData.fly = () => {
      fly(chapterData)
      if (window.map.getSource('interests')) {
        highlightChapter(chapterData)
        setPopup(chapterData)
      }
    }

    return chapterData
  })
  return d
}

const setPopup = chapterData => {
  let coordinates = chapterData.center

  let features = window.map.getSource('interests')._data.features

  let feature = features.find(f => {
    let cLatitude = Math.ceil(f.geometry.coordinates[0])
    let cLongitude = Math.ceil(f.geometry.coordinates[1])

    let fLatitude = Math.ceil(coordinates[0] - 5)
    let fLongitude = Math.ceil(coordinates[1] - 2)

    let cCoordinates = [cLatitude, cLongitude].join(',')
    let fCoordinates = [fLatitude, fLongitude].join(',')

    return cCoordinates === fCoordinates
  })

  if (feature) {
    let properties = feature.properties

    let description = !isMobile
      ? Object.keys(properties)
          .map(p => {
            if (properties[p])
              return `<div class=
        "popupHeaderStyle"
        >${p
          .toUpperCase()
          .replace(/-/g, ' ')}</div><div class="popupEntryStyle">${
                properties[p]
              }</div>`
          })
          .filter(p => p)
          .join('')
      : `<div class=
  "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
    properties['port-or-base']
  }</div>`
    console.log('pop', [coordinates[0] - 5, coordinates[1] - 2])
    chinaPopup
      .setLngLat([coordinates[0] - 5, coordinates[1] - 2])
      .setHTML(
        `<div class="leaflet-popup-content-wrapper">${description}</div>`
      )
      .addTo(map)
  }
  if (!chapterData.name.includes('China')) chinaPopup.remove()
}

const fly = chapterData => {
  if (!chapterData.name.includes('China')) {
    window.map.flyTo(chapterData)
  } else {
    chapterData.longitude = parseFloat(chapterData.longitude) + 2
    chapterData.latitude = parseFloat(chapterData.latitude) + 5
    window.map.flyTo(chapterData)
  }
}

const highlightChapter = chapterData => {
  if (!exclude.includes(chapterData.name)) {
    let newFillMap = !chapterData.name.includes('China')
      ? [
          'match',
          ['get', 'country'],
          `${chapterData.name}`,
          `${stepActions.find(c => c.name === chapterData.name).color}`,
          'transparent'
        ]
      : ['match', ['get', 'chinese-involvement'], '', 'transparent', '#e06b91']

    let newStrokeMap = !chapterData.name.includes('China')
      ? [
          'match',
          ['get', 'country'],
          `${chapterData.name}`,
          '#fff',
          'transparent'
        ]
      : ['match', ['get', 'chinese-involvement'], '', 'transparent', '#fff']

    window.map.setPaintProperty('interests', 'circle-color', newFillMap)

    window.map.setPaintProperty(
      'interests',
      'circle-stroke-color',
      newStrokeMap
    )
  } else if (chapterData.name === 'Introduction') {
    window.map.setPaintProperty('interests', 'circle-color', 'transparent')
    window.map.setPaintProperty(
      'interests',
      'circle-stroke-color',
      'transparent'
    )
  } else {
    window.map.setPaintProperty('interests', 'circle-color', paintMap)
    window.map.setPaintProperty('interests', 'circle-stroke-color', ' #fff')
  }
}
