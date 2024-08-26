import React, { useState } from 'react'

export default function Factorialvalue() {
    let [value,setValue] = useState ("")
    let [data,setData] = useState ("")
    let handleEvent = (event) => {
        let length = 1
        for (let i = 1; i <= value  ; i++) {
            length = length*i
            setData(length)
        }
    }

  return (
    <div>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleEvent}>Click</button>
        <h3>Factorialvalue.... = {data}</h3>
    </div>
  )
}
