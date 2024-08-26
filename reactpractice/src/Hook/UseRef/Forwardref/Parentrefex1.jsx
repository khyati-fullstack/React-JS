import React, { useRef, useState } from 'react'
import Childrefex1 from './Childrefex1';

export default function Parentrefex1() {
    const inputRef = useRef();

    const handleSubmit = () => {
        inputRef.current.focus();
        alert(inputRef.current.value);
        // console.log(inputRef.current.value);
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <h2></h2>
        {/* <input type="text" ref={inputRef} /> */}
        <Childrefex1 ref = {inputRef} />
        
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
