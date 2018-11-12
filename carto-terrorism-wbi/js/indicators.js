let valueLow;
let valueHigh;
let values = [];

let inputControl;

const getInput = values => {
  let filterArray = [];

  filterArray[0] = new carto.filter.Range("govern_rating", {
    gte: values[0]
  });

  filterArray[1] = new carto.filter.Range("govern_rating", {
    lte: values[1]
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

  valueLow = parseInt(inputControl.valueLow, 10) || 1;

  valueHigh = parseInt(inputControl.valueHigh, 10) || 2;

  return [valueLow, valueHigh];
};

const applyFilters = () => {
  getInput(getCountryData());
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

const basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjmqo72pevtii2smvg4ww2r52/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

// Intitiate the map container parameters

const map = L.map("map", {
  center: [28.0002832, -9.9504314],
  zoom: 3,
  maxZoom: 18,
  scrollWheelZoom: false,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

map.attributionControl.addAttribution(
  '<a href="https://www.csis.org/programs/transnational-threats-project" target="_blank">CSIS Transnational Threats</a>'
);
L.control.zoomslider().addTo(map);

const client = new carto.Client({
  apiKey: "wFc6cVixWBJwkvfKfqIOdA",
  username: "csis"
});

// Add WBI basemap

const wbi = new carto.source.SQL("SELECT * FROM wbi_governance");

const wbiStyle = new carto.style.CartoCSS(`
	#layer {
    polygon-fill: ramp([govern_rating], ("#c9dcda"), (6),=);
    polygon-fill: ramp([govern_rating], ("#98c3c4"), (5),=);
    polygon-fill: ramp([govern_rating], ("#68abb8"), (4),=);
    polygon-fill: ramp([govern_rating], ("#45829b"), (3),=);
    polygon-fill: ramp([govern_rating], ("#2a5674"), (2),=);
    polygon-fill: ramp([govern_rating], ("#204157"), (1),=);
    polygon-opacity: 1;
	  polygon-comp-op: overlay;
	}
	#layer::outline {
	  line-width: 1;
	  line-color: #FFFFFF;
	  line-opacity: 0.5;
	}

  #layer::labels {
  text-name: [country];
  text-face-name: 'Open Sans Bold';
  text-transform: uppercase;
  text-size: 12;
  text-fill: #ffffff;
  text-label-position-tolerance: 0;
  text-halo-radius: 1.25;
  text-halo-fill: #504e4e;
  text-dy: 0;
  text-allow-overlap: false;
  text-placement: point;
  text-placement-type: dummy;
  }
`);

const wbiLayer = new carto.layer.Layer(wbi, wbiStyle);

client.addLayer(wbiLayer);
client.getLeafletLayer().addTo(map);

// Load the province and county datasets

const attacks = new carto.source.SQL("SELECT * FROM governance_wbi_attacks");
const attacks_style = new carto.style.CartoCSS(`
#layer {
	marker-width: 7;
  marker-fill: #d13a46;
  marker-fill-opacity: 0.9;
  marker-allow-overlap: true;
  marker-line-width: 1;
  marker-line-color: #FFFFFF;
  marker-line-opacity: 1;
}
`);

const attacksLayer = new carto.layer.Layer(attacks, attacks_style, {
  featureClickColumns: ["city", "country_txt", "gname", "summary"]
});

// Add provinces and counties
client.addLayer(attacksLayer);
client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const setAttacks = () => {
  attacks_style.setContent(`
	 				#layer {
						marker-width: 7;
						marker-fill: #d13a46;
						marker-fill-opacity: 0.9;
						marker-allow-overlap: true;
						marker-line-width: 1;
						marker-line-color: #FFFFFF;
						marker-line-opacity: 1;
	 				}
	 			`);
};

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
  inputControl = document.querySelector("input[type='range']");
  valueLow = parseInt(inputControl.valueLow, 10) || 1;
  valueHigh = parseInt(inputControl.valueHigh, 10) || 6;
  values = [valueLow, valueHigh];
  getInput(values[0], values[1]);

  registerListeners();
});
