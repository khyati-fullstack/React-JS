import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";

export default function ViewPost() {
   const [post, setPost] = useState([]);
  const [postUsers, setPostUsers] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchPostfun();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Stdent"));
    const users = {};
    // key : value,
    // 784asd : Anjali,
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      console.log("===>Record", record);
      // users[doc.id] = record,.name;
      console.log(".... doc id", doc.id);
      users[doc.id] = record.name;
    });
    console.log("users :", users);
    setPostUsers(users);
  };

  const fetchPostfun = async () => {
    const querySnapshot = await getDocs(collection(db, "post"));
    const fetchPost = [];

    querySnapshot.forEach((doc) => {
      const record = doc.data();
      console.log("record", record);
      fetchPost.push({
        id: doc.id,
        title: record.title,
        description: record.description,
        image: record.image,
        userid: record.userid,
        likes: record.likes || [],
        createdAt: timeAgo(record.timestamp),
      });
    });
    console.log(fetchPost);
    setPost(fetchPost);
  };

  const timeAgo = (timestamp) => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  };

  const handleDelete = async (docid) => {
    console.log("---> delete ", docid);
    await deleteDoc(doc(db, "post", docid));
    setPost(post.filter((item) => item.id !== docid));
    // navigate("/dashboard",{replace:true})
  };

  const handleLike = async (postid) => {
    const specific_post = await getDoc(doc(db, "Post", postid));

    const postDatalikelist = (await specific_post.data().likes) || [];

    console.log("=======>postdata", postDatalikelist);
    const user = auth.currentUser;
    if (postDatalikelist.includes(user.uid)) return;
    console.log("--->adding 1 like");

    await updateDoc(doc(db, "Post", postid), {
      likes: [...postDatalikelist, user.uid],
    });
    const updatePost = await post.map((post) =>
      post.id === postid ? { ...post, likes: [...post.likes, user.uid] } : post
    );
    setPost(updatePost);
  };
  return (
    <div>
      <h1>View All Post</h1>
      {post.map((singlePost, index) => {
        return (
          <div key={index}>
            <h4>
              {singlePost.title} {singlePost.createdAt}
            </h4>
            <h4> posted by : {postUsers[singlePost.userid]}</h4>
            <p>{singlePost.description}</p>
            <img src={singlePost.image} height={50} width={50} />
            <button onClick={() => handleDelete(singlePost.id)}>Delete</button>
            <button onClick={() => handleLike(singlePost.id)}>Like</button>
          </div>
        );
      })}
    </div>
  );
}



 
 