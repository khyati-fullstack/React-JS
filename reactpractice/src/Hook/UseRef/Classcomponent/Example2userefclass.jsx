import React, { Component } from 'react'

export default class Example2userefclass extends Component {
    constructor(){
        super();
        this.namefiled = React.createRef()
        this.setState={
            name : ""
        }
    }
    handleSave=()=>{
        if(this.namefiled.current.value.length < 4){
            alert("Name must be 4 character requird")
        }
        else{
            console.log("All ok");
            this.setState({name : this.namefiled.current.value})
        }
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.namefiled} placeholder='Enetr Name'/>
        <button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}
