mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

var map;

document.addEventListener("DOMContentLoaded", function(event) {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ilabmedia/cjk40a37x21ha2skptjecv1j0",
    center: [127.41332, 39.0575],
    zoom: 12,
    bearing: 0,
    pitch: 45,
    scrollZoom: false
  });
});

var chapters = {
  "Sino-Korean": {
    bearing: 90,
    center: [124.391598, 40.115854],
    zoom: 12,
    pitch: 20
  },
  "Chongsu-Shanghekou": {
    duration: 6000,
    center: [124.879666, 40.458481],
    bearing: 150,
    zoom: 12,
    pitch: 0
  },
  "Manpo-Jian": {
    bearing: 90,
    center: [126.273323, 41.154935],
    zoom: 12,
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
    zoom: 12,
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
    zoom: 12,
    pitch: 40
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
    }
  }
};

var activeChapterName = "Sino-Korean";

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute("class", "active");
  document.getElementById(activeChapterName).setAttribute("class", "");

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}
