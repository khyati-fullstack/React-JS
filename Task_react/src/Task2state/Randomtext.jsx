import React, { useState } from 'react'

export default function Randomtext() {
    let [name,setName] = useState ()
    let nameArray = ["Khyati" , "Jignasha" ,"Bhargavi" , "Sandhya" , "Kruti"]
    let handleEvent = () => {
        let indexRandom = Math.floor(Math.random()*nameArray.length)
        setName(nameArray[indexRandom])
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleEvent}>Change Name</button>
    </div>
  )
}
