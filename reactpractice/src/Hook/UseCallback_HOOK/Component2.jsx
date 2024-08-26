import React, { memo } from 'react'

 function Component2({myList,addRecord}) {

  return (
    <div>
        <h2>Component 2 </h2>
        {myList.map((value,index)=>{
            return <h4 key={index}>{value}</h4>
        })}
        <button onClick={addRecord}>Add Record</button>
    </div>
  )
}
export default memo(Component2)