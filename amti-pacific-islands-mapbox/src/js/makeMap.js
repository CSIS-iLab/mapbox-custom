import mapboxgl from 'mapbox-gl'

let map,
  interestsData,
  popup = new mapboxgl.Popup({
    closeButton: false
  }),
  exclude = ['Introduction', 'Conclusion'],
  chapterList,
  basemapId,
  initialRadius = 8

const spreadsheetID = '115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc'

const islandURL =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/1/public/values?alt=json'

const makeMap = () => {
  //
  window.map.on('load', function() {
    fetch(islandURL)
      .then(resp => resp.json())
      .then(json => {
        interestsData = parseIslandData(json.feed.entry)
        initIslands()
      })
  })

  return map
}

function initIslands() {
  window.map.addControl(new mapboxgl.NavigationControl(), 'top-left')
  window.map.addControl(
    new mapboxgl.AttributionControl({
      customAttribution: 'CSIS'
    })
  )

  window.map.once('render', () => {
    window.map.on('click', 'interests', clickInterests)
    addInterestsLayer()
    addAnimatedPointLayer()

    let resizeEvent = window.document.createEvent('UIEvents')
    resizeEvent.initUIEvent('resize', true, false, window, 0)
    window.dispatchEvent(resizeEvent)
  })
}

function addInterestsLayer() {
  window.map.addSource('interests', {
    type: 'geojson',
    data: interestsData
  })

  window.map.addLayer({
    id: 'interests',
    type: 'circle',
    source: 'interests',
    paint: {
      'circle-color': 'transparent',
      'circle-stroke-width': 2,
      'circle-stroke-color': 'transparent',
      'circle-radius': initialRadius
    }
  })
}

function addAnimatedPointLayer() {
  window.map.addSource(`point`, {
    type: 'geojson',
    data: pointOnCircle(0)
  })

  window.map.addLayer({
    id: 'point',
    source: 'point',
    type: 'circle',
    paint: {
      'circle-color': 'transparent',
      'circle-radius': initialRadius,
      'circle-stroke-width': 2,
      'circle-stroke-color': 'transparent',
      'circle-radius-transition': { duration: 0 },
      'circle-opacity-transition': { duration: 0 }
    }
  })

  window.map.addLayer({
    id: 'point1',
    source: 'point',
    type: 'circle',
    paint: {
      'circle-radius': initialRadius,
      'circle-color': 'transparent'
    }
  })

  if (window.map.getLayer('point1')) {
    var layers = window.map.getStyle().layers
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
        basemapId = layers[i].id
        break
      }
    }
  }
}

function pointOnCircle(loc = 0) {
  return {
    type: 'Point',
    coordinates: loc
  }
}

const clickInterests = e => {
  let details = new mapboxgl.Popup()
  let coordinates = e.features[0].geometry.coordinates.slice()
  let properties = e.features[0].properties
  let allowedHeaders = [
    'type',
    'number-of-ships-permanently-based',
    'number-of-troops-stationed',
    'number-of-aircraft-based',
    'chinese-involvement'
  ]
  let description
  if (window.screen.availWidth > 768) {
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
        description = `<div class=
  "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
    properties['port-or-base']
  }</div>`
      })
  }

  details
    .setLngLat(coordinates)
    .setHTML(`<div class="leaflet-popup-content-wrapper">${description}</div>`)
    .addTo(window.map)
}

function parseIslandData(rawData) {
  let featureData = rawData.map(r => {
    let row = r
    let islandData = {}
    Object.keys(row).forEach(c => {
      let column = c
      if (column.includes('gsx$')) {
        let columnName = column.replace('gsx$', '')
        islandData[columnName] = row[column]['$t']
      }
    })

    let islandDataSansCoordinates = Object.assign({}, islandData)
    delete islandDataSansCoordinates.latitude
    delete islandDataSansCoordinates.longitude

    let feature = {
      type: 'Feature',
      properties: islandDataSansCoordinates,
      geometry: {
        type: 'Point',
        coordinates: [
          parseFloat(islandData.longitude),
          parseFloat(islandData.latitude)
        ]
      }
    }

    return feature
  })

  return {
    type: 'FeatureCollection',
    features: featureData
  }
}

export default makeMap
