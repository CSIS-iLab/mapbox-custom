// Formula for revenue range slider

const inputRange = document.querySelector('#controls input[type=range]');
inputRange.style.setProperty('--value', (inputRange.value - inputRange.min) / 8800);

const pricePlaceholder = document.querySelector('#controls .js-price-placeholder');

function applyFilters (e) {
	const maximumPrice = parseInt(e.target.value);
	priceFilter.setFilters({ gte: maximumPrice });
	// Convert integer value to comma-separated string
	const maxPriceComma = maximumPrice.toLocaleString();
	pricePlaceholder.innerText = "$" + maxPriceComma;
}

function registerListeners () {
	inputRange.addEventListener('input', e => {
		inputRange.style.setProperty('--value', (inputRange.value - inputRange.min) / 8800);
	});

	inputRange.addEventListener('change', e => {
		applyFilters(e)
	});

}

// Layer switcher?

const basemap = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjk8djf7u3g8l2ro6u9p5wq38/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

const satellite = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

// Intitiate the map container parameters

const map = L.map('map', {
	center: [40.0561753,127.4860422],
	zoom: 7,
	maxZoom: 13,
	scrollWheelZoom: false,
	minZoom: 6,
	layers: [basemap]
});

const baseLayers = {
	"Basemap": basemap,
	"Satellite": satellite
};

L.control.layers(baseLayers).setPosition('topleft').addTo(map);

// API connection information

const client = new carto.Client({
apiKey: 'SbU34R5Sn5DtMNEyXSSg_A',
username: 'csis'
});

// Load the province and county datasets

const admin = new carto.source.SQL('SELECT * FROM dprkadminall');
const admin_style = new carto.style.CartoCSS(`
#layer {
	polygon-opacity: 0;
}
`);

const adminLayer = new carto.layer.Layer(admin, admin_style, {
	featureClickColumns: ['name', 'pop_comma_delimited']
});

// Add provinces and counties
	 client.addLayer(adminLayer);
	 client.moveLayer(adminLayer, 0);
	 client.getLeafletLayer().addTo(map);


	 const adminPopup = L.popup({ closeButton: true });
 adminLayer.on(carto.layer.events.FEATURE_CLICKED, adminfeatureEvent => {
	 adminPopup.setLatLng(adminfeatureEvent.latLng);
	 if (!adminPopup.isOpen()) {
		 adminPopup.setContent(
			 "<div class='popupHeaderStyle'>NAME</div><div class='popupEntryStyle'>" + adminfeatureEvent.data.name + "</div><br /><div class='popupHeaderStyle'>TOTAL POPULATION</div><div class='popupEntryStyle'>" + adminfeatureEvent.data.pop_comma_delimited + "</div>"
		 );
		 adminPopup.openOn(map);
	 }
 });

	 function setProvince() {
admin.setQuery(`
	SELECT * FROM dprkadminall
		 WHERE type = \'prov\'
`);
admin_style.setContent(`
	#layer {
	polygon-fill: ramp([population], (#66a4d3, #3782bc, #025da4, #1d4181, #052056), quantiles);
}
#layer::outline {
	line-width: 1;
	line-color: #FFFFFF;
	line-opacity: 0.5;
	}
`);
}

function setCounty() {
admin.setQuery(`
	SELECT *
		FROM dprkadminall
		WHERE type = \'count\'
`);
admin_style.setContent(`
	#layer {
		polygon-fill: ramp([population], (#1a9876, #0f8d73, #087a62, #00654f), quantiles);
	}
	#layer::outline {
		line-width: 0.5;
		line-color: #FFFFFF;
		line-opacity: 0.5;
	}
`);
}

function setNone() {
			admin_style.setContent(`
				#layer {
					polygon-opacity: 0;
				}
			`);
		}

// Load the markets dataset

const priceFilter = new carto.filter.Range('estimated_revenue_usd', { lte: 500000 });

const markets = new carto.source.SQL('SELECT * FROM dprkmarkets_by_geocoordinates');
markets.addFilter(priceFilter);

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
			featureOverColumns: ['name', 'area_comma_delimited', 'no_of_stalls', 'revenue_comma_limited']
		});

		// Add markets point data

		client.addLayer(layer_markets);
		client.moveLayer(layer_markets, 1);
		client.getLeafletLayer().addTo(map);

// Popups

		const popup = L.popup({ closeButton: false });
	layer_markets.on(carto.layer.events.FEATURE_OVER, featureEvent => {
		popup.setLatLng(featureEvent.latLng);
		if (!popup.isOpen()) {
			popup.setContent(
				"<div class='popupHeaderStyle'>MARKET NAME</div> " + "<div class='popupEntryStyle'>" +
				featureEvent.data.name + "</div><br /><div class='popupHeaderStyle'>" + "MARKET AREA</div><div class='popupEntryStyle'>" + featureEvent.data.area_comma_delimited + "&nbsp;m<sup>2</sup></div><br />" + "<div class='popupHeaderStyle'>EST. NUMBER OF VENDOR STALLS</div><div class='popupEntryStyle'>" + featureEvent.data.no_of_stalls + "</div><br />" + "<div class='popupHeaderStyle'>RENT PAID TO GOVERNMENT (ANNUAL, USD)</div><div class='popupEntryStyle'>" + "$" + featureEvent.data.revenue_comma_limited + "</div>"
			);
			popup.openOn(map);
		}
	});

	layer_markets.on(carto.layer.events.FEATURE_OUT, featureEvent => {
popup.removeFrom(map);
});

registerListeners();
