import React from 'react'
import Example3usecontext from './Example3usecontext'

export default function Example2usecontext(props) {
  return (
    <div>
        <h4>2nd component</h4>
        <Example3usecontext msg = {props.msg}/>
    </div>
  )
}
