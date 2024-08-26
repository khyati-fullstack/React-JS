import React from 'react'

export default function Child5component(props) {
  return (
    <div>
        <h1>{props.subject}</h1>
    </div>
  )
}
Child5component.defaultProps = {
    subject : "JAVA" ,
    city : "Ahmedabad"

}
