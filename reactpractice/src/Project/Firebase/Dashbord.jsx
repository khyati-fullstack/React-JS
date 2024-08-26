import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function Dashbord() {

    const [uplodingStatus,setUploadingSatatus] = useState(false)
    const [profileUrl,setProfileurl] = useState()
    const [userDetails,setUserdetails] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                fetchUserdetails(user);
            }
        })
        
    },[])
    const fetchUserdetails = async(user) => {
        // const user = auth.currentUser;
        if(user){
            const userData = await getDoc(doc(db,"student" , user.uid));
            // console.log(`welcome dashboard ${userData.data().name}`);
            setUserdetails(userData.data());
        }
    }
    const handleLogout = async() => {
        await signOut(auth);
        navigate("/login",{replace:true})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("......>ProfileURL", profileUrl);
        // setUploadingSatatus(true);
        const user = auth.currentUser;

        if(user){
            const storageRef =  ref(storage,`profilepicture/${user.uid}`)
            await uploadBytes(storageRef,profileUrl)

            const dowloadUrl = await getDownloadURL(storageRef);
            console.log("----->downloadUrl",dowloadUrl);
            await updateDoc(doc(db,"student",user.uid),{
                "profilepic" : dowloadUrl
            })
            const userData = await getDoc(doc(db,"student",user.uid));
            setUserdetails(userData.data())
         }
         setUploadingSatatus(false);
    }


  return (
    <div>
        {userDetails ? <h1>WelCome {userDetails.name}  <br />
            Email : {userDetails.email}
            </h1>: "loading...."}
        {userDetails?.profilepic ? <img src={userDetails?.profilepic} width={50} height={50}/>: <img src="https://www.google.com/search?q=no+user+profile+picture&rlz=1C1RXQR_enIN1066IN1066&oq=no+user+pro&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIICAYQABgWGB4yCggHEAAYChgWGB4yCAgIEAAYFhgeMggICRAAGBYYHqgCALACAA&sourceid=chrome&ie=UTF-8#vhid=IFTclT_pNlD0eM&vssid=l" width={50} height={50} />}
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="">Upload your Image</label>
            <input type='file' onChange={(e)=>setProfileurl(e.target.files[0])}/>
            <input type='submit' value="upload"/>
        </form>
        
        <button onClick={handleLogout}>LogOut</button>
        <h1 onClick={()=>navigate("/newpost")}>New Post</h1>
        <h1 onClick={()=>navigate("/viewpost")}>View Post</h1>
        <h2 onClick={()=>navigate("/mypost")}>View My Post</h2>
        <h2 onClick={()=>navigate("/allusers")}>All-Users</h2>

    </div>
  )
}
