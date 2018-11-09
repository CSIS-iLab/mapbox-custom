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
  apiKey: "YJbdzC64tX7cF5Fp0kCjmQ",
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

const marketDistances = new carto.source.SQL(
  "SELECT ST_Buffer(the_geom,0.001) FROM cheongjin_station"
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

const style_distance = new carto.style.CartoCSS(`
			#layer {
				marker-width: 7;
				marker-fill: #f2c730;
				marker-fill-opacity: .2;
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

const layer_distance = new carto.layer.Layer(
  marketDistances,
  style_distance,
  {}
);

// Add markets point data

client.addLayer(layer_markets);
client.addLayer(layer_distance);
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
