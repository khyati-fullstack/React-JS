import React, { Component } from 'react'

export default class Child9classcomponent extends Component {
  render() {
    let {myfun , subject} = this.props
    return (
      <div>
        <h1>{subject}</h1>
      </div>
    )
  }
}
