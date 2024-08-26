import {  signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Loginpage() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)

        const user = userCredentials.user

        const userDoc = await getDoc(doc(db,"student",user.uid));

        console.log(userDoc.name);

        if(userDoc.exists){
          console.log(userDoc.data());
          console.log(userDoc.data().name);
          alert(`welcome ${userDoc.data().name}`);
          navigate("/dashbord" , {replace:true})

        }
        console.log(user.uid);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="email" onChange={(e)=>setEmail(e?.target?.value)}/> <br /> <br />
        <input type="password" onChange={(e)=>setPassword(e?.target?.value)} /> <br /> <br />
        <button type='submit'>Click</button>
        </form>
        <br /><br />
        <p onClick={()=>navigate("/")}>Home Page</p>
    </div>
  )
}
