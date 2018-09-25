function getCountryData () {
				const inputControls = document.querySelectorAll('#controls input');
				const values = [];

				inputControls.forEach(input => input.checked ? values.push(input.value): null);
				return values;
			}

			function applyFilters () {
				countryDataFilter.set('in', getCountryData());
			}

			function registerListeners () {
				document.querySelectorAll('#controls input').forEach(
					input => input.addEventListener('click', () => applyFilters())
				);
			}

// Layer switcher

const basemap = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

//const satellite = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

// Intitiate the map container parameters

const map = L.map('map', {
	center: [13.7237264,110.6814572],
	zoom: 6,
	maxZoom: 18,
	scrollWheelZoom: false,
	minZoom: 1,
	zoomControl: false,
	layers: [basemap]
});

// Hide layer switcher – bug with category filter not overlaying data

// const baseLayers = {
//	"Street Map": basemap,
//	"Satellite Image": satellite
// };

// L.control.layers(baseLayers, null, {collapsed: false, autoZIndex: false}).setPosition('topleft').addTo(map);

L.control.zoomslider().addTo(map);

const client = new carto.Client({
	apiKey: 'VIKGbtgYDbaBvbByM9W8gg',
	username: 'csis'
});

// Add country datasets

const countryDataFilter = new carto.filter.Category('country1', { in: getCountryData() });

			const resources = new carto.source.SQL('SELECT * FROM table_2018_allcountries_oilandgas_production');
						resources.addFilter(countryDataFilter);

			const resourceStyle = new carto.style.CartoCSS(`
				#layer {
					polygon-fill: ramp([country1], (#7F3C8D, #11A579, #3969AC, #F2B701, #E73F74, #80BA5A, #A5AA99), ("Malaysia", "Vietnam", "China", "Brunei", "Philippines", "Indonesia"), "=");
					polygon-opacity: 0.7;
				}
				#layer::outline {
					line-width: 1;
					line-color: #FFFFFF;
					line-opacity: 0.5;
				}
			`);

			const resourceLayer = new carto.layer.Layer(resources, resourceStyle, {
				 featureClickColumns: ['name', 'resource', 'status', 'production', 'operator', 'partner1', 'partner2', 'partner3']
			 });

			client.addLayer(resourceLayer);
			client.getLeafletLayer().bringToFront().addTo(map);

			const resourcePopup = L.popup({ closeButton: true });
				resourceLayer.on(carto.layer.events.FEATURE_CLICKED, blockFeatureEvent => {
					resourcePopup.setLatLng(blockFeatureEvent.latLng);
						if (!resourcePopup.isOpen()) {
							resourcePopup.setContent(
								"<div class='popupHeaderStyle'>BLOCK NAME</div><div class='popupEntryStyle'>" + blockFeatureEvent.data.name + "</div><br /><div class='popupHeaderStyle'>RESOURCE TYPE</div><div class='popupEntryStyle'>" + blockFeatureEvent.data.resource + "</div><br /><div class='popupHeaderStyle'>LICENSE STATUS</div><div class='popupEntryStyle'>" + blockFeatureEvent.data.status + "</div><br /><div class='popupHeaderStyle'>PRODUCTION STATUS</div><div class='popupEntryStyle'>" + blockFeatureEvent.data.production + "</div><br /><div class='popupHeaderStyle'>OPERATOR</div><div class='popupEntryStyle'>" + blockFeatureEvent.data.operator + "</div><br /><div class='popupHeaderStyle'>STAKEHOLDERS</div><div class='popupEntryStyle'>" + blockFeatureEvent.data.partner1 + blockFeatureEvent.data.partner2 + blockFeatureEvent.data.partner3 + "</div>"
							);
					resourcePopup.openOn(map);
				}
			});

						registerListeners();

			// Claim line data add

			const claimLines = new carto.source.SQL('SELECT * FROM cs_claims');
			const claim_style = new carto.style.CartoCSS(`
				#layer {
					line-width: 0;
					line-color: #7F3C8D;
					line-opacity: 1;
				}
			`);

			const claimsLayer = new carto.layer.Layer(claimLines, claim_style, {
				featureClickColumns: ['name']
			 });

			// Add provinces and counties
				 client.addLayer(claimsLayer);
				 client.getLeafletLayer().bringToFront().addTo(map);

				 function setClaims() {
				 			claim_style.setContent(`
				 				#layer {
									line-width: 1.5;
									line-color: ramp([country], (#5F4690, #1D6996, #38A6A5, #0F8554, #73AF48, #EDAD08), ("Vietnam", "China", "Malaysia", "Indonesia", "Brunei", "Philippines"), "=");
				 				}
				 			`);
				 		}

			function setNone() {
						claim_style.setContent(`
							#layer {
								line-width: 0;
								line-color: #7F3C8D;
								line-opacity: 1;
							}
						`);
					}

// Add claim data
