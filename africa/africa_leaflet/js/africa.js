var apiKey = "ygiequrextxlLldXwZ2g0Q"
var table = "africa_ports"

var map = L.map("map", {
    center: [5, 20],
    zoom: 4,
    maxZoom: 18,
    scrollWheelZoom: true,
    minZoom: 4,
    zoomControl: false,
    table: 'africa_ports'
  })

var basemap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/ilabmedia/cjtzvusww016t1flh3puy792v/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw", {
}).addTo(map)

var oms = new OverlappingMarkerSpiderfier(map);

fetch(
  "https://csis.carto.com/api/v2/sql?api_key=" +
    apiKey +
    "&format=geojson&q=SELECT%20*%20FROM%20africa_ports"
).then(function(res) {
    return res.json()
}).then(function (data) {
  console.log(data.features)

  for (var i = 0; i < data.features.length; i++) {
    var dataPoint = data.features[i];
    var location = new L.LatLng(dataPoint.geometry.coordinates[1], dataPoint.geometry.coordinates[0]);
    var marker = new L.Marker(location);
    marker.desc = dataPoint.properties.risks;
    map.addLayer(marker);
    oms.addMarker(marker);  // <-- here
  }
})

var popup = new L.Popup();
oms.addListener('click', function(marker) {
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  map.openPopup(popup);
});
//   layer.on(carto.layer.events.FEATURE_OVER, function(e) {

//     document.querySelector("aside").classList.add("hidden")
//     popup.setLatLng(e.latLng)

//     const risks = e.data.risks.split(",")
//     let risksFormatted = []
//     risks.forEach(risk => {
//       risksFormatted.push(risk.charAt(0).toUpperCase() + risk.slice(1))
//     })

//     var content = `${e.data.port +
//       "<br>Risk level: " +
//       e.data.risk_level +
//       "<br>" + risksFormatted.join( " and ")}`
  
//     popup.setContent(content);
//     popup.openOn(map)
  
//     document.querySelector("#controls h3").innerHTML =
//       "<h3>" + e.data.port + "</h3>"
//     document.querySelector("#controls ul").innerHTML = e.data.risks
//       .split(",")
//       .map(r => `<li>${r}</li>`)
//       .join(" and ")
  
//     setTimeout(
//       () => document.querySelector("aside").classList.remove("hidden"),
//       300
//     )
//   })
  
//   layer.on(carto.layer.events.FEATURE_OUT, function(e) {
//     document.querySelector("aside").classList.add("hidden"),
//       popup.removeFrom(map)
//   })

  