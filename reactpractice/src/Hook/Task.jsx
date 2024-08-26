import React, { useEffect, useState } from 'react'

export default function Task() {
    const [color,setColor] = useState("")

    useEffect(()=>{
        document.body.style.backgroundColor = color
    },[color])
  return (
    <div>
        {color}
        <button onClick={()=>setColor("green")}>Color1</button>
        <button onClick={()=>setColor("blue")}>Color2</button>
        <button onClick={()=>setColor("pink")}>Color3</button>
    </div>
  )
}
