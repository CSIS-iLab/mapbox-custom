import L from 'mapbox.js'
import MarketCluster from './marketcluster.js'
import { polyfill } from 'es6-promise'
polyfill()
import { fetch as fetchPolyfill } from 'whatwg-fetch'

let map,
  interestsData,
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

let islandURL =
  'https://spreadsheets.google.com/feeds/list/' +
  spreadsheetID +
  '/1/public/values?alt=json'

const makeMap = () => {
  window.map.on('load', function() {
    fetchPolyfill(islandURL)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        interestsData = parseIslandData(json.feed.entry)
        initIslands()
        return json
      })
      .catch(function(ex) {
        console.log('mm parsing failed', ex)
      })
  })
  window.map.setView([-12, 180], 4)

  return map
}

function initIslands() {
  window.map.attributionControl.setPrefix(
    '<a href="https://amti.csis.org">CSIS</a>'
  )

  addInterestsLayer()
  // addAnimatedPointLayer()
}

function addInterestsLayer() {
  window.nation_marker_clusters = {}
  nations.forEach(nation => {
    let chapterName = nation.toLowerCase().replace(' ', '-')

    nation_marker_clusters[nation] = new L.MarkerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      maxClusterRadius: 40,
      iconCreateFunction: function(cluster) {
        return L.divIcon({
          className: `icon-${chapterName}`,
          html: `${cluster.getChildCount()}`
        })
      }
    })

    let filteredData = interestsData.features.filter(
      f => f.properties.country.indexOf(nation) > -1
    )

    for (let i = 0; i < filteredData.length; i++) {
      let a = filteredData[i]
      let description
      if (!window.isMobile) {
        description = Object.keys(a.properties)
          .filter(p => p !== 'country')
          .map(p => {
            if (a.properties[p])
              return allowedHeaders.indexOf(p) > -1
                ? `<div class=
            "popupHeaderStyle">${p
              .toUpperCase()
              .replace(/-/g, ' ')
              .replace('NUMBER', '#')}</div><div class="popupEntryStyle">${
                    a.properties[p]
                  }</div>`
                : `<div class="popupEntryStyle">${a.properties[p]}</div>`
          })
          .filter(p => p)
          .join('')
      } else {
        Object.keys(a.properties)
          .filter(p => p !== 'country')
          .map(p => {
            description = `<div class=
      "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
        a.properties['port-or-base']
      }</div>`
          })
      }

      let nation_marker = L.marker(
        new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]),
        {
          icon: L.divIcon({
            className: `icon-${chapterName}`
          })
        }
      )
      nation_marker.bindPopup(description)
      nation_marker_clusters[nation].addLayer(nation_marker)
    }

    window.map.addLayer(nation_marker_clusters[nation])

    nation_marker_clusters[nation].on('clustermouseover', a => {
      Object.keys(window.map._layers).forEach((layer, i) => {
        window.map._layers[a.layer._leaflet_id].spiderfy()
      })
    })
  })

  let objs = [{}, window.nation_marker_clusters]
  window.layer_cache = objs.reduce(function(r, o) {
    Object.keys(o).forEach(function(k) {
      r[k] = o[k]
    })
    return r
  }, {})

  nations.forEach(nation => {
    window.map.removeLayer(window.nation_marker_clusters[nation])
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

function parseIslandData(rawData) {
  let featureData = rawData.map(r => {
    let row = r
    let islandData = {}
    Object.keys(row).forEach(c => {
      let column = c
      if (column.indexOf('gsx$') > -1) {
        let columnName = column.replace('gsx$', '')
        islandData[columnName] = row[column]['$t']
      }
    })

    let objs = [{}, islandData]
    let islandDataSansCoordinates = objs.reduce(function(r, o) {
      Object.keys(o).forEach(function(k) {
        r[k] = o[k]
      })
      return r
    }, {})

    delete islandDataSansCoordinates.latitude
    delete islandDataSansCoordinates.longitude

    islandData.longitude =
      parseFloat(islandData.longitude) < 0
        ? 360 + parseFloat(islandData.longitude)
        : parseFloat(islandData.longitude)

    islandData.latitude = parseFloat(islandData.latitude)

    let feature = {
      type: 'Feature',
      properties: islandDataSansCoordinates,
      geometry: {
        type: 'Point',
        coordinates: [islandData.longitude, islandData.latitude]
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
