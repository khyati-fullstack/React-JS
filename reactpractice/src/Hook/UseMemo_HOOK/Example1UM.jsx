import React, { useMemo, useState } from 'react'

export default function Example1UM() {
  const [num1,setNum1] = useState(1)
  const [num2,setNum2] = useState(10)

  // function dosomething(){
  //   console.warn("---->do something");
  //   return num1*10
  // }
  const data = useMemo(()=>{
    console.warn("---->do something");
    return num1*10;
  },[num1])
  
  return (
    <div>
        <h3>{num1}</h3>
        {/* <h3>{dosomething()}</h3> */}
        <h3>{data}</h3>
        <button  onClick={()=>setNum1(num1+1)}>count +1</button>
        <h3>{num2}</h3>
        <button onClick={()=>setNum2(num2+10)}>count +10</button>
    </div>
  )
}
