import React, { useCallback, useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

export default function Example1callback() {
    const [count,setCount] = useState(0)
    const [myList,setMyList] = useState([]);

    const addRecord = useCallback(()=>{
        setMyList([...myList, "New Record"])
    },[myList])  

    
     
  return (
    <div>
        {count}
        <Component1/>
        <button onClick={()=>setCount(count + 1)}>Click Me</button>
        <Component2 myList = {myList} addRecord = {addRecord}/>
    </div>
  )
}
