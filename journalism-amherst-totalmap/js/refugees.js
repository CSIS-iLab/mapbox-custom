var basemap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/ilabmedia/cjzoboqis2j0c1cqdwusmzdde/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
  {}
)

var map = L.map('electric-grid__map', {
  center: [22.47, -41.34],
  zoom: 3,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 2,
  zoomControl: true,
  //maxBounds: [[0, -130], [60, -50]],
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
    polygon-fill: ramp([ranking], (#e7e1b0, #eedb7a, #ecb637, #cb9500, #9b7d00), (1, 2, 3, 4, 5), "=", category);
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`)

var country_layer = new carto.layer.Layer(country_source, country_style, {
  featureOverColumns: [
    "venezualan_refugee_destintion",
    "total_population",
    "venezualan_refugee_population",
    "percentage_they_account_for"
  ]
});

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
    ' © <a href="https://data2.unhcr.org/en/documents/download/69838" target="_blank">UNHCR</a> and <a href="https://journalism.csis.org" target="_blank">CSIS Journalism Bootcamp</a> '
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

// Popups

var popup = L.popup({ closeButton: false });
country_layer.on(carto.layer.events.FEATURE_OVER, function(featureEvent) {
  var data = featureEvent.data;
  popup.setLatLng(featureEvent.latLng);
  popup.setContent("<h2><strong>" + data.venezualan_refugee_destintion + "</strong></h2><br /><strong>Total Population</strong>: " + data.total_population + "<br /><strong>Total Migrants</strong>: " + data.venezualan_refugee_population + "<br /><strong>Percentage Migrants–Population</strong>: " + data.percentage_they_account_for);
  if (!popup.isOpen()) {
    popup.openOn(map);
  }
});

country_layer.on(carto.layer.events.FEATURE_OUT, function(featureEvent) {
  popup.removeFrom(map);
});

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
