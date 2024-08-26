import React, { useState } from 'react'

export default function State6example() {

    const [username, setUsername] = useState ("");
    const [data,setData] = useState ("");

    const handleEvent = () => {
        setData(username)
        setUsername("")
    }
  return (
    <div>
        <input type="text" placeholder='Enter your name' value={username} onChange={(e) => setUsername(e.target.value)} />
        <h1>{data}</h1>
        <button onClick={handleEvent}>submit</button>
    </div>
  )
}
