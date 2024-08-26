import React, { useState } from 'react'

export default function Changeclr() {
    let [bgcolor,setBgcolor] = useState ("white")
    // let [color,setColor] = useState ("gray")
  return (
    <div >
        <div style={{backgroundColor : bgcolor}}>
        <h1>Hello !</h1>
        </div>
        <div style={{padding : "10px 0px"}}>
        <button onClick={() => setBgcolor("gray")}style={{padding : "10px" , margin : "5px"}}>Gray</button>
        <button onClick={() => setBgcolor("pink")}style={{padding : "10px" , margin : "5px"}}>Pink</button>
        <button onClick={() => setBgcolor("green")}style={{padding : "10px" , margin : "5px"}}>Green</button>
        <button onClick={() => setBgcolor("yellow")}style={{padding : "10px" , margin : "5px"}}>Yellow</button>
        <button onClick={() => setBgcolor("blue")}style={{padding : "10px" , margin : "5px"}}>Blue</button>
        </div>
    </div>
  )
}
