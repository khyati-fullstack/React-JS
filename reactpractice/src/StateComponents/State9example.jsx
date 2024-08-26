import React, { useState } from 'react'

export default function State9example() {
    const [myarr , setMyarr] = useState ([]) // blank array initlization
    const [subject, setSubject] = useState("")
    const [subject1, setSubject1] = useState("")


    const hadleEvent = () => {
        setMyarr([...myarr,subject,subject1])
        setSubject("")
        setSubject1("")
    }


  return (
    <div>
        <input type="text" placeholder='Enter Value' value={subject} onChange={(e) => setSubject(e?.target?.value)} />
        <input type="text" placeholder='Enter Value' value={subject1} onChange={(e) => setSubject1(e?.target?.value)} />
        <button onClick={hadleEvent}>Click</button>
        <ol>
        {
            myarr.map((e,i)=>{
                return <li key={i}>{e}</li>
            })
        }
        </ol>
    </div>
  )
}
