import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contactpage() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <h3 onClick={()=>navigate("/about")} style={{cursor : "pointer"}}>Next Page</h3>
        
    </div>
  )
}
