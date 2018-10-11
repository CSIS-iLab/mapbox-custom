let mixStyle, intstyle;
const map = L.map("map").setView([55, -10], 4);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjj5wwc2o0x3o2so08xb67sgz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {
    maxZoom: 10
  }
).addTo(map);

// Labels only: https://api.mapbox.com/styles/v1/ilabmedia/cjj6498ou13z82spse1nx57jv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw
// Vorager labels only: https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png
// L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png', {
//   maxZoom: 18,
//   zIndex: 50
// }).addTo(map);

map.attributionControl.addAttribution(
  '<a href="https://www.csis.org/programs/international-security-program/project-nuclear-issues">Project on Nuclear Issues</a>'
);

var client = new carto.Client({
  apiKey: "PpchX7r8JDaluAILJ9uLCg",
  username: "csis"
});

const natoCountriesData = new carto.source.Dataset("nato_trilat");
const natoCountriesStyles = new carto.style.CartoCSS(`
  #layer {
    polygon-opacity: 0.5;
  }
`);

const featureColumns = [
  "country",
  "year_joined",
  "basing",
  "host_troops",
  "efp_troops",
  "host_troops_commentary",
  "efp_troops_commentary",
  "iaea_budget",
  "security_summit",
  "iran_trade_adjusted",
  "iran_trade"
];

const natoCountriesLayer = new carto.layer.Layer(
  natoCountriesData,
  natoCountriesStyles,
  {
    featureOverColumns: featureColumns
  }
);

const basesData = new carto.source.Dataset("bases");
const basesStyles = new carto.style.CartoCSS(`
  #layer {
    marker-width: 10;
    marker-fill: #D05F4C;
    marker-line-color: #FFFFFF;


  }
`);

const basesLayer = new carto.layer.Layer(basesData, basesStyles, {
  featureOverColumns: ["name"]
});

client.addLayers([natoCountriesLayer, basesLayer]);
client.getLeafletLayer().addTo(map);

const popup = L.popup({ closeButton: false });
natoCountriesLayer.on(carto.layer.events.FEATURE_OVER, featureEvent => {
  let data = featureEvent.data;
  popup.setLatLng(featureEvent.latLng);
  popup.setContent(`
    <div class="country-name">${data.country}</div>
    <div class='popupHeaderStyle'>Joined:</div>
    <div class='popupEntryStyle'>${data.year_joined}</div>

    <div class='popupHeaderStyle'>Basing Country Y/N:</div>
    <div class='popupEntryStyle'>${data.basing ? "Yes" : "No"}</div>

    <div class='popupHeaderStyle'>Host EFP/Tripwire Forces (Y/N):</div>
    <div class='popupEntryStyle'>${
      data.host_troops_commentary
        ? data.host_troops_commentary
        : data.host_troops
          ? "Yes"
          : "No"
    }</div>

    <div class='popupHeaderStyle'>EFP Contributions (# of troops):</div>
    <div class='popupEntryStyle'>${
      data.efp_troops_commentary ? data.efp_troops_commentary : data.efp_troops
    } troops</div>

    <div class='popupHeaderStyle'>Base Rate % (percent of IAEAs regular budget that the country contributes to.:</div>
    <div class='popupEntryStyle'>${data.iaea_budget}%</div>

    <div class='popupHeaderStyle'>Nuclear Security Summit: Gift baskets:</div>
    <div class='popupEntryStyle'>${
      parseInt(data.security_summit, 10)
        ? data.security_summit + " baskets"
        : data.security_summit
    } </div>

    <div class='popupHeaderStyle'>Response to U.S. Sanctions against Iran (% change in trade) (2009-2016):</div>
    <div class='popupEntryStyle'>${data.iran_trade}%</div>

  `);
  if (!popup.isOpen()) {
    popup.openOn(map);
  }
});

natoCountriesLayer.on(carto.layer.events.FEATURE_OUT, featureEvent => {
  popup.removeFrom(map);
});

const popupBases = L.popup({ closeButton: false });
basesLayer.on(carto.layer.events.FEATURE_OVER, featureEvent => {
  let data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);
  popupBases.setContent(data.name);
  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

basesLayer.on(carto.layer.events.FEATURE_OUT, featureEvent => {
  popupBases.removeFrom(map);
});

function validatePopupValue(value, prefix = "", suffix = "") {
  if (!value) {
    return "-";
  }
  return prefix + value + suffix;
}

/*----------  Shading  ----------*/
const layerStyles = {
  basing: {
    field: "basing",
    max: 1
  },
  host_troops: {
    field: "host_troops",
    max: 1
  },
  efp_troops: {
    field: "efp_troops",
    max: 1000
  },
  iaea_budget: {
    field: "iaea_budget",
    max: 7
  },
  security_summit: {
    field: "security_summit",
    max: 40
  },
  iran_trade_adjusted: {
    field: "iran_trade_adjusted",
    max: 7
  }
};

let currentLayer = layerStyles.basing;

const rankingSelector = document.querySelector(".ranking");
rankingSelector.addEventListener("change", function(e) {
  currentLayer = layerStyles[e.target.value];
  updateLayerStyles(currentLayer.field);
  // updateLegend(currentLayer.max)
});

const colors = "#fbe4a3, #d0d197, #96b586, #4ba292,#008e9d";

function updateLayerStyles(layer) {
  let baseStyle = `
    ::outline {
      line-color: #dfe5e7;
      line-width: 1;
      }
    ::labels {
      text-name: [country];
      text-face-name: 'Open Sans Regular';
      text-size: 11;
      text-fill: #FFFFFF;
      text-label-position-tolerance: 0;
      text-halo-radius: 1;
      text-halo-fill: #6F808D;
      text-dy: -10;
      text-allow-overlap: true;
      text-placement: point;
      text-placement-type: dummy;
      text-transform: uppercase;
    }
  `;

  intStyle = `polygon-fill: ramp([${layer}], (${colors}), quantiles);`;

  mixStyle = `
  [security_summit = 'Not in attendance']{
    polygon-fill: ramp([security_summit], ("#f00"), ("20"),=);
    polygon-fill:#ccc;
    comp-op: screen;
    polygon-pattern-file: url(https://i.imgur.com/k3J0pnR.png);
    }
    `;

  for (i = 5; i <= 40; i++) {
    if (i >= 33) {
      customRamp(i, "#008e9d");
    } else if (i >= 26) {
      customRamp(i, "#4ba292");
    } else if (i >= 19) {
      customRamp(i, "#96b586");
    } else if (i >= 12) {
      customRamp(i, "#d0d197");
    } else if (i >= 5) {
      customRamp(i, "#fbe4a3");
    }
  }

  currentLayer.field !== "security_summit"
    ? natoCountriesStyles.setContent(`#layer {${(intStyle += baseStyle)}}`)
    : natoCountriesStyles.setContent(`#layer {${(mixStyle += baseStyle)}}`);
}

function customRamp(i, c) {
  mixStyle += `[security_summit = "${i}"] {polygon-fill:${c}}`;
}

// function updateLegend(max) {
//   document.getElementById('legend-max').innerHTML = max;
// }

updateLayerStyles(currentLayer.field);
// updateLegend(currentLayer.max)
