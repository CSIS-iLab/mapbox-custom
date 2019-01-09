L.mapbox.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNqcHZvemptYzAzYnI0N3BodDg4NXBlOTUifQ.BbL7RBI4fzWi8Yi4t3imxg";

var map = L.mapbox.map("map", null, {
  scrollWheelZoom: false,
  center: [-11.9602541, 195],
  zoom: 3.2,
  attributionControl: false
});

L.mapbox
  .styleLayer("mapbox://styles/ilabmedia/cjp1vsq4012qc2smt2prznr0i")
  .addTo(map);

var interestsData = void 0,
  exclude = ["Introduction", "Conclusion"],
  nations = ["United States", "Australia", "New Zealand", "France", "China"],
  allowedHeaders = [
    "type",
    "number-of-ships-permanently-based",
    "number-of-troops-stationed",
    "number-of-aircraft-based",
    "chinese-involvement"
  ];

var chapterColors = {
  "United States": "#6688b9",
  France: "#f89c74",
  "New Zealand": "#00ad3b",
  Australia: "#f6cf71",
  China: "#e06b91"
};

var spreadsheetID = "115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc";

var islandURL =
  "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetID +
  "/1/public/values?alt=json";

fetch(islandURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    interestsData = parseIslandData(json.feed.entry);
    initIslands();
    return json;
  })
  .catch(function(ex) {
    console.log("mm parsing failed", ex);
  });

function initIslands() {
  L.control
    .attribution({ position: "bottomleft" })
    .setPrefix(
      ' © <a href="https://amti.csis.org" target="_blank">AMTI</a> and <a href="https://www.csis.org" target="_blank">CSIS</a> | 2018'
    )
    .addTo(map);

  addInterestsLayer();
}

function addInterestsLayer() {
  window.nation_marker_clusters = {};
  nations.forEach(function(nation) {
    var chapterName = nation.toLowerCase().replace(" ", "-");

    nation_marker_clusters[nation] = new L.MarkerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      maxClusterRadius: 40,
      iconCreateFunction: function iconCreateFunction(cluster) {
        return L.divIcon({
          className: "icon-" + chapterName,
          html: "" + cluster.getChildCount()
        });
      }
    });

    var filteredData = interestsData.features.filter(function(f) {
      return f.properties.country.indexOf(nation) > -1;
    });

    var _loop = function _loop(i) {
      var a = filteredData[i];
      var description = void 0;
      if (!window.isMobile) {
        description = Object.keys(a.properties)
          .filter(function(p) {
            return p !== "country";
          })
          .map(function(p) {
            if (a.properties[p])
              return allowedHeaders.indexOf(p) > -1
                ? '<div class=\n            "popupHeaderStyle">' +
                    p
                      .toUpperCase()
                      .replace(/-/g, " ")
                      .replace("NUMBER", "#") +
                    '</div><div class="popupEntryStyle">' +
                    a.properties[p] +
                    "</div>"
                : '<div class="popupEntryStyle">' + a.properties[p] + "</div>";
          })
          .filter(function(p) {
            return p;
          })
          .join("");
      } else {
        Object.keys(a.properties)
          .filter(function(p) {
            return p !== "country";
          })
          .map(function(p) {
            description =
              '<div class=\n      "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">' +
              a.properties["port-or-base"] +
              "</div>";
          });
      }

      var nation_marker = L.marker(
        new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]),
        {
          icon: L.divIcon({
            className: "icon-" + chapterName
          })
        }
      );
      nation_marker.bindPopup(description);
      nation_marker_clusters[nation].addLayer(nation_marker);
    };

    for (var i = 0; i < filteredData.length; i++) {
      _loop(i);
    }

    map.addLayer(nation_marker_clusters[nation]);

    nation_marker_clusters[nation].on("clustermouseover", function(a) {
      Object.keys(window.map._layers).forEach(function(layer, i) {
        map._layers[a.layer._leaflet_id].spiderfy();
      });
    });
  });

  var objs = [{}, window.nation_marker_clusters];
  window.layer_cache = objs.reduce(function(r, o) {
    Object.keys(o).forEach(function(k) {
      r[k] = o[k];
    });
    return r;
  }, {});
}

function parseIslandData(rawData) {
  var featureData = rawData.map(function(r) {
    var row = r;
    var islandData = {};
    Object.keys(row).forEach(function(c) {
      var column = c;
      if (column.indexOf("gsx$") > -1) {
        var columnName = column.replace("gsx$", "");
        islandData[columnName] = row[column]["$t"];
      }
    });

    var objs = [{}, islandData];
    var islandDataSansCoordinates = objs.reduce(function(r, o) {
      Object.keys(o).forEach(function(k) {
        r[k] = o[k];
      });
      return r;
    }, {});

    delete islandDataSansCoordinates.latitude;
    delete islandDataSansCoordinates.longitude;

    islandData.longitude =
      parseFloat(islandData.longitude) < 0
        ? 360 + parseFloat(islandData.longitude)
        : parseFloat(islandData.longitude);

    islandData.latitude = parseFloat(islandData.latitude);

    var feature = {
      type: "Feature",
      properties: islandDataSansCoordinates,
      geometry: {
        type: "Point",
        coordinates: [islandData.longitude, islandData.latitude]
      }
    };

    return feature;
  });

  return {
    type: "FeatureCollection",
    features: featureData
  };
}
// document.querySelector("#query").addEventListener("keyup", function() {
//   var q = document.querySelector("#query").value;
// });
//
// var capital = function capital(c, q) {
//   return new carto.filter.Category(c, {
//     like: "%" + (q.charAt(0).toUpperCase() + q.slice(1)) + "%"
//   });
// };
// var lower = function lower(c, q) {
//   return new carto.filter.Category(c, {
//     like: "%" + q.toLowerCase() + "%"
//   });
// };
// var upper = function upper(c, q) {
//   return new carto.filter.Category(c, {
//     like: "%" + q.toUpperCase() + "%"
//   });
// };
//
// document
//   .querySelector("#resetButton")
//   .addEventListener("click", function(e) {});
