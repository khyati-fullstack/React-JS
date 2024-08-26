import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page2() {
    const {id, name} = useParams()
  return (
    <div>
        <h1>Hello</h1>
        <h1>id = {id}</h1>
        {name && <h2>name = {name}</h2>}
    </div>
  )
}
