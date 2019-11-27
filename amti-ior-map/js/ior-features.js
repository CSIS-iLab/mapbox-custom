var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [14, 115],
  zoom: window.innerWidth > 768 ? 4 : 3,
  maxZoom: 6,
  scrollWheelZoom: true,
  minZoom: 2,
  zoomControl: true,
  maxBounds: [
    [0, 150],
    [20, -20]
  ],
  scrollWheelZoom: false,
  layers: [basemap],
  attributionControl: false
});

// const map = L.map('map').setView([30, 0], 3);
//       map.scrollWheelZoom.disable();

// L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
//   maxZoom: 18
// }).addTo(map);

const client = new carto.Client({
  apiKey: "lkmWH7tR69I4VbMRjVODQQ",
  username: "csis"
});

const populatedPlacesSource = new carto.source.SQL(
  "SELECT * FROM ior_feature_descriptions"
);
const populatedPlacesStyle = new carto.style.CartoCSS(`
        #layer {
          marker-width: 7;
          marker-fill: ramp([type_of_asset], (#3969ac, #f2b701, #7f3c8d, #11a579, #e73f74), ("Coastal Surveillance Radar Systems", "Indian Offshore Military Facility", "Commercial/Dual-use Facilities", "Foreign Military Facilities w/ Indian Access"), "=");
          marker-fill-opacity: 1;
          marker-allow-overlap: true;
          marker-line-width: 1;
          marker-line-color: #FFFFFF;
          marker-line-opacity: 1;
        }
      `);
const populatedPlacesLayer = new carto.layer.Layer(
  populatedPlacesSource,
  populatedPlacesStyle,
  {
    featureOverColumns: [
      "name_of_asset",
      "type_of_asset",
      "location_city_country_",
      "description"
    ]
  }
);

client.addLayer(populatedPlacesLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const popup = L.popup({ closeButton: false });

function openPopup(featureEvent) {
  let content = '<div class="widget">';

  if (featureEvent.data.name_of_asset) {
    content += `<h2 class="h2">${featureEvent.data.name_of_asset}</h2>`;
  }

  if (
    featureEvent.data.type_of_asset ||
    featureEvent.data.location_city_country_ ||
    featureEvent.data.description
  ) {
    content += `<ul>`;

    if (featureEvent.data.type_of_asset) {
      content += `<li><h3>Asset:</h3><p class="open-sans">${featureEvent.data.type_of_asset}</p></li>`;
    }

    if (featureEvent.data.location_city_country_) {
      content += `<li><h3>Location:</h3><p class="open-sans">${featureEvent.data.location_city_country_}</p></li>`;
    }

    if (featureEvent.data.description) {
      content += `<li><h3>Description:</h3><p class="open-sans">${featureEvent.data.description}</p></li>`;
    }

    content += `</ul>`;
  }

  content += `</div>`;

  popup.setContent(content);
  popup.setLatLng(featureEvent.latLng);
  if (!popup.isOpen()) {
    popup.openOn(map);
  }
}

function closePopup(featureEvent) {
  popup.removeFrom(map);
}

function setPopupsClick() {
  populatedPlacesLayer.off("featureOver");
  populatedPlacesLayer.off("featureOut");
  populatedPlacesLayer.on("featureClicked", openPopup);
}

function setPopupsHover() {
  populatedPlacesLayer.off("featureClicked");
  populatedPlacesLayer.on("featureOver", openPopup);
  populatedPlacesLayer.on("featureOut", closePopup);
}

L.control
  .attribution({
    position: "bottomright"
  })
  .setPrefix(
    ' © <a href="https://energydata.info" target="_blank">EnergyData.info</a> and <a href="https://journalism.csis.org" target="_blank">CSIS Journalism Bootcamp</a> '
  )
  .addTo(map);

var checks = Array.from(
  document.querySelectorAll(".type_of_asset ul input")
).map(function(checkbox) {
  return checkbox.name;
});

var filter_checks = new carto.filter.Category("type_of_asset", {
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

      var filter_checked = new carto.filter.Category("type_of_asset", {
        in: checked
      });

      var filter_notChecked = new carto.filter.Category("type_of_asset", {
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
