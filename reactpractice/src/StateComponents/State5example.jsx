import React, { useState } from 'react'

export default function State5example() {
    const [bgcolor,setBgcolor] = useState ()

    const colorArray = ["blue", "pink" , "green" ,"gray" ,"yellow" ,"purple"]
    // blue = colorArray [0]

    const hadleEvent = () => {
        const indexRandom = Math.floor(Math.random()*colorArray.length) 
        console.log(indexRandom);
        setBgcolor(indexRandom)
    }
  return (
    <div style={{backgroundColor:colorArray[bgcolor]}}>
        <h1>Hello</h1>
        <button onClick={hadleEvent}>Random clr</button>
    </div>
  )
}
