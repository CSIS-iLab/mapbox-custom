const inputControl = document.querySelector("input[type='range']");

const getInput = () => {
  let filterArray = [];

  //// This whole mess is because 0 values aren't being accepted
  if (getCountryData()[0] > 0) {
    filterArray[0] = new carto.filter.Range("govern_rating", {
      gte: getCountryData()[0]
    });
  } else {
    // filterArray.push(
    //   new carto.filter.Range("govern_rating", {
    //     gte: 0
    //   })
    // );
  }

  filterArray[1] = new carto.filter.Range("govern_rating", {
    lte: getCountryData()[1]
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

  let valueLow = parseInt(inputControl.valueLow, 10) || 0;

  let valueHigh = parseInt(inputControl.valueHigh, 10) || 6;

  const values = [valueLow, valueHigh];

  return values;
};

const applyFilters = () => {
  getInput();
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
  "https://api.mapbox.com/styles/v1/ilabmedia/cjmqo72pevtii2smvg4ww2r52/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

const satellite = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
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

const baseLayers = {
  "Street Map": basemap,
  "Satellite Image": satellite
};

L.control
  .layers(baseLayers, null, { collapsed: false, autoZIndex: false })
  .setPosition("topleft")
  .addTo(map);
L.control.zoomslider().addTo(map);

const client = new carto.Client({
  apiKey: "pe2UlJrfPag8Vqs6S5suHA",
  username: "csis"
});

// Add WBI basemap

const wbi = new carto.source.SQL("SELECT * FROM governance_wbi");
getInput();

const wbiStyle = new carto.style.CartoCSS(`
	#layer {
	  polygon-fill: ramp([govern_rating], (#c9dcda, #98c3c4, #68abb8, #45829b, #2a5674), quantiles);
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
	  text-face-name: 'Open Sans Regular';
	  text-size: 13;
	  text-fill: #ffffff;
	  text-label-position-tolerance: 0;
	  text-halo-radius: 1.5;
	  text-halo-fill: #3c5a72;
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

const attacks = new carto.source.SQL("SELECT * FROM startdata_aqiattacks");
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
  featureClickColumns: ["city", "country_txt"]
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

window.addEventListener("DOMContentLoaded", () => {
  registerListeners();
});
