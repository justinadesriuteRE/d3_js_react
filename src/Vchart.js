import React, { Component } from 'react'
import './App.css'
// import { scaleLinear } from 'd3-scale'
// import { max } from 'd3-array'
import { select } from 'd3-selection'

class Vchart extends Component {
  constructor(props){
    super(props)
      this.createVchart = this.createVchart.bind(this)
  }

  componentDidMount() {
    this.createVchart()
  }

  componentDidUpdate() {
    this.createVchart()
  }

  createVchart() {
    const node = this.node

        var width = 600;
        var height = 400;
        var data = [10, 15, 20, 25];
        var colors = ['orange', 'purple', 'yellow', 'green'];

        select(node)
            .select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("padding", 50);

        var g = select(node).selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                return "translate(0,0)";
        })

        g.append("circle").attr("cx", function(d, i) {
            return i*75 + 90;
        })

        .attr("cy", function(d, i) {
            return 75;
        })

        .attr("r", function(d) {
            return d*1.5;
        })

        .attr("fill", function(d, i){
            return colors[i];
        })

        g.append("text").attr("x", function(d, i) {
            return i * 75 + 85;
        })
            .attr("y", 80)
            .attr("stroke", "black")
            .attr("font-size", "10px")
            .attr("font-family", "sans-serif").text(function(d) {
                return d;
        });
  }

  render() {
      return <svg ref={node => this.node = node}
          width={500} height={200}>
    </svg>
  }
}

export default Vchart
