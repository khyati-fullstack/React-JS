import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Inputepage() {
    const [name,setName] = useState();
    const navigate = useNavigate();
    const handlButton = () => {
        navigate("/output",{state:{name}})
    }
  return (
    <div>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e?.target?.value)} />
        <button onClick={handlButton}>Click</button>
    </div>
  )
}
