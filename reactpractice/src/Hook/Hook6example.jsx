import React, { useEffect, useRef, useState } from 'react'

export default function Hook6example() {
    const [count, setCount] = useState(0);
    const prevCount = useRef();

    useEffect(()=>{
        prevCount.current = count;
    },[count])
  return (
    <div>
        <p>Current Value : {count}</p>
        <p>Previous Vlaue : {prevCount.current}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
