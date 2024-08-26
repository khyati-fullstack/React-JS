import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Allusers() {
    const [currentUserRecord, setCurrentUserRecord] = useState ();
    const [users,setUsers] = useState([]);
    const [currentUid , setUid] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(user)=>{
            if(user)
                {
                    fetchCurrentDetails(user);
                }
        })
    },[])

    useEffect(()=>{
        if(currentUid){
            fetchAllUsers();
        }
    },[currentUid]);

    const fetchCurrentDetails = async(user) => {
        if(user){
            const userData = await getDoc(doc(db, 'student' , user.uid));
            setCurrentUserRecord(userData.data());
            console.log("---------->" , userData.id);
            setUid(userData.id)
        }
    }

    const  fetchAllUsers = async() => {
        const querySnapshot = await getDocs(collection(db,"student"))
        const allusersData = []

        querySnapshot.forEach((doc)=>{
            const record = doc.data();
            console.log("--->cid",currentUid);
            console.log("--->did", doc.id);
            if(doc.id !== currentUid){
                console.log(record);
                allusersData.push({uid:doc.id,...doc.data()})
            }
        })
        setUsers(allusersData)
    }
  return (
    <div>
        {
            currentUserRecord ?
            <>
            <p>Logged In By : {currentUserRecord.name}</p>
            <table border={1}>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users
              ?
              users.map((user,index)=>{
                return<tr key={index}>
                  <td>{index+1}</td>
                  <td>
                  {user.profilepic
                  ?
                  <img src={user.profilepic} alt="" width={50} height={50} />
                  :
                  <img src="userlogo.png" width={50} height={50} />
                  }
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><button onClick={()=>navigate(`/chatbox/${user.uid}`)}>masseg</button></td>
                </tr>
              })
              :
              "no user found"
            }
          </tbody>
        </table>
            </>
            :
            "Loading"
        }

    </div>
  )
}
