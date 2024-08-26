import React, { useReducer } from 'react'

const intialState = 0;

const reducer = (state,action) => {
    switch (action)
    {
        case "INC1":
           return state+1;
        case "INC10":
            return state+10;
        case "INC100":
            return state+100;
        default:
            return state;
    }
}



export default function Example1UR() {
    const [count,dispatch] = useReducer(reducer,intialState);
  return (
    <div> 
        {count}
        <button onClick={()=>dispatch("INC1")}>INC+1</button>
        <button onClick={()=>dispatch("INC10")}>INC+10</button>
        <button onClick={()=>dispatch("INC100")}>INC+100</button>
    </div>
  )
}
