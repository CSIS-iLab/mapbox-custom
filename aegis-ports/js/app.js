let mixStyle, intstyle;

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/civ8lck9u000b2jmh4y4i5xgz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const map = L.map("map", {
  center: [50, -9.9504314],
  zoom: 3,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

L.control.zoomslider().addTo(map);

map.attributionControl.addAttribution(
  '<a href="https://missilethreat.csis.org">Missile Threat</a>'
);

var client = new carto.Client({
  apiKey: "iriA91dq0OQWfXcT1v8M0w",
  username: "csis"
});

const aegisData = new carto.source.Dataset("aegis_ports");
const aegisStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 18;
    marker-fill: transparent;
    marker-line-color: #73d6fd;
    marker-line-width:4;
    marker-allow-overlap: true;
  }
`);

const aegisLayer = new carto.layer.Layer(aegisData, aegisStyles, {
  featureOverColumns: [
    "name",
    "total_cg",
    "num_bmdcg",
    "num_bmdddg",
    "total_ddg"
    // "num_bmd_i",
    // "num_bmd_ii",
    // "num_bmd_iia",
    // "num_bmd_iii"
  ]
});

const nsaptsData = new carto.source.Dataset("nsapts");
const nsaptsStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 12;
    marker-fill: #99c356;
    marker-line-color: #0a3446;
    marker-allow-overlap: true;
  }
`);
const nsaptsLayer = new carto.layer.Layer(nsaptsData, nsaptsStyles, {
  featureOverColumns: ["name"]
});

const otherData = new carto.source.Dataset("aegisashorepts");
const otherStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 12;
    marker-fill: #76a;
    marker-line-color: #0a3446;
    marker-allow-overlap: true;
  }
`);
const otherLayer = new carto.layer.Layer(otherData, otherStyles, {
  featureOverColumns: ["name"]
});

client.addLayers([aegisLayer, nsaptsLayer, otherLayer]);
client.getLeafletLayer().addTo(map);

const popup = L.popup({ closeButton: true });

const popupBases = L.popup({ closeButton: true });
aegisLayer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);

  popupBases.setContent(`
    <div class="country-name">${data.name}</div>
    <div class="secondary-header">Guided Missile Cruisers: ${
      data.total_cg
    }</div>

    <div><span class='popupHeaderStyle'>BMD-Capable:</span>
    <span class='popupEntryStyle'>${data.num_bmdcg}</span></div>

    <div class="secondary-header">Guided Missile Destroyers: ${
      data.total_ddg
    }</div>

    <div><span class='popupHeaderStyle'>BMD-Capable Flight I:</span>
    <span class='popupEntryStyle'>${data.num_bmdddg}</span></div>

    `);

  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

// aegisLayer.on(carto.layer.events.FEATURE_OUT, featureEvent => {
//   popupBases.removeFrom(map);
// });

nsaptsLayer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);

  popupBases.setContent(`
    <div class="country-name">${data.name}</div>
    `);

  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

otherLayer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);

  popupBases.setContent(`
    <div class="country-name">${data.name}</div>
    `);

  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

// nsaptsLayer.on(carto.layer.events.FEATURE_OUT, featureEvent => {
//   popupBases.removeFrom(map);
// });

function validatePopupValue(value, prefix = "", suffix = "") {
  if (!value) {
    return "-";
  }
  return prefix + value + suffix;
}
