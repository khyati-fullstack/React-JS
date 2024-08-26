import React, { useState } from 'react'
import Example2usecontext from './Example2usecontext'

export default function Example1usecontext() {
  const [data,setData] = useState("")
  return (
    <div>
      <h1>Hello</h1>
      <input type="text" onChange={(e)=>setData(e?.target?.value)} />
      <Example2usecontext msg = {data}/>
    </div>
  )
}
