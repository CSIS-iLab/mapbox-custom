;(async function() {
  var newMap = await makeMap({
    googleSheet: '11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws',
    mapID: 'africa',
    formatPopupContent: function formatPopupContent(feature, map) {
      var description = feature.properties.description
        ? feature.properties.description +
          (feature.properties.link
            ? ' <a target="_blank" rel="noreferrer noopener" href="' +
              feature.properties.link +
              '"</a>' +
              feature.properties.link_title +
              externalLink +
              '</a>'
            : '')
        : ''

      return (
        '<div class="popupTitleStyle">' +
        feature.properties.port +
        '</div><div class="popupEntryStyle">' +
        feature.properties.port_city +
        ', ' +
        feature.properties.port_country +
        '</div><div class="popupHeaderStyle">Investment Type</div><ul class="popupEntryStyle">' +
        feature.properties.investment_type
          .split(',')
          .map(function(r) {
            return '<li>' + capitalize(r) + '</li>'
          })
          .join('') +
        '</ul>' +
        '<p>' +
        description +
        '</p>'
      )
    }
  })

  var chokepoint = L.divIcon({
    className: 'chokepoint-label',
    html: '<span>choke point</span>',
    iconAnchor: [-75, 7.5],
    iconSize: [20, 20]
  })

  new L.marker([12.586732432464062, 43.341064453125], {
    icon: chokepoint
  }).addTo(newMap.leaflet)

  document
    .querySelector(".toolbox input.ui[type='checkbox']")
    .removeAttribute('checked')
})()
