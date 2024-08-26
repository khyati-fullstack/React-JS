import React, { useState } from 'react'

export default function Daycount() {
    let [day,setDay] = useState ("")
    let [data,setData] = useState ("")
    let hadleEvent = () => {
        setData(Number(day)* 30)
    }
  return (
    <div>
        <input type="text" placeholder='Month' value={day} onChange={(e)=>setDay(e.target.value)}/>
        <button onClick={hadleEvent}>Click</button>
        <h3>Day ... ={data}</h3>

    </div>
  )
}
