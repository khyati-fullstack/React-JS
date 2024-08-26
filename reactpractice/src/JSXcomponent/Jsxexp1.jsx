import React from 'react'

export default function Jsxexp1() {
    const subject = "JS" ;
    const greetingmsg = <p>Good Morning</p>;
  return (
    <div>
        <h1>My fav programing languge {subject} </h1>

        {greetingmsg}
    </div>
  )
}
