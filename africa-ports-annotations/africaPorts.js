;(async function() {
  var map = await makeMap({
    googleSheet: '11hN6uzXcO7amn5bT-a09T8oEvgrw7lZ-oBfGtLRzpws',
    mapID: 'africa'
  })

  var svg = d3.select(map.leaflet.getPanes().overlayPane).append('svg'),
    g = svg.append('g').attr('class', 'leaflet-zoom-hide')

  svg.style('overflow', 'visible')
  var json = map.json[2]
  var transform = d3.geoTransform({ point: projectPoint }),
    path = d3.geoPath().projection(transform)

  var annotation = d3
    .annotation()
    .annotations(
      json.features.map(d => {
        var coords = d.geometry.coordinates
        var point = map.leaflet.latLngToLayerPoint(
          new L.LatLng(coords[1], coords[0])
        )

        return {
          data: d,
          dx: point.x > 450 ? 50 : -50,
          dy: point.y > 350 ? 25 : -25,
          note: {
            title: d.properties.port,
            label: d.properties.port_city + ', ' + d.properties.port_country,
            wrap: 150
          },
          type: d3.annotationCallout
        }
      })
    )
    .accessors({
      x: function(d) {
        var coords = d.geometry.coordinates
        var point = map.leaflet.latLngToLayerPoint(
          new L.LatLng(coords[1], coords[0])
        )

        return point.x
      },
      y: function(d) {
        var coords = d.geometry.coordinates
        var point = map.leaflet.latLngToLayerPoint(
          new L.LatLng(coords[1], coords[0])
        )
        return point.y
      }
    })

  var feature = g
    .selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('class', 'points')
    .style('opacity', 0)

  var annotations = g
    .append('g')
    .attr('class', 'annotations')
    .call(annotation)

  annotations.style('opacity', 0)

  annotations.selectAll('.annotation-note-label').attr('y', function(d) {
    return (
      d._type.note
        .select('.annotation-note-title')
        .node()
        .getBBox().height - 10
    )
  })

  annotations.selectAll('.annotation-note text').style('font-size', '10px')
  // .style("opacity", 0.25)
  //
  // annotations.selectAll(".note-line").style("opacity", 0.25);
  // annotations.selectAll(".connector").style("opacity", 0.25);

  // Reposition the SVG to cover the features.
  var topLeft, bottomRight
  function reset() {
    bounds = path.bounds(json)
    topLeft = bounds[0]
    bottomRight = bounds[1]

    svg
      .attr('width', bottomRight[0] - topLeft[0])
      .attr('height', bottomRight[1] - topLeft[1])
      .style('left', topLeft[0] + 'px')
      .style('top', topLeft[1] + 'px')

    g.attr('transform', 'translate(' + -topLeft[0] + ',' + -topLeft[1] + ')')

    feature.attr('d', path)

    annotation.updatedAccessors()
  }

  // Use Leaflet to implement a D3 geometric transformation.
  function projectPoint(x, y) {
    var point = map.leaflet.latLngToLayerPoint(new L.LatLng(y, x))
    return this.stream.point(point.x, point.y)
  }

  var width = +svg.attr('width'),
    height = +svg.attr('height')

  var simulation = d3
    .forceSimulation()
    .force('charge', d3.forceManyBody().strength(100))
    .force('center', d3.forceCenter(width * 2, height * 1))

  var collide = d3
    .bboxCollide(a => {
      return [
        [a.offsetCornerX - 5, a.offsetCornerY - 10],
        [a.offsetCornerX + a.width + 5, a.offsetCornerY + a.height + 5]
      ]
    })
    .strength(0.5)
    .iterations(1)

  var box = d3.selectAll('.annotation-note')
  simulation.nodes(box).on('end', function() {
    const noteBoxes = annotation.collection().noteNodes

    d3.forceSimulation(noteBoxes)
      .force(
        'x',
        d3
          .forceX(a => a.positionX)
          .strength(a =>
            Math.max(0.25, Math.min(3, Math.abs(a.x - a.positionX) / 20))
          )
      )
      .force(
        'y',
        d3
          .forceY(a => a.positionY)
          .strength(a =>
            Math.max(0.25, Math.min(3, Math.abs(a.x - a.positionX) / 20))
          )
      )
      .force('collision', collide)
      .alpha(0.5)
      .on('tick', d => {
        annotation.annotations().forEach((d, i) => {
          const match = noteBoxes[i]
          d.dx = match.x - match.positionX
          d.dy = match.y - match.positionY
        })

        annotation.update()
      })
    annotations.style('opacity', 0.5)
  })

  reset()
  map.leaflet.on('viewreset', reset)
  map.leaflet.on('zoomend', reset)

  var tipg = g.append('g').attr('class', 'annotation-tip')

  function tip(d) {
    var annotationtip = d3
      .annotation()
      .type(d3.annotationCalloutCircle)
      .annotations(
        [d].map(d => {
          var coords = d.geometry.coordinates
          var point = map.leaflet.latLngToLayerPoint(
            new L.LatLng(coords[1], coords[0])
          )

          return {
            data: d,
            dx: point.x > 450 ? 50 : -50,
            dy: point.y > 350 ? 25 : -25,
            note: {
              title: d.properties.port,
              label: d.properties.port_city + ', ' + d.properties.port_country,
              wrap: 150
            },
            type: d3.annotationCallout
          }
        })
      )
      .accessors({
        x: function(d) {
          var coords = d.geometry.coordinates
          var point = map.leaflet.latLngToLayerPoint(
            new L.LatLng(coords[1], coords[0])
          )

          return point.x
        },
        y: function(d) {
          var coords = d.geometry.coordinates
          var point = map.leaflet.latLngToLayerPoint(
            new L.LatLng(coords[1], coords[0])
          )
          return point.y
        }
      })
    tipg.call(annotationtip)

    tipg.selectAll('text').style('fill', 'black')

    tipg.selectAll('path').style('stroke', 'black')
  }
  svg.on('mousemove', function() {
    if (!voronoi)
      var voronoi = d3
        .voronoi()
        .x(function(d) {
          var coords = d.geometry.coordinates
          var point = map.leaflet.latLngToLayerPoint(
            new L.LatLng(coords[1], coords[0])
          )

          return point.x
        })
        .y(function(d) {
          var coords = d.geometry.coordinates
          var point = map.leaflet.latLngToLayerPoint(
            new L.LatLng(coords[1], coords[0])
          )

          return point.y
        })(json.features)

    var m = d3.mouse(this)
    var f = voronoi.find(
      m[0] + topLeft[0],
      m[1] + topLeft[1],
      100 /* voronoi radius */
    )
    if (f) {
      tip(f.data)
    } else {
      tipg.selectAll('.annotation-tip').remove()
    }
  })
})()
