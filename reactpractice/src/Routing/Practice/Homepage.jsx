import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to={"/contact"}>
            <p>Contact page</p>
        </Link>
    </div>
  )
}
