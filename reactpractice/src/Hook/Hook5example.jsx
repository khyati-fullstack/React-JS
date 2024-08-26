import React, { useRef } from 'react'

export default function Hook5example() {
    const inputRef = useRef (null);

    const handleSubmit= () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='Enter Name' />
        <button onClick={handleSubmit}>Click</button>
    </div>
  )
}
