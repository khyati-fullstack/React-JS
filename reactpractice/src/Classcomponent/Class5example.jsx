import React, { Component } from 'react'

export default class Class5example extends Component {
    constructor(){
        super();
        this.state ={
            isvisible : true
        }
    }
    handleEvent = () => {
        this.setState({isvisible : !this.state.isvisible})
    }
  render() {
    return (
      <div>
        {this.state.isvisible ? 
        <h1>hey</h1> :
        <h1>hiii</h1>
    }
        <button onClick={this.handleEvent}>Click Here</button>
      </div>
    )
  }
}
