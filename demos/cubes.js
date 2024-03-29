mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ilabmedia/cjtq2y5740uf61ftj7pgsxax9",
  center: [18, 4],
  zoom: 3.5,
  minZoom: 3,
  pitch: 60,
  dragRotate: false
});
map.addControl(new mapboxgl.NavigationControl());

carto.setDefaultAuth({
  username: "csis",
  apiKey: "YNJEEYb06BbPcarCz1psmQ"
});
const query =
  "WITH m AS (SELECT count(*) n, array_agg(cartodb_id) id_list, the_geom_webmercator, ST_Y(the_geom_webmercator) y FROM copy_of_africa_port_test GROUP BY the_geom_webmercator ORDER BY y DESC) , f AS (SELECT n, generate_series(1, array_length(id_list,1)) p, unnest(id_list) cartodb_id, the_geom_webmercator FROM m) SELECT t.the_geom_webmercator, f.cartodb_id, t.port, t.risk_level, t.risk, f.p FROM f, copy_of_africa_port_test t WHERE f.cartodb_id = t.cartodb_id";

const source = new carto.source.SQL(query);

const viz = new carto.Viz(`
  width: ramp(zoomrange([2,3,4,5,6]),[20,25,30,35,40,45])
  symbol: ramp(buckets($risk, ["funding","building","operating"]), [image('cube2.svg'), image('cube3.svg'),image('cube4.svg')],image('circle.svg'))
  symbolPlacement: (placement(0, $p*1.33))
    `);

const layer = new carto.Layer("layer", source, viz);
layer.addTo(map);
