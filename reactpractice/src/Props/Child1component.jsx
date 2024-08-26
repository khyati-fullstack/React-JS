import React from 'react'

export default function Child1component(props) {
  return (
    <div>
      <h1>Hello! {props.name}</h1>
      <h2>Language = {props.languge}</h2>
    </div>
  )
}
