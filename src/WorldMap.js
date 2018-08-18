import React, { Component } from 'react'
import './App.css'
import worlddata from './worlddata.js'
import { geoMercator, geoPath } from 'd3-geo'

class WorldMap extends Component {
  render() {
    const projection = geoMercator()
    .scale(100)
    .translate([430,250])
    const pathGenerator = geoPath().projection(projection)
    // console.log('worlddata.features', worlddata.features);
    // const launchday = worlddata.features.filter(country => country.launchday > 0)
    // console.log('launchday', launchday);
    const countries = worlddata.features
      .map((d,i) => <path
        key={"path" + i}
          d={pathGenerator(d)}
          style={{ fill: this.props.colorScale(d.launchday), stroke: "black", strokeOpacity: 0.5 }}
        className="countries"
        />)
      return <svg width={this.props.size[0]} height={this.props.size[1]}>
      {countries}
    </svg>
  }
}

export default WorldMap
