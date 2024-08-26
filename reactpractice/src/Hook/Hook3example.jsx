import React, { useEffect, useState } from 'react'

export default function Hook3example() {
    const [data,setData] = useState (0)

    useEffect(()=>{
        console.log("useeffect called");
    },[])
  return (
    <div>
        <button onClick={()=>setData(data + 1)}>Click here</button>
    </div>
  )
}
