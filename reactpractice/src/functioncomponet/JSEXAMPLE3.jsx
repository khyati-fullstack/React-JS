import React from 'react'

export default function JSEXAMPLE3() {

    const subjectlist = ["c" , "c++" , "Java"]
  return (
    <div>
        {subjectlist.map((e,i)=>{
            return <h1 key={i}>{e}</h1>
        })}
    </div>
  )
}
