function interactiveSetup({ container, initialDesc, steps }) {
  let HTML = ''

  if (initialDesc) {
    HTML += `<div class="initial-step-desc">
              ${initialDesc}
              <div id="chevWrapper" style="display: block;">
                <a href="#step0">
                  <span id="chevron">»</span>
                  Scroll down
                </a>
              </div>
            </div>`
  }

  HTML += `<section id="scroll">
  <div class="scroll__graphic sticky">
    <div id="legend">
    <div class="popupHeaderStyle">Pacific Quad Members</div>
      <div class="legend-label label-base base-au">Australia</div>
      <div class="legend-label label-base base-fr">France</div>
      <div class="legend-label label-base base-nz">New Zealand</div>
      <div class="legend-label label-base base-us">United States</div>
      <div class="legend-label label-pact pact-nz">Pact w/New Zealand</div>
      <div class="legend-label label-pact pact-us">Pact w/United States</div>
    </div>


      <figure id="map" class="map chart chart-primary" style="height:100vh"></figure>


      <div id="scroll-progress">
        <a href="#1">
          <span class="scroll-icon"></span>
          <span class="scroll-current-page"></span>
          <span class="scroll-total-page"></span>
        </a>
      </div>

    </div>
`

  let lastStep = 0
  if (steps) {
    lastStep = steps.length - 1
    HTML += '<div class="scroll__text">'
    steps.forEach((step, i) => {
      let content = ''
      if (step.text) {
        content = `<div class="prose">
                    ${step.text}
                    <div id="chevWrapper" style="display: block;">
                      <a href="#step${i + 1}">
                        <span id="chevron">»</span>
                        Scroll down
                      </a>
                    </div>
                  </div>`
      }
      HTML += `<div class="step" data-step="${i}" id="step${i}">${content}</div>`
    })
    HTML += '</div>'
  }
  HTML += '</section>'
  HTML +=
    '<div class="phone-landscape-disclaimer">To view our interactive visualization please reorient your device or view on a desktop computer.</div>'
  container.innerHTML = HTML
  load()
}
import mapboxgl from 'mapbox-gl'

const load = () => {
  let cssFiles = [
    'https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css'
    // 'https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands/dist/main.css'
  ]

  cssFiles.forEach(file => {
    var head = document.head
    var link = document.createElement('link')

    link.rel = 'stylesheet'
    link.href = file

    head.appendChild(link)
  })

  mapboxgl.accessToken =
    'pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw'

  window.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ilabmedia/cjp1vsq4012qc2smt2prznr0i',
    center: [195, -11.9602541],
    zoom: 2,
    bearing: 0,
    pitch: 0,
    scrollZoom: false,
    attributionControl: false
  })

  var legend = document.querySelector('#legend')
  legend.addEventListener('mousedown', () => {
    console.log('Center', map.getCenter())
    console.log('Pitch', map.getPitch())
    console.log('Zoom', map.getZoom())
  })

  // let navHeight = document.querySelector('.navbar').offsetHeight
  //
  // if (navHeight) {
  //   document.querySelector('.scroll__graphic').style.top = `${navHeight}px`
  //
  //   document.querySelector(
  //     '.scroll__graphic'
  //   ).style.height = `calc(100vh - ${navHeight}px)`
  // }
}
export default interactiveSetup
