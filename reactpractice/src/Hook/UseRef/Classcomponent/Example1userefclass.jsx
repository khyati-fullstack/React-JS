import React, { Component } from 'react'

export default class Example1userefclass extends Component {
  constructor(){
    super();
    this.inputRef = React.createRef();
  }
  handleButton = ()=> {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}  placeholder='Enter Name'/>
        <button onClick={this.handleButton}>Click</button>
      </div>
    )
  }
}
