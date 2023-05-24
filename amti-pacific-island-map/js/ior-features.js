var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [0.1, 149.68],
  zoom: 4,
  maxZoom: 12,
  scrollWheelZoom: true,
  minZoom: 3,
  zoomControl: true,
  scrollWheelZoom: true,
  layers: [basemap],
  attributionControl: false,
});

const client = new carto.Client({
  apiKey: "KTs6hE1ilX2T9KEHzbHPfA",
  username: "csis",
});

const populatedPlacesSource = new carto.source.SQL(
  "SELECT * FROM pacificislandsmapdata"
);
const populatedPlacesStyle = new carto.style.CartoCSS(`
  #layer {
    marker-width: 12;
    marker-fill: ramp([country_ownership], (#11a579, #3969ac),
    ("Australia", "United States"), "=");
    marker-fill-opacity: 1;
    marker-allow-overlap: true;
    marker-line-width: 0.5;
    marker-line-color: #fff;
    marker-line-opacity: 0.5;
  }
`);

const populatedPlacesLayer = new carto.layer.Layer(
  populatedPlacesSource,
  populatedPlacesStyle,
  {
    featureOverColumns: ["name", "location", "description"],
  }
);

client.addLayer(populatedPlacesLayer);

client.getLeafletLayer().bringToFront().addTo(map);

const popup = L.popup({ closeButton: true });

populatedPlacesLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    var data = event.data;
    var content = "<div>";

    var keys = ["name", "location", "description"];

    content += `
    <div class="popupHeaderStyle"> 
      ${data.name}
    </div> 
    <div class="popupEntryStyle"> 
      ${data.location}
    </div>
    <p class="popupEntryStyle"> 
      ${data.description}
    </p>
    `;
    popup.setContent("" + content);
    popup.openOn(map);
  }
}

L.control
  .attribution({
    position: "bottomright",
  })
  .setPrefix(
    'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, Leaflet contributors'
  )
  .addTo(map);

var checks = Array.from(
  document.querySelectorAll(".country_ownership ul input")
).map(function (checkbox) {
  return checkbox.name;
});

var filter_checks = new carto.filter.Category("country_ownership", {
  notIn: checks,
});

document
  .querySelector(".country_ownership ul")
  .addEventListener("click", function (e) {
    var checkbox = e.target.type === "checkbox" ? e.target : null;

    if (checkbox) {
      var checked = Array.from(
        document.querySelectorAll(".country_ownership ul input:checked")
      ).map(function (checkbox) {
        return checkbox.name;
      });

      var notChecked = checks.filter(function (name) {
        return checked.indexOf(name) < 0;
      });

      var filter_checked = new carto.filter.Category("country_ownership", {
        in: checked,
      });

      var filter_notChecked = new carto.filter.Category("country_ownership", {
        notIn: notChecked,
      });

      var filters =
        checkbox.name === "OTHERS" && checkbox.checked
          ? [filter_checks, filter_checked]
          : checkbox.name === "OTHERS" && !checkbox.checked
          ? [filter_checked]
          : [filter_notChecked];

      populatedPlacesSource.getFilters().forEach(function (f) {
        populatedPlacesSource.removeFilter(f);
      });

      populatedPlacesSource.addFilter(new carto.filter.OR(filters));
    }
  });
