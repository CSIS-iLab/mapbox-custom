const client = new carto.Client({
  apiKey: "f7s8ftX2UIuz_cAlQOJqlg",
  username: "csis"
});

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjoep7e4s05ma2sp68lfb1m3k/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const popup = L.popup({ closeButton: true });

const map = L.map("map", {
  center: [41.79309444, 129.7985972],
  zoom: 4,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 7,
  zoomControl: false,
  layers: basemap
});

L.control.zoomslider().addTo(map);

const markets = new carto.source.SQL(
  `SELECT * FROM dprkmarkets_by_geocoordinates`
);

const stations = new carto.source.SQL(`SELECT * FROM dprk_train_stations`);

const counties = new carto.source.SQL(
  `SELECT * FROM dprkadminall WHERE type = 'count'`
);

const stationDistanceSQL = {};
const stationDistanceStyle = {};
const stationDistanceLayer = {};

[3000, 5000, 10000, 20000].forEach((n, i) => {
  stationDistanceSQL[i] = new carto.source.SQL(
    `WITH buffer AS (SELECT cartodb_id,ST_Buffer(the_geom_webmercator,${n}) AS the_geom_webmercator FROM dprk_train_stations) SELECT * FROM buffer`
  );

  stationDistanceStyle[i] = new carto.style.CartoCSS(`
        #layer {
          polygon-fill: #f2c730;
          polygon-opacity: 0.05;
          polygon-comp-op: multiply;
          line-width: 0.5;
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
    				marker-width:10;
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
    "area_comma_delimited",
    "no_of_stalls",
    "revenue_comma_limited"
  ]
});

client.addLayer(layer_markets);

const style_stations = new carto.style.CartoCSS(`
    			#layer {
            marker-file: url(https://csis-ilab.github.io/mapbox-custom/carto-korea-station-to-markets/images/station_marker.svg);
            marker-width: 20;
            marker-allow-overlap: true;
    			}
    		`);

const layer_stations = new carto.layer.Layer(stations, style_stations, {
  featureOverColumns: ["name", "province_county", "region"]
});

client.addLayer(layer_stations);

const style_counties = new carto.style.CartoCSS(`
    		#layer::outline {line-width: 6;line-color: #cfdaee;line-opacity:0.67}
    		`);

const layer_counties = new carto.layer.Layer(counties, style_counties);

client.addLayer(layer_counties);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

layer_stations.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  popup.setLatLng(featureEvent.latLng);
  if (!popup.isOpen()) {
    popup.setContent(setPopUpContent(featureEvent.data));
    popup.openOn(map);
  }
});

layer_markets.on(carto.layer.events.FEATURE_CLICKED, featureEvent => {
  popup.setLatLng(featureEvent.latLng);
  if (!popup.isOpen()) {
    popup.setContent(setPopUpContent(featureEvent.data));
    popup.openOn(map);
  }
});

function setPopUpContent(data) {
  return Object.keys(data)
    .filter(d => d != "cartodb_id")
    .map(d => {
      return `<div class="popupHeaderStyle">${d
        .replace(/_/g, " ")
        .toUpperCase()}</div><div class="popupEntryStyle">${data[d]}</div>`;
    })
    .join("");
}

document
  .querySelector("aside.toolbox input[type='checkbox']")
  .addEventListener("click", e => {
    let checkbox = e.target || e.target.querySelector("input");
    Object.values(stationDistanceStyle).forEach(style => {
      if (checkbox.checked) {
        style.setContent(`
          #layer {
            polygon-fill: #f2c730;
            polygon-opacity: 0.05;
            polygon-comp-op: multiply;
            line-width: 0.5;
            line-color: #f2c730;
            line-opacity: 1;
          }
      `);

        style_stations.setContent(`
        #layer {
          marker-file: url(https://csis-ilab.github.io/mapbox-custom/carto-korea-station-to-markets/images/station_marker.svg);
          marker-width: 20;
          marker-allow-overlap: true;
        }
    `);
      } else {
        style.setContent(`
          #layer {
          }
      `);

        style_stations.setContent(`
          #layer {
          }
      `);
      }
    });
  });
