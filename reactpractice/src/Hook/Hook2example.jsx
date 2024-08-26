import React, { useEffect, useState } from 'react'

export default function Hook2example() {
    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)

    useEffect(()=>{
        console.log("count stage change");
    },[count]);
    
  return (
    <div>
        <h3>{count}</h3>
        <h3>{num}</h3>
        <button onClick={()=>setCount(count + 1)}>Count</button>
        <button onClick={()=>setNum(num + 1)}>Num</button>
    </div>
  )
}
