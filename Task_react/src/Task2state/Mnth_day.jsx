import React, { useState } from 'react'

export default function Mnth_day() {
    let [year,setYear] = useState("")
    let [day,setDay] = useState("")
    let [month,setMonth] = useState("")

    let [data,setData] = useState("")
    let [data1,setData1] = useState("")

    let handleEvent = () => {
        setData(Number(year) * 12)
        setData1(Number(year) * 360)

    }
  return (
    <div>
        <input type="number" placeholder='year' value={year} onChange={(e) => setYear(e.target.value)}/>
        <br /><br />
        <input type="number" placeholder='Month' value={data} onChange={(e) => setDay(e.target.value)}/>
        <br /><br />
        <input type="number" placeholder='Day' value={data1} onChange={(e) => setMonth(e.target.value)}/>
        <br /><br />
        <button onClick={handleEvent}>Click</button>
    </div>
  )
}
