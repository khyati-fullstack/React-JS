import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Outputpage() {
    const location = useLocation()

    const {name} = location.state
  return (
    <div>Outputpage : {name}</div>
  )
}
