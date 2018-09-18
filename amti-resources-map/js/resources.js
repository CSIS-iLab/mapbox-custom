function getCountryData () {
        const inputControls = document.querySelectorAll('#controls input');
        const values = [];

        inputControls.forEach(input => input.checked ? values.push(input.value): null);
        return values;
      }

      function applyFilters () {
        countryDataFilter.setFilters({ in: getCountryData() });
        // or
        // roomTypeFilter.set('in', getSelectedRoomTypes());
      }

      function registerListeners () {
        document.querySelectorAll('#controls input').forEach(
          input => input.addEventListener('click', () => applyFilters())
        );
      }

// Layer switcher

const basemap = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

const satellite = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjkjzuir10v132rq8qqxefi6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

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

const baseLayers = {
	"Street Map": basemap,
	"Satellite Image": satellite
};

L.control.layers(baseLayers, null, {collapsed: false, autoZIndex: false}).setPosition('topleft').addTo(map);
L.control.zoomslider().addTo(map);

const client = new carto.Client({
	apiKey: 'Od4GcwfYUCKl8iXmIg6nvw',
	username: 'csis'
});

// Add country datasets

const countryDataFilter = new carto.filter.Category('country1', { in: getCountryData() });

      const source = new carto.source.SQL('SELECT * FROM table_2018_allcountries_oilandgas_production');
      source.addFilter(countryDataFilter);

      const style = new carto.style.CartoCSS(`
        #layer {
					polygon-fill: ramp([country1], (#7F3C8D, #11A579, #3969AC, #F2B701, #E73F74, #80BA5A, #A5AA99), ("Malaysia", "Vietnam", "China", "Brunei", "Philippines", "Indonesia"), "=");
				}
				#layer::outline {
				  line-width: 1;
				  line-color: #FFFFFF;
				  line-opacity: 0.5;
        }
      `);
      const layer = new carto.layer.Layer(source, style);

      client.addLayer(layer);
      client.getLeafletLayer().addTo(map);

// Add claim data


registerListeners();
