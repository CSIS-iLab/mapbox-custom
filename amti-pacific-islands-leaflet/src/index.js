import interactiveSetup from './js/interactive-setup'
import Scrolling from './js/scrolling'
import breakpoints from './js/breakpoints'
import makeMap from './js/makeMap'
import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
polyfill()

import './scss/main.scss'

const spreadsheetID = '115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc'

const chapterURL =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/3/public/values?alt=json'

const container = document.getElementById('scrolly-island-interactive')

let countryColors = [],
  paintMap,
  chinaPopup = L.popup({ closeButton: false }),
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

      if (!window.isMobile) {
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
        parseFloat(chapterData['longitude']),
        parseFloat(chapterData['latitude'])
      ]
    } else {
      chapterData.center = [
        parseFloat(chapterData['mobile-longitude']),
        parseFloat(chapterData['mobile-latitude'])
      ]

      chapterData.zoom = chapterData['mobile-zoom']
    }

    chapterData.text = `<h3 class="title">${chapterData.title}</h3>
<p class="story">${chapterData.text}</p>`

    chapterData.fly = () => {
      fly(chapterData)

      window.nation = chapterData.name

      highlightChapter(chapterData)
      setPopup(chapterData)
    }

    return chapterData
  })
  return d
}

const setPopup = chapterData => {
  if (window.nation.includes('China')) {
    nation_marker_clusters['China'].getLayers().forEach((layer, i) => {
      let coordinates = layer.toGeoJSON().geometry.coordinates
      let latlng = new L.LatLng(coordinates[1], coordinates[0])
      layer.openPopup(layer.getPopup(), latlng)
    })
  }
}

const fly = chapterData => {
  window.map.flyTo(chapterData.center, parseInt(chapterData.zoom, 10) + 1, {
    animate: true,
    easeLinearity: 2,
    duration: 1.5
  })
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
    nations.forEach(nation => {
      window.map.removeLayer(window.nation_marker_clusters[nation])
    })

    nations.forEach(nation => {
      if (nation === chapterName && nations.includes(chapterName)) {
        window.map.addLayer(window.layer_cache[chapterName])
      }
    })
  } else if (chapterName === 'Introduction') {
    nations.forEach(nation => {
      window.map.removeLayer(window.nation_marker_clusters[chapterName])
    })
  } else {
    nations.forEach(nation => {
      window.map.addLayer(window.layer_cache[nation])
    })
  }
}
