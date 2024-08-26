import React, { useEffect, useState } from 'react'

export default function Localstg2curd() {
    const [name,setName] = useState("")
    const [subject,setSubject] = useState ("")
    const [city,setCity] = useState ("")

    const [student,setStudent] = useState ([])

    const [editdata,setEditdata] = useState (null)

    const handleSubmit = (e) => {
        e.preventDefault();
        let std = {id : Date.now(),name,subject,city}
        setStudent([...student,std]);    
        console.log(student);
        localStorage.setItem("student", JSON.stringify([...student,std])); 
        setName ("");
        setSubject("");
        setCity(""); 
    }

    useEffect (() => {
      let allRecord = JSON.parse(localStorage.getItem("student")) || [];
      setStudent(allRecord);
      // console.log(allRecord);
    },[])

    const handleDelete = (index) => {
      console.log(`delete...${index}`);
      let allRecord = student.filter((e,i)=> i !== index)
      console.log(allRecord);
      setStudent(allRecord)
      localStorage.setItem("student" , JSON.stringify(allRecord));
    }
    const handleEdit = (index) => {
      setEditdata(index);
      // console.log(index);
      // console.log(s);
      setName(student[index].name)
      setSubject(student[index].subject)
      setCity(student[index].city)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={subject} placeholder='Subject' onChange={(e)=>setSubject(e.target.value)}/>
        <input type="text" value={city} placeholder='City' onChange={(e)=>setCity(e.target.value)}/>

        <button type='submit'>{editdata!==null ? "Update": "Submit"}</button>
        </form>


        <table border={1}>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Acion</th>
          </thead>
          <tbody>
          {
          student.map((e,i) => {
            return <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.subject}</td>
              <td>{e.city}</td>
              <td><button onClick={()=>handleEdit(i)}>Edit</button></td>
              <td><button onClick={()=>handleDelete(i)}>Delete</button></td>
            </tr>
          })
        }
          </tbody>
        </table>
        
    </div>
  )
}
