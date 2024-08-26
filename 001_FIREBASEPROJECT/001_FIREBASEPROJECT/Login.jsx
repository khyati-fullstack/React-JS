import { TrainRounded } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user.uid);

    const userDoc = await getDoc(doc(db, "Stdent", user.uid));
    if (userDoc.exists) {
      console.log(userDoc.data());
      console.log(userDoc.data().name);
      alert(`welcome ${userDoc.data().name}`);
      navigate("/dashboard", { replace: true });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        {/* {msg && <p style={{ color: "green" }}>{msg}</p>} */}
        {/* {error && <h1>{error}</h1>} */}

        <input
          type="email"
          placeholder="Enter your email "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="pasword"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <h4 onClick={() => navigate("/dashboard", { replace: true })}>
        Dashboard
      </h4>
    </div>
  );
}
