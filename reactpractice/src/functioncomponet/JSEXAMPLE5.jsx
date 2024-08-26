import React from 'react'

export default function JSEXAMPLE5() {
    const sublist = ["c","c++","java","React"]
  return (
    <div>
        <ol>
            {sublist.map((e,i)=>{
                return <li key={i}>{e}</li>
            })}
        </ol>
    </div>
  )
}
