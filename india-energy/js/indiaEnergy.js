makeMap({
  googleAPIKey: 'AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg',
  googleSpreadsheetKey: '1xbXzCDqc2p_IlS3VQiicDybsA2KAeZY3rHPLD-9QaRY',
  googleSpreadsheetRange: "AllData",
  // googleSheet: '1xbXzCDqc2p_IlS3VQiicDybsA2KAeZY3rHPLD-9QaRY',
  mapID: 'india-energy',
  formatPopupContent: function formatPopupContent(feature, map) {
    var title =
      '<div class="popupTitleStyle">' + feature.properties.recipient + '</div>'

    var header = ''
    header +=
      '<div><span class="popupHeaderStyle">Project Type: </span><span class="popupEntryStyle">' +
      feature.properties.project_type +
      '</span></div>'
    header +=
      '<div><span class="popupHeaderStyle">Sector: </span><span class="popupEntryStyle">' +
      feature.properties.sector +
      '</span></div>'
    header +=
      '<div><span class="popupHeaderStyle">State: </span><span class="popupEntryStyle">' +
      feature.properties.state +
      '</span></div>'
    header +=
      '<div><span class="popupHeaderStyle">Agency: </span><span class="popupEntryStyle">' +
      feature.properties.agency +
      '</span></div>'
    header +=
      '<div><span class="popupHeaderStyle">Year: </span><span class="popupEntryStyle">' +
      feature.properties.year +
      '</span></div>'

    var description =
      '<div class="popupEntryStyle"><p>' +
      feature.properties.description +
      '</p></div>'

    return title + header + description
  }
})
