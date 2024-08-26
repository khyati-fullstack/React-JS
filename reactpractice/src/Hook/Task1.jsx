import React, { useEffect, useState } from 'react'

export default function Task1() {
    const [color,setColor] = useState (0)
    let color1 = ["red","green"]

    useEffect (()=>{
        document.body.style.backgroundColor = color1[color]
    })
  return (
    <div>
        <button onClick={()=>setColor(color + 1)}>Change Color</button>
    </div>
  )
}
