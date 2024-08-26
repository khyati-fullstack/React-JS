import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db } from '../../../firebaseConfig';
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';

export default function Chatbox() {
  const {uid} = useParams()

  const [currentUsername,setCurrentUsername] = useState();
  const [cid,setCid] = useState();
  const [chatperson,setChatperson] = useState();
  const [chatpersonid,setChatpersonid] = useState();
  const [newMessageinput,setNewMessageInput] = useState('');
  const [allMessages,setAllMessages] = useState([])

  useEffect(()=>{
    const subscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        fetchCurrentUser(user);
      }
    })
  },[])
  useEffect(()=>{
    fetchAllMessages()
  },[cid,chatpersonid])
  const fetchCurrentUser = async(user)=>{
    const cuid = await getDoc(doc(db,"student",user.uid))
    setCid(user.uid)
    setCurrentUsername(cuid.data().name)

    const chatpersonData = await getDoc(doc(db,"student",uid))
    setChatpersonid(uid);
    setChatperson(chatpersonData.data().name);
  }

  const handleSendMessage = async() => {
    if(!newMessageinput.trim()) return;

    const newMessage = {
      sendId : cid,
      receiverId : chatpersonid,
      content : newMessageinput,
      timestamp : serverTimestamp()
    }

    await addDoc(collection(db,"chats"),newMessage);
    setNewMessageInput("")
  }
  const fetchAllMessages = async() => {
    if(!cid || chatpersonid) return

    const q = query(collection(db,"chats"))
    where("sendId","in",[cid,chatpersonid])
    where("receiverId","in",[cid,chatpersonid])
    where("timestamp","asc")

    const querySnapshot = await getDocs(q);
    const fetchMessage = []
    querySnapshot.forEach((message)=>{
      fetchMessage.push(message.data())
    })
    setAllMessages(fetchMessage);
   }

  return (
    <div>
      <h1>Chat screen:{currentUsername}</h1>
      <h2>Lets start chat with:{chatperson}</h2>
      <input type="text" value={newMessageinput} onChange={(e)=>setNewMessageInput(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
      <div style={{maxWidth : "300px",border : "2px solid black"}}>
      {
        allMessages.map((message,index)=>{
          return <div key={index} style={{textAlign : message.sendId === cid ? "right" : "left"}}>
            <p>
              <span style={{padding : '20px',color:message.sendId == cid ? "blue":"purple"}}>
                {message.content}
              </span>
            </p>
          </div>
        })
      }
      </div>
    </div>
  )
}
