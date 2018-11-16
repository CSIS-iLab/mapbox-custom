let mixStyle, intstyle;

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjoiv6dmo29kh2rsd2z5qda2p/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

// civ8lck9u000b2jmh4y4i5xgz

const map = L.map("map", {
  center: [50, 0],
  zoom: 3,
  maxZoom: 18,
  scrollWheelZoom: false,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

L.control.zoomslider().addTo(map);

map.attributionControl.addAttribution(
  '<a href="https://missilethreat.csis.org">Missile Threat</a>'
);

var client = new carto.Client({
  apiKey: "YhyUHpP8_I1l-uFeIwhNjA",
  username: "csis"
});

const cruisingData = new carto.source.Dataset("cruising_times");
const cruisingStyles = new carto.style.CartoCSS(`
  #layer {
    line-width: 0;

  }

`);

const cruisingLayer = new carto.layer.Layer(cruisingData, cruisingStyles, {
  featureOverColumns: ["from_to", "distance", "time"]
});

const aegisData = new carto.source.Dataset("aegis_ports");
const aegisStyles = new carto.style.CartoCSS(`
  #layer {
    marker-file: url(https://csis-ilab.github.io/mapbox-custom/aegis-ports/img/aegis.svg);
    marker-width: 30;
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
    marker-width: 18;
    marker-fill: #73d6fd;
    marker-line-color: #eaeaea;
    marker-allow-overlap: true;
  }
`);
const nsaptsLayer = new carto.layer.Layer(nsaptsData, nsaptsStyles, {
  featureOverColumns: ["name"]
});

const otherData = new carto.source.Dataset("other_key_facilities");
const otherStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 18;
    marker-fill: #fc0;
    marker-line-color: #eaeaea;
    marker-allow-overlap: true;
  }
`);
const otherLayer = new carto.layer.Layer(otherData, otherStyles, {
  featureOverColumns: ["name"]
});
const aegisashoreData = new carto.source.Dataset("aegisashorepts");
const aegisashoreStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 18;
    marker-fill: #99c356;
    marker-line-color: #eaeaea;
    marker-allow-overlap: true;
  }
`);
const aegisashoreLayer = new carto.layer.Layer(
  aegisashoreData,
  aegisashoreStyles,
  {
    featureOverColumns: ["name"]
  }
);

client.addLayers([
  cruisingLayer,
  nsaptsLayer,
  otherLayer,
  aegisashoreLayer,
  aegisLayer
]);
client.getLeafletLayer().addTo(map);

const popup = L.popup({ closeButton: true });

const popupBases = L.popup({ closeButton: true });
aegisLayer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);

  popupBases.setContent(`<div class="country-name">${data.name}</div>

    ${
      data.total_cg
        ? `<div class="secondary-header">Guided Missile Cruisers: ${
            data.total_cg
          }</div>
    <div><span class='popupHeaderStyle'>BMD-Capable:</span>
    <span class='popupEntryStyle'>${data.num_bmdcg}</span></div>`
        : ""
    }
${
    data.num_bmdddg
      ? `<div class="secondary-header">Guided Missile Destroyers: ${
          data.total_ddg
        }</div>
<div><span class='popupHeaderStyle'>BMD-Capable:</span>
<span class='popupEntryStyle'>${data.num_bmdddg}</span></div>`
      : ""
  }`);

  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

[nsaptsLayer, otherLayer, aegisashoreLayer].forEach(layer => {
  layer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
    let data = featureEvent.data;
    popupBases.setLatLng(featureEvent.latLng);

    popupBases.setContent(`
      <div class="country-name">${data.name}</div>
      `);

    if (!popupBases.isOpen()) {
      popupBases.openOn(map);
    }
  });
});

cruisingLayer.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);

  popupBases.setContent(`<div class="country-name">${data.from_to}</div>
  <div class="secondary-header">Distance:</div>
  <span class='popupEntryStyle'>${data.distance}km</span></div>
  <div class="secondary-header">Time (30 knots):</div>
  <span class='popupEntryStyle'>${data.time} days</span></div>
  `);

  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

function validatePopupValue(value, prefix = "", suffix = "") {
  if (!value) {
    return "-";
  }
  return prefix + value + suffix;
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".cruising").addEventListener("click", e => {
    let checkbox = e.target || e.target.querySelector("input");

    if (checkbox.checked) {
      cruisingStyles.setContent(`
      #layer {
        line-width: 3;
        line-color: ramp([from_to],(#D98880,#C39BD3,#A9CCE3,#A3E4D7,#A9DFBF,#FAD7A0,#EDBB99,#641E16,#512E5F,#154360,#0E6251,#186A3B,#7D6608,#784212,#CB4335,#7D3C98,#2E86C1,#148F77,#138D75,#2ECC71,#F39C12),("Darwin to Guam","Yokosuka to Guam","Pearl Harbor to Guam","San Diego to Guam","Darwin to Sea of Japan","Yokosuka to Sea of Japan","Pearl Harbor to Sea of Japan","San Diego to Sea of Japan","Darwin to South China Sea","Yokosuka to South China Sea","Pearl Harbor to South China Sea","San Diego to South China Sea","Norfolk to Arabian Gulf","Rota to Arabian Gulf","Darwin to Arabian Gulf","Norfolk to Baltic Sea","Rota to Baltic Sea","Norfolk to Eastern Mediterranean","Rota to Eastern Mediterranean","Norfolk to Black Sea","Rota to Black Sea"),"=");
        line-comp-op: multiply;
        line-cap: butt;
        line-join: round;
        line-smooth: 1;
        line-dasharray: 7,3;
      }
    `);
    } else {
      cruisingStyles.setContent(`
    #layer {
      line-width: 0;}
      `);
    }
  });
});
