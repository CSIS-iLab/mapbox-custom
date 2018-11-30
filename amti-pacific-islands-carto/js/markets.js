const client = new carto.Client({
  apiKey: "C79zhk7k_qTsA7G2C4IcAg",
  username: "csis"
});

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjp4k3r8s02wg2snu7dm7850w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
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
  center: [-11.9602541, 195],
  zoom: 2,
  scrollWheelZoom: false,
  minZoom: 2,
  zoomControl: false,
  layers: [basemap]
});

L.control
  .layers(baseLayers, null, { collapsed: false, autoZIndex: false })
  .setPosition("topleft")
  .addTo(map);

L.control.zoomslider().addTo(map);

const markets = new carto.source.SQL(`SELECT * FROM island_labels`);

const colorSQL = new carto.source.SQL(` SELECT * FROM island_shapes`);

const colorStyle = new carto.style.CartoCSS(`
        #layer {
          polygon-fill: ramp([iso], (#dddddd, #aaaaaa, #F6CF71, #F89C74, #DCB0F2, #87C55F, #9EB9F3, #FE88B1, #C9DB74, #8BE0A4, #B497E7, #66C5CC), ("AU", "NZ", "PF", "PG", "SB", "UM", "FJ", "KI", "VU", "MH"), "=");
        }
  		`);

const colorLayer = new carto.layer.Layer(colorSQL, colorStyle);

client.addLayer(colorLayer);

const shapeSQL = new carto.source.SQL(
  `WITH buffer AS (SELECT cartodb_id,iso,ST_Buffer(the_geom_webmercator,50000) AS the_geom_webmercator FROM  island_shapes) SELECT * FROM buffer`
);

const shapeStyle = new carto.style.CartoCSS(`
        #layer {
          polygon-fill: ramp([iso], (transparent,transparent, #F6CF71, #F89C74, #DCB0F2, #87C55F, #9EB9F3, #FE88B1, #C9DB74, #8BE0A4, #B497E7, #66C5CC), ("AU", "NZ", "PF", "PG", "SB", "UM", "FJ", "KI", "VU", "MH"), "=");
          polygon-opacity:1;
        }
  		`);

const shapeLayer = new carto.layer.Layer(shapeSQL, shapeStyle);

client.addLayer(shapeLayer);

const patternSQL = new carto.source.SQL(
  `WITH buffer AS (SELECT cartodb_id,iso,pact,ST_Buffer(the_geom_webmercator,50000) AS the_geom_webmercator FROM  island_shapes) SELECT * FROM buffer`
);

const greenstripe =
  "https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-carto/images/greenstripe.png";
const bluestripe =
  "https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-carto/images/bluestripe.png";
const nostripe =
  "https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-carto/images/nostripe.png";

const patternStyle = new carto.style.CartoCSS(`
        #layer {
          comp-op: screen;
          polygon-pattern-file: ramp([pact], (url(${greenstripe}),url(${bluestripe}),url(${nostripe})),("NZ","US"),"=");
        }
  		`);

const patternLayer = new carto.layer.Layer(patternSQL, patternStyle);

client.addLayer(patternLayer);

const style_markets = new carto.style.CartoCSS(`
    			#layer {
    				marker-width: 7;
    				marker-fill: transparent;
    				marker-fill-opacity: 1;
    				marker-allow-overlap: true;
    				marker-line-width: 1;
    				marker-line-color: transparent;
    				marker-line-opacity: 1;
    				marker-comp-op: screen;
    			}
    		`);

const layer_markets = new carto.layer.Layer(markets, style_markets, {
  featureOverColumns: ["iso"]
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
