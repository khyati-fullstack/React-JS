import {arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Diversity1 } from '@mui/icons-material';


export default function Viewpost() {
    const [post,setPost] = useState([])
    const [postUsers,setPostUsers] = useState(null);
    const [newComment,setNewcomment] = useState('')
    const navigate = useNavigate();
    useEffect(()=>{
        fetchPostfun();
        fetchUsers();
    },[])

    const fetchUsers = async() => {
        const querySnapshot = await getDocs(collection(db,"student"));
        const users = {};
        // key : value,
        // 784asd : Anjali,
        querySnapshot.forEach((doc)=>{
            const record = doc.data();
            console.log("===>Record" , record);
            // users[doc.id] = record,.name;
            console.log('.... doc id' , doc.id);
            users[doc.id] = record.name
        })
        console.log("users :" , users);
        setPostUsers(users);
    }

    const fetchPostfun = async() => {
        const querySnapshot = await getDocs(collection(db,"post"))
        // console.log('....>querySnapshot',querySnapshot);
        const fetchPost = [];

        querySnapshot.forEach((doc) => {
            const record = doc.data();
            console.log('record', record);
            fetchPost.push({
                'id' : doc.id,
                'title' : record.title,
                'description' : record.description,
                'image' : record.image,
                'userid' : record.userid,
                'likes' : record.likes || [],
                'comments' : record.comments || [],
                'createdAt' : timeAgo(record.timestamp)
            })
        })
        console.log(fetchPost);
        setPost(fetchPost)
    }



    const handleDelete = async(docid) => {
        console.log("---> delete ", docid);
        await deleteDoc(doc(db,'post' , docid))
        setPost(post.filter(item => item.id !== docid))
        // navigate("/dashboard",{replace:true})
    }

    const handleLike = async(postid) => {
        const specific_post = await getDoc(doc(db,'post' , postid));
        const postDataLikeList = await specific_post.data().likes || [];
        console.log('.....> postdata', postDataLikeList);
        const user = auth.currentUser;
        if(postDataLikeList.includes(user.uid)) return;
        console.log('....> adding 1 like');
        await updateDoc(doc(db,'post',postid),{
            "likes" : [...postDataLikeList,user.uid]
        
        })
        const updatePost = await post.map((post)=>post.id === postid ? {...post,"likes" : [...post.likes,user.uid]} :post)
        setPost(updatePost);
        console.log('hey');

    }

    const handleComment = async(postid)=>{
        const user = auth.currentUser;
        console.log("........" , postid);

        const newCommentObj = {
            text : newComment,
            userid : user.uid,
            timestamp : Date.now()
        }
       
        await updateDoc(doc(db,"post",postid),{
            "comments": arrayUnion(newCommentObj)
        })
        setNewcomment("");
        const updateCommentPost = await post.map((post)=> post.id === postid ? {...post,"comments" : [...post.comments, newCommentObj]} : post )
        setPost(updateCommentPost)
        console.log('--------->' ,post);
    }
   return (
    <div>
        <h1>View All Post</h1>
        {
            post.map((singlePost,index)=>{
                return <div key={index}> 
                    <h4>{singlePost.title} {singlePost.createdAt}</h4>
                    <h4> posted by : {postUsers[singlePost.userid]}</h4>
                    <p>{singlePost.description}</p>
                    <img src={singlePost.image} height={50} width={50} />
                    <button onClick={()=>handleDelete(singlePost.id)}>Delete</button>
                    <br /> <br />
                    
                </div>
            })
            
        }
    </div>
  )
}