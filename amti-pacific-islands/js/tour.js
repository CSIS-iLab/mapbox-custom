mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

let state,
  map,
  scrollHeight,
  framesPerSecond = 30,
  initialOpacity = 1,
  opacity = initialOpacity,
  initialRadius = 8,
  radius = initialRadius,
  maxRadius = 18,
  activeChapterName = "start",
  exclude = ["start", "end"];

let chapters = {
  start: {
    center: [195, -11.9602541],
    zoom: 2,
    pitch: 0,
    speed: 3
  },
  "United States": {
    center: [166.431640625, 14.689881366618762],
    zoom: 3,
    pitch: 40,
    color: "#6688b9"
  },
  France: {
    duration: 6000,
    center: [-169.24609375, -22.268764039073968],

    zoom: 2,
    pitch: 40,
    color: "#e1782c"
  },
  Australia: {
    center: [153.28125, -22.67484735118852],
    zoom: 3,
    pitch: 40,
    color: "#9869a3"
  },
  "New Zealand": {
    center: [170.595703125, -38.61687046392973],
    zoom: 5,
    pitch: 40,
    color: "#46b394"
  },
  China: {
    center: [174.77050781249997, -12.554563528593656],
    zoom: 4,
    pitch: 40,
    color: "#e06b91"
  },
  end: {
    center: [195, -11.9602541],
    zoom: 2,
    pitch: 0
  }
};

let countryColors = Object.keys(chapters)
  .filter(c => !exclude.includes(c))
  .map(c => [c, chapters[c].color])
  .reduce((a, b) => a.concat(b));

let paintMap = ["match", ["get", "country"]]
  .concat(countryColors)
  .concat(["#fff"]);

document.addEventListener("DOMContentLoaded", function(event) {
  let state = history.state || {};

  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ilabmedia/cjoq3wuhd0ufd2ro5rag49zvi",
    // style: "mapbox://styles/ilabmedia/cj84s9bet10f52ro2lrna50yg",
    center: [195, -11.9602541],
    zoom: 2,
    bearing: 0,
    pitch: 0,
    scrollZoom: false
  });

  map.on("load", function() {
    map.addControl(new mapboxgl.NavigationControl(), "top-left");

    /////// Data Layer
    map.addSource("islands", {
      type: "vector",
      url: "mapbox://ilabmedia.cjopvtk471zt92vlnsy7yv3b5-5ezl4"
    });

    map.addLayer({
      id: "islands",
      type: "circle",
      source: "islands", //ilabmedia.cjopvtk471zt92vlnsy7yv3b5-5ezl4
      "source-layer": "Pacific_Islands",
      paint: {
        "circle-color": paintMap,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#fff",
        "circle-radius": initialRadius
      }
    });

    /////// Highlighted Points
    map.addLayer({
      id: "islands-highlighted",
      type: "circle",
      source: "islands",
      "source-layer": "Pacific_Islands",
      paint: {
        "circle-color": "#ff0",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#fff",
        "circle-radius": initialRadius
      },
      filter: ["in", "country", ""]
    });

    /////// Animated Points
    map.addSource(`point`, {
      type: "geojson",
      data: pointOnCircle(0)
    });

    map.addLayer({
      id: "point",
      source: "point",
      type: "circle",
      paint: {
        "circle-color": "transparent",
        "circle-radius": initialRadius,
        "circle-stroke-width": 2,
        "circle-stroke-color": "transparent",
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
        "circle-color": "transparent"
      }
    });

    /////// Click Event
    let popup = new mapboxgl.Popup();
    map.on("click", "islands", function(e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      let properties = e.features[0].properties;
      var description = Object.keys(properties)
        .map(p => {
          return `<h3>${p}</h3><p>${properties[p]}</p>`;
        })
        .join("");

      popup
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    /////// Hover Event
    map.on("mouseenter", "islands", function(e) {
      map.getCanvas().style.cursor = "pointer";
      map.setFilter("islands-highlighted", [
        "in",
        "country",
        e.features[0].properties.country
      ]);
    });

    map.on("mouseleave", "islands", function() {
      map.getCanvas().style.cursor = "";
      map.setFilter("islands-highlighted", ["in", "country", ""]);
      // popup.remove();
    });

    // Start the animation.
    animateMarker(0);

    // Object.keys(chapters)
    //   .filter(c => !["start", "end"].includes(c))
    //   .forEach(c => {
    //     new mapboxgl.Marker({ color: "#fff" })
    //       .setLngLat(chapters[c].center)
    //       .addTo(map);
    //   });
  });
});

