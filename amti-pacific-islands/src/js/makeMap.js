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
  window.map.addControl(new mapboxgl.NavigationControl(), 'top-right')
  window.map.addControl(
    new mapboxgl.AttributionControl({
      customAttribution: 'CSIS'
    })
  )

  window.map.once('render', () => {
    addInterestsLayer()
    addAnimatedPointLayer()

    window.map.on('click', 'interests', clickInterests)

    let nations = ['Australia', 'New Zealand', 'United States', 'France']

    nations.forEach(nation =>
      window.map.on('click', `${nation}_clusters`, e =>
        clickClusters(e, nation)
      )
    )

    // window.map.on('click', `clusters`, clickClusters)

    window.map.on('mouseenter', 'interests', function() {
      window.map.getCanvas().style.cursor = 'pointer'
    })

    window.map.on('mouseleave', 'interests', function() {
      window.map.getCanvas().style.cursor = ''
    })

    let resizeEvent = window.document.createEvent('UIEvents')
    resizeEvent.initUIEvent('resize', true, false, window, 0)
    window.dispatchEvent(resizeEvent)
  })
}

function addInterestsLayer() {
  console.log(interestsData)
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
      'circle-radius': initialRadius + 2
    }
  })

  // window.map.addSource(`clusters`, {
  //   type: 'geojson',
  //   data: interestsData,
  //   cluster: true,
  //   clusterMaxZoom: 6,
  //   clusterRadius: 50
  // })
  //
  // window.map.addLayer({
  //   id: `clusters`,
  //   type: 'circle',
  //   source: `clusters`,
  //   paint: {
  //     'circle-color': 'transparent',
  //     'circle-stroke-width': 2,
  //     'circle-stroke-color': 'transparent',
  //     'circle-radius': initialRadius + 2
  //   }
  // })
  //
  // window.map.addLayer({
  //   id: `cluster-count`,
  //   type: 'symbol',
  //   source: `clusters`,
  //   filter: ['has', 'point_count'],
  //   paint: {
  //     'text-color': '#ffffff',
  //     'text-halo-color': '#000000',
  //     'text-halo-blur': 0.5,
  //     'text-halo-width': 1
  //   },
  //   layout: {
  //     'text-field': '{point_count_abbreviated}',
  //     'text-font': ['PT Sans Bold'],
  //     'text-size': 0
  //   }
  // })
  //
  // window.map.addLayer({
  //   id: `unclustered-point`,
  //   type: 'circle',
  //   source: `clusters`,
  //   filter: ['!', ['has', 'point_count']],
  //   paint: {
  //     'circle-color': 'transparent',
  //     'circle-radius': initialRadius + 2,
  //     'circle-stroke-width': 1,
  //     'circle-stroke-color': 'transparent'
  //   }
  // })

  let nations = ['Australia', 'New Zealand', 'United States', 'France']

  nations.forEach(nation => {
    window.map.addSource(`${nation}_clusters`, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: interestsData.features.filter(
          f => f.properties.country === nation
        )
      },
      cluster: true,
      clusterMaxZoom: 6,
      clusterRadius: 50
    })

    window.map.addLayer({
      id: `${nation}_clusters`,
      type: 'circle',
      source: `${nation}_clusters`,
      paint: {
        'circle-color': 'transparent',
        'circle-stroke-width': 2,
        'circle-stroke-color': 'transparent',
        'circle-radius': initialRadius + 2
      }
    })

    window.map.addLayer({
      id: `${nation}_cluster-count`,
      type: 'symbol',
      source: `${nation}_clusters`,
      filter: ['has', 'point_count'],
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': '#000000',
        'text-halo-blur': 0.5,
        'text-halo-width': 1
      },
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['PT Sans Bold'],
        'text-size': 0
      }
    })

    window.map.addLayer({
      id: `${nation}_unclustered-point`,
      type: 'circle',
      source: `${nation}_clusters`,
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': 'transparent',
        'circle-radius': initialRadius + 2,
        'circle-stroke-width': 1,
        'circle-stroke-color': 'transparent'
      }
    })
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

const clickClusters = (e, nation) => {
  console.log(e, nation)
  var features = window.map.queryRenderedFeatures(e.point, {
    layers: [`${nation}_clusters`]
  })
  var clusterId = features[0].properties.cluster_id

  window.map
    .getSource(`${nation}_clusters`)
    .getClusterExpansionZoom(clusterId, function(err, zoom) {
      if (err) return

      window.map.easeTo({
        center: features[0].geometry.coordinates,
        zoom: zoom
      })
    })
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
