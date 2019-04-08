"use strict";

var map;

makeMap({
  mapID: "africa",
  center: [5, 20],
  maxBounds: [[50, -40], [-50, 80]],
  zoom: 4,
  maxZoom: 6,
  minZoom: 4,
  clusterDistance: 15,
  attribution:
    'Data by <a href="https://www.csis.org/programs/africa-program" target="_blank">CSIS Africa Program</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
  table: "africa_ports",
  apiKey: "YNJEEYb06BbPcarCz1psmQ",
  program: "Africa Program",
  website: "https://www.csis.org/programs/africa-program",
  logo:
    "https://pbs.twimg.com/profile_images/459755242079260672/ilsUDAkD_400x400.jpeg",
  title: "Ports in Africa",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  mapboxStyle: "cjtq2y5740uf61ftj7pgsxax9",
  "ocean color": "#b7c7d1",
  formatPopupContent: function(feature, map) {
    return (
      '<div class="popupTitleStyle">' +
      feature.properties.port +
      '</div><div class="popupEntryStyle">' +
      feature.properties.port_city +
      ", " +
      feature.properties.port_country +
      '</div><div class="popupHeaderStyle">Risk Level</div><div class="popupEntryStyle">' +
      feature.properties.risk_level +
      '</div><div class="popupHeaderStyle">Risks</div><ul class="popupEntryStyle">' +
      feature.properties.risks
        .split(",")
        .map(r => `<li>${capitalize(r)}</li>`)
        .join("") +
      "</ul>"
    );
  },
  zoomSlider: false,
  widgets: [
    {
      id: 0,
      field: "risks",
      type: "form",
      input: "checkbox",
      keys: [
        {
          label: "building",
          key: "building",
          value: "building",
          form: "icon",
          icon: "icons/pieBuilding.svg",
          selected: true
        },
        {
          label: "operating",
          key: "operating",
          value: "operating",
          form: "icon",
          icon: "icons/pieOperating.svg",
          selected: true
        },
        {
          label: "funding",
          key: "funding",
          value: "funding",
          form: "icon",
          icon: "icons/pieFunding.svg",
          selected: true
        },
        {
          label: "building and funding",
          key: "building,funding",
          value: "building,funding",
          form: "icon",
          icon: "icons/pieBuildingFunding.svg",
          selected: true
        },
        {
          label: "operating and building",
          key: "operating,building",
          value: "operating,building",
          form: "icon",
          icon: "icons/pieBuildingOperating.svg",
          selected: true
        },
        {
          label: "funding and operating",
          key: "funding,operating",
          value: "funding,operating",
          form: "icon",
          icon: "icons/pieFundingOperating.svg",
          selected: true
        },
        {
          label: "building, funding, and operating",
          key: "building,funding,operating",
          value: "building,funding,operating",
          form: "icon",
          icon: "icons/pieBuildingFundingOperating.svg",
          selected: true
        }
      ]
    }
  ]
});

// map = Map.all[0];
//
// function setIconSize() {
//   var zoomLevel = map.map.getZoom();
//
//   var iconElements = Array.from(
//     document.querySelectorAll(".leaflet-marker-icon")
//   );
//
//   iconElements.forEach(function(icon) {
//     icon.style.width = zoomLevel * 4 + "px";
//     icon.style.height = zoomLevel * 4 + "px";
//     var text = icon.querySelector("div");
//     if (text) text.style.fontSize = zoomLevel * 4 - 4 + "px";
//   });
// }
//
// map.map.on("zoomend", setIconSize);
//
// function formatToolbox(box) {
//   var boxContent = "";
// }
//
// function groupsLoaded() {}
