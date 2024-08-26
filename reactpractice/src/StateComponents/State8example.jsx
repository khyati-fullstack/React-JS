import React, { useState } from 'react'

export default function State8example() {
    const [number , setNumber] = useState (0)
    const [fact , setFact] = useState (0)

    let ft = 1;

    const findFactorial = (e) => {
        setNumber(parseInt(e?.value));
    }

    const findFactorialValue = () => 
    {
        for (let i = 1 ; i <= number; i++)
        {
          ft*=i;  
        }
        setFact(ft);
    }
  return (
    <div>
        <input type="text" placeholder='Enter Value' onChange={(e)=>findFactorial(e)}/>
        <button onClick={findFactorialValue}>Click</button>
        <h1>{fact}</h1>
    </div>
  )
}
