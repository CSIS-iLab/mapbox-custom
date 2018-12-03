import interactiveSetup from './js/interactive-setup'

import Scrolling from './js/scrolling'
import breakpoints from './js/breakpoints'

import makeMap from './js/makeMap'

import './scss/main.scss'

const container = document.getElementById('scrolly-island-interactive')
const chapters = [
  'Introduction',
  'France',
  'United States',
  'Australia',
  'New Zealand',
  'China',
  'Conclusion'
]
const countries = [
  'France',
  'United States',
  'Australia',
  'New Zealand',
  'China'
]

const countryColors = {
  'united-states': 'blue',
  france: 'green',
  australia: 'yellow',
  'new-zealand': 'orange'
}

const spreadsheetID = '115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc'

const chapterURL =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/3/public/values?alt=json'

let map,
  stepActions = [],
  currentStep = 0

function init() {
  if (!container) {
    return
  }

  fetch(chapterURL)
    .then(resp => resp.json())
    .then(json => {
      stepActions = parseChapterData(json.feed.entry)
    })
    .then(x => {
      interactiveSetup({
        container: container,
        initialDesc: `${stepActions[0] ? `${stepActions[0].text}` : ``}`,
        steps: Object.values(stepActions).slice(1)
      })

      Scrolling({ stepActions: stepActions })
      map = makeMap()
      window.addEventListener('resize', stepActions[currentStep].fly())
    })
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
      parseFloat(chapterData.longitude) + 2,
      parseFloat(chapterData.latitude) + 5
    ]

    chapterData.text = `<h3 class="title">${chapterData.title}</h3>
<p class="story">${chapterData.text}</p>`

    chapterData.fly = () => {
      map.map.flyTo(chapterData.center, parseInt(chapterData.zoom, 10) + 1, {
        animate: true,
        easeLinearity: 2,
        duration: 1.5
      })

      let name =
        chapterData.name.indexOf('-') > 0
          ? chapterData.name.substring(0, chapterData.name.indexOf('-'))
          : chapterData.name

      let names = chapters
        .filter(c => c !== name)
        .map(c => `"${c}"`)
        .join(',')

      let className = name.toLowerCase().replace(' ', '-')

      let countryElements = `.icon-${className}:not(.marker-cluster-small)`

      let all = document.querySelectorAll(
        `.leaflet-marker-icon:not(.marker-cluster-small)`
      )

      if (countries.includes(name)) {
        let elements =
          name !== 'China' ? document.querySelectorAll(countryElements) : all

        all.forEach(i => {
          i.style.backgroundImage = `url(https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands/img/${
            countryColors[className]
          }.png)`
        })

        elements.forEach(i => {
          i.style.backgroundImage = `url(https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands/img/highlight.png)`
        })

        // map.style_points.setContent(`
        //         #layer {
        //           marker-width: 15;
        //           marker-fill:  ramp([country], (#ff0,transparent,transparent,transparent,transparent,transparent,transparent,transparent), ("${name}",${names}), "=");
        //   				marker-line-color: transparent;
        //         }
        //       `)
      }
    }

    return chapterData
  })
  return d
}

init()
