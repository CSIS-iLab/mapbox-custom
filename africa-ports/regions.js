var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjtq2y5740uf61ftj7pgsxax9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [5, 20],
  zoom: 4,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

var client = new carto.Client({
  apiKey: "mVvGbDC6DYjJITvJK1o-HA",
  username: "csis"
});

var source = new carto.source.SQL("SELECT * FROM copy_of_africa_port_test");
var style = new carto.style.CartoCSS(`#layer {
  marker-placement: point;
  marker-allow-overlap: true;
  marker-line-color:black;
  marker-line-width:.2;
	marker-fill: ramp([risk_level],(green,yellow,red),(1,2,3),"=");

    [zoom > 0] {
  marker-width: 22;
  }
    [zoom > 4] {
  marker-width:  28;
  }
     [zoom > 7] {

  marker-width: 32;
  }

}`);

var layer = new carto.layer.Layer(source, style, {
  featureOverColumns: ["port", "risk", "risks", "risk_level"]
});

var source2 = new carto.source.SQL("SELECT * FROM regions");
var style2 = new carto.style.CartoCSS(`#layer {
polygon-fill:white;
polygon-opacity:.5;
line-color:black;


}`);

var layer2 = new carto.layer.Layer(source2, style2, {
  featureOverColumns: ["name"]
});

var popup = L.popup({ closeButton: false });

layer.on(carto.layer.events.FEATURE_OVER, function(e) {
  popup.setLatLng(e.latLng);

  var content = `${e.data.port +
    "<br>risk level: " +
    e.data.risk_level +
    "<br>" +
    e.data.risks.split(",").join(" and ")}`;

  popup.setContent(content);
  popup.openOn(map);
  document.querySelector("#controls ul").innerHTML = e.data.risks
    .split(",")
    .map(r => `<li>${r}</li>`)
    .join(" and ");
});

layer.on(carto.layer.events.FEATURE_OUT, function(featureEvent) {
  popup.removeFrom(map);
});

layer2.on(carto.layer.events.FEATURE_CLICKED, function(e) {
  map.flyTo([e.latLng.lat, e.latLng.lng], 5);
});

client.addLayer(layer2);
client.addLayer(layer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);
