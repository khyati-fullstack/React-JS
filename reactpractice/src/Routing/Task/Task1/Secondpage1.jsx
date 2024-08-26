import React from 'react'

export default function Secondpage1() {
  return (
    <div>
        <input type="text" /> <br />
        <input type="text" /> <br />
        <input type="text" /> <br />
        <input type="text" />
    </div>
  )
}


// import React from 'react'

// export default function Secondpage1() {
//     const [name,setName] = useState("")
//     const [subject,setSubject] = useState("")
//     const [email,setEmail] = useState("")
//     const [gender,setGender] = useState("")
//     const [city,setCity] = useState("")
//     const [data,setData] = useState([])

//     let handleSubmit = () => {
//         let obj = {name,subject,email,gender,city}
//         setData([...data,obj]);
//         localStorage.setItem("data", JSON.stringify([...data,std])); 
//         setName ("");
//         setSubject("");
//         setCity("");

//     }
//   return (
//     <div>
//             <div>
//                 <input type="text"  placeholder='Enter Name'onChange={(e)=>setName(e?.target?.value)}/>
//             </div>     

//             <div>
//             <input type="checkbox" id='sub1' value="HTML" onChange={(e)=>setSubject(e?.target?.value)}/>
//             <label>HTML</label> <br />
//             <input type="checkbox" id='sub2' value="CSS" onChange={(e)=>setSubject(e?.target?.value)}/>
//             <label>CSS</label> <br />
//             <input type="checkbox" id='sub3' value="JavaScript" onChange={(e)=>setSubject(e?.target?.value)}/>
//             <label>JavaScript</label>
//             </div>       

//             <div>
//                 <input type="email" placeholder='E-mail add' onChange={(e)=>setEmail(e?.target?.value)}/>
//             </div>

//             <div>
//             <span><input type="radio" name='gender' id='male' value="male"onChange={(e)=>setGender(e?.target?.value)}/>Male </span>
//             <span><input type="radio" name='gender' id='female'value="female"onChange={(e)=>setGender(e?.target?.value)}/>Female 
//             </span>
//             </div>

//             <div>
//                 <select name="" id="" onChange={(e)=>setCity(e?.target?.value)} >
//                 <option value="select">Select</option>
//                 <option value="Ahmedabad">Ahmedabad</option>
//                 <option value="Baroda">Baroda</option>
//                 <option value="Surat">Surat</option>
//                 </select> <br />
//             </div>

//             <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }


             