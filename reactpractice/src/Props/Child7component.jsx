import React from 'react'

export default function Child7component(props) {
  return (
    <div>
        {props.details.map((item,i) =>{
        return <div key={i}>
            <h1 >{item.id}</h1>
            <h2 >{item.name}</h2>
            <h3 >{item.subject}</h3>
        </div>
    })}
    </div>
  )
}
