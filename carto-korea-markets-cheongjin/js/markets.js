const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjk8djf7u3g8l2ro6u9p5wq38/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const satellite = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

// Intitiate the map container parameters

const map = L.map("map", {
  center: [40.0561753, 127.4860422],
  zoom: 7,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 7,
  zoomControl: false,
  layers: [basemap]
});

const baseLayers = {
  "Street Map": basemap,
  "Satellite Image": satellite
};

L.control
  .layers(baseLayers, null, { collapsed: false, autoZIndex: false })
  .setPosition("topleft")
  .addTo(map);

// L.control.zoom({zoomInText: "Zoom In +", zoomOutText: "Zoom Out -"}).addTo(map);

// API connection information

const client = new carto.Client({
  apiKey: "x7lYoKiO_PYZPd5fwTmeMQ",
  username: "csis"
});

// Load the province and county datasets

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const markets = new carto.source.SQL(
  "SELECT * FROM cheongjin_station_to_market_distance"
);

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
  featureOverColumns: ["name"]
});

// Add markets point data

client.addLayer(layer_markets);
client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

// Popups

const popup = L.popup({ closeButton: true });
layer_markets.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  popup.setLatLng(featureEvent.latLng);
  if (!popup.isOpen()) {
    popup.setContent(
      "<div class='popupHeaderStyle'>MARKET NAME</div> " +
        "<div class='popupEntryStyle'>" +
        featureEvent.data.name +
        "</div>"
    );
    popup.openOn(map);
  }
});

let query =
  "INSERT INTO cheongjin_station_to_market_distance (the_geom) SELECT the_geom FROM cdb_isodistance('POINT(129.7985972 41.79309444)'::geometry, 'walk', ARRAY[300, 600, 900]::integer[], ARRAY['quality=3']::text[])";
const distance = new carto.source.SQL("query");
const layer_distances = new carto.layer.Layer(
  distance,
  new carto.style.CartoCSS(`#layer {}`),
  {}
);
client.addLayer(layer_distances);

var sql = new cartodb.SQL({ user: "csis" });
sql
  .execute(
    `http://csis.carto.com/api/v2/sql?q=${query}&api_key=x7lYoKiO_PYZPd5fwTmeMQ`
  )
  .done(function(data) {
    console.log(data.rows);
  })
  .error(function(errors) {
    // errors contains a list of errors
    console.log("errors:" + errors);
  });

fetch(
  `http://csis.carto.com/api/v2/sql?q=${query}&api_key=x7lYoKiO_PYZPd5fwTmeMQ`
)
  .then(resp => resp.json())
  .then(json => console.log(json));
