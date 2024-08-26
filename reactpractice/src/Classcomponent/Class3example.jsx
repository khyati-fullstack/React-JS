import React, { Component } from 'react'

export default class Class3example extends Component {
    constructor(){
        super()
            this.state= {
                name : "Khyati",
                count : 10

            }
        }
        handlePlus = () => {
            this.setState({
                count : this.state.count + 1
            })
        }
        handleMinus = () => {
            this.setState({
                count : this.state.count - 1
            })
        }
    
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handlePlus}>Plus</button>
        <button onClick={this.handleMinus}>Minus</button>

      </div>
    )
  }
}
