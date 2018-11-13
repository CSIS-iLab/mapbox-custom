const client = new carto.Client({
  apiKey: "YJbdzC64tX7cF5Fp0kCjmQ",
  username: "csis"
});

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjk8djf7u3g8l2ro6u9p5wq38/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const satellite = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const baseLayers = {
  "Street Map": basemap,
  "Satellite Image": satellite
};

const popup = L.popup({ closeButton: true });

const map = L.map("map", {
  center: [41.79309444, 129.7985972],
  zoom: 11,
  maxZoom: 18,
  scrollWheelZoom: false,
  minZoom: 7,
  zoomControl: false,
  layers: [basemap]
});

L.control
  .layers(baseLayers, null, { collapsed: false, autoZIndex: false })
  .setPosition("topleft")
  .addTo(map);

L.control.zoomslider().addTo(map);

const markets = new carto.source.SQL(
  `SELECT * FROM cheongjin_station_to_market_distance`
);

const stationDistanceSQL = {};
const stationDistanceStyle = {};
const stationDistanceLayer = {};

[2500, 5000, 10000, 20000].forEach((n, i) => {
  stationDistanceSQL[i] = new carto.source.SQL(
    `WITH buffer AS (SELECT cartodb_id,ST_Buffer(the_geom_webmercator,${n}) AS the_geom_webmercator FROM cheongjin_station) SELECT * FROM buffer`
  );

  stationDistanceStyle[i] = new carto.style.CartoCSS(`
        #layer {
          polygon-fill: #f2c730;
          polygon-opacity: 0.2;
          polygon-comp-op: multiply;
          line-width: 1;
          line-color: #f2c730;
          line-opacity: 1;
        }
  		`);

  stationDistanceLayer[i] = new carto.layer.Layer(
    stationDistanceSQL[i],
    stationDistanceStyle[i]
  );

  client.addLayer(stationDistanceLayer[i]);
});

const style_markets = new carto.style.CartoCSS(`
    			#layer {
    				marker-width: 7;
    				marker-fill: #f2c730;
    				marker-fill-opacity: 1;
    				marker-allow-overlap: true;
    				marker-line-width: 1;
    				marker-line-color: #000000;
    				marker-line-opacity: 1;
    				marker-comp-op: screen;
    			}
    		`);

const layer_markets = new carto.layer.Layer(markets, style_markets, {
  featureOverColumns: [
    "name",
    "distance_miles",
    "round_trip_distance",
    "travel_time_bicycling_6_mph_pace",
    "time_to_walk_15_mph_pace"
  ]
});

client.addLayer(layer_markets);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

layer_markets.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  popup.setLatLng(featureEvent.latLng);
  if (!popup.isOpen()) {
    popup.setContent(setPopUpContent(featureEvent.data));
    popup.openOn(map);
  }
});

function setPopUpContent(data) {
  return Object.keys(data)
    .map(d => {
      return `<div class="popupHeaderStyle">${d
        .replace(/_/g, " ")
        .toUpperCase()}</div><div class="popupEntryStyle">${data[d]}</div>`;
    })
    .join("");
}
