import mapboxgl from 'mapbox-gl'
import MapboxglSpiderifier from 'mapboxgl-spiderifier'
import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
polyfill()

let map,
  interestsData,
  popup = new mapboxgl.Popup({
    closeButton: false
  }),
  basemapId,
  initialRadius = 8,
  spiderifier,
  exclude = ['Introduction', 'Conclusion'],
  nations = ['United States', 'Australia', 'New Zealand', 'France', 'China'],
  allowedHeaders = [
    'type',
    'number-of-ships-permanently-based',
    'number-of-troops-stationed',
    'number-of-aircraft-based',
    'chinese-involvement'
  ]

const chapterColors = {
  'United States': `#6688b9`,
  France: `#f89c74`,
  'New Zealand': `#00ad3b`,
  Australia: `#f6cf71`,
  China: `#e06b91`
}

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

    // window.map.on('click', 'interests', clickInterests)
    window.map.on('zoom', () => spiderifier.unspiderfy())

    spiderifier = new MapboxglSpiderifier(window.map, {
      customPin: true,
      initializeLeg: function(spiderLeg) {
        let chapterName =
          spiderLeg.feature.country.indexOf('-') > 0
            ? spiderLeg.feature.country.substring(
                0,
                spiderLeg.feature.country.indexOf('-')
              )
            : spiderLeg.feature.country

        let chapterColor = chapterColors[chapterName]
        let spiderPinCustom = `<div class="spider-point-circle" style="width:20px;height:20px;margin-left:-10px;margin-top:-10px;border-radius:50%;border:2px solid #fff;background-color:${chapterColor}"></div>`

        spiderLeg.elements.pin.innerHTML = spiderPinCustom

        var popup = new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: true,
          offset: MapboxglSpiderifier.popupOffsetForSpiderLeg(spiderLeg)
        })

        let properties = spiderLeg.feature

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

        popup.setHTML(`${description}`)

        spiderLeg.mapboxMarker.setPopup(popup)
      }
    })

    nations.forEach(nation => {
      window.map.on('click', `${nation}_clusters`, e =>
        clickClusters(e, nation)
      )

      window.map.on('mouseenter', `${nation}_clusters`, function() {
        window.map.getCanvas().style.cursor = 'pointer'
      })

      window.map.on('mouseleave', `${nation}_clusters`, function() {
        window.map.getCanvas().style.cursor = ''
      })
    })

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

  nations.forEach(nation => {
    window.map.addSource(`${nation}_clusters`, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: interestsData.features.filter(f =>
          f.properties.country.includes(nation)
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
      id: `${nation}_cluster-count-color`,
      type: 'circle',
      source: `${nation}_clusters`,
      filter: ['has', 'point_count'],
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
  let chapterName =
    window.nation.indexOf('-') > 0
      ? window.nation.substring(0, window.nation.indexOf('-'))
      : window.nation

  if (chapterName === nation || chapterName === 'Conclusion') {
    var features = window.map.queryRenderedFeatures(e.point, {
      layers: [`${nation}_clusters`]
    })

    spiderifier.unspiderfy()

    if (!features.length) {
      return
    } else if (features[0].properties.cluster) {
      window.map
        .getSource(`${nation}_clusters`)
        .getClusterLeaves(features[0].properties.cluster_id, 100, 0, function(
          err,
          leafFeatures
        ) {
          if (err) {
            return console.error('error while getting leaves of a cluster', err)
          }
          var markers = leafFeatures.map(lF => lF.properties)

          spiderifier.spiderfy(features[0].geometry.coordinates, markers)
        })
    } else {
      clickInterests(e)
    }
  }
}

const clickInterests = e => {
  let details = new mapboxgl.Popup()
  let coordinates = e.features[0].geometry.coordinates.slice()
  let properties = e.features[0].properties

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
    .setHTML(`${description}`)
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
