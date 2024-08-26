import React, { useRef } from 'react'

export default function Task4() {
    const name = useRef()
    const email = useRef()

    const handleClick = () => {
        let nm = name.current.value;
        let em = email.current.value

        alert(`Name = ${nm} - Email = ${em}`)
        // alert(name.current.value)
        // alert(email.current.value)
    }
  return (
    <div >
        <input ref={name} type="text"  placeholder='Enter Name'/>
        <input ref={email} type="email" placeholder=' Your Email-id'/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
