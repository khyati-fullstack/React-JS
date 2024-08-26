import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";

export default function Chatscreen() {
  const { uid } = useParams();

  const [currentUsername, setCurrentUsername] = useState();
  const [cid, setCid] = useState();
  const [chatperson, setChatperson] = useState();
  const [chatpersonid, setChatpersonid] = useState();
  const [newMessageinput, setNewmessageinput] = useState();
  const [allMessage,setAllMessage]=useState([]);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCurrentUser(user);
      }
    });
  }, []);

  useEffect(()=>{
     fetchAllMessage()

  },[cid,chatpersonid])
  const fetchCurrentUser = async (user) => {
    const cuid = await getDoc(doc(db, "Stdent", user.uid));
    setCid(user.uid);
    setCurrentUsername(cuid.data().name);

    const chatpersonData = await getDoc(doc(db, "Stdent", uid));
    setChatpersonid(uid);
    setChatperson(chatpersonData.data().name);
  };

  const HandelsendMessage = async () => {
    if (!newMessageinput.trim()) return;

    const newMessage = {
      senderId: cid,
      reciverId: chatpersonid,
      content: newMessageinput,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(db, "Chats"), newMessage);

    setNewmessageinput("");
  };

  const fetchAllMessage=async()=>{
    if (!cid || chatpersonid) return;

    const q = query(collection(db, "Chats"));
    where("senderId", "in", [cid, chatpersonid]);
    where("reciverId", "in", [cid, chatpersonid]);
    where("timestamp","asc");

    const querySnapshot = await getDocs(q)
    const fetchMessage = []
    querySnapshot.forEach((message)=>{
      fetchMessage.push(message.data())
    })
      setAllMessage(fetchMessage)
  
  }

  return (
    <div>
      <h1>Chat screen:{currentUsername}</h1>
      <h2>Lets start chat with:{chatperson}</h2>
      <input
        type="text"
         placeholder="enter msg" value={newMessageinput}
        onChange={(e) => setNewmessageinput(e.target.value)}
      />
      <button onClick={HandelsendMessage}>Send</button>
      <div style={{maxWidth:"300px",border:"2px solid black"}}>
        {allMessage.map((message,index)=>{
          return (
            <div
              key={index}
              style={{ textAlign: message.senderId === cid ? "right" : "left" }}
            >
              <p>
                <span style={{padding:"20px",color:message.senderId == cid ? "blue" : "purple"}}>
                  {message.content}
                </span>
              </p>
            </div>
          );
          
        })}
      </div>
    </div>
  );
}
