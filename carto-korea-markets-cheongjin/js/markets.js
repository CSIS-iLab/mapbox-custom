const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjk8djf7u3g8l2ro6u9p5wq38/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const map = L.map("map", {
  center: [41.79309444, 129.7985972],
  zoom: 12,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 7,
  zoomControl: false,
  layers: [basemap]
});

const client = new carto.Client({
  apiKey: "YJbdzC64tX7cF5Fp0kCjmQ",
  username: "csis"
});

const markets = new carto.source.SQL(
  "SELECT cartodb_id,ST_Buffer(the_geom,0.01) AS the_geom, ST_Buffer(the_geom_webmercator,0.01) AS the_geom_webmercator FROM cheongjin_station"
);

const style_markets = new carto.style.CartoCSS(`
      #layer {
        polygon-fill: #f2c730;
        polygon-opacity: 1;
        marker-width: 7;
        marker-fill: #f2c730;
        marker-fill-opacity: 1;
      }
		`);

const layer_markets = new carto.layer.Layer(markets, style_markets, {});

client.addLayer(layer_markets);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);
