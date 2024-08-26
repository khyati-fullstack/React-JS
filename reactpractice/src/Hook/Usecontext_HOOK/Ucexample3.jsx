import React, { useContext } from 'react'
import { myContext } from './Ucexample1';

export default function Ucexample3() {
    const user = useContext(myContext);
  return (
    <div>
        <h3>3rd component</h3>
        <h2>{user}</h2>
    </div>
  )
}
