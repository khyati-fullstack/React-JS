import React, { useState } from 'react'

export default function State7example() {
    const [firstname,setFirstname] = useState ("")
    const [lastname,setLastname] = useState ("")
    const [data,setData] = useState ("")

    const handleEvent = () => {
        setFirstname("")
        setLastname("")
        setData(firstname + lastname)
    }
  return (
    <div>
        <input type="text" placeholder='first name' value={firstname} onChange={(e) => setFirstname(e.target.value)}/> <br /> <br />
        <input type="text" placeholder='last name' value={lastname} onChange={(e) => setLastname(e.target.value)}/>

            <h1>{data}</h1>
        <button onClick={handleEvent}>Click</button>
    </div>
  )
}
