var mixStyle, intstyle;
var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjn7g1kec05k42smgqowtooaj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
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
  '<a href="https://www.csis.org/programs/international-security-program/project-nuclear-issues">Project on Nuclear Issues</a>'
);

var client = new carto.Client({
  apiKey: "PpchX7r8JDaluAILJ9uLCg",
  username: "csis"
});

var natoCountriesData = new carto.source.Dataset("nato_trilat");

var natoCountriesStyles = new carto.style.CartoCSS(
  " #layer {   polygon-opacity: 0.5; }"
);

var featureColumns = [
  "country",
  "year_joined",
  "basing",
  "host_troops",
  "efp_troops",
  "host_troops_commentary",
  "efp_troops_commentary",
  "iaea_budget",
  "security_summit"
];

var natoCountriesLayer = new carto.layer.Layer(
  natoCountriesData,
  natoCountriesStyles,
  {
    featureOverColumns: featureColumns
  }
);

var basesData = new carto.source.Dataset("bases");
var basesStyles = new carto.style.CartoCSS(
  " #layer {   marker-width: 12;   marker-fill: #fa0;   marker-line-color: #fff;   marker-allow-overlap: true; }"
);

var basesLayer = new carto.layer.Layer(basesData, basesStyles, {
  featureOverColumns: ["name"]
});

client.addLayers([natoCountriesLayer, basesLayer]);
client.getLeafletLayer().addTo(map);

var popup = L.popup({ closeButton: false });
natoCountriesLayer.on(carto.layer.events.FEATURE_OVER, function(featureEvent) {
  var data = featureEvent.data;
  popup.setLatLng(featureEvent.latLng);
  popup.setContent(
    '   <div class="country-name">' +
      data.country +
      "</div>   <div><span class='popupHeaderStyle'>Joined:</span>   <span class='popupEntryStyle'>" +
      data.year_joined +
      "</span></div>    <div><span class='popupHeaderStyle'>Basing Country:</span>   <span class='popupEntryStyle'>" +
      (data.basing ? "Yes" : "No") +
      "</span></div>    <div><span class='popupHeaderStyle'>Host Troops:</span>   <span class='popupEntryStyle'>" +
      (data.host_troops_commentary
        ? data.host_troops_commentary
        : data.host_troops
          ? "Yes"
          : "No") +
      "</span></div>  <div><span class='popupHeaderStyle'>Contribute Troops:</span>   <span class='popupEntryStyle'>" +
      (data.efp_troops_commentary
        ? data.efp_troops_commentary
        : data.efp_troops + " troops") +
      "</span></div>  <div><span class='popupHeaderStyle'>IAEA Budget:</span>   <span class='popupEntryStyle'>" +
      data.iaea_budget +
      "%</span></div>    <div><span class='popupHeaderStyle'>Gift Baskets:</span>   <span class='popupEntryStyle'>" +
      (parseInt(data.security_summit, 10)
        ? data.security_summit + " baskets"
        : data.security_summit) +
      " </span></div> "
  );
  if (!popup.isOpen()) {
    popup.openOn(map);
  }
});

natoCountriesLayer.on(carto.layer.events.FEATURE_OUT, function(featureEvent) {
  popup.removeFrom(map);
});

var popupBases = L.popup({ closeButton: false });
basesLayer.on(carto.layer.events.FEATURE_OVER, function(featureEvent) {
  var data = featureEvent.data;
  popupBases.setLatLng(featureEvent.latLng);
  popupBases.setContent(data.name);
  if (!popupBases.isOpen()) {
    popupBases.openOn(map);
  }
});

basesLayer.on(carto.layer.events.FEATURE_OUT, function(featureEvent) {
  popupBases.removeFrom(map);
});

function validatePopupValue(value) {
  var prefix =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var suffix =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!value) {
    return "-";
  }
  return prefix + value + suffix;
}

/*----------  Shading  ----------*/
var layerStyles = {
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
  }
};

var currentLayer = layerStyles.basing;

var rankingSelector = document.querySelector(".ranking");
rankingSelector.addEventListener("change", function(e) {
  currentLayer = layerStyles[e.target.value];
  updateLayerStyles(currentLayer.field);
  // updateLegend(currentLayer.max)
  if (currentLayer.field === "basing" || currentLayer.field === "host_troops") {
    document.querySelector("#legend-min").textContent = "No";
    document.querySelector("#legend-max").textContent = "Yes";
  } else {
    document.querySelector("#legend-min").textContent = "Low";
    document.querySelector("#legend-max").textContent = "High";
  }
});

var colors = "#c9dcda, #98c3c4, #68abb8, #45829b, #2a5674";

function updateLayerStyles(layer) {
  var baseStyle =
    "   ::outline {     line-color: #dfe5e7;     line-width: 1;     }   #layer::labels {     text-name: [country];     text-face-name: 'Open Sans Bold';     text-transform: uppercase;     text-size: 12;     text-fill: #fff;     text-label-position-tolerance: 0;     text-halo-radius: 1.25;     text-halo-fill: #504e4e;     text-dy: 0;     text-allow-overlap: false;     text-placement: point;     text-placement-type: dummy;   } ";

  intStyle =
    "polygon-fill: ramp([" + layer + "], (" + colors + "), quantiles);";

  mixStyle =
    " [security_summit = 'Not in attendance']{   comp-op: multiply;   polygon-pattern-file: url(https://i.imgur.com/k3J0pnR.png);   }   ";

  for (i = 5; i <= 40; i++) {
    if (i >= 33) {
      customRamp(i, "#2a5674");
    } else if (i >= 26) {
      customRamp(i, "#45829b");
    } else if (i >= 19) {
      customRamp(i, "#68abb8");
    } else if (i >= 12) {
      customRamp(i, "#98c3c4");
    } else if (i >= 5) {
      customRamp(i, "#c9dcda");
    }
  }

  currentLayer.field !== "security_summit"
    ? natoCountriesStyles.setContent("#layer {" + (intStyle += baseStyle) + "}")
    : natoCountriesStyles.setContent(
        "#layer {" + (mixStyle += baseStyle) + "}"
      );
}

function customRamp(i, c) {
  mixStyle += '[security_summit = "' + i + '"] {polygon-fill:' + c + "}";
}

// function updateLegend(max) {
//   document.getElementById('legend-max').innerHTML = max;
// }

updateLayerStyles(currentLayer.field);
// updateLegend(currentLayer.max)
