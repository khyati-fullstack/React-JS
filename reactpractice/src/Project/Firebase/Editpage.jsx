import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db, storage } from '../../../firebaseConfig';
import { update } from 'firebase/database';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function Editpage() {
    const {uid} = useParams();

    const [name,setName] = useState()
    const [profilepic , setProfilepic] = useState()
    const [email,setEmail] = useState();


    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser();
    },[uid])

    const fetchUser = async() => {
        const userData = await getDoc(doc(db,'student' , uid))

        setName(userData.data().name);
        setProfilepic(userData.data().profilepic);
        setEmail(userData.data().email);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();

        await updateDoc(doc(db,'student',uid),{
            'name' : name
        })
        if(profilepic){
            const storageRef =  ref(storage,`profilepicture/${uid}`)
            await uploadBytes(storageRef,profilepic)

            const dowloadUrl = await getDownloadURL(storageRef);
            await updateDoc(doc(db,"student",uid),{
                "profilepic" : dowloadUrl
            })
         }
         

        navigate('/guest',{replace : true})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e?.target?.value)}/> <br /> <br />
        <input type="text" value={email} placeholder='Email Id' disabled/> <br /> <br />
        <input type='file' onChange={(e)=>setProfilepic(e.target.files[0])}/> <br /> <br />

        <button>update</button>
        </form>
    </div>
  )
}
