import React from 'react'
import Child1component from './Child1component'

export default function Parent1component() {
  return (
    <div>
      {/* here , name is a property (prop) and my react is value */}
      {/* key = value e.g = languge = "javascript" */}
      <Child1component name = "My React" languge = "Java script"/>
    </div>
  )
}
