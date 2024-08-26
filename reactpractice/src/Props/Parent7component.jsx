import React from 'react'
import Child7component from './Child7component'

export default function Parent7component() {
    const details = [
        {id : 1 , name : "khayti", subject : "java"},
        {id : 2 , name : "jignasha", subject : "react"},
        {id : 3 , name : "bhargavi", subject : "webdegin"}

    ]
  return (
    <div>
        <Child7component details ={details}/>
    </div>
  )
}
