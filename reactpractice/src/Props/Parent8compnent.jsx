import React, { Component } from 'react'
import Child8component from './Child8component'

export default class Parent8compnent extends Component {
  render() {
    return (
      <div>
        <Child8component subject = "java" marks = "60"/>
      </div>
    )
  }
}
