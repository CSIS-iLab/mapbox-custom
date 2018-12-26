let i = 0

function interactiveSetup({ container, initialDesc, steps }) {
  let cssFiles = [
    'https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css',
    'https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css',
    'https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands/dist/main.css'
  ]

  cssFiles.forEach(file => {
    let head = document.head
    let cssLink = document.createElement('link')

    cssLink.rel = 'stylesheet'
    cssLink.href = file

    head.appendChild(cssLink)
  })

  let HTML = ''

  HTML += `<section id="scroll">
  <div class="scroll__graphic sticky">
    <div id="legend">
    <div class="popupHeaderStyle">Pacific Military Powers</div>
      <div class="legend-label label-base base-au">Australia</div>
      <div class="legend-label label-base base-fr">France</div>
      <div class="legend-label label-base base-nz">New Zealand</div>
      <div class="legend-label label-base base-us">United States</div>
      <div class="legend-label label-pact pact-nz">Free Assoc. with NZ</div>
      <div class="legend-label label-pact pact-us">Free Assoc. with US</div>
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
  if ((!window.isIE && window.isMobile) || window.isIE) {
    lastStep = steps.length - 1
    HTML += '<div class="scroll__text">'
    steps.forEach((step, i) => {
      let content = ''
      if (step.text) {
        content = `<div class="prose">
        ${
          i > 0
            ? `<div id="chevWrapper">
          <a href="#step${i - 1}">
             <span id="chevron-up">»</span>
            &nbsp;Scroll up
          </a>
          </div>`
            : ``
        }

                    ${
                      i === 0
                        ? `${
                            step.text
                          }<p><strong>Scroll</strong> to continue or <a href="#toc-0"><strong>click</strong></a> to jump to the analysis.</p>`
                        : step.text
                    }
                    ${
                      i !== lastStep
                        ? `<div id="chevWrapper">
                      <a href="#step${i + 1}">
                         <span id="chevron-down">»</span>
                        &nbsp;Scroll down
                      </a>
                      </div>`
                        : ``
                    }
                  </div>`
      }
      HTML += `<div class="step" data-step="${i}" id="step${i}">${content}</div>`
    })
    HTML += '</div>'
  } else if (!window.isIE && !window.isMobile) {
    HTML += '<div class="scroll__text">'

    let content = `<div class="prose">
        <div class="text">
          ${steps[i].text}
        </div>

            <div class="navigator">
              ${
                !i === 0
                  ? `<button class="scroll-up" aria-label="scroll-up"><span class="text">scroll up</span><span class="symbol">Previous</span></button>`
                  : ``
              }
              ${
                i !== steps.length - 1
                  ? `<button class="scroll-down" aria-label="scroll-down"><span class="text">scroll down</span><span class="symbol">Next</span></button>`
                  : ``
              }
            </div>

    </div>`

    HTML += `<div class="step" data-step="${i}" id="step${i}">${content}</div>`

    HTML += '</div>'
  }

  HTML += '</section>'
  HTML +=
    '<div class="phone-landscape-disclaimer">To view our interactive visualization please reorient your device or view on a desktop computer.</div>'
  container.innerHTML = HTML

  let scrollText = document.querySelector('.scroll__text'),
    step = scrollText.querySelector('.step'),
    windowHeight = window.innerHeight

  if (!window.isIE && !window.isMobile) {
    step.classList.add('is-active')
    scrollText.style.top = `-${windowHeight / 4}px`
    scrollText.style.overflow = `hidden`
    scrollText.style.position = `absolute`
    scrollText.style.right = `calc(100vw - 100%)`
    document.querySelector('#scroll').style.overflow = `hidden`

    document.querySelector('.navigator').addEventListener('click', e => {
      if (
        e.target.classList.contains('scroll-up') ||
        e.target.parentNode.classList.contains('scroll-up')
      ) {
        window.stepActions[--i].fly()
        window.currentStep--
      } else if (
        e.target.classList.contains('scroll-down') ||
        e.target.parentNode.classList.contains('scroll-down')
      ) {
        window.stepActions[++i].fly()
        window.currentStep++
      }

      if (!window.isIE && window.map.getSource('point')) {
        window.animateMarker(0)
      }

      step.querySelector('.text').innerHTML = window.stepActions[i].text

      let first = i === 0

      let last = i == steps.length - 1

      step.querySelector('.navigator').innerHTML = `${
        first
          ? `<button class="scroll-down" aria-label="scroll-down"><span class="text">scroll down</span><span class="symbol">Next</span></button>`
          : ``
      }
        ${
          last
            ? `<button class="scroll-up" aria-label="scroll-up"><span class="text">scroll up</span><span class="symbol">Previous</span></button>`
            : ``
        }

        ${
          !first && !last
            ? `<button class="scroll-up" aria-label="scroll-up"><span class="text">scroll up</span><span class="symbol">Previous</span></button>
            <button class="scroll-down" aria-label="scroll-down"><span class="text">scroll down</span><span class="symbol">Next</span></button>`
            : ``
        }
      `
    })
  } else {
    scrollText.style.top = `-${windowHeight}px`
    document.querySelector('#legend').style.position = 'relative'

    if (!window.isMobile) {
      scrollText.style.right = `calc(100vw - 160%)`
    }
  }

  load()
}
import mapboxgl from 'mapbox-gl'
import L from 'mapbox.js'
import Stickyfill from 'stickyfilljs'
import { polyfill } from 'es6-promise'
polyfill()

const load = () => {
  if (window.isIE) {
    L.mapbox.accessToken =
      'pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNqcHZvemptYzAzYnI0N3BodDg4NXBlOTUifQ.BbL7RBI4fzWi8Yi4t3imxg'

    window.map = L.mapbox.map('map', null, {
      accessToken: L.mapbox.accessToken,
      scrollWheelZoom: false
    })

    L.mapbox
      .styleLayer('mapbox://styles/ilabmedia/cjp1vsq4012qc2smt2prznr0i')
      .addTo(window.map)

    let elements = document.querySelectorAll('.sticky')
    Stickyfill.add(elements)
  } else {
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
      attributionControl: false,
      dragPan: window.isMobile ? false : true
    })
  }

  var legend = document.querySelector('#legend')
  legend.addEventListener('mousedown', () => {
    console.log('Center', map.getCenter())
    console.log('Pitch', map.getPitch())
    console.log('Zoom', map.getZoom())
  })

  let resizeEvent = window.document.createEvent('UIEvents')
  resizeEvent.initUIEvent('resize', true, false, window, 0)
  window.dispatchEvent(resizeEvent)
}
export default interactiveSetup
