// Formula for revenue range slider

const inputRange = document.querySelector('#controls input[type=range]');
inputRange.style.setProperty('--value', (inputRange.value - inputRange.min) / 8800);

const pricePlaceholder = document.querySelector('#controls .js-price-placeholder');

function applyFilters (e) {
	const maximumPrice = parseInt(e.target.value);

	priceFilter.setFilters({ gte: maximumPrice });
	pricePlaceholder.innerText = "$" + maximumPrice;
}

function registerListeners () {
	inputRange.addEventListener('input', e => {
		inputRange.style.setProperty('--value', (inputRange.value - inputRange.min) / 8800);
	});

	inputRange.addEventListener('change', e => {
		applyFilters(e)
	});

}

// Intitiate the map container parameters

const map = L.map('map').setView([40.0561753,127.4860422], 7);
map.scrollWheelZoom.enable();

L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjk40a37x21ha2skptjecv1j0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {
maxZoom: 14
}).addTo(map);

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

const adminLayer = new carto.layer.Layer(admin, admin_style);

	 client.addLayer(adminLayer);
	 client.getLeafletLayer().addTo(map);

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
marker-width: ramp([estimated_revenue_usd], range(4, 10), quantiles(5));
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
			featureOverColumns: ['name', 'area_m2', 'no_of_stalls', 'estimated_revenue_usd']
		});

		client.addLayer(layer_markets);
		client.getLeafletLayer().addTo(map);

// Popups

		const popup = L.popup({ closeButton: false });
	layer_markets.on(carto.layer.events.FEATURE_OVER, featureEvent => {
		popup.setLatLng(featureEvent.latLng);
		if (!popup.isOpen()) {
			popup.setContent(
				"<div id='popupStyles'>MARKET NAME " + "<br / ><strong>" +
				featureEvent.data.name + "</strong><br /><br />" + "MARKET AREA<br />" + featureEvent.data.area_m2 + "</div>"
			);
			popup.openOn(map);
		}
	});

	layer_markets.on(carto.layer.events.FEATURE_OUT, featureEvent => {
popup.removeFrom(map);
});

registerListeners();
