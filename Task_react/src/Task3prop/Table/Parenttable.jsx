import React, { useState } from 'react'
import Childtable from './Childtable'

export default function Parenttable() {

  let [listitem , setListitem] = useState ([])
  let [name,setName] = useState ("")
  let [subject,setSubject] = useState ("")
  let [city,setCity] = useState ("")

  

  let handleEvent = () => {
    setListitem ([...listitem ,{Name:name,Subject:subject,City:city}])
    setName("")
    setSubject("")
    setCity("")
  }
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} /> <br /> <br />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> <br /> <br />

      <button onClick={handleEvent}>Click</button>
        <Childtable listitemData = {listitem}/>
    </div>
  )
}
