import React, { createContext, useState } from 'react'
import Ucexample2 from './Ucexample2';
import Ucexample3 from './Ucexample3';

export const myContext = createContext();

export default function Ucexample1() {
    const [data,setData] = useState("")
  return (
    <div>
        <h1>1st component</h1>
        <input type="text" onChange={(e)=>setData(e?.target?.value)}/>
        <myContext.Provider value={data}>
            <Ucexample3/>
        </myContext.Provider>
    </div>
  )
}
