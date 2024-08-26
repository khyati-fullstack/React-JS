import React, { useState } from 'react'
import Child4component from './Child4component'

export default function Parent4component() {
    const [islogin , setLogin] = useState (false);
    const [msg, setMsg] = useState ("My React");

    const handleClick = () => {
        setLogin(!islogin)
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            islogin &&
            <Child4component msg={msg}/>
        }
    </div>
  )
}
