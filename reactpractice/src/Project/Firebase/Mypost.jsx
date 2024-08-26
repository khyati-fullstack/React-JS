import { collection, deleteDoc, doc,  getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebaseConfig';

export default function Mypost() {
    const [post,setPost] = useState([])
    const [userpost, setUserpost] = useState(null)

    useEffect(()=>{
        fetchPostfun();
        fetchUsers();
    },[])
    
    const fetchUsers = async() => {
        const querySnapshot = await getDocs(doc(db,'student'))
        const users = {};
        querySnapshot.forEach((doc)=>{
            const record = doc.data();
            console.log("======> Record ",record);
            // users[doc.id] = record.name;
            console.log("---> doc id : ",doc.id);
            users[doc.id] = record.name;
        })
        console.log("users : ",users);
        setUserpost(users);
    }

    const fetchPostfun = async() => {
        const current_user = auth.currentUser;
        const querySnapshot = await getDocs(doc(db,"post"))
        const fetchPost = [];
        console.log("================",current_user);

        querySnapshot.forEach((doc)=>{
            const record = doc.data();
            console.log("record" , record);
            if(record.userid === current_user.uid){
                fetchPost.push({
                    'id' : doc.id,
                    'title' : record.title,
                    'description' : record.description,
                    'image' : record.image,
                    'userid' : record.userid
                })
            }
            
        })
        setPost(fetchPost);
    }
    const handleDelete = async(docid) => {
        await deleteDoc(doc(db,'post' , docid));
        setPost(post.filter(item => item.id !== docid))
    }

  return (
    <div>
        <h1>My Post </h1>
        {post.map((singlePost,index)=>{
            return <div key={index}>
                        <h4>{singlePost.title}</h4>
                        <h3>{singlePost.userid}</h3>
                        <h4>posted by : {userpost[singlePost.userid]}</h4>
                        <p>{singlePost.description}</p>
                        <img src={singlePost.image} height={50} width={50} />
                        <button onClick={()=>handleDelete(singlePost.id)}>Delete</button>
                        <hr></hr>
                    </div>
        })}
    </div>
  )
}
