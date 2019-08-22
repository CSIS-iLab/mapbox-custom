var basemap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/ilabmedia/cjwl7303s3kut1dqxh986tojd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
  {}
)

var map = L.map('electric-grid__map', {
  center: [40, -100],
  zoom: window.innerWidth > 768 ? 4 : 3,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 2,
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

var country_source = new carto.source.SQL(
  'SELECT * FROM polygon_data_rankings'
)

var country_style = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: ramp([ranking], (#5F4690, #1D6996, #38A6A5, #0F8554, #73AF48, #666666), (2, 1, 4, 3, 5), "=", category);
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`)

var country_layer = new carto.layer.Layer(country_source, country_style, {})

client.addLayer(country_layer)

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

var filter_checks = new carto.filter.Category('ranking', {
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

    var filter_checked = new carto.filter.Category('ranking', {
      in: checked
    })

    var filter_notChecked = new carto.filter.Category('ranking', {
      notIn: notChecked
    })

    var filters =
      checkbox.name === 'OTHERS' && checkbox.checked
        ? [filter_checks, filter_checked]
        : checkbox.name === 'OTHERS' && !checkbox.checked
          ? [filter_checked]
          : [filter_notChecked]

    country_source.getFilters().forEach(function(f) {
      country_source.removeFilter(f)
    })

    country_source.addFilter(new carto.filter.OR(filters))
  }
})
