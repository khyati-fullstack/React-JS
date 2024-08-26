import React, { Component } from 'react'

export default class Example3userefclass extends Component {
    constructor(){
        super();
        this.inputref = React.createRef();
    }
    handleClick = () => {
        this.inputref.current.style.color = "blue"
        this.inputref.current.readOnly = !this.inputref.current.readOnly;
        this.inputref.current.style.width = "300px"
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} placeholder='Enter Name' />
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
