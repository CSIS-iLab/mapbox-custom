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

			const resources = new carto.source.SQL('SELECT * FROM table_2018_allcountries_oilandgas_production ORDER BY country1 DESC');
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
			client.getLeafletLayer().addTo(map);

			const resourcePopup = L.popup({ closeButton: true });

				resourceLayer.on(carto.layer.events.FEATURE_CLICKED, blockFeatureEvent => {
					resourcePopup.setLatLng(blockFeatureEvent.latLng);
					if (!resourcePopup.isOpen()) {
							let data = blockFeatureEvent.data;
							resourcePopup.setContent(
								"<div class='popupHeaderStyle'>BLOCK NAME</div><div class='popupEntryStyle'>" + data.name + "</div><br /><div class='popupHeaderStyle'>RESOURCE TYPE</div><div class='popupEntryStyle'>" + data.resource + "</div><br /><div class='popupHeaderStyle'>LICENSE STATUS</div><div class='popupEntryStyle'>" + data.status + "</div><br /><div class='popupHeaderStyle'>PRODUCTION STATUS</div><div class='popupEntryStyle'>" + data.production + "</div><br /><div class='popupHeaderStyle'>OPERATOR</div><div class='popupEntryStyle'>" + data.operator + "</div><br /><div class='popupHeaderStyle'>OTHER STAKEHOLDERS</div><div class='popupEntryStyle'>" + formatStakeholders(data) + "</div>"
							);
					resourcePopup.openOn(map);
				}
			});


		const resourceHover = L.popup({ closeButton: false });

			resourceLayer.on(carto.layer.events.FEATURE_OVER, blockFeatureEvent => {
				resourceHover.setLatLng(blockFeatureEvent.latLng);
				if (!resourcePopup.isOpen()) {
						let data = blockFeatureEvent.data;
						resourceHover.setContent(
							"<div class='popupHeaderStyle'>BLOCK NAME</div><div class='popupEntryStyle'>" + data.name + "</div>"
						);
				resourceHover.openOn(map);
			}
		});


			resourceLayer.on(carto.layer.events.FEATURE_OUT, blockFeatureEvent => {
				resourceHover.removeFrom(map);
		});


						registerListeners();

			// Query the claims data

			const claimLines = new carto.source.SQL("SELECT * FROM cs_claims");
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

			// Add the claim lines to map

			client.addLayer(claimsLayer);
			client.getLeafletLayer().bringToFront().addTo(map);

				 function setClaims() {
				 			claim_style.setContent(`
				 				#layer {
									line-width: 4;
									line-color: ramp([country], (#12eba9, #98c1ff, #e671ff, #405e2c, #fdc006, #83203f), ("Vietnam", "China", "Malaysia", "Indonesia", "Brunei", "Philippines"), "=");
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

					// Set hover tooltips for claim lines

					const claimsPopup = L.popup({ closeButton: false });

						claimsLayer.on(carto.layer.events.FEATURE_OVER, claimFeatureEvent => {
							claimsPopup.setLatLng(claimFeatureEvent.latLng);
							if (!claimsPopup.isOpen()) {
									claimsPopup.setContent(
										"<div class='popupHeaderStyle'>CLAIM</div><div class='popupEntryStyle'>" + claimFeatureEvent.data.name + "</div>"
									);
							claimsPopup.openOn(map);
						}
					});

						claimsLayer.on(carto.layer.events.FEATURE_OUT, claimFeatureEvent => {
							claimsPopup.removeFrom(map);
					});

					// Format null strings for partner cols and add comma-separation for multiples

					const formatStakeholders = data => {
					  let partnerColKeys = Object.keys(data).filter(k => k.includes("partner"));

					  let stakeholderArray = [];

					  partnerColKeys.forEach(k => stakeholderArray.push(data[k]));

					  let stakeholderString;

					  stakeholderArray = stakeholderArray.filter(s => !!s.trim());
					  switch (true) {
					    case stakeholderArray.length > 0 && stakeholderArray.length < 3:
					      return stakeholderArray.join(" <em>and</em> ");
					      break;
					    case stakeholderArray.length > 2:
								return stakeholderArray.join(", ")
					      break;
					    default:
					      return "N/A";
					  }
					};

					registerListeners();
