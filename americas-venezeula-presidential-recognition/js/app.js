var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjrawc1zs2bzc2sq3y9wvt22t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [45, 0],
  zoom: 3,
  maxZoom: 18,
  scrollWheelZoom: true,
  minZoom: 1,
  zoomControl: false,
  layers: [basemap]
});

L.control.zoomslider().addTo(map);

map.attributionControl.addAttribution(
  '<a href="https://www.csis.org/programs/international-security-program/project-nuclear-issues">CSIS Americas Program</a>'
);

var client = new carto.Client({
  apiKey: "OHMeaxjni_Z6Eo0wOVXrBA",
  username: "csis"
});

var recognitionSQL = new carto.source.SQL("SELECT * FROM guaido_recognition");

let baseStyle = `
[guaido = '?']{
  comp-op: multiply;
  polygon-pattern-file: url(https://csis-ilab.github.io/mapbox-custom/americas-venezeula-presidential-recognition/images/stripe.png);
  }

  ::outline {
    line-color: #fff;
    line-width: 1;
    polygon-fill: ramp([guaido],(#f4da97,#5cc181,transparent),("Y","N"),"=");

    }
  #layer::labels {
    text-name: [country];
    text-face-name: 'Open Sans Bold';
    text-transform: uppercase;
    text-size: 12;
    text-fill: #fff;
    text-label-position-tolerance: 0;
    text-halo-radius: 1.25;
    text-halo-fill: #504e4e;
    text-dy: 0;
    text-opacity: ramp([guaido],(1,1,0),("Y","N"),"=");
    text-halo-opacity: ramp([guaido],(1,1,0),("Y","N"),"=");
    text-allow-overlap: false;
    text-placement: point;
    text-placement-type: dummy;
  }
`;

var recognitionStyle = new carto.style.CartoCSS(baseStyle);

var recognitionLayer = new carto.layer.Layer(recognitionSQL, recognitionStyle, {
  featureOverColumns: ["guaido", "country"]
});

var recognitionInfo = L.popup({ closeButton: false });

recognitionLayer.on(carto.layer.events.FEATURE_OVER, function(e) {
  if (e.data.guaido.trim()) {
    recognitionInfo.setLatLng(e.latLng);
    var recognitionContent =
      e.data.guaido.toLowerCase() === "y"
        ? `<div class='popupHeaderStyle'>${
            e.data.country
          }</div><div class='popupEntryStyle'>${
            e.data.country
          } recognizes Juan Guaidó as President</div>`
        : e.data.guaido.toLowerCase() === "n"
          ? `<div class='popupHeaderStyle'>${
              e.data.country
            }</div><div class='popupEntryStyle'>${
              e.data.country
            } recognizes Nicolás Maduro as President}</div>`
          : `<div class='popupHeaderStyle'>${
              e.data.country
            }</div><div class='popupEntryStyle'>unconfirmed</div>`;

    recognitionInfo.setContent(recognitionContent);
    recognitionInfo.openOn(map);
  }
});

recognitionLayer.on(carto.layer.events.FEATURE_OUT, function(featureEvent) {
  recognitionInfo.removeFrom(map);
});

client.addLayer(recognitionLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);
