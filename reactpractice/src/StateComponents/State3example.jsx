import React, { useState } from 'react'

export default function State3example() {
    let [bgcolor,setBgcolor] = useState ("Pink")
  return (
    <div style={{backgroundColor : bgcolor}}>
        <h1>Hello !</h1>
        <button onClick={() => setBgcolor("green")}>Change clr</button>
    </div>
  )
}
