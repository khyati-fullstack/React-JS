import React, { useState } from 'react'

export default function Bulbimg() {
    let [isvisible, setVisible] = useState (false)
    let [onoff , setOnoff] = useState (false)

    let img1 = "bulbimg1.jpg"
    let img2 = "bulbimg2.jpg"
    let hadleEvent = () => {
        setVisible(!isvisible)
        setOnoff(!onoff)
    }

  return (
    <div>
        {
            isvisible 
            ?
            <img src={img1} alt="" style={{height : "150px"}}/> 
            :
            <img src={img2} alt="" style={{height : "150px"}}/>
        }
        <br />
        {
            onoff
            ?
            <button onClick={hadleEvent} style={{padding : "5px 30px", fontSize : "20px"}}>ON</button>
            :
            <button onClick={hadleEvent} style={{padding : "5px 30px", fontSize : "20px"}}>OFF</button>
        }
    </div>
  )
}
