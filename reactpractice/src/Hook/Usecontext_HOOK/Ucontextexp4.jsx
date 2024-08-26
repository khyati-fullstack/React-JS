import React, { useContext } from 'react'
import { myContextone } from './Ucontextexp1'

export default function Ucontextexp4() {
    const record = useContext(myContextone)
  return (
    <div>
        <h4>UseContext 4</h4>
        <p>{record.name}</p>
        <p>{record.subject}</p>
    </div>
  )
}
