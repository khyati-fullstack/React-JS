import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";

export default function Registerpage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [msg, setMsg] = useState();

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "Stdent", user.uid), {
          name: name,
          email: email,
        });
        setMsg("Successfully record instred");
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <h1>Registor page</h1>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <h1>{error}</h1>}
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
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
      <Link to="/GUEST">Go to Guest page</Link>

      <h4 onClick={() => navigate("/login")}>Go to Login page</h4>
n    </div>
  );
}
