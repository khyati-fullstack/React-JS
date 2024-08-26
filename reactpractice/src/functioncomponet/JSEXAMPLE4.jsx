import React from 'react'
import JSEXAMPLE3 from './JSEXAMPLE3'

export default function JSEXAMPLE4() {
    const list = [1,2,3,10];
  return (
    <div>
        {list.map((e,i)=>{
            return <JSEXAMPLE3 key={i}/>
        })}
    </div>
  )
}
