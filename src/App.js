import React, { Component } from 'react'
import './App.css'
import WorldMap from './WorldMap'
import BarChart from './BarChart'
import SteamGraph from './SteamGraph'
import worlddata from './worlddata.js'
import { range } from 'd3-array'
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

    const colorScale = scaleThreshold().domain([1, 10, 19, 25, 32])
      range(["#75739F", "#5EAFC6", "#41A368", "#93C464", '#FE9922'])
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rendering d3 examples with React!</h2>
        </div>
        <div>
          <WorldMap colorScale={colorScale} data={appdata} size={[800, 600]} />
          <BarChart colorScale={colorScale} data={appdata} size={[400, 400]} />
          <SteamGraph colorScale={colorScale} data={appdata} size={[1000, 250]} />
        </div>
        </div>
      )
  }
}

export default App

