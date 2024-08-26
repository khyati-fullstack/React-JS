import React from 'react'
import { Link } from 'react-router-dom'

export default function Contactpage() {
  return (
    <div>
        <h1>Contact Page</h1>
        <Link to={"/about"}>
            <p>About Page</p>
        </Link>
    </div>
  )
}
