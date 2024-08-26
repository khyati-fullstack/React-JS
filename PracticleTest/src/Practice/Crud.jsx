import React, { useState } from 'react'

export default function Crud() {
    const [name,setName] = useState('')
    const [subject,setSubject] = useState('')
    const [city,setCity] = useState('')
    const [data,setData] = useState([])

    const [editIndex, setEditIndex] = useState(null);

    const handleClick = () => {
        let arr = {name,subject,city}
        if(editIndex!==null){
            const update = [...data]
            update[editIndex]= arr
            setData(update)
        }else{
        setData([...data,arr])
        setName("")
        setSubject("")
        setCity("")
    }
}
    const handleDelete = (index) => {
        const fetOlddata = [...data] ;
        fetOlddata.splice(index,1);
        setData([...fetOlddata]);
       console.log(fetOlddata);
    }
    const handleEdit = (i) => {
        const fetOlddata = data[i]
        setName(fetOlddata.name)
        setSubject(fetOlddata.subject)
        setCity(fetOlddata.city)
        setEditIndex(i);
    }
  return (
    <div>
        <input type="text" placeholder='name' value={name}  onChange={(e)=>setName(e?.target?.value)}/>
        <input type="text" placeholder='subject' value={subject} onChange={(e)=>setSubject(e?.target?.value)} />
        <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e?.target?.value)} />
        <button onClick={handleClick}>{editIndex ? 'update' : 'Submit'}</button>
        <br /> <br /> <br />
        <table border={1} width= '50%'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
            data.map((e,i) =>{
                return <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.subject}</td>
                    <td>{e.city}</td>
                    <td>
                        <button onClick={()=>handleEdit(i)}>Edit</button>
                        <button onClick={()=>handleDelete(i)}>Delete</button>
                    </td>
                </tr>
            })
        }
            </tbody>
        </table>
        
    </div>
  )
}
