// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button, Card } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db, storage } from "../../../firebaseConfig";

// export default function User() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   let image = "user.png";

//   let img1 = "i4.jpg";

//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.style.background = "url(i4.jpg)no-repeat center center/cover";
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     console.log(user.uid);

//     const userDoc = await getDoc(doc(db, "Stdent", user.uid));
//     if (userDoc.exists) {
//       console.log(userDoc.data());
//       console.log(userDoc.data().name);
//       alert(`welcome ${userDoc.data().name}`);
//       navigate("/dashboardPro", { replace: true });
//     }
//   };

//   return (
//     <Container
//       component="main"
//       sx={{ display: "flex", justifyContent: "center", marginTop: 8 }}
//     >
//       <Card elevation={3} sx={{ display: "flex", width: "600px", padding: 4 }}>
//         <Box sx={{ width: "50%" }}>
//           <Typography
//             variant="h5"
//             component="h1"
//             sx={{ textAlign: "center", mb: 2 }}
//           >
//             User Registration
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               label="Email"
//               type="email"
//               autoComplete="current-email"
//               sx={{ ml: 5, mb: 2 }}
//             />
//             <TextField
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//               sx={{ ml: 5, mb: 2 }}
//             />
//             <Button type="submit" variant="contained" sx={{ ml: 10, mb: 2 }}>
//               Register
//             </Button>
//           </form>
//           <h4
//             style={{ textAlign: "center", color: "gray", cursor: "pointer" }}
//             onClick={() => navigate("/")}
//           >
//             Create New Account
//           </h4>
//         </Box>
//         <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
//           <img src={image} alt="" width="200px" height="200px" />
//         </Box>
//       </Card>
//     </Container>
//   );
// }
