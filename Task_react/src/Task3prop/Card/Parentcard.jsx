import React, { useState } from 'react'
import "./CSS/styletask3card.css"
import Childcard from './Childcard'

export default function Parentcard() {  
    let [data,setData] = useState(false)

    let [username, setUsername] = useState ("")
    let [username2, setUsername2] = useState ("")
    let [namedata, setNamedata] = useState ("")

    let [mailid ,setMailid] = useState ("")
    let [mailid2 ,setMailid2] = useState ("")
    let [maildata , setMaildata] = useState("")

    let [cityname , setCityname] = useState("")
    let [cityname2 , setCityname2] = useState("")
    let [citydata ,setCitydata] = useState("")

    let [subjectname , setSubjectname] = useState ("")
    let [subjectname2 , setSubjectname2] = useState ("")
    let [subjectdata , setSubjectdata] = useState ("")

    let [gender , setGender] = useState ("")
    let [genderdata , setGenderdata] = useState ("")

    setUsername(namedata)
    setMailid(maildata)
    setCityname(citydata)
    setSubjectname(subjectdata)
    setGender(genderdata)
 
    let hadleClickbtn = (e) => {
      e.preventDefault()
        setData(true)
        setUsername2(username)
        setCityname2(cityname)
        setCityname2(cityname)
    }


  return (
    <div className='section'>
        <div className='form-data'>
          <h1>Personal Detail</h1>
        <form action="" >
            <input type="text" placeholder='Username*' onChange={(e) => setNamedata(e?.target?.value)} /> <br /> <br />
            <input type='email' placeholder='User mail-id*' onChange={(e) => setMaildata(e?.target?.value)} /> <br /> <br />
            <input type="text" placeholder='City*' onChange={(e)=>setCitydata(e?.target?.value)}/> <br /> <br />
            <input type="text" placeholder='Subject*' onChange={(e) => setSubjectdata(e?.target?.value)}/> <br /> <br />
            <br />
            <span><input type="radio" name='gender' id='male' value="male"  onChange={(e) => setGenderdata(e?.target?.value)}/>Male </span>
    
            <span><input type="radio" name='gender' id='female'value="female"  onChange={(e) => setGenderdata(e?.target?.value)}/>Female </span><br /> <br />
            
            <br />
            <button onClick={hadleClickbtn}>Submit</button>
        </form>
        </div>
        {data && 
        <Childcard 
        name ={namedata} 
        mail = {maildata} 
        city = {citydata} 
        subject = {subjectdata} 
        gender = {genderdata}
        />
        }        
    </div>

  )
}

