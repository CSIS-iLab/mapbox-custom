var basemap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
  {}
)

var map = L.map('map', {
  center: [14,115],
  zoom: window.innerWidth > 768 ? 4 : 3,
  maxZoom: 6,
  scrollWheelZoom: true,
  minZoom: 2,
  zoomControl: true,
  // maxBounds: [[0, -130], [60, -50]],
  scrollWheelZoom: false,
  layers: [basemap],
  attributionControl: false
})

var client = new carto.Client({
  apiKey: 'lkmWH7tR69I4VbMRjVODQQ',
  username: 'csis'
})

var grid_source = new carto.source.SQL(
  'SELECT * FROM ior_feature_descriptions'
)

var grid_style = new carto.style.CartoCSS(`
  #layer {
    marker-width: 7;
    marker-fill: ramp([type_of_asset], (#3969ac, #f2b701, #7f3c8d, #11a579, #e73f74), ("Coastal Surveillance Radar Systems", "Indian Offshore Military Facility", "Commercial/Dual-use Facilities", "Foreign Military Facilities w/ Indian Access"), "=");
    marker-fill-opacity: 1;
    marker-allow-overlap: true;
    marker-line-width: 1;
    marker-line-color: #FFFFFF;
    marker-line-opacity: 1;
 }
`)

var grid_layer = new carto.layer.Layer(grid_source, grid_style, {})

// var state_source = new carto.source.SQL(
//   'SELECT * FROM ithaca_usstates_ne_50m_admin_1_states_csv'
// )

// var state_style = new carto.style.CartoCSS(`
//   #layer::outline {
//     line-width: 1;
//     line-color: #FFFFFF;
//     line-opacity: 0.5;
//   }
// `)

// var state_layer = new carto.layer.Layer(state_source, state_style, {})

client.addLayer(grid_layer)
// client.addLayer(state_layer)

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map)

L.control
  .attribution({
    position: 'bottomright'
  })
  .setPrefix(
    ' © <a href="https://energydata.info" target="_blank">EnergyData.info</a> and <a href="https://journalism.csis.org" target="_blank">CSIS Journalism Bootcamp</a> '
  )
  .addTo(map)

var checks = Array.from(document.querySelectorAll('.type_of_asset ul input')).map(
  function(checkbox) {
    return checkbox.name
  }
)

var filter_checks = new carto.filter.Category('type_of_asset', {
  notIn: checks
})

document.querySelector('.type_of_asset ul').addEventListener('click', function(e) {
  var checkbox = e.target.type === 'checkbox' ? e.target : null

  if (checkbox) {
    var checked = Array.from(
      document.querySelectorAll('.type_of_asset ul input:checked')
    ).map(function(checkbox) {
      return checkbox.name
    })

    var notChecked = checks.filter(function(name) {
      return checked.indexOf(name) < 0
    })

    var filter_checked = new carto.filter.Category('type_of_asset', {
      in: checked
    })

    var filter_notChecked = new carto.filter.Category('type_of_asset', {
      notIn: notChecked
    })

    var filters =
      checkbox.name === 'OTHERS' && checkbox.checked
        ? [filter_checks, filter_checked]
        : checkbox.name === 'OTHERS' && !checkbox.checked
          ? [filter_checked]
          : [filter_notChecked]

    grid_source.getFilters().forEach(function(f) {
      grid_source.removeFilter(f)
    })

    grid_source.addFilter(new carto.filter.OR(filters))
  }
})
