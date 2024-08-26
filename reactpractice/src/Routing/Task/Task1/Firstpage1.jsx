import React from 'react'
import { Link } from 'react-router-dom'

export default function Firstpage1() {
  
  return (
    <div>
        <h1>First Page</h1>
        <Link to={"/second"}>
            My Data
        </Link>
    </div>
  )
}
