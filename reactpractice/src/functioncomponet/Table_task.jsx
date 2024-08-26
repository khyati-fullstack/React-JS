import React from 'react'

export default function Table_task() {
    const tablelist = ["c", "c++","java","react"]
  return (
    <div>
        <table border={1}>
        <tr>
            {tablelist.map((e,i)=>{
                return <td key={i}>{e}</td>
            })}
        </tr>
        </table>
    </div>
  )
}
