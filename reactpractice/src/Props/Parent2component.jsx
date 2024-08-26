import React from 'react'
import Child2component from './Child2component'

export default function Parent2component() {
  return (
    <div>
      <Child2component>
        <h1>This is a Parent component s child</h1>
        <h2>Welcome to React JS</h2>
      </Child2component>
    </div>
  )
}
