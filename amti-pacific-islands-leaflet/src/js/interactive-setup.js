let i = 0

function interactiveSetup({ container, initialDesc, steps }) {
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
  if (steps && !window.isMobile) {
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
  } else {
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

  if (window.isMobile) {
    let scrollText = document.querySelector('.scroll__text')
    let step = scrollText.querySelector('.step')
    step.classList.add('is-active')
    let windowHeight = window.innerHeight
    scrollText.style.top = `-${(windowHeight / 6) * 5}px`

    document.querySelector('.navigator').addEventListener('click', e => {
      if (
        e.target.classList.contains('scroll-up') ||
        e.target.parentNode.classList.contains('scroll-up')
      ) {
        window.stepActions[--i].fly()
      } else if (
        e.target.classList.contains('scroll-down') ||
        e.target.parentNode.classList.contains('scroll-down')
      ) {
        window.stepActions[++i].fly()
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
  }

  load()
}

import L from 'mapbox.js'

const load = () => {
  let cssFiles = [
    'https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css'
    // 'https://csis-ilab.github.io/mapbox-custom/amti-pacific-islands/dist/main.css'
  ]

  cssFiles.forEach(file => {
    var head = document.head
    var link = document.createElement('link')

    link.rel = 'stylesheet'
    link.href = file

    head.appendChild(link)
    console.log('73')
  })

  console.log(L.mapbox)

  // .map('map', style, { scrollWheelZoom: false })

  L.mapbox.accessToken =
    'pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNqcHZvemptYzAzYnI0N3BodDg4NXBlOTUifQ.BbL7RBI4fzWi8Yi4t3imxg'

  window.map = L.mapbox
    .map('map', null, {
      accessToken: L.mapbox.accessToken,
      scrollWheelZoom: false
    })
    .setView([40, -74.5], 9)

  L.mapbox
    .styleLayer('mapbox://styles/ilabmedia/cjp1vsq4012qc2smt2prznr0i')
    .addTo(window.map)

  console.log(window.map)

  console.log(187)
  let resizeEvent = window.document.createEvent('UIEvents')
  resizeEvent.initUIEvent('resize', true, false, window, 0)
  window.dispatchEvent(resizeEvent)
}
export default interactiveSetup