window.onscroll = function() {
  var chapterNames = Object.keys(chapters);

  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];

    if (map._loaded) {
      if (isElementOnScreen(chapterName)) {
        map.flyTo(chapters[chapterName]);
        document.getElementById(chapterName).setAttribute("class", "active");
        setActiveChapter(chapterName);
        break;
      } else {
        document.getElementById(chapterName).setAttribute("class", "");
      }
    }

    scrollHeight = document.querySelector("#features").offsetHeight;

    let atTop = window.scrollY / scrollHeight < 0.015;

    let atBottom = window.scrollY / scrollHeight > 0.75;

    if (atTop) {
      document.getElementById("United States").setAttribute("class", "");
      map.flyTo(chapters["start"]);
    }
    if (atBottom) {
      document.getElementById("China").setAttribute("class", "");
      map.flyTo(chapters["end"]);
    }

    if (atTop || atBottom) {
      if (map._loaded) {
        map.setPaintProperty("islands", "circle-color", paintMap);
        map.setPaintProperty("islands", "circle-stroke-color", "#fff");
      }
    }
  }
};

function setActiveChapter(chapterName) {
  activeChapterName = chapterName;
  if (!exclude.includes(activeChapterName)) {
    map.setPaintProperty("islands", "circle-color", [
      "match",
      ["get", "country"],
      `${activeChapterName}`,
      `${chapters[activeChapterName].color}`,
      "transparent"
    ]);
    map.setPaintProperty("islands", "circle-stroke-color", [
      "match",
      ["get", "country"],
      `${activeChapterName}`,
      "#fff",
      "transparent"
    ]);
  }
}

function isElementOnScreen(id) {
  let element = document.getElementById(id);
  let elementBounds = element.getBoundingClientRect();
  let parent = document.getElementById(id).parentElement;
  let parentBounds = parent.getBoundingClientRect();
  scrollHeight = document.querySelector("#features").offsetHeight;

  let isOnScreen =
    parentBounds.top > -200 && elementBounds.bottom < window.innerHeight * 0.67;

  let isInStory = window.scrollY / scrollHeight < 0.75;

  let excluded = exclude.includes(id);

  let atTop = window.scrollY / scrollHeight < 0.005;
  // if (id === "start") console.log(id, isOnScreen, isInStory, notExcluded);
  // if (id === "United States")
  // console.log(id, isOnScreen, isInStory, notExcluded);

  return isOnScreen && isInStory && !excluded && !atTop;
}

function pointOnCircle(angle) {
  //turn into function that returns array of animated points
  return {
    type: "Point",
    coordinates: chapters[activeChapterName].center
  };
}

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

  let atTop = window.scrollY / scrollHeight < 0.015;

  let atBottom = window.scrollY / scrollHeight > 0.75;

  if (!atTop && !atBottom) {
    map.setPaintProperty("point", "circle-color", "#ff0");
    map.setPaintProperty("point1", "circle-color", "#ff0");
    map.setPaintProperty("point1", "circle-stroke-color", "#ff0");
  } else {
    map.setPaintProperty("point", "circle-color", "transparent");
    map.setPaintProperty("point1", "circle-color", "transparent");
    map.setPaintProperty("point1", "circle-stroke-color", "transparent");
  }
  map.getSource("point").setData(pointOnCircle(timestamp / 1000));
}
