import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebaseConfig";

export default function Dashboard() {
  const [userDetail, setUserdetail] = useState(null);
  const [profilrUrl, setProfileUrl] = useState();
  const [uploadingStatus, setUploadingStatus] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCurrentDetails(user);
      }
    });
  }, []);
  const fetchCurrentDetails = async (user) => {
    // const user = auth.currentUser;
    if (user) {
      const userData = await getDoc(doc(db, "Stdent", user.uid));
      console.log(`Welcome dashboard ${userData.data().name}`);
      setUserdetail(userData.data());
    }
  };
  const handelLogout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("======>profileUSer", profilrUrl);
    setUploadingStatus(true);

    const user = auth.currentUser;

    if (user) {
      const strongRef = ref(storage, `profilepictures/${user.uid}`);
      // console.log(strongRef);
      await uploadBytes(strongRef, profilrUrl);
      const downloadUrl = await getDownloadURL(strongRef);
      console.log("------>downlodURL", downloadUrl);
      await updateDoc(doc(db, "Stdent", user.uid), {
        profilepic: downloadUrl,
      });
      const userData = await getDoc(doc(db, "Stndt", user.uid));
      setUserdetail(userData.data());
      setUploadingStatus(false);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {userDetail ? (
        <h1>
          welcome {userDetail.name} email:{userDetail.email}
        </h1>
      ) : (
        <h3>Loading....</h3>
      )}
      {userDetail?.profilepic ? (
        <img src={userDetail?.profilepic} width={50} height={50}></img>
      ) : (
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/administrator-5691513-4741054.png?f=webp"
          width={50}
          height={50}
        ></img>
      )}
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        <label>Upload yor image</label>
        <input type="file" onChange={(e) => setProfileUrl(e.target.files[0])} />
        <input type="submit" value="upload" />
      </form>
      <button onClick={handelLogout}>Logout</button>
      <h1 onClick={() => navigate("/newpost")}>newpost</h1>
      <h1 onClick={() => navigate("/viewpost")}>viewpost</h1>
      <h1 onClick={() => navigate("/allpost")}>Allpost</h1>
    </div>
  );
}
