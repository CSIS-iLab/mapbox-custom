let mixStyle, intstyle;

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjeitb2bn10kx2skafzusd536/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
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
  apiKey: "Tb5UKi3ornrfwKvLSAgTLg",
  username: "csis"
});

const aegisData = new carto.source.Dataset("aegis_ports");
const aegisStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 12;
    marker-fill: #fa0;
    marker-line-color: #fff;
    marker-allow-overlap: true;
  }
`);

const aegisLayer = new carto.layer.Layer(aegisData, aegisStyles, {
  featureOverColumns: [
    "name",
    "total_cg",
    "num_bmd",
    "total_ddg",
    "num_bmd_i",
    "num_bmd_ii",
    "num_bmd_iia",
    "num_bmd_iii"
  ]
});
const nsaptsData = new carto.source.Dataset("nsapts");
const nsaptsStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 12;
    marker-fill: #6d0;
    marker-line-color: #fff;
    marker-allow-overlap: true;
  }
`);

const nsaptsLayer = new carto.layer.Layer(nsaptsData, nsaptsStyles, {
  featureOverColumns: ["name"]
});

client.addLayers([aegisLayer, nsaptsLayer]);
client.getLeafletLayer().addTo(map);

const popup = L.popup({ closeButton: false });

const popupBases = L.popup({ closeButton: false });
aegisLayer.on(carto.layer.events.FEATURE_OVER, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);

  popupBases.setContent(`
    <div class="country-name">${data.name}</div>
    <div class="secondary-header">Total cruisers: ${data.total_cg}</div>

    <div><span class='popupHeaderStyle'>BMD-Capable:</span>
    <span class='popupEntryStyle'>${data.num_bmd}</span></div>

    <div class="secondary-header">Total destroyers: ${data.total_ddg}</div>

    <div><span class='popupHeaderStyle'>BMD-Capable Flight I:</span>
    <span class='popupEntryStyle'>${data.num_bmd_i}</span></div>

    <div><span class='popupHeaderStyle'>BMD-Capable Flight II:</span>
    <span class='popupEntryStyle'>${data.num_bmd_ii}</span></div>

    <div><span class='popupHeaderStyle'>BMD-Capable Flight IIA:</span>
    <span class='popupEntryStyle'>${data.num_bmd_iia}</span></div>

    <div><span class='popupHeaderStyle'>BMD-Capable Flight III:</span>
    <span class='popupEntryStyle'>${data.num_bmd_iii}</span></div>
    `);

  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

aegisLayer.on(carto.layer.events.FEATURE_OUT, featureEvent => {
  popupBases.removeFrom(map);
});

nsaptsLayer.on(carto.layer.events.FEATURE_OVER, featureEvent => {
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
