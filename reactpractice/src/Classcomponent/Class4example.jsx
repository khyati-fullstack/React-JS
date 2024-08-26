import React, { Component } from 'react'

export default class Class4example extends Component {
    constructor(){
        super();
        this.state ={
            bg : false,
            color : false
        }
    }
    changeColor = () => {
        this.setState({
            color : !this.state.color,
            bg : !this.state.bg
        
        })
    }
  render() {
    return (
        <div>
      <div style={{backgroundColor : this.state.bg ? "blue" : "red", width : "20%", height:"50px"}}>
        <h1 style={{color : this.state.color ? "red" : "blue"}}>Khyati</h1>
      </div>
    <button onClick = {this.changeColor}>color</button>
    </div>

    )
  }
}
