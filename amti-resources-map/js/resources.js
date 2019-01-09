function getCountryData() {
  var values = [];

  Array.from(document.querySelectorAll("#controls input")).forEach(function(
    input
  ) {
    return input.checked ? values.push(input.value) : null;
  });
  return values;
}

function applyFilters() {
  countryDataFilter.set("in", getCountryData());
}

function registerListeners() {
  Array.from(document.querySelectorAll("#controls input")).forEach(function(
    input
  ) {
    return input.addEventListener("click", function() {
      applyFilters();
    });
  });
}

// Layer switcher

var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

//const satellite = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

// Intitiate the map container parameters

var map = L.map("map", {
  center: [13.7237264, 110.6814572],
  zoom: 6,
  maxZoom: 18,
  scrollWheelZoom: false,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

// Hide layer switcher – bug with category filter not overlaying data

// const baseLayers = {
//	"Street Map": basemap,
//	"Satellite Image": satellite
// };

// L.control.layers(baseLayers, null, {collapsed: false, autoZIndex: false}).setPosition('topleft').addTo(map);

L.control.zoomslider().addTo(map);

var client = new carto.Client({
  apiKey: "VIKGbtgYDbaBvbByM9W8gg",
  username: "csis"
});

// Add country datasets

var countryDataFilter = new carto.filter.Category("country1", {
  in: getCountryData()
});

var resources = new carto.source.SQL(
  "SELECT * FROM table_2018_allcountries_oilandgas_production ORDER BY country1 DESC"
);
resources.addFilter(countryDataFilter);

var resourceStyle = new carto.style.CartoCSS(
  '#layer {polygon-fill: ramp([country1], (#7F3C8D, #11A579, #3969AC, #F2B701, #E73F74, #80BA5A, #A5AA99), ("Malaysia", "Vietnam", "China", "Brunei", "Philippines", "Indonesia"), "=");polygon-opacity: 0.7;}#layer::outline {line-width: 1;line-color: #FFFFFF;line-opacity: 0.5;}'
);

var resourceLayer = new carto.layer.Layer(resources, resourceStyle, {
  featureClickColumns: [
    "name",
    "resource",
    "status",
    "production",
    "operator",
    "partner1",
    "partner2",
    "partner3"
  ]
});

client.addLayer(resourceLayer);
client.getLeafletLayer().addTo(map);

var resourcePopup = L.popup({ closeButton: true });

resourceLayer.on(carto.layer.events.FEATURE_CLICKED, function(
  blockFeatureEvent
) {
  resourcePopup.setLatLng(blockFeatureEvent.latLng);
  if (!resourcePopup.isOpen()) {
    var data = blockFeatureEvent.data;
    resourcePopup.setContent(
      "<div class='popupHeaderStyle'>BLOCK NAME</div><div class='popupEntryStyle'>" +
        data.name +
        "</div><br /><div class='popupHeaderStyle'>RESOURCE TYPE</div><div class='popupEntryStyle'>" +
        data.resource +
        "</div><br /><div class='popupHeaderStyle'>LICENSE STATUS</div><div class='popupEntryStyle'>" +
        data.status +
        "</div><br /><div class='popupHeaderStyle'>PRODUCTION STATUS</div><div class='popupEntryStyle'>" +
        data.production +
        "</div><br /><div class='popupHeaderStyle'>OPERATOR</div><div class='popupEntryStyle'>" +
        data.operator +
        "</div><br /><div class='popupHeaderStyle'>STAKEHOLDERS</div><div class='popupEntryStyle'>" +
        formatStakeholders(data) +
        "</div>"
    );
    resourcePopup.openOn(map);
  }
});

var resourceHover = L.popup({ closeButton: false });

resourceLayer.on(carto.layer.events.FEATURE_OVER, function(blockFeatureEvent) {
  resourceHover.setLatLng(blockFeatureEvent.latLng);
  if (!resourcePopup.isOpen()) {
    var data = blockFeatureEvent.data;
    resourceHover.setContent(
      "<div class='popupHeaderStyle'>BLOCK NAME</div><div class='popupEntryStyle'>" +
        data.name +
        "</div>"
    );
    resourceHover.openOn(map);
  }
});

resourceLayer.on(carto.layer.events.FEATURE_OUT, function(blockFeatureEvent) {
  resourceHover.removeFrom(map);
});

registerListeners();

// Query the claims data

var claimLines = new carto.source.SQL("SELECT * FROM cs_claims");
var claim_style = new carto.style.CartoCSS(
  "#layer {line-width: 0;line-color: #7F3C8D;line-opacity: 1;}"
);

var claimsLayer = new carto.layer.Layer(claimLines, claim_style, {
  featureClickColumns: ["name"]
});

// Add the claim lines to map

client.addLayer(claimsLayer);
client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

function setClaims() {
  claim_style.setContent(
    ' #layer {line-width: 4;line-color: ramp([country], (#12eba9, #98c1ff, #e671ff, #405e2c, #fdc006, #83203f), ("Vietnam", "China", "Malaysia", "Indonesia", "Brunei", "Philisppines"), "="); } '
  );
}

function setNone() {
  claim_style.setContent(
    "#layer {line-width: 0;line-color: #7F3C8D;line-opacity: 1;}"
  );
}

// Set hover tooltips for claim lines

var claimsPopup = L.popup({ closeButton: false });

claimsLayer.on(carto.layer.events.FEATURE_OVER, function(claimFeatureEvent) {
  claimsPopup.setLatLng(claimFeatureEvent.latLng);
  if (!claimsPopup.isOpen()) {
    claimsPopup.setContent(
      "<div class='popupHeaderStyle'>CLAIM</div><div class='popupEntryStyle'>" +
        claimFeatureEvent.data.name +
        "</div>"
    );
    claimsPopup.openOn(map);
  }
});

claimsLayer.on(carto.layer.events.FEATURE_OUT, function(claimFeatureEvent) {
  claimsPopup.removeFrom(map);
});

// Format null strings for partner cols and add comma-separation for multiples

var formatStakeholders = function formatStakeholders(data) {
  var partnerColKeys = Object.keys(data).filter(function(k) {
    return k.indexOf("partner") > -1;
  });

  var stakeholderArray = [];

  partnerColKeys.forEach(function(k) {
    return stakeholderArray.push(data[k]);
  });

  var stakeholderString = void 0;

  stakeholderArray = stakeholderArray.filter(function(s) {
    return !!s.trim();
  });
  switch (true) {
    case stakeholderArray.length === 1:
      return stakeholderArray[0];
      break;
    case stakeholderArray.length > 1:
      stakeholderLIs = stakeholderArray.map(function(s) {
        return "<li>" + s + "</li>";
      });
      return "<ul>" + stakeholderLIs.join("") + "</ul>";
      break;
    default:
      return "";
  }
};

registerListeners();

document.querySelector("#query").addEventListener("keyup", function() {
  var q = document.querySelector("#query").value;
  var filterArray = [];

  if (
    q.toLowerCase().indexOf("prod") > -1 &&
    !(q.toLowerCase().indexOf("non") > -1)
  ) {
    filterArray.push(
      new carto.filter.Category("production", {
        eq: "Producing"
      })
    );
    filterArray.push(
      new carto.filter.Category("production", {
        eq: "producing"
      })
    );
  } else if (
    q.toLowerCase().indexOf("non ") > -1 ||
    q.toLowerCase().indexOf("non-p") > -1
  ) {
    filterArray.push(
      capital("production", q),
      lower("production", q),
      upper("production", q)
    );
  } else {
    var columnArray = resourceLayer["_featureClickColumns"];
    columnArray.push("country1");
    columnArray.map(function(c) {
      filterArray.push(capital(c, q), lower(c, q), upper(c, q));
    });
  }

  var filters = new carto.filter.OR(filterArray);
  resources
    .getFilters()
    .slice(1)
    .forEach(function(f) {
      return resources.removeFilter(f);
    });
  resources.addFilter(filters);
});

var capital = function capital(c, q) {
  return new carto.filter.Category(c, {
    like: "%" + (q.charAt(0).toUpperCase() + q.slice(1)) + "%"
  });
};
var lower = function lower(c, q) {
  return new carto.filter.Category(c, {
    like: "%" + q.toLowerCase() + "%"
  });
};
var upper = function upper(c, q) {
  return new carto.filter.Category(c, {
    like: "%" + q.toUpperCase() + "%"
  });
};

document.querySelector("#resetButton").addEventListener("click", function(e) {
  document.querySelector("#query").value = "";
  resources
    .getFilters()
    .slice(1)
    .forEach(function(f) {
      return resources.removeFilter(f);
    });
  applyFilters();
});
