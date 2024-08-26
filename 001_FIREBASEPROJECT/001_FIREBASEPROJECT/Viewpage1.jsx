import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Diversity1 } from "@mui/icons-material";

export default function Viewpage1() {
  const [post, setPost] = useState([]);
  const [postUsers, setPostUsers] = useState(null);
  const [newComment, setNewcomment] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchPostfun();
    fetchUsers();
  }, []);

  

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

 
  const handleComment = async (postid) => {
    const user = auth.currentUser;
    console.log("........", postid);

    const newCommentObj = {
      text: newComment,
      userid: user.uid,
      timestamp: Date.now(),
    };

    await updateDoc(doc(db, "Post", postid), {
      comments: arrayUnion(newCommentObj),
    });
    setNewcomment("");
    const updateCommentPost = await post.map((post) =>
      post.id === postid
        ? { ...post, comments: [...post.comments, newCommentObj] }
        : post
    );
    setPost(updateCommentPost);
    console.log("--------->", post);
  };
  return (
    <div>
      <h1>View All Post</h1>
      {post.map((singlePost, index) => {
        return (
          <div key={index}>
            
            <h3>Comment Section :</h3>
            {singlePost.comments?.length > 0 ? (
              singlePost.comments.map((comment, index) => {
                return (
                  <div>
                    <p>
                      Posted by : {postUsers[comment.userid]} :- {comment.text}{" "}
                      AT : {timeAgo(comment.timestamp)}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>No Comment Found</p>
            )}
            <h3>Comment</h3>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewcomment(e.target.value)}
              placeholder="add comment"
            />
            <button onClick={() => handleComment(singlePost.id)}>
              {" "}
              add commnet
            </button>
        
          </div>
        );
      })}
    </div>
  );
}
