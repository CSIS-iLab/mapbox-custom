var basemap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/ilabmedia/cjwl7303s3kut1dqxh986tojd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
  {}
)

var map = L.map('electric-grid__map', {
  center: [40, -100],
  zoom: window.innerWidth > 768 ? 5 : 4,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 3,
  zoomControl: true,
  maxBounds: [[0, -130], [60, -50]],
  scrollWheelZoom: false,
  layers: [basemap],
  attributionControl: false
})

var client = new carto.Client({
  apiKey: '2u18bULCzvWLmVMSrAJpTA',
  username: 'csis'
})

var grid_source = new carto.source.SQL(
  'SELECT * FROM electric_power_transmission_lines_1'
)

var grid_style = new carto.style.CartoCSS(`
  #layer {
    line-width: 1.5;
    line-color: ramp([owner], (#1d6996, #0f8554, #22b2b1, #5ead26, #edb908, #ea811c, #df3a2c, #c7639c, #6F4070, #555555 #6f4070 ), ('ALABAMA POWER CO', 'BONNEVILLE POWER ADMINISTRATION', 'CENTERPOINT ENERGY', 'GEORGIA POWER CO', 'PACIFICORP', 'PG&E', 'PROGRESS ENERGY CAROLINAS INC', 'TENNESSEE VALLEY AUTHORITY', 'SCE', 'NOT AVAILABLE'), "=");
  }
`)

var grid_layer = new carto.layer.Layer(grid_source, grid_style, {})

var state_source = new carto.source.SQL(
  'SELECT * FROM ithaca_usstates_ne_50m_admin_1_states_csv'
)

var state_style = new carto.style.CartoCSS(`
  #layer::outline {
    line-width: 1;
    line-color: #FFFFFF;
    line-opacity: 0.5;
  }
`)

var state_layer = new carto.layer.Layer(state_source, state_style, {})

client.addLayer(grid_layer)
client.addLayer(state_layer)

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

var checks = Array.from(document.querySelectorAll('.owner ul input')).map(
  function(checkbox) {
    return checkbox.name
  }
)

var filter_checks = new carto.filter.Category('owner', {
  notIn: checks
})

document.querySelector('.owner ul').addEventListener('click', function(e) {
  var checkbox = e.target.type === 'checkbox' ? e.target : null

  if (checkbox) {
    var checked = Array.from(
      document.querySelectorAll('.owner ul input:checked')
    ).map(function(checkbox) {
      return checkbox.name
    })

    var notChecked = checks.filter(function(name) {
      return checked.indexOf(name) < 0
    })

    var filter_checked = new carto.filter.Category('owner', {
      in: checked
    })

    var filter_notChecked = new carto.filter.Category('owner', {
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
