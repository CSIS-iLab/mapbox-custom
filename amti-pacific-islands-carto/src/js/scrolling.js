import { selection, select, selectAll } from 'd3-selection'
import 'intersection-observer'
import scrollama from 'scrollama'
import breakpoints from './breakpoints'

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

    ScrollingControls.currentStep = response.index
    ScrollingControls.progress_current.text(ScrollingControls.currentStep + 2)
    ScrollingControls.progress_link.node().href =
      '#step' + (ScrollingControls.currentStep + 1)

    if (ScrollingControls.stepActions[ScrollingControls.currentStep + 1]) {
      ScrollingControls.stepActions[ScrollingControls.currentStep + 1].fly()
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

export default scrollInit
