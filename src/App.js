import React, { Component } from 'react'
import './App.css'
import WorldMap from './WorldMap'
import BarChart from './BarChart'
import Vchart from './Vchart'
import worlddata from './worlddata.js'
import { range, sum } from 'd3-array'
import { scaleThreshold } from 'd3-scale'
import { geoCentroid } from 'd3-geo'

const appdata = worlddata.features.filter(d => geoCentroid(d)[0] < -20)

appdata
    .forEach((d, i) => {
        const offset = Math.random()
      d.launchday = i
        d.data = range(30).map((p, q) =>
            q < i ? 0 : Math.random() * 2 + offset)
    })

class App extends Component {
  render() {

    const colorScale = scaleThreshold().domain([5, 10, 20, 30])
      range(["#75739F", "#5EAFC6", "#41A368", "#93C464"])
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rendering d3 examples with React!
          </h2>
        </div>
        <div>
            <WorldMap colorScale={colorScale} data={appdata} size={[800, 600]} />
            <BarChart data={[10, 20, 40, 50, 65, 80]} size={[30, 200]} />
            <Vchart />
        </div>
        </div>
      )
  }
}

export default App

