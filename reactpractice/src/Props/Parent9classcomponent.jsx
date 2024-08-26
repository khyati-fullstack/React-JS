import React, { Component } from 'react'
import Child9classcomponent from './Child9classcomponent'

export default class Parent9classcomponent extends Component {
  handleEvent = () => {
    alert ("hello")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>Click here</button>
        <Child9classcomponent myfun={this.handleEvent} subject = "JAVA"/>
      </div>
    )
  }
}
