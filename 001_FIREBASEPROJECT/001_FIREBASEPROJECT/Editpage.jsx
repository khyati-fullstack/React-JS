import { async } from "@firebase/util";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../../firebaseConfig";

export default function Editpage() {
  const { uid } = useParams();

  const [name, setName] = useState();j
  const [profilepic, setProfilepic] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [uid]);

  const fetchUser = async () => {
    const userData = await getDoc(doc(db, "Stdent", uid));

    setName(userData.data().name);
    setProfilepic(userData.data().profilepic);
    setEmail(userData.data().email);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "Stdent", uid), {
      name: name,
    });
    if(profilepic){
        console.log("hello");
        const storageRef= await ref(storage,`profilepic
/${uid}`)
        await uploadBytes(storageRef, profilepic);
        const downloadUrl = await getDownloadURL(storageRef);
        await updateDoc(doc(db,"Stdent",uid),{
            'profilepic' : downloadUrl
        })
    }

    navigate("/guest", { replace: true });
  };
  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <h3>Edit user Details</h3>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="Enter your email " disabled />
        <input type="file" onChange={(e) => setProfilepic(e.target.files[0])}/>
        <button>Update</button>
      </form>
    </div>
  );
}
