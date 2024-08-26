import React, { useState } from 'react'

export default function State2example() {
    let [name,setName] = useState ("")
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={() => setName("My Name Khyati")}>Change</button>
    </div>
  )
}
