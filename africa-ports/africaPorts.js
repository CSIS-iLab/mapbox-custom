(async function() {
  var map = await makeMap({
    googleSheet: "11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws",
    mapID: "africa",
    formatPopupContent: function(feature, map) {
      return (
        '<div class="popupTitleStyle">' +
        feature.properties.port +
        '</div><div class="popupEntryStyle">' +
        feature.properties.port_city +
        ", " +
        feature.properties.port_country +
        '</div><div class="popupHeaderStyle">Investment Type</div><ul class="popupEntryStyle">' +
        feature.properties.investment_type
          .split(",")
          .map(r => `<li>${capitalize(r)}</li>`)
          .join("") +
        "</ul>"
      );
    }
  });
})();
