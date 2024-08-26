import React from 'react'
import Child3component from './Child3component'

export default function Parent3component() {
  const hadleCick = () => {
    alert("Hello!")
  }
  return (
    <div>
      <button onClick={hadleCick}>Click</button>
      <Child3component myfun ={hadleCick}/>
    </div>
  )
}
