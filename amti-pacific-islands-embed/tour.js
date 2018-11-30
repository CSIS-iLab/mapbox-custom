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
  chinaPopup = new mapboxgl.Popup({
    closeButton: false
  }),
  activeChapterName = "",
  steps = [],
  framesPerSecond = 30,
  initialOpacity = 1,
  opacity = initialOpacity,
  initialRadius = 8,
  radius = initialRadius,
  maxRadius = 18,
  exclude = ["Introduction", "Conclusion"],
  chapterList = [],
  countryColors,
  paintMap,
  basemapId,
  startScrollPosition,
  stopScrollPosition;

const nationsLayer = {
  id: "nations",
  type: "fill",
  source: "nations",
  "source-layer": "Pacific_Colors",
  paint: {
    "fill-color": [
      "match",
      ["get", "country"],
      ["FJ"],
      "#C71585",
      ["CK"],
      "#D98880",
      ["FR"],
      "hsl(25, 75%, 53%)",
      ["NZ"],
      "hsl(163, 44%, 49%)",
      ["AU"],
      "hsl(289, 24%, 53%)",
      ["PG"],
      "#C39BD3",
      ["TO"],
      "#7D3C98",
      ["WS"],
      "#A9DFBF",
      ["US"],
      "hsl(215, 37%, 56%)",
      ["VU"],
      "#7D6608",
      ["NU"],
      "#FF1493",
      ["KI"],
      "#138D75",
      ["TV"],
      "#EE82EE",
      ["NR"],
      "#FF69B4",
      ["FM"],
      "#BA55D3",
      ["PW"],
      "#A9CCE3",
      ["SB"],
      "#FF1493",
      ["MH"],
      "#784212",
      "#000000"
    ]
  }
};

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
  makeDom();
  window.scrollTo({ top: 0 });

  window.addEventListener("resize", getProgress);

  document
    .querySelector("button.scroll-up")
    .addEventListener("click", () => handleClick("up"));

  state = history.state || {};

  map = new mapboxgl.Map({
    container: "map",
    // style: "mapbox://styles/ilabmedia/cjoq3wuhd0ufd2ro5rag49zvi",
    style: "mapbox://styles/ilabmedia/cjp1vsq4012qc2smt2prznr0i",
    center: [195, -11.9602541],
    zoom: 5,
    bearing: 0,
    pitch: 0,
    scrollZoom: false,
    attributionControl: false
  });

  map.on("load", function() {
    fetch(chapterURL)
      .then(resp => resp.json())
      .then(json => {
        chapterList = parseChapterData(json.feed.entry);

        for (let i = 0; i < chapterList.length + 1; i++) {
          steps[i] = (1.54 / parseFloat(chapterList.length)) * parseFloat(i);
        }

        document.querySelector(".loader").remove();

        countryColors = chapterList
          .filter(c => !exclude.includes(c.name))
          .map(c => [c.name, c.color])
          .reduce((a, b) => a.concat(b));

        paintMap = ["match", ["get", "country"]]
          .concat(countryColors)
          .concat(["#e06b91"]);

        chapterList.forEach(chapter => {
          document.querySelector(
            "#info"
          ).innerHTML += `<section class="chapter" style="height:${
            window.screen.availWidth > 768
              ? 1000 / parseFloat(chapterList.length) - 18
              : 2000 / parseFloat(chapterList.length) - 18
          }vh"><div class="storymap-content">
    <h3 class="title">${chapter.title}</h3>
    <p class="story">${chapter.text}</p>
    <div id="chevWrapper" style="display: block;"><span id="chevron">»</span>Scroll down</div>  </div>
</section>`;
        });

        let chevron = document.querySelectorAll("#chevWrapper");

        chevron.forEach(chev =>
          chev.addEventListener("click", () => handleClick("down"))
        );

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
      `<div class="leaflet-popup-content-wrapper">YOU CAN CALL ATTENTION WITH A POPUP <br>OR WITH A FLASHING YELLOW DOT</div>`
    )
    .addTo(map);

  map.addControl(new mapboxgl.NavigationControl(), "top-left");
  map.addControl(
    new mapboxgl.AttributionControl({
      customAttribution: "CSIS"
    })
  );

  /////// Islands Data Layer
  map.addSource("islands", {
    type: "geojson",
    data: data
  });

  map.addLayer({
    id: "islands",
    type: "circle",
    source: "islands",
    paint: {
      "circle-color": "transparent",
      "circle-stroke-width": 2,
      "circle-stroke-color": "transparent",
      "circle-radius": initialRadius
    }
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

  if (map.getLayer("point1")) {
    var layers = map.getStyle().layers;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === "symbol") {
        basemapId = layers[i].id;
        break;
      }
    }
  }

  /////// Nations Data Layer
  // map.addSource("nations", {
  //   type: "vector",
  //   url: "mapbox://ilabmedia.cjp31gcsm07fj32mjmdaafwgw-48iuq"
  // });
  //
  // map.addLayer(nationsLayer, basemapId);

  map.once("render", () => {
    let resizeEvent = window.document.createEvent("UIEvents");
    resizeEvent.initUIEvent("resize", true, false, window, 0);
    window.dispatchEvent(resizeEvent);
    startScrollPosition =
      document.querySelector(".navbar").offsetHeight +
      document.querySelector(".backstretch").offsetHeight -
      50;

    let paragraphs = document.querySelectorAll(".entry-content > p");
    let pHeight = 0;

    [...paragraphs].forEach(p => (pHeight += p.offsetHeight));

    stopScrollPosition =
      document.querySelector(".entry-content").offsetHeight -
      document.querySelector(".site-footer").offsetHeight +
      pHeight;

    window.scrollTo({ top: window.scrollY + 1 });
  });

  /////// Click Event

  map.on("click", "islands", function(e) {
    let details = new mapboxgl.Popup();
    let coordinates = e.features[0].geometry.coordinates.slice();
    let properties = e.features[0].properties;
    let description =
      window.screen.availWidth > 768
        ? Object.keys(properties)
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
            .join("")
        : `<div class=
    "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
      properties["port-or-base"]
    }</div>`;

    details
      .setLngLat(coordinates)
      .setHTML(
        `<div class="leaflet-popup-content-wrapper">${description}</div>`
      )
      .addTo(map);
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
    let newFillMap = !activeChapterName.includes("China")
      ? [
          "match",
          ["get", "country"],
          `${activeChapterName}`,
          `${chapterList.find(c => c.name === activeChapterName).color}`,
          "transparent"
        ]
      : ["match", ["get", "chinese-involvement"], "", "transparent", "#e06b91"];

    let newStrokeMap = !activeChapterName.includes("China")
      ? [
          "match",
          ["get", "country"],
          `${activeChapterName}`,
          "#fff",
          "transparent"
        ]
      : ["match", ["get", "chinese-involvement"], "", "transparent", "#fff"];

    map.setPaintProperty("islands", "circle-color", newFillMap);

    map.setPaintProperty("islands", "circle-stroke-color", newStrokeMap);

    // if (map.getLayer("nations")) map.removeLayer("nations");
  } else if (activeChapterName === "Introduction") {
    map.setPaintProperty("islands", "circle-color", "transparent");
    map.setPaintProperty("islands", "circle-stroke-color", "transparent");

    // if (!map.getLayer("nations")) map.addLayer(nationsLayer, basemapId);
  } else {
    map.setPaintProperty("islands", "circle-color", paintMap);
    map.setPaintProperty("islands", "circle-stroke-color", " #fff");

    // if (!map.getLayer("nations")) map.addLayer(nationsLayer);
  }
}

function setActiveChapter(i) {
  // document.querySelector(".title").innerText = chapterList[i].title;
  // document.querySelector(".story").innerText = chapterList[i].text;

  if (activeChapterName === "Conclusion" || window.screen.availWidth < 768) {
    let chevrons = document.querySelectorAll("#chevWrapper");
    [...chevrons].forEach(chevron => (chevron.style.display = "none"));
  } else {
    let chevrons = document.querySelectorAll("#chevWrapper");
    [...chevrons].forEach(chevron => (chevron.style.display = "block"));
  }

  if (map.getLayer("islands")) highlightChapter(activeChapterName);
}

function getProgress() {
  startScrollPosition =
    document.querySelector(".navbar").offsetHeight +
    document.querySelector(".backstretch").offsetHeight -
    50;

  let paragraphs = document.querySelectorAll(".entry-content > p");
  let pHeight = 0;

  [...paragraphs].forEach(p => (pHeight += p.offsetHeight));

  stopScrollPosition =
    document.querySelector(".entry-content").offsetHeight -
    document.querySelector(".site-footer").offsetHeight +
    pHeight;

  let sections = document.querySelectorAll("#info sections");

  [...sections].forEach(
    section =>
      (section.style.height = `${
        window.screen.availWidth > 768
          ? 1000 / parseFloat(chapterList.length) - 18
          : 2000 / parseFloat(chapterList.length) - 18
      }vh`)
  );

  featurePosition = document.querySelector("#features").offsetHeight / 2;
  scrollY = window.scrollY;
  progress = scrollY / featurePosition;
}

function handleScroll(e) {
  if (
    window.scrollY > startScrollPosition &&
    window.scrollY < stopScrollPosition
  ) {
    document.querySelector("#map").classList.add("fixedMap");
    document.querySelector("#legend").classList.add("fixedLegend");
    document.querySelector(".box").classList.add("fixedBox");
    document.querySelector(".hamburger").classList.add("fixedHamburger");
    document.querySelector(
      "#map.fixedMap"
    ).style.top = `${document.querySelector(".navbar").offsetHeight + 25}px`;

    document.querySelector(
      ".box.fixedBox"
    ).style.top = `${document.querySelector(".navbar").offsetHeight + 25}px`;

    document.querySelector(
      "#legend.fixedLegend"
    ).style.top = `${document.querySelector(".navbar").offsetHeight + 37}px`;

    document.querySelector(
      ".hamburger.fixedHamburger"
    ).style.top = `${document.querySelector(".navbar").offsetHeight + 25}px`;
  } else {
    document.querySelector("#map").classList.remove("fixedMap");
    document.querySelector("#map").style.top = "0";
    document.querySelector("#legend").classList.remove("fixedLegend");
    document.querySelector("#legend").style.top = "12px";
    document.querySelector(".box").classList.remove("fixedBox");
    document.querySelector(".box").style.top = "24px";
    document.querySelector(".hamburger").classList.remove("fixedHamburger");
  }

  if (window.scrollY > 500) popup.remove();
  getProgress();

  steps.forEach((step, i) => {
    let makingProgress = progress >= step && progress <= steps[i + 1];
    // let atZero = progress >= 0 && progress < steps[1];
    if (makingProgress) {
      if (activeChapterName !== chapterList[i].name) {
        if (!chapterList[i].name.includes("China")) {
          map.flyTo(chapterList[i]);
        } else {
          map.flyTo({
            ...chapterList[i],
            longitude: parseFloat(chapterList[i].longitude) + 2,
            latitude: parseFloat(chapterList[i].latitude) + 5
          });
        }

        activeChapterName = chapterList[i].name;
        setActiveChapter(i);
        if (map.getLayer("islands") && window.screen.availWidth > 768)
          setPopup();
      }
    }
  });
}

function setPopup() {
  let coordinates = chapterList.find(c => c.name === activeChapterName).center;

  let features = map.getSource("islands")._data.features;

  let feature = features.find(f => {
    let cLatitude = Math.ceil(f.geometry.coordinates[0]);
    let cLongitude = Math.ceil(f.geometry.coordinates[1]);

    let fLatitude = Math.ceil(coordinates[0]);
    let fLongitude = Math.ceil(coordinates[1]);

    let cCoordinates = [cLatitude, cLongitude].join(",");
    let fCoordinates = [fLatitude, fLongitude].join(",");
    return cCoordinates === fCoordinates;
  });

  if (feature) {
    let properties = feature.properties;

    let description =
      window.screen.availWidth > 768
        ? Object.keys(properties)
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
            .join("")
        : `<div class=
  "popupHeaderStyle">Port or Base</div><div class="popupEntryStyle">${
    properties["port-or-base"]
  }</div>`;

    chinaPopup
      .setLngLat(coordinates)
      .setHTML(
        `<div class="leaflet-popup-content-wrapper">${description}</div>`
      )
      .addTo(map);
  }
  if (!activeChapterName.includes("China")) chinaPopup.remove();
}

function handleClick(direction) {
  let activeChapter = chapterList.find(c => c.name === activeChapterName);

  let i =
    direction === "up"
      ? chapterList.indexOf(activeChapter) - 1
      : chapterList.indexOf(activeChapter) + 1;

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

  let atBottom = progress > chapterList.length;

  if (activeChapterName.includes("China")) {
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

function makeDom() {
  let cssFiles = [
    "https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css",
    "https://carto.com/developers/carto-js/examples/maps/public/style.css",
    "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",
    "https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700",
    "https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-embed/css/carto_style.css",
    "https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands-embed/css/style.css"
  ];

  cssFiles.forEach(file => {
    var head = document.head;
    var link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = file;

    head.appendChild(link);
  });

  document.querySelector("#storymap").innerHTML = `
  <div id="legend">
  <div class="popupHeaderStyle">Pacific Quad Members</div>
    <div class="legend-label label-base base-au">Australia</div>
    <div class="legend-label label-base base-fr">France</div>
    <div class="legend-label label-base base-nz">New Zealand</div>
    <div class="legend-label label-base base-us">United States</div>
  </div>
  <div id='map'></div>
      <aside id="features" class="toolbox">


        <input type="checkbox" checked class="ui mobile-only">
        <div class="hamburger mobile-only">
          <div class="icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu">
            Pacific Islands

          </div>
        </div>

        <div class="box">
          <header class="mobile-toggle">

          </header>

          <section>
            <div id="controls">
              <div id="info">
                <div class="loader"></div>

                <div class="navigator">
                  <button class="scroll-up" aria-label="scroll-up"><span class="text">scroll up</span><span class="symbol">Previous</span></button>
                  <button class="scroll-down" aria-label="scroll-down"><span class="text">scroll down</span><span class="symbol">Next</span></button>
                </div>

              </div>
              <footer class="js-footer"></footer>
            </div>

      </aside>`;

  document.querySelector("#storymap").style.top = `${document
    .querySelector("#storymap")
    .getBoundingClientRect().top - 50}px`;
}
