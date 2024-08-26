import React from 'react'
import JSEXAMPLE2 from './JSEXAMPLE2'

export default function JSEXAMPLE1() {
    const subjectName = "React"
    const name = "JS"
  return (
    <div>
        <h1>Hello {subjectName}</h1>
        <h2>Your languge {name}</h2>
        <JSEXAMPLE2/>
    </div>
  )
}
