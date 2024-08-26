import React, { useState } from 'react'

export default function Monthcount() {
    let [month,setMonth] = useState("")
    let [data,setData] = useState("")
  return (
    <div>
        <input type="text" placeholder='Day' value={month} onChange={(e) => setMonth(e.target.value)}/>
        <button onClick={() => setData(Number(month) / 30 )}>click</button>
        <h3>Month ... = {data}</h3>
    </div>
  )
}
