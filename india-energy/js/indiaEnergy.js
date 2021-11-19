export async function energy() {
  var map = await makeMap({
    mapID: 'india-energy',
    center: [23, 87],
    fullscreen: true,
    zoom: 5,
    maxZoom: 9,
    minZoom: 5,
    clusterDistance: 15,
    Attribution:
      'Data by <a href="https://www.csis.org/programs/africa-program" target="_blank">CSIS Wadhwani Chair</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
    table: 'india_energy_map',
    apiKey: 'XuZes4-hrtVuvZJOc2OgPQ',
    program: 'Wadhwani Chair',
    website: 'https://www.csis.org/programs/wadhwani-chair-us-india-policy-studies',
    title: 'U.S.–India Energy Cooperation Project Tracker',
    description:  'One key area of cooperation between the United States and India is energy. This map shows U.S. government supported and private sector-led energy sector investments in India. Click on a project to learn more.',
    mapboxStyle: "cjxm34ucq1bc71couk73ytej7",
    'ocean color': '#b7c7d1',
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
    },

    zoomSlider: false,

    widgets: [{
      id: '0',
      field: "project_type",
      input: "checkbox",
      type: "color",
      keys: [
        {
          color: '#3969AC',
          value: "Financing",
          label: 'Financing',
          selected: true
        },
        {
          color: '#7F3C8D',
          value: "Joint Research",
          label: 'Joint Research',
          selected: true
        },
        {
          color: '#F2B701',
          value: "Feasibility Study",
          label: 'Feasibility Study',
          selected: true
        },
        {
          color: '#11A579',
          value: "Research Grant",
          label: 'Research Grant',
          selected: true
        },
        {
          color: '#E73F74',
          value: "Technical Assistance",
          label: 'Technical Assistance',
          selected: true
        },
      ],
    },
    {
      id: '1',
      field: "sector",
      input: "checkbox",
      type: "form",
      keys: [
        {
          value: "Public",
          label: 'Public',
          selected: true,
          form: 'shape'
        },
        {
          value: "Private",
          label: 'Private',
          selected: true,
          form: 'shape'
        },
      ]
      },
    ]
  })
}
