mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

var map;
var radius = 20;

document.addEventListener("DOMContentLoaded", function(event) {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ilabmedia/cjk40a37x21ha2skptjecv1j0",
    center: [127.41332, 40],
    zoom: 7,
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
        url: "mapbox://ilabmedia.cjnui951u38au2qqeqctdtk2i-5gipt"
      },
      "source-layer": "korea_railway_crossings",
      paint: {
        "circle-color": "#ff0",
        "circle-radius": initialRadius
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
    center: [127.41332, 40],
    zoom: 7,
    pitch: 0,
    speed: 5
  },
  "Sino-Korean": {
    bearing: 90,
    center: [124.391598, 40.115854],
    zoom: 15,
    pitch: 20
  },
  "Chongsu-Shanghekou": {
    duration: 6000,
    center: [124.879666, 40.458481],
    bearing: 150,
    zoom: 15,
    pitch: 0
  },
  "Manpo-Jian": {
    bearing: 90,
    center: [126.273323, 41.154935],
    zoom: 15,
    pitch: 40
  },
  "Namyang-Tomun": {
    bearing: 120,
    center: [129.849236, 42.94905],
    zoom: 12
  },
  Kumgang: {
    bearing: -90,
    center: [128.342333, 38.62928],
    zoom: 15,
    pitch: 20
  },
  Kaesong: {
    bearing: 180,
    center: [126.678975, 37.910026],
    zoom: 12
  },
  "Korean-Russian": {
    bearing: 90,
    center: [130.619033, 42.417751],
    zoom: 15,
    pitch: 40
  },
  end: {
    bearing: 0,
    center: [127.41332, 40],
    zoom: 10,
    pitch: 0
  }
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);

  chapterNames.forEach(chapterName => {
    var element = document.getElementById(chapterName);
    var bounds = element.parentElement.getBoundingClientRect();

    if (bounds.top < window.innerHeight / 2) {
      element.setAttribute("class", "active");
    } else {
      element.setAttribute("class", "");
    }
  });

  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];

    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      if (window.scrollY < 80) map.flyTo(chapters["start"]);

      break;
    } else {
      let activeElement = document.getElementById(activeChapterName);
    }
  }
};

var activeChapterName = "Sino-Korean";

function setActiveChapter(chapterName) {
  map.flyTo(chapters[activeChapterName]);
  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id).parentElement;
  var bounds = element.getBoundingClientRect();
  return bounds.top + 10 < window.innerHeight && bounds.bottom > 0;
}

function pointOnCircle(angle) {
  return {
    type: "Point",
    coordinates: chapters[activeChapterName].center
  };
}
