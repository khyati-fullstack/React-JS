import React, { useContext, useState } from 'react'

export default function Clkbutton() {
    let [count,setCount] = useState (0)
  
  return (
    <div>
        <h1>Hello Number {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button> 
    </div>
  )
}
