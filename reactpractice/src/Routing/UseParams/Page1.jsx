import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <div>
        <h1>Hello FirstPage</h1>
        <Link to = '/onepage/1'> go to page</Link>
        <br />
        <Link to = '/onepage/2'>go to page</Link>
        <br />
        <Link to = '/onepage/101/React'> go to page</Link>

    </div>
  )
}
