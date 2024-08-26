import React, { Component } from 'react'

export default class Class2example extends Component {
    constructor(){
        super(); // we are calling parent class (component) comstructor
        this.state= {
            // variable define here
            number : 10 // initliztion
        }
    }
  render() {
    return (
      <div>
        <h1>Number = {this.state.number}</h1>
      </div>
    )
  }
}
