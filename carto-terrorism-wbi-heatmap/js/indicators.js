let valueLow,
  valueHigh,
  inputControl,
  values = [];

const getInput = (low, high) => {
  let filterArray = [];

  filterArray[0] = new carto.filter.Range("govern_rating", {
    gte: low
  });

  filterArray[1] = new carto.filter.Range("govern_rating", {
    lte: high
  });

  let filters = new carto.filter.AND(filterArray);

  wbi.getFilters().forEach(f => wbi.removeFilter(f));

  wbi.addFilter(filters);
};

const getCountryData = () => {
  const inputControls = document.querySelectorAll(
    "#controls input[type='checkbox']"
  );

  const checkedFields = [...inputControls].filter(input => input.checked);
  // const values = checkedFields.map(input => parseInt(input.value), 10);

  valueLow = parseInt(inputControl.valueLow, 10) || 1;

  valueHigh = parseInt(inputControl.valueHigh, 10) || 2;

  values = [valueLow, valueHigh];

  return values;
};

const applyFilters = () => {
  getInput(getCountryData()[0], getCountryData()[1]);
};

const registerListeners = () => {
  document
    .querySelectorAll("#controls input")
    .forEach(input => input.addEventListener("click", () => applyFilters()));

  document.querySelectorAll("input[type='range']").forEach(input => {
    input.addEventListener("change", e => {
      applyFilters();
    });
  });
};

// Layer switcher

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjoaczvkt063o2smqtcexvq24/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

// Intitiate the map container parameters

const map = L.map("map", {
  center: [28.0002832, -9.9504314],
  zoom: 2,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

map.attributionControl.addAttribution(
  '<a href="https://www.csis.org/programs/transnational-threats-project" target="_blank">CSIS Transnational Threats</a>'
);

const client = new carto.Client({
  apiKey: "IVD3C3WS2Ht6R2JMyde3hQ",
  username: "csis"
});

// Add WBI basemap

const wbi = new carto.source.SQL("SELECT * FROM wbi_governance");

const wbiStyle = new carto.style.CartoCSS(`
	#layer {
    polygon-fill: ramp([govern_rating], ("#eed5e7"), (6),=);
    polygon-fill: ramp([govern_rating], ("#df9dc6"), (5),=);
    polygon-fill: ramp([govern_rating], ("#9f4a82"), (4),=);
    polygon-fill: ramp([govern_rating], ("#65284e"), (3),=);
    polygon-fill: ramp([govern_rating], ("#3f0d34"), (2),=);
    polygon-fill: ramp([govern_rating], ("#190514"), (1),=);
    polygon-opacity: 1;
	  polygon-comp-op: overlay;
	}
	#layer::outline {
	  line-width: 1;
	  line-color: #FFFFFF;
	  line-opacity: 0.5;
	}

`);

const wbiLayer = new carto.layer.Layer(wbi, wbiStyle);

client.addLayer(wbiLayer);
client.getLeafletLayer().addTo(map);

// Load the province and county datasets

const attacks = new carto.source.SQL("SELECT * FROM governance_wbi_attacks");
const attacks_style = new carto.style.CartoCSS(`
  #layer {
    marker-width: 8;
    marker-fill: #FFFFFF;
    marker-fill-opacity: 0.9;
    marker-allow-overlap: true;
    marker-line-width: 0;
    marker-line-opacity: 1;
  }
`);

const attacksLayer = new carto.layer.Layer(attacks, attacks_style, {
  featureClickColumns: ["city", "country_txt", "gname", "summary"]
});
const attacks2 = new carto.source.SQL("SELECT * FROM governance_wbi_attacks");
const attacks2_style = new carto.style.CartoCSS(`
  #layer {
    marker-width: 8;
    marker-fill: #ffdd00;
    marker-fill-opacity: 0.9;
    marker-allow-overlap: true;
    marker-line-width: 0;
    marker-line-opacity: 1;
    marker-comp-op: multiply;
  }
`);

const attacks2Layer = new carto.layer.Layer(attacks2, attacks2_style, {
  featureClickColumns: ["city", "country_txt", "gname", "summary"]
});

client.addLayer(attacksLayer);
client.addLayer(attacks2Layer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const setNone = () => {
  attacks_style.setContent(`
				#layer {
					marker-width: 1;
					marker-fill: #ffffff;
					marker-fill-opacity: 0;
					marker-allow-overlap: true;
					marker-line-width: 0;
					marker-line-color: #FFFFFF;
					marker-line-opacity: 1;
				}
			`);
};

const attackInfo = L.popup({ closeButton: false });

attacksLayer.on(carto.layer.events.FEATURE_CLICKED, e => {
  attackInfo.setLatLng(e.latLng);
  if (!attackInfo.isOpen()) {
    let data = e.data;
    attackInfo.setContent(
      "<div class='popupHeaderStyle'>" +
        data.gname +
        "</div><div class='popupEntryStyle'>" +
        data.summary +
        "</div>"
    );

    attackInfo.openOn(map);
  }
});

document.addEventListener("mousemove", e => {
  // attacksLayer.trigger("featureOver", {
  //   latlng: null,
  //   pos: null,
  //   data: null,
  //   subLayerIndex: null
  // });
  attackInfo.removeFrom(map);
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".leaflet-control-attribution").remove();
  inputControl = document.querySelector("input[type='range']");
  valueLow = parseInt(inputControl.valueLow, 10) || 1;
  valueHigh = parseInt(inputControl.valueHigh, 10) || 6;
  values = [valueLow, valueHigh];
  getInput(values[0], values[1]);
  registerListeners();
});