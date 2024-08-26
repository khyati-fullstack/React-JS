import React, { useState } from 'react'

export default function State1example() {
    // what is state?
    // what is useState?
    // useState is a hook which is return stateful value and function. using that function we can change state
    
    // const [property,propertychangemethod]
    // what is return value of useState
    
    // ans . use state return  array value return which contain stateful value and function that can chnage state of variable
    // in react js class component is use for setState for state modification

    const [count,setCount] = useState (0) // useState(initalstate) or default value

    // // const handleButton = () => {
    // //     // console.log("button clicked");
    // //     setCount(count + 1)
    // }

  return (
    <div>
        <h1>Hello {count}</h1>
        {/* <button onClick={handleButton}>Change</button> */}
        <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
}
