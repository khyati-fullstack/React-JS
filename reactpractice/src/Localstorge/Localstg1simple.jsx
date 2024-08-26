import React, { useState } from 'react'

export default function Localstg1simple() {
    let [name,setName] = useState ("")
    let [subject,setSubject] = useState ("")
    let [msg,setMsg] = useState("")

    let handleEvent = () => {
        localStorage.setItem(name,subject)
        setMsg("successfully added")
    }
  return (
    <div>
        <input type="text" placeholder='Name' onChange={(e) =>setName(e?.target?.value)}/>
        <input type="text" placeholder='Subject' onChange={(e) =>setSubject(e?.target?.value)}/>
        <button onClick={handleEvent}>Click</button>
        <p>{msg}</p>
        </div>
  )
}
