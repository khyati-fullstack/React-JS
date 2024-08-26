import React, { useRef, useState } from 'react'
import Childfr1 from './Childfr1'

export default function Parentfr1() {
    // const inputRef = useRef();
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [city,setCity] = useState("");
    const [data,setData] = useState([]);

    const handleSubmit = () => {
        // inputRef.current.focus();
        let obj = {name,subject,email,gender,city}
        setData([...data,obj]);

        // inputRef.current.value = {name,subject,email,gender,city}
        // setData([...data,inputRef.current.value])
        // setName(inputRef.current.value);
        // setSubject(inputRef.current.value)
        // setEmail(inputRef.current.value);
        // setGender(inputRef.current.value);
        // setCity(inputRef.current.value);
    }
  return (
    <div>

        <table border={1} style={{width : "90%", margin : "10px auto"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {/* <td></td>
                <td>{name}</td>
                <td>{subject}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{city}</td> */}
            {data.map((e,i) =>{
               return <tr key={i}>
                    <td>1</td>
                    <td>{e.name}</td>
                    <td>{e.subject}</td>                    
                    <td>{e.email}</td>
                    <td>{e.gender}</td>
                    <td>{e.city}</td>                
                </tr>
            })}
            </tbody>
        </table>
        <Childfr1 
        // ref = {inputRef} 
        setName = {setName} 
        setSubject = {setSubject}
        setEmail = {setEmail}
        setGender = {setGender}
        setCity = {setCity}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
