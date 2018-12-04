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
    let windowHeight = window.innerHeight
    let siteHeader = document.getElementById('masthead')
    let topOffset = 0
    if (siteHeader && !breakpoints.isMobile()) {
      topOffset = siteHeader.offsetTop + siteHeader.offsetHeight
      ScrollingControls.graphic.style('top', topOffset + 'px')
      ScrollingControls.filters.style('top', topOffset + 'px')
      windowHeight = windowHeight - topOffset
    }

    ScrollingControls.graphic.style('height', windowHeight + 'px')
    ScrollingControls.chart.style('height', windowHeight + 'px')

    var stepHeight = Math.floor(window.innerHeight)
    ScrollingControls.step.style('height', stepHeight + 'px')

    ScrollingControls.scroller.resize()
  },
  handleStepEnter(response) {
    ScrollingControls.step.classed('is-active', function(d, i) {
      return i === response.index
    })

    currentStep = response.index
    if (window.map.getSource('point')) {
      animateMarker(0)
    }
    ScrollingControls.progress_current.text(currentStep + 2)
    ScrollingControls.progress_link.node().href = '#step' + (currentStep + 1)

    if (ScrollingControls.stepActions[currentStep + 1]) {
      ScrollingControls.stepActions[currentStep + 1].fly()
    }
  },
  handleStepExit(response) {
    if (
      ScrollingControls.stepActions[ScrollingControls.currentStep] &&
      response.direction == 'up'
    ) {
      // ScrollingControls.stepActions[ScrollingControls.currentStep].exit()

      if (response.index == 0) {
        ScrollingControls.progress_current.text(
          ScrollingControls.currentStep + 1
        )
      }
    }

    if (
      response.index == ScrollingControls.stepActions.length - 1 &&
      response.direction == 'down'
    ) {
      ScrollingControls.stepActions[response.index].endInteractive()
    }
  },
  init() {
    this.container = select('#scroll')
    this.graphic = this.container.select('.scroll__graphic')
    this.chart = this.graphic.select('.chart')
    this.text = this.container.select('.scroll__text')
    this.filters = this.container.select('#filters')
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
        offset: 1,
        debug: false
      })
      .onStepEnter(this.handleStepEnter)
      .onStepExit(this.handleStepExit)

    this.progress_link.node().href = '#step' + this.currentStep
    this.progress_current.text(this.currentStep + 1)
    this.total_pages.text('/' + (this.stepActions.length + 1))

    window.addEventListener('resize', this.handleResize)
  }
}

function scrollInit(args) {
  ScrollingControls.stepActions = args.stepActions
  ScrollingControls.init()
}
let framesPerSecond = 30,
  initialRadius = 8,
  radius = initialRadius,
  maxRadius = 18,
  initialOpacity = 1,
  opacity = initialOpacity

function animateMarker(timestamp) {
  setTimeout(function() {
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
  }, 1000 / framesPerSecond)

  let atTop = currentStep + 1 === 0

  let atBottom = currentStep + 1 === ScrollingControls.stepActions.length

  if (ScrollingControls.stepActions[currentStep + 1].name.includes('China')) {
    window.map.setPaintProperty('point', 'circle-color', '#ff0')
    window.map.setPaintProperty('point1', 'circle-color', '#ff0')
    window.map.setPaintProperty('point1', 'circle-stroke-color', '#ff0')
  } else {
    window.map.setPaintProperty('point', 'circle-color', 'transparent')
    window.map.setPaintProperty('point1', 'circle-color', 'transparent')
    window.map.setPaintProperty('point1', 'circle-stroke-color', 'transparent')
  }

  window.map.getSource('point').setData(pointOnCircle(timestamp / 1000))
}

function pointOnCircle() {
  //turn into function that returns array of animated points?
  return {
    type: 'Point',
    coordinates: ScrollingControls.stepActions[currentStep + 1].center
  }
}

export default scrollInit
