mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

var map;
var radius = 20;
let popup = new mapboxgl.Popup();

document.addEventListener("DOMContentLoaded", function(event) {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ilabmedia/cjk40a37x21ha2skptjecv1j0",
    center: [129.859511, 41.805677],
    zoom: 10,
    bearing: 0,
    pitch: 0,
    scrollZoom: false
  });

  var framesPerSecond = 15;
  var initialOpacity = 1;
  var opacity = initialOpacity;
  var initialRadius = 8;
  var radius = initialRadius;
  var maxRadius = 18;
  map.on("load", function() {
    map.addLayer({
      id: "markets",
      type: "circle",
      source: {
        type: "vector",
        url: "mapbox://ilabmedia.cjnugd5m000lm31pizx5mvdpp-9dxbu"
      },
      "source-layer": "cheongjin_markets",
      paint: {
        "circle-color": "#ff0",
        "circle-radius": 4
      }
    });

    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource("point", {
      type: "geojson",
      data: pointOnCircle(0)
    });

    map.addLayer({
      id: "point",
      source: "point",
      type: "circle",
      paint: {
        "circle-color": "#ff0",
        "circle-radius": initialRadius,
        "circle-radius-transition": { duration: 0 },
        "circle-opacity-transition": { duration: 0 }
      }
    });

    map.addLayer({
      id: "point1",
      source: "point",
      type: "circle",
      paint: {
        "circle-radius": initialRadius,
        "circle-color": "#ff0"
      }
    });

    map.on("click", "point", function(e) {
      popup.remove();
      debugger;
      var coordinates = e.lngLat;
      var description = e.properties.name;

      popup = new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "point", function() {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "point", function() {
      map.getCanvas().style.cursor = "";
    });

    function animateMarker(timestamp) {
      setTimeout(function() {
        requestAnimationFrame(animateMarker);

        radius += (maxRadius - radius) / framesPerSecond;
        opacity -= 0.9 / framesPerSecond;
        opacity = Math.max(0, opacity);

        map.setPaintProperty("point", "circle-radius", radius);
        map.setPaintProperty("point", "circle-opacity", opacity);

        if (opacity <= 0) {
          radius = initialRadius;
          opacity = initialOpacity;
        }
      }, 1000 / framesPerSecond);

      // Update the data to a new position based on the animation timestamp. The
      // divisor in the expression `timestamp / 1000` controls the animation speed.
      map.getSource("point").setData(pointOnCircle(timestamp / 1000));

      // Request the next frame of the animation.
      // requestAnimationFrame(animateMarker);
    }

    // Start the animation.
    animateMarker(0);
  });
});

var chapters = {
  start: {
    bearing: 0,
    center: [129.859511, 41.805677],
    zoom: 10,
    pitch: 0
  },
  "Haebang Market": {
    bearing: 90,
    center: [129.8058056, 41.79161667],
    zoom: 15,
    pitch: 20
  },
  "Nagyang Market": {
    duration: 6000,
    center: [129.8007278, 41.79493056],
    bearing: 150,
    zoom: 15,
    pitch: 0
  },
  "Munhwa Market": {
    bearing: 90,
    center: [129.78095, 41.80859722],
    zoom: 15,
    pitch: 40
  },
  "Yeonjin Market": {
    bearing: 120,
    center: [129.9180611, 41.91596667],
    zoom: 12
  },
  "Gwanhae Market": {
    bearing: -90,
    center: [130.0973694, 42.09296667],
    zoom: 15,
    pitch: 20
  },
  "Suwon Market": {
    bearing: 180,
    center: [129.7850528, 41.78736667],
    zoom: 12
  },
  end: {
    bearing: 0,
    center: [129.859511, 41.805677],
    zoom: 10,
    pitch: 0
  }
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    } else {
      let activeElement = document.getElementById(activeChapterName);

      if (activeElement) activeElement.setAttribute("class", "");
    }
  }
};

var activeChapterName = "Haebang Market";

function setActiveChapter(chapterName) {
  // if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute("class", "active");
  // if (activeChapterName)
  //   document.getElementById(activeChapterName).setAttribute("class", "");

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id).parentElement;
  var bounds = element.getBoundingClientRect();
  return bounds.top - 10 < window.innerHeight && bounds.bottom > 0;
}

function pointOnCircle(angle) {
  return {
    type: "Point",
    coordinates: chapters[activeChapterName].center
  };
}
