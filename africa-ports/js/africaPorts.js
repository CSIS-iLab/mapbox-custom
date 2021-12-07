'use strict'

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args)
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }
      _next(undefined)
    })
  }
}

_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var newMap, chokepoint
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2
            return makeMap({
              mapID: 'africa',
    center: [-5, 40],
    fullscreen: true,
    zoom: 4,
    maxZoom: 6,
    minZoom: 3,
    zoomSlider: false,
    clusterDistance: 15,
    Attribution:
      'Data by <a href="https://www.csis.org/programs/africa-program" target="_blank">CSIS Africa Program</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
    table: 'africa_ports',
    apiKey: 'ED7zNVPForUJEfIMdXnZyQ',
    program: 'Africa Program',
    website: 'https://www.csis.org/programs/africa-program',
    title: 'Chinese Port Investments in Africa',
    description: 'The CSIS Africa Program identified sub-Saharan African ports with financial, construction, and or operational involvement by Chinese entities.  While the expansion of ports is key to economic development, these investments also provide China with access to achieve varying strategic objectives. Mapping the spread and scope of Chinese port projects provides clarity on which investments are the most susceptible to Chinese influence, as well as their geostrategic and commercial importance.',
    mapboxStyle: "cjvii04q60c881cpj9iph9ibw",
    'ocean color': '#b7c7d1',
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
              },
              widgets: [
                {
                  id: '1',
                  field: "maritime_routes",
                  input: "checkbox",
                  type: "color",
                  keys: [
                    {
                      color: '#000',
                      value: "major",
                      label: 'Major',
                      selected: true,
                      form: 'line'
                    },
                    {
                      color: '#ddd',
                      value: "other",
                      label: 'Other',
                      selected: true,
                      form: 'line'
                    },
                    {
                      color: '#39a4ac',
                      value: 'Maritime Silk Road',
                      label: 'Maritime Silk Road',
                      selected: true,
                      form: 'line'
                    },
                  ],
                },
            
                {
                  id: '0',
                  field: "investment_type",
                  input: "checkbox",
                  type: "form",
                  keys: [
                    {
                      value: 'builder',
                      label: 'Builder',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/building.svg'
                    },
                    {
                      value: 'operator',
                      label: 'Operator',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/operating.svg'
                    },
                    {
                      value: 'funder',
                      label: 'Funder',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/funding.svg'
                    },
                    {
                      value: 'builder,operator',
                      label: 'Builder and Operator',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/BuildingOperating.svg'
                    },
                    {
                      value: 'operator,funder',
                      label: 'Operator and Funder',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/FundingOperating.svg'
                    },
                    {
                      value: 'funder,builder',
                      label: 'Funder and Builder',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/FundingBuilding.svg'
                    },
                    {
                      value: 'funder,builder,operator',
                      label: 'Funder, Builder and Operator',
                      selected: true,
                      form: 'icon',
                      icon: 'icons/FundingBuildingOperating.svg'
                    },          
                  ],
                },
            
            
            
              ]

            })

            

          case 2:
            newMap = _context.sent
            chokepoint = L.divIcon({
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

          case 6:
          case 'end':
            return _context.stop()
        }
        
      }
    }, _callee)
  })
)()
