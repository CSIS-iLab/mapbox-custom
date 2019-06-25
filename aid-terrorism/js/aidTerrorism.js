;(async function() {
  var newMap = makeMap({
    googleSheet: '1gG0m4xRVeBQ7eTypfZ0SQev_RxUK0uj_9IlyUqSev7c',
    mapID: 'aid-terrorism',
    formatPopupContent: function(feature, map) {
      var jsons = map.json
        .reduce(function(a, b) {
          return {
            type: 'FeatureCollection',
            features: a.features.concat(b.features)
          }
        })
        .features.map(function(f) {
          return f.properties
        })

      var countryData = jsons
        .filter(function(f) {
          return f.country === feature.properties.country
        })
        .reduce(function(a, b) {
          return {
            terrorism: a.terrorism ? a.terrorism : b.terrorism,
            foreign_assistance: a.foreign_assistance
              ? a.foreign_assistance
              : b.foreign_assistance
          }
        })

      var groups = '',
        assistance,
        terrorism = countryData.terrorism,
        aid = {
          e: '$100,000,000-$1,500,000,000',
          d: '$30,000,000-$99,000,000',
          c: '$2,000,000-$29,999,000',
          b: '$10,000-$1,999,000',
          a: '$0-$10,000'
        }

      if (terrorism.length) {
        groups = `<br><div class="popupHeaderStyle">Terrorist Groups</div>
        <ul>${terrorism
          .split('~')
          .map(function(group) {
            return `<li class='popupEntryStyle'>${group}</li>`
          })
          .join('')}</ul>`
      }

      assistance = aid[countryData.foreign_assistance]
        ? `<div class="popupHeaderStyle">Foreign Assistance: ${(assistance =
            aid[countryData.foreign_assistance])}</div>`
        : ''

      return `<div class="popupTitleStyle">${feature.properties.country}</div>
        ${assistance}      ${groups}`
    }
  })
})()
