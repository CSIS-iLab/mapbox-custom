mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";

let state,
  map,
  scrollY,
  featurePosition,
  progress,
  popup = new mapboxgl.Popup({
    closeButton: false
  }),
  activeChapterName = "",
  steps = [-1, 0.22, 0.44, 0.66, 0.88, 1.1, 1.32, 1.54],
  framesPerSecond = 30,
  initialOpacity = 1,
  opacity = initialOpacity,
  initialRadius = 8,
  radius = initialRadius,
  maxRadius = 18,
  exclude = ["Introduction", "Conclusion"],
  chapterList = [],
  countryColors,
  paintMap;

const spreadsheetID = "115eMJVfot0DDYcv7nhsVM4X5Djihr2ygpMdMYzBSsdc";

const islandURL =
  "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetID +
  "/1/public/values?alt=json";

const chapterURL =
  "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetID +
  "/2/public/values?alt=json";

document.addEventListener("DOMContentLoaded", function(event) {
  window.addEventListener("resize", getProgress);

  document
    .querySelector("button.scroll-up")
    .addEventListener("click", () => handleClick("up"));

  document
    .querySelector("button.scroll-down")
    .addEventListener("click", () => handleClick("down"));

  state = history.state || {};

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
    fetch(chapterURL)
      .then(resp => resp.json())
      .then(json => {
        chapterList = parseChapterData(json.feed.entry);

        document.querySelector(".loader").remove();
        document.querySelector(".title").innerText = chapterList[0].name;
        document.querySelector(".story").innerText = chapterList[0].text;

        countryColors = chapterList
          .filter(c => !exclude.includes(c.name))
          .map(c => [c.name, c.color])
          .reduce((a, b) => a.concat(b));

        paintMap = ["match", ["get", "country"]]
          .concat(countryColors)
          .concat(["#fff"]);

        window.addEventListener("scroll", handleScroll);
      })
      .then(x =>
        fetch(islandURL)
          .then(resp => resp.json())
          .then(json => {
            let data = parseIslandData(json.feed.entry);

            handleScroll();
            initIslands(data);
          })
      );
  });
});

function parseChapterData(rawData) {
  let d = rawData.map(r => {
    let row = r;
    let chapterData = {};
    Object.keys(row).forEach(c => {
      let column = c;
      if (column.includes("gsx$")) {
        let columnName = column.replace("gsx$", "");
        chapterData[columnName] = row[column]["$t"];
      }
    });
    chapterData.center = [
      parseFloat(chapterData.latitude),
      parseFloat(chapterData.longitude)
    ];
    return chapterData;
  });
  return d;
}

function parseIslandData(rawData) {
  featureData = rawData.map(r => {
    let row = r;
    let islandData = {};
    Object.keys(row).forEach(c => {
      let column = c;
      if (column.includes("gsx$")) {
        let columnName = column.replace("gsx$", "");
        islandData[columnName] = row[column]["$t"];
      }
    });

    let islandDataSansCoordinates = Object.assign({}, islandData);
    delete islandDataSansCoordinates.latitude;
    delete islandDataSansCoordinates.longitude;

    let feature = {
      type: "Feature",
      properties: islandDataSansCoordinates,
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(islandData.longitude),
          parseFloat(islandData.latitude)
        ]
      }
    };

    return feature;
  });

  return {
    type: "FeatureCollection",
    features: featureData
  };
}

function initIslands(data) {
  popup
    .setLngLat(chapterList[0].center)
    .setHTML(
      `<div class="leaflet-popup-content-wrapper">YOU CAN CALL ATTENTION TO A STORY WITH A POPUP</div>`
    )
    .addTo(map);

  map.addControl(new mapboxgl.NavigationControl(), "top-left");

  /////// Data Layer
  map.addSource("islands", {
    type: "geojson",
    data: data
  });

  map.addLayer({
    id: "islands",
    type: "circle",
    source: "islands",
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

  map.on("click", "islands", function(e) {
    let details = new mapboxgl.Popup();
    let coordinates = e.features[0].geometry.coordinates.slice();
    let properties = e.features[0].properties;
    let description = Object.keys(properties)
      .map(p => {
        if (properties[p])
          return `<div class=
        "popupHeaderStyle"
        >${p
          .toUpperCase()
          .replace(/-/g, " ")}</div><div class="popupEntryStyle">${
            properties[p]
          }</div>`;
      })
      .filter(p => p)
      .join("");

    details
      .setLngLat(coordinates)
      .setHTML(
        `<div class="leaflet-popup-content-wrapper">${description}</div>`
      )
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
  //   .filter(c => !["Introduction", "Conclusion"].includes(c))
  //   .forEach(c => {
  //     new mapboxgl.Marker({ color: "#fff" })
  //       .setLngLat(chapters[c].center)
  //       .addTo(map);
  //   });
}

function highlightChapter(activeChapterName) {
  if (!exclude.includes(activeChapterName)) {
    map.setPaintProperty("islands", "circle-color", [
      "match",
      ["get", "country"],
      `${activeChapterName}`,
      `${chapterList.find(c => c.name === activeChapterName).color}`,
      "transparent"
    ]);
    map.setPaintProperty("islands", "circle-stroke-color", [
      "match",
      ["get", "country"],
      `${activeChapterName}`,
      "#fff",
      "transparent"
    ]);
  } else {
    map.setPaintProperty("islands", "circle-color", paintMap);
    map.setPaintProperty("islands", "circle-stroke-color", " #fff");
  }
}

function setActiveChapter(i) {
  document.querySelector(".title").innerText = activeChapterName;
  document.querySelector(".story").innerText = chapterList[i].text;

  if (i === 0) {
    document.querySelector("button.scroll-up").style.display = "none";
  } else if (i === 6) {
    document.querySelector("button.scroll-down").style.display = "none";
  } else {
    document.querySelector("button.scroll-up").style.display = "block";
    document.querySelector("button.scroll-down").style.display = "block";
  }
  if (map.getLayer("islands")) highlightChapter(activeChapterName);
}

function getProgress() {
  featurePosition = document.querySelector("#features").offsetHeight / 2;
  scrollY = window.scrollY;
  progress = scrollY / featurePosition;
}

function handleScroll(e) {
  if (window.scrollY > 500) popup.remove();
  getProgress();

  steps.forEach((step, i) => {
    let makingProgress = progress > step && progress < steps[i + 1];
    // let atZero = progress >= 0 && progress < steps[1];

    if (makingProgress) {
      if (activeChapterName !== chapterList[i].name) {
        map.flyTo(chapterList[i]);
        activeChapterName = chapterList[i].name;
        setActiveChapter(i);
      }
    }
    // else if (atZero) {
    //   map.flyTo(chapterList[0]);
    //   activeChapterName = chapterList[0].name;
    //   setActiveChapter(0);
    // }
  });
}

function handleClick(direction) {
  let activeChapter = chapterList.find(c => c.name === activeChapterName);

  let i =
    direction === "up"
      ? chapterList.indexOf(activeChapter) - 1
      : chapterList.indexOf(activeChapter) + 1;

  i;

  let scrollPosition = steps[i] * featurePosition * 1.1;

  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: "smooth"
  });
}

function pointOnCircle(angle) {
  //turn into function that returns array of animated points
  return {
    type: "Point",
    coordinates: chapterList.find(c => c.name === activeChapterName).center
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

  let atTop = progress < steps[1];

  let atBottom = progress > steps[6];

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