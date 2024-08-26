import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebaseConfig";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";

export default function Admin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let image = "admin.png";
  let img1 = "i4.jpg";

  useEffect(() => {
    document.body.style.background = "url(i4.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  });

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
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container component="main" sx={{ width: "800px" }}>
      <Card
        elevation={3}
        sx={{
          padding: 2,
          marginTop: 8,
          width: "800px",
          border: "10px solid transparent",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Registration Page
        </Typography>
        <br></br>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box>
            <img src={image} alt="" width="400px" height="400px" />
          </Box>
          <Box
            component="form"
            onSubmit={handelSubmit}
            sx={{
              "& .MuiTextField-root": { marginBottom: 2, width: "100%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-name-input"
              label="Name"
              type="text"
              autoComplete="current-name"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2, width: "100%" }}
            >
              Register
            </Button>
            <h4
              style={{ textAlign: "center", color: "gray", cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              Already have an account?User Login
            </h4>
            <h4
              style={{ textAlign: "center", color: "gray", cursor: "pointer" }}
              onClick={() => navigate("/admin")}
            >
              Already have an account?Admin Login
            </h4>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
