(async function() {
  var map = await makeMap({
    googleSheet: "11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws",
    mapID: "africa",
    maxBounds: [[50, -40], [-50, 80]],
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
    }
  });
})();
