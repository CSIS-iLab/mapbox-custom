import { selection, select, selectAll } from 'd3-selection'
import 'intersection-observer'
import scrollama from 'scrollama'
import breakpoints from './breakpoints'

let currentStep, map

const ScrollingControls = {
  scroller: scrollama(),
  currentStep: 0,
  stepActions: null,

  handleResize() {
    let windowHeight = window.innerHeight,
      siteHeader = document.querySelector('.navbar'),
      scrollText = document.querySelector('.scroll__text'),
      topOffset = 0

    if (siteHeader) {
      topOffset = siteHeader.offsetTop + siteHeader.offsetHeight
      ScrollingControls.graphic.style('top', topOffset + 'px')
      windowHeight = windowHeight - topOffset
    }

    ScrollingControls.graphic.style('height', windowHeight + 'px')
    ScrollingControls.chart.style('height', windowHeight + 'px')

    var stepHeight = Math.floor(windowHeight) + topOffset + 100
    ScrollingControls.step.style('height', stepHeight + 'px')

    scrollText.style.top = `-${windowHeight}px`

    ScrollingControls.scroller.resize()
  },
  handleStepEnter(response) {
    ScrollingControls.step.classed('is-active', function(d, i) {
      return i === response.index
    })

    if (!window.isIE && window.map.getSource('point')) {
      animateMarker(0)
    }

    ScrollingControls.currentStep = response.index

    ScrollingControls.progress_current.text(currentStep)
    ScrollingControls.progress_link.node().href = '#step' + currentStep

    if (ScrollingControls.stepActions[currentStep]) {
      if (currentStep < response.index) {
        ScrollingControls.stepActions[currentStep + 1].fly()
      } else if (currentStep > response.index) {
        ScrollingControls.stepActions[currentStep - 1].fly()
      }
    }

    currentStep = response.index
  },

  init() {
    this.container = select('#scroll')
    this.graphic = this.container.select('.scroll__graphic')
    this.chart = this.graphic.select('.chart')
    this.text = this.container.select('.scroll__text')
    this.step = this.text.selectAll('.step')
    this.progress_link = select('#scroll-progress a')
    this.progress_current = select('#scroll-progress .scroll-current-page')
    this.total_pages = select('#scroll-progress .scroll-total-page')

    this.handleResize()

    this.scroller
      .setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        offset: 0.5,
        threshold: 10
      })
      .onStepEnter(this.handleStepEnter)
      .onStepExit(this.handleStepEnter)

    this.progress_link.node().href = '#step' + this.currentStep
    this.progress_current.text(this.currentStep)
    this.total_pages.text('/' + (this.stepActions.length + 1))

    window.addEventListener('resize', this.handleResize)
  }
}

function scrollInit(args) {
  ScrollingControls.stepActions = args.stepActions
  ScrollingControls.init()
}
let framesPerSecond = 12,
  initialRadius = 8,
  radius = initialRadius,
  maxRadius = 32,
  initialOpacity = 1,
  opacity = initialOpacity,
  timer

function animateMarker(timestamp) {
  if (currentStep) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(function() {
      requestAnimationFrame(animateMarker)

      radius += (maxRadius - radius) / framesPerSecond
      opacity -= 0.9 / framesPerSecond
      opacity = Math.max(0, opacity)

      window.map.setPaintProperty('point', 'circle-radius', radius)
      window.map.setPaintProperty('point', 'circle-opacity', opacity)

      if (opacity <= 0) {
        radius = initialRadius
        opacity = initialOpacity
      }
    }, 500 / framesPerSecond)

    let atTop = currentStep === 0

    let atBottom = currentStep === ScrollingControls.stepActions.length

    if (ScrollingControls.stepActions[currentStep].name.includes('China')) {
      window.map.setPaintProperty('point', 'circle-color', '#ff0')
      window.map.setPaintProperty('point1', 'circle-color', '#ff0')
    } else {
      window.map.setPaintProperty('point', 'circle-color', 'transparent')
      window.map.setPaintProperty('point1', 'circle-color', 'transparent')
    }

    window.map.getSource('point').setData(pointOnCircle(timestamp / 1000))
  }
}

function pointOnCircle() {
  let chinaInterests = [
    [167.188, -15.51494],
    [-172.008333, -13.829722],
    [145.809917, -5.073056],
    [147.371944, -2.040278],
    [146.99655, -6.741072],
    [177.485278, -17.760556],
    [-175.197194, -21.131056],
    [-158.12, -19.967778]
  ]

  let chinaStep = currentStep - 5

  let thisStep = ScrollingControls.stepActions[currentStep]

  let coords = thisStep.name.includes('China')
    ? chinaInterests[chinaStep]
    : thisStep.center

  return {
    type: 'Point',
    coordinates: [coords[0], coords[1]]
  }
}

export default scrollInit
