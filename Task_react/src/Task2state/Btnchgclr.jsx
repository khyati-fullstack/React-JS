import React, { useState } from 'react'

export default function Btnchgclr() {
    let [btnbg, setBtnbg] = useState ()
    let [btntxt , setBtntxt] = useState ()

    let bgclr = ["green" , "yellow" , "blue"]
    let txtchng = ["black" , "gray" , "purple"]

    let handleEvent = () => {
        let indexRandom = Math.floor(Math.random()*bgclr.length)
        setBtnbg(bgclr[indexRandom]);btntxt

        let textRandom = Math.floor(Math.random()*txtchng.length)
        setBtntxt(txtchng[textRandom]);
    }

  return (
    <div>
        <button onClick={handleEvent}style={{backgroundColor : btnbg, color : btntxt, border : "0" , padding : "10px" , fontSize: "30px"}}>Change clr</button>
    </div>
  )
}
