import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function Reagistrationpage() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const [msg,setMsg]= useState();

    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("---> submit button clicked")
    try {
    const userCredentials = await createUserWithEmailAndPassword(auth,email,password)

    const user = userCredentials.user;
    if(user)
        {
            await setDoc(doc(db,"student" , user.uid),{
                'name' : name,
                'email' : email,
            })
            console.log("successfuly record inserted");
            setMsg("successfuly record inserted");
        }
        }catch (e) {
            setError(e.message);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {msg && <p style={{color:"green"}}>{msg}</p>}
            {error && <p>{error}</p>}
            <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e?.target?.value)}/> <br /> <br />
            <input type="text" value={email} placeholder='Email Id' onChange={(e)=>setEmail(e?.target?.value)}/> <br /> <br />
            <input type="text" value={password} placeholder='Password' onChange={(e)=>setPassword(e?.target?.value)}/> <br /> <br />
            <button type='submit'>Submit</button>
        </form>
        <br /><br />
        <Link to='/guest' ><h1>All Guest</h1></Link>
        <p onClick={()=>navigate("/login")}>Login page</p>
        {/* <h1 onClick={()=>navigate("/newpost")}>New Post</h1> */}

    </div>
  )
}
