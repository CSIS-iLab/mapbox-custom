// Formula for revenue range slider

var inputRange = document.querySelector("#controls input[type=range]");

inputRange.style.setProperty(
  "--value",
  (inputRange.value - inputRange.min) / (inputRange.max / 100)
);

var pricePlaceholder = document.querySelector(
  "#controls .js-price-placeholder"
);

function applyFilters(e) {
  var maximumPrice = parseInt(e.target.value);
  priceFilter.setFilters({ gte: maximumPrice });
  // Convert integer value to comma-separated string
  var maxPriceComma = maximumPrice.toLocaleString();
  pricePlaceholder.innerText = "$" + maxPriceComma;
}

function registerListeners() {
  inputRange.addEventListener("input", function(e) {
    inputRange.style.setProperty(
      "--value",
      (inputRange.value - inputRange.min) / (inputRange.max / 100)
    );
  });

  inputRange.addEventListener("change", function(e) {
    applyFilters(e);
  });
}

// Layer switcher?

var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjk8djf7u3g8l2ro6u9p5wq38/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var satellite = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

// Intitiate the map container parameters

var map = L.map("map", {
  center: [40.0561753, 127.4860422],
  zoom: 7,
  maxZoom: 18,
  scrollWheelZoom: false,
  minZoom: 7,
  zoomControl: false,
  layers: [basemap]
});

var baseLayers = {
  "Street Map": basemap,
  "Satellite Image": satellite
};

L.control
  .layers(baseLayers, null, { collapsed: false, autoZIndex: false })
  .setPosition("topleft")
  .addTo(map);
L.control.zoomslider().addTo(map);

// L.control.zoom({zoomInText: "Zoom In +", zoomOutText: "Zoom Out -"}).addTo(map);

// API connection information

var client = new carto.Client({
  apiKey: "SbU34R5Sn5DtMNEyXSSg_A",
  username: "csis"
});

// Load the province and county datasets

var admin = new carto.source.SQL("SELECT * FROM dprkadminall");
var admin_style = new carto.style.CartoCSS("#layer {polygon-opacity: 0;}");

var adminLayer = new carto.layer.Layer(admin, admin_style, {
  featureClickColumns: ["name", "pop_comma_delimited"]
});

// Add provinces and counties
client.addLayer(adminLayer);
client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

var adminPopup = L.popup({ closeButton: true });
adminLayer.on(carto.layer.events.FEATURE_CLICKED, function(adminfeatureEvent) {
  adminPopup.setLatLng(adminfeatureEvent.latLng);
  if (!adminPopup.isOpen()) {
    adminPopup.setContent(
      "<div class='popupHeaderStyle'>PROVINCE/COUNTY NAME</div><div class='popupEntryStyle'>" +
        adminfeatureEvent.data.name +
        "</div><br /><div class='popupHeaderStyle'>TOTAL POPULATION</div><div class='popupEntryStyle'>" +
        adminfeatureEvent.data.pop_comma_delimited +
        "</div>"
    );
    adminPopup.openOn(map);
  }
});

function setProvince() {
  admin.setQuery("SELECT * FROM dprkadminall WHERE type = 'prov'");
  admin_style.setContent(
    "#layer {polygon-fill: ramp([population], (#66a4d3, #3782bc, #025da4, #1d4181, #052056), quantiles);}#layer::outline {line-width: 1;line-color: #FFFFFF;line-opacity: 0.5;}"
  );
}

function setCounty() {
  admin.setQuery("SELECT * FROM dprkadminall WHERE type = 'count'");

  admin_style.setContent(
    "#layer {polygon-fill: ramp([population], (#1a9876, #0f8d73, #087a62, #00654f), quantiles);}#layer::outline {line-width: 0.5;line-color: #FFFFFF;line-opacity: 0.5;}"
  );
}

function setNone() {
  admin_style.setContent("#layer {polygon-opacity: 0;}");
}

// Load the markets dataset

var priceFilter = new carto.filter.Range("estimated_revenue_usd", {
  lte: 850000
});

var markets = new carto.source.SQL(
  "SELECT * FROM dprkmarkets_by_geocoordinates"
);
markets.addFilter(priceFilter);

var style_markets = new carto.style.CartoCSS(
  "#layer {marker-width: 7;marker-fill: #f2c730;marker-fill-opacity: 1;marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #000000;marker-line-opacity: 1;marker-comp-op: screen;}"
);

var layer_markets = new carto.layer.Layer(markets, style_markets, {
  featureOverColumns: [
    "name",
    "area_comma_delimited",
    "no_of_stalls",
    "revenue_comma_limited"
  ]
});

// Add markets point data

client.addLayer(layer_markets);

// Popups

var popup = L.popup({ closeButton: true });
layer_markets.on(carto.layer.events.FEATURE_CLICKED, function(featureEvent) {
  popup.setLatLng(featureEvent.latLng);
  if (!popup.isOpen()) {
    popup.setContent(
      "<div class='popupHeaderStyle'>MARKET NAME</div> " +
        "<div class='popupEntryStyle'>" +
        featureEvent.data.name +
        "</div><br /><div class='popupHeaderStyle'>" +
        "MARKET AREA</div><div class='popupEntryStyle'>" +
        featureEvent.data.area_comma_delimited +
        "&nbsp;m<sup>2</sup></div><br />" +
        "<div class='popupHeaderStyle'>EST. NUMBER OF VENDOR STALLS</div><div class='popupEntryStyle'>" +
        featureEvent.data.no_of_stalls +
        "</div><br />" +
        "<div class='popupHeaderStyle'>RENT PAID TO GOVERNMENT (ANNUAL, USD)</div><div class='popupEntryStyle'>" +
        "$" +
        featureEvent.data.revenue_comma_limited +
        "</div>"
    );
    popup.openOn(map);
  }
});

registerListeners();
