import React, { useState } from 'react'
import { auth, db, storage } from '../../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

export default function Newpost() {

  const [title,setTitle] = useState("");
  const [description , setDescription] = useState("");
  const [imageLink,setImageLink] = useState();

  const handleSubmit = async() => {
    const user = auth.currentUser;
    const storageRef = await ref(storage,`post/${user.uid}/${Date.now()}`);
    await uploadBytes(storageRef,imageLink);
    const downloadUrl = await getDownloadURL(storageRef)

    await setDoc(doc(db,'post',`${Date.now()}`),{
      'title' : title,
      'description' : description,
      'image' : downloadUrl,
      'userid' : user.uid,
      'timestamp' : Date.now()
    })
    Navigate("/viewpost" , {replace:true})

  }

  return (
    <div>
      <h1>Add New Post</h1>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setTitle(e.target.value)} />
      <br /> <br />
      <textarea name="" id="" placeholder='Enter Description' onChange={(e)=>setDescription(e.target.value)}></textarea>
      <br /> <br />
      <input type="file"  onChange={(e)=>setImageLink(e.target.files[0])}/>
      <br /> <br />
      <button onClick={handleSubmit}>click</button>
    </div>
  )
}
