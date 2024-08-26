import React from 'react'
import { useState } from 'react'

export default function Mapcrudexample() {

  const [record,setRecord] = useState ([])

  const [name,setName] = useState ("");
  const [subject,setSubject] = useState ("");
  const [city,setCity] = useState("")

  const [editindex,setEditindex] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault ()
    const newrecord = {name,subject,city}
    if(editindex != null){
      const updateRecord = [...record]
      // const fetchOlddata = record[editindex]
      updateRecord[editindex] = newrecord
      setRecord(updateRecord)
    }
    else
    {
    setRecord([...record,newrecord])
    setName ("")
    setSubject("")
    setCity("")
    }
  }

  const handleDelete = (index) => {
    let lastRecord = record;
    lastRecord.splice(index , 1);
    setRecord([...lastRecord]);
  }

  const handleEdit = (index) => {
    let fetchOlddata = record[index]
    setName(fetchOlddata.name)
    setSubject(fetchOlddata.subject)
    setCity(fetchOlddata.city)

    setEditindex(index)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/> <br /> <br />
      <input type="text" placeholder='Subject Name' value={subject} onChange={(e) => setSubject(e.target.value)}/> <br /> <br />
      <input type="text" placeholder='City Name' value={city} onChange={(e) => setCity(e.target.value)}/> <br /> <br />
      <button type='submit'>{editindex != null ? "update" : "submit"}</button>
      </form> <br /> <br />
      <table border={1} style={{width : "30%"}}>
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
            record.map((item,index) => {
              return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.subject}</td>
                <td>{item.city}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>

    </div>
  )
}
