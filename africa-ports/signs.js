mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ilabmedia/cjtq2y5740uf61ftj7pgsxax9",
  center: [18, 4],
  zoom: 3.5,
  pitch: 60
});

carto.setDefaultAuth({
  username: "csis",
  apiKey: "A1sNMTOmyl8Fiu070PX1sw"
});
const query =
  "WITH m AS (SELECT count(*) n, array_agg(cartodb_id) id_list, the_geom_webmercator, ST_Y(the_geom_webmercator) y FROM africa_port_test GROUP BY the_geom_webmercator ORDER BY y DESC) , f AS (SELECT n, generate_series(1, array_length(id_list,1)) p, unnest(id_list) cartodb_id, the_geom_webmercator FROM m) SELECT t.the_geom_webmercator, f.cartodb_id, t.port, f.p FROM f, africa_port_test t WHERE f.cartodb_id = t.cartodb_id";

const source = new carto.source.SQL(query);

const viz = new carto.Viz(`
    width: ramp(zoomrange([2,3,4,5,6]),[10*2,15*2,20*2,25*2,30*2,35*2])
    symbol: ramp(buckets($p, [2,3,4,5]), [image('stick.svg'), image('sign2short.svg'),image('sign4short.svg')])
    symbolPlacement: placement(0, $p*1.75)
    `);

const layer = new carto.Layer("layer", source, viz);
layer.addTo(map);

// width: ramp(zoomrange([2,3,4,5,6]),[20*2,25*2,30*2,35*2,40*2,45*2])
// symbol: ramp(buckets($p, [2,3,4]), [image('sign2.svg'), image('sign3.svg'),image('sign4.svg')],image('circle.svg'))
// symbolPlacement: (placement(0, $p*-1.33))
