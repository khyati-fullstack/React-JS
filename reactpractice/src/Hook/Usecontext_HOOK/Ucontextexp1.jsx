import React, { createContext, useState } from 'react'
import Ucontextexp4 from './Ucontextexp4'

export const myContextone = createContext()
export default function Ucontextexp1() {
    const [name,setName] = useState("")
    const [subject,setSubject] = useState("")
  return (
    <div>
        <h3>useContext 1</h3>

        <input type="text" placeholder='Name' onChange={(e)=>setName(e?.target?.value)}/>
        <input type="text" placeholder='Subject'onChange={(e)=>setSubject(e?.target?.value)}/>
        
        <myContextone.Provider value={{name,subject}}>
            <Ucontextexp4/>        
        </myContextone.Provider>
    </div>
  )
}
