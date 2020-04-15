var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [18.5506216, 145.9295983],
  zoom: 2,
  maxZoom: 12,
  scrollWheelZoom: true,
  minZoom: 2,
  zoomControl: true,
  scrollWheelZoom: true,
  layers: [basemap],
  attributionControl: false
});

const client = new carto.Client({
  apiKey: "A-LwffERjB9Ykhtxztn3Qg",
  username: "csis"
});

const populatedPlacesSource = new carto.source.SQL(
  "SELECT * FROM table_20_04_amti_research_ships"

);
const populatedPlacesStyle = new carto.style.CartoCSS(`
        #layer {
          marker-width: 12;
          marker-fill: ramp([country], (#00be88, #fcf1ab, #ca6d92, #c79bd3, #94c9ff, #0078b2, #FE88B1, #C9DB74, #B3B3B3), ("China", "Japan", "United States", "India", "Australia", "France", "Philippines", "Taiwan"), "=");
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
    featureOverColumns: [
      "vessel",
      "start",
      "_end",
      "institution"
    ]
  }
);

client.addLayer(populatedPlacesLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const popup = L.popup({ closeButton: false });

populatedPlacesLayer.on(carto.layer.events.FEATURE_OVER, createPopup);

populatedPlacesLayer.on(carto.layer.events.FEATURE_OUT, removePopup);

function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    var data = event.data;
    var content = "<div>";

    var keys = [
      "vessel",
      "start",
      "_end",
      "institution"
    ];

    content += `
    <div class="popupHeaderStyle">
      <strong>${data.vessel}</strong>
    </div>
    <div class="popupEntryStyle">
    Observed Dates of Transit<br />
      ${data.start} – ${data._end}
    </div>
    <div class="popupEntryStyle">
    <strong>Operating Institution</strong> <br />
      ${data.institution}
    </div>
    `
    popup.setContent("" + content);
    popup.openOn(map);
  }
}

function removePopup(featureEvent) {
       popup.removeFrom(map);
     }

L.control
  .attribution({
    position: "bottomright"
  })
  .setPrefix(
    'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, Leaflet contributors'
  )
  .addTo(map);

var checks = Array.from(
  document.querySelectorAll(".type_of_asset ul input")
).map(function(checkbox) {
  return checkbox.name;
});

var filter_checks = new carto.filter.Category("country", {
  notIn: checks
});

document
  .querySelector(".type_of_asset ul")
  .addEventListener("click", function(e) {
    var checkbox = e.target.type === "checkbox" ? e.target : null;

    if (checkbox) {
      var checked = Array.from(
        document.querySelectorAll(".type_of_asset ul input:checked")
      ).map(function(checkbox) {
        return checkbox.name;
      });

      var notChecked = checks.filter(function(name) {
        return checked.indexOf(name) < 0;
      });

      var filter_checked = new carto.filter.Category("country", {
        in: checked
      });

      var filter_notChecked = new carto.filter.Category("country", {
        notIn: notChecked
      });

      var filters =
        checkbox.name === "OTHERS" && checkbox.checked
          ? [filter_checks, filter_checked]
          : checkbox.name === "OTHERS" && !checkbox.checked
          ? [filter_checked]
          : [filter_notChecked];

      populatedPlacesSource.getFilters().forEach(function(f) {
        populatedPlacesSource.removeFilter(f);
      });

      populatedPlacesSource.addFilter(new carto.filter.OR(filters));
    }
  });
