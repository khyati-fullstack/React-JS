import React, { useState } from 'react'

export default function Mathcal() {

    const [firstvalue, setFirstvalue] = useState ("")
    const [secondvalue , setSecondvalue] = useState ("")

    const [data,setData] = useState ("")

    // const hadleEvent = () => {
        // setData(Number(firstvalue)+Number(secondvalue))
        // setFirstvalue("")
        // setSecondvalue("")
    // }
  return (
    <div>
        <input type='number' value={firstvalue} onChange={(e) => setFirstvalue(e.target.value)} />
        <input type='number' value={secondvalue} onChange={(e) => setSecondvalue(e.target.value)} />

        <h1>{data}</h1>

        <button onClick= {()=>setData(Number(firstvalue)+Number(secondvalue))}>+</button>
        <button onClick={()=>setData(Number(firstvalue)-Number(secondvalue))}>-</button>
        <button onClick={()=>setData(Number(firstvalue)*Number(secondvalue))}>*</button>
        <button onClick={()=>setData(Number(firstvalue)/Number(secondvalue))}>/</button>
    </div>
  )
}
