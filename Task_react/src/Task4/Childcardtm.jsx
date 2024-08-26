import React, { useState } from 'react'

export default function Childcardtm(props) {
   
  return (
    <div className='task-mang'>    
    <table border={1} style={{width : "70%"}}>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Discription</th>
            <th>Priority</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
    {
       props.data.map((item, index) => (
            <tr key={index}>
                <td>{item.idnum}</td>
                <td>{item.title}</td>
                <td>{item.discription}</td>
                <td>{item.priority}</td>
                <td>
                <button onClick={() =>props.handleEdit(index)}>Edit</button>
                <button onClick={() => props.handleDelete(index)}>Delete</button>
                <input type='checkbox' onClick={() => props.handleMark(index)}/>
                </td>
            </tr>
        ))
    }
    </tbody>
    </table>
    </div>
  )
}
