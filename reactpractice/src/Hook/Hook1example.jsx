import React, { useEffect, useState } from 'react'

export default function Hook1example() {

    const [count,setCount] = useState(0);
    const [num,setNum] = useState(0);

    useEffect(()=>{
        console.log("useEffect Calling");
    })
  return (
    <div>
        <h3>{count}</h3>
        <h3>{num}</h3>
        <button onClick={()=>setCount(count + 1)}>Click count</button>
        <button onClick={()=>setNum(num + 1)}>Click Num</button>
    </div>
  )
}
