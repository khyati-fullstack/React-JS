import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Aboutpage() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>About Page</h1>
        <button onClick={()=>navigate("/contact")}></button>
        <button onClick={()=>navigate(-1)}></button>
        <button onClick={()=>navigate(1)}></button>
        <Link to={"/contact"}>Go To Contact Page</Link>
    </div>
  )
}
