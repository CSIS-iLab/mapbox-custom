var basemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/ilabmedia/cjrawc1zs2bzc2sq3y9wvt22t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  {}
);

var map = L.map("map", {
  center: [50, 0],
  zoom: 2,
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

var electionSQL = new carto.source.SQL("SELECT * FROM guaido_recognition");

let baseStyle = `
  ::outline {
    line-color: #fff;
    line-width: 1;
    polygon-fill: ramp([guaido],(#f4da97,#5cc181,transparent),("true","false"),"=");

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
    text-opacity: ramp([guaido],(1,1,0),("true","false"),"=");
    text-halo-opacity: ramp([guaido],(1,1,0),("true","false"),"=");
    text-allow-overlap: false;
    text-placement: point;
    text-placement-type: dummy;
  }
`;

var electionStyle = new carto.style.CartoCSS(baseStyle);

var electionLayer = new carto.layer.Layer(electionSQL, electionStyle, {
  featureOverColumns: ["guaido", "country"]
});

var electionInfo = L.popup({ closeButton: false });

electionLayer.on(carto.layer.events.FEATURE_OVER, function(e) {
  if (e.data.guaido !== null) {
    electionInfo.setLatLng(e.latLng);

    electionInfo.setContent(
      "<div class='popupHeaderStyle'>" +
        e.data.country +
        "</div><div class='popupEntryStyle'>" +
        `${
          e.data.guaido
            ? `${e.data.country} recognized the results`
            : `${e.data.country} rejected the results`
        }` +
        "</div>"
    );

    electionInfo.openOn(map);
  }
});

client.addLayer(electionLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);
