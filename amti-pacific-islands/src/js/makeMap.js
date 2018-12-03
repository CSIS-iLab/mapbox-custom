import carto from './carto.js'
import L from './leaflet.js'
import MarketCluster from './marketcluster.js'

let framesPerSecond = 30,
  initialOpacity = 1,
  opacity = initialOpacity,
  initialRadius = 8,
  radius = initialRadius,
  maxRadius = 18

const makeMap = () => {
  let isMobile = window.screen.availWidth < 768

  window.addEventListener(
    'resize',
    () => (isMobile = window.screen.availWidth < 768)
  )

  const client = new carto.Client({
    apiKey: 'JE8zZ1kpxRZZuOzasaoyvA',
    username: 'csis'
  })
  // map.panTo([50, 30],{animate:true,duration:1,easeLinerarity:.1})
  const basemap = L.tileLayer(
    'https://api.mapbox.com/styles/v1/ilabmedia/cjp4k3r8s02wg2snu7dm7850w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
    {}
  )

  const satellite = L.tileLayer(
    'https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
    {}
  )

  const baseLayers = {
    'Street Map': basemap,
    'Satellite Image': satellite
  }

  const popup = L.popup({ closeButton: true })

  const map = L.map('map', {
    center: [-12, 180],
    zoom: 4,
    scrollWheelZoom: false,
    minZoom: 2,
    zoomControl: false,
    layers: [basemap]
  })

  const colors = `#DCB0F2,#87C55F,#9EB9F3,#FE88B1,#C9DB74,#D98880,#B497E7,#66C5CC,#A3E4D7,#C39BD3,#A9CCE3,#8BE0A4,#F39C12,#EDBB99,#007cff,#007cff,#7D3C98,#007cff,#00ad3b,#00ad3b,#7D6608,#CB4335`

  const countries = `FR,US,AU,NZ,FJ,KI,FM,NU,PG,WS,SB,VU,CK,NR,TO,TV,PW,MH,AS,GU,MP,UM,NC,PF,WF,TK`

  const colorSQL = new carto.source.SQL(` SELECT * FROM island_shapes`)

  const colorStyle = new carto.style.CartoCSS(`
        #layer {
          polygon-fill: ramp([iso], (#00ad3b,#007cff,#F6CF71,#F89C74,${colors}), (${countries}), "=");
        }
  		`)

  const colorLayer = new carto.layer.Layer(colorSQL, colorStyle)

  client.addLayer(colorLayer)

  const shapeSQL = new carto.source.SQL(
    `WITH buffer AS (SELECT cartodb_id,iso,ST_Buffer(the_geom_webmercator,75000) AS the_geom_webmercator FROM  island_shapes) SELECT * FROM buffer`
  )

  const shapeStyle = new carto.style.CartoCSS(`
        #layer {
          polygon-fill: ramp([iso], (#00ad3b,#007cff,transparent,transparent,${colors}), (${countries}), "=");
          polygon-opacity:1;
        }
  		`)

  const shapeLayer = new carto.layer.Layer(shapeSQL, shapeStyle)

  client.addLayer(shapeLayer)

  const patternSQL = new carto.source.SQL(
    `WITH buffer AS (SELECT cartodb_id,iso,pact,ST_Buffer(the_geom_webmercator,75000) AS the_geom_webmercator FROM  island_shapes) SELECT * FROM buffer`
  )

  const greenstripe =
    'https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-carto/images/greenstripe.png'
  const bluestripe =
    'https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-carto/images/bluestripe.png'
  const nostripe =
    'https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-carto/images/nostripe.png'

  const patternStyle = new carto.style.CartoCSS(`
        #layer {
          polygon-pattern-file: ramp([pact], (url(${greenstripe}),url(${bluestripe}),url(${nostripe})),("NZ","US"),"=");
        }
  		`)

  const patternLayer = new carto.layer.Layer(patternSQL, patternStyle)

  client.addLayer(patternLayer)

  const borderSQL = new carto.source.SQL(` SELECT * FROM island_shapes`)

  const borderStyle = new carto.style.CartoCSS(`
        #layer {
          line-width: 1;
          line-color: #999999;
            comp-op: multiply;
        }
  		`)

  const borderLayer = new carto.layer.Layer(borderSQL, borderStyle)

  client.addLayer(borderLayer)

  // const labelSQL = new carto.source.SQL(` SELECT * FROM island_labels`);
  //
  // const labelStyle = new carto.style.CartoCSS(`
  //   #layer::labels {
  //     text-name: [country];
  //     text-face-name: 'Open Sans Regular';
  //     text-size: 10;
  //     text-fill: #FFFFFF;
  //     text-label-position-tolerance: 0;
  //     text-halo-radius: 1;
  //     text-halo-fill: #6F808D;
  //     text-dy: -10;
  //     text-allow-overlap: true;
  //     text-placement: point;
  //     text-placement-type: dummy;
  //     }
  //   		`);
  //
  // const labelLayer = new carto.layer.Layer(labelSQL, labelStyle);

  const points = new carto.source.SQL(`SELECT * FROM pacific_islands`)

  let style_points = new carto.style.CartoCSS(`
      			#layer {
      				marker-width: 12;
      				marker-fill: transparent;
      				marker-line-color: transparent;
      			}
      		`)

  const active_points = `
            #layer {
              marker-width: 12;
              marker-fill: #ff0;
              marker-line-color: #ff0;
            }
          `

  const pointLayer = new carto.layer.Layer(
    points,
    style_points
    //   , {
    //   featureOverColumns: [
    //     "port_or_base",
    //     "location",
    //     "type",
    //     "type",
    //     "number_of_troops_stationed",
    //     "number_of_aircraft_based",
    //     "country",
    //     "chinese_involvement"
    //   ]
    // }
  )

  client.addLayer(pointLayer)

  // pointLayer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  //   popup.setLatLng(featureEvent.latLng);
  //   if (!popup.isOpen()) {
  //     popup.setContent(setPopUpContent(featureEvent.data));
  //     popup.openOn(map);
  //   }
  // });

  const labelLayer = L.tileLayer(
    'https://api.mapbox.com/styles/v1/ilabmedia/cjp7i2y0s6spo2sqoj5val2d3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
    {}
  )

  client
    .getLeafletLayer()
    .bringToFront()
    .addTo(map)

  map.attributionControl.setPrefix('<a href="https://amti.csis.org">AMTI</a>')

  function setPopUpContent(data) {
    let popUpContent = !isMobile
      ? Object.keys(data)
          .filter(d => d !== 'cartodb_id')
          .map(d => {
            if (data[d])
              return `<div class=
      "popupHeaderStyle"
      >${d.replace(/_/g, ' ')}</div><div class="popupEntryStyle">${
                data[d]
              }</div>`
          })
          .filter(d => d)
          .join('')
      : `<div class=
  "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
    data['port-or-base']
  }</div>`

    return popUpContent
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

  const popUp = (feature, layer) => {
    let data = feature.properties

    let popUpContent = !isMobile
      ? Object.keys(data)
          .filter(d => d !== 'cartodb_id')
          .map(d => {
            if (data[d])
              return `<div class=
      "popupHeaderStyle"
      >${d.replace(/-/g, ' ')}</div><div class="popupEntryStyle">${
                data[d]
              }</div>`
          })
          .filter(d => d)
          .join('')
      : `<div class=
  "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
    data['port-or-base']
  }</div>`

    layer.bindPopup(`${popUpContent}`)
  }

  const spreadsheetID = '115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc'

  const baseURL =
    'https://spreadsheets.google.com/feeds/list/' +
    spreadsheetID +
    '/1/public/values?alt=json'

  const labelURL =
    'https://spreadsheets.google.com/feeds/list/' +
    spreadsheetID +
    '/4/public/values?alt=json'

  const chapterURL =
    'https://spreadsheets.google.com/feeds/list/' +
    spreadsheetID +
    '/2/public/values?alt=json'

  fetch(baseURL)
    .then(resp => resp.json())
    .then(json => {
      let data = parseIslandData(json.feed.entry)

      let bases = new L.geoJson(data, {
        onEachFeature: popUp
      })

      let markers = L.markerClusterGroup({
        showCoverageOnHover: false,
        zoomToBoundsOnClick: false,
        maxClusterRadius: 40
      })

      markers.__proto__.onRemove = function() {}

      Object.keys(bases._layers).forEach(base => {
        let country = bases._layers[base].feature.properties.country
          .toLowerCase()
          .replace(' ', '-')

        bases._layers[base].setIcon(
          L.divIcon({
            className: `icon-${country}`
          })
        )
      })

      markers.addLayer(bases).addTo(map)

      Object.keys(map._layers).forEach((layer, i) => {
        if (map._layers[layer].unspiderfy) {
          map._layers[layer].unspiderfy = function(map) {}
        }
        if (map._layers[layer].spiderfy) {
          map._layers[layer].spiderfy = function() {
            var childMarkers = this.getAllChildMarkers(),
              group = this._group,
              map = group._map,
              center = map.latLngToLayerPoint(this._latlng),
              positions

            this._group._spiderfied = this
            if (childMarkers.length >= this._circleSpiralSwitchover) {
              positions = this._generatePointsSpiral(
                childMarkers.length,
                center
              )
            } else {
              center.y += 10 //Otherwise circles look wrong
              positions = this._generatePointsCircle(
                childMarkers.length,
                center
              )
            }

            this._animationSpiderfy(childMarkers, positions)
          }

          map._layers[layer].spiderfy()
        }
      })

      markers.on('clustermouseover', a => {
        Object.keys(map._layers).forEach((layer, i) => {
          map._layers[a.layer._leaflet_id].spiderfy()
        })
      })
    })
    .then(() => {
      // client.addLayer(labelLayer);
      labelLayer.bringToFront().addTo(map)
    })

  return { map, style_points }
}

function animateMarker(timestamp) {
  setTimeout(function() {
    requestAnimationFrame(animateMarker)

    radius += (maxRadius - radius) / framesPerSecond
    opacity -= 0.9 / framesPerSecond
    opacity = Math.max(0, opacity)

    // map.setPaintProperty('point', 'circle-radius', radius)
    // map.setPaintProperty('point', 'circle-opacity', opacity)

    if (opacity <= 0) {
      radius = initialRadius
      opacity = initialOpacity
    }
  }, 1000 / framesPerSecond)

  let atTop = progress < steps[1]

  let atBottom = progress > chapterList.length

  // if (activeChapterName.includes('China')) {
  //   map.setPaintProperty('point', 'circle-color', '#ff0')
  //   map.setPaintProperty('point1', 'circle-color', '#ff0')
  //   map.setPaintProperty('point1', 'circle-stroke-color', '#ff0')
  // } else {
  //   map.setPaintProperty('point', 'circle-color', 'transparent')
  //   map.setPaintProperty('point1', 'circle-color', 'transparent')
  //   map.setPaintProperty('point1', 'circle-stroke-color', 'transparent')
  // }
  // map.getSource('point').setData(pointOnCircle(timestamp / 1000))
}

export default makeMap
