import React from 'react'
import Child6compnent from './Child6compnent'

export default function Parent6component() {
    const myproduct = ["c++" ,"java","rect"]
  return (
    <div>
        <Child6compnent product = {myproduct}/>
    </div>
  )
}
