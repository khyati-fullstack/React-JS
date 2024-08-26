import React from 'react'

export default function Child6compnent(props) {
  return (
    <div>
        {props.product.map((e,i)=>{
            return <h3 key={i}>{e}</h3>
        })}
    </div>
  )
}
