import { Box, Button, Card, Container, TextField, Typography, styled } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Newcreatepage() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password , setPassword] = useState();
  const [error,setError] = useState();
  const [msg,setMsg] = useState();

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("---> submit button clicked")
    try{
    const userCredentials  = await createUserWithEmailAndPassword(auth,email,password)
    const user = userCredentials.user;
    if(user) {
      await setDoc(doc(db,"student" , user.uid ),{
        "name" : name,
        "email" : email
      })
      alert("successfuly record inserted");
      setMsg("successfuly record inserted");
    }
    }catch(e){
      setError(e.message);
    }
  }


  return (
    <Box component="div" sx={{backgroundImage :'url(bg.jpeg)',width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"50px 0",backgroundPosition:"center "}}>
      {msg && <p style={{color:"green"}}>{msg}</p>}
      {error && <p>{error}</p>}
      <Container maxWidth = 'ms'>
      <Card 
      sx={{backdropFilter: 'blur(7px)', background: 'rgba(150, 49, 50, 0.4)', boxShadow :'0 8px 32px rgba(31, 38, 135, 0.37)',color : 'brown' , width : '40%' , m : '0 auto' }}
      >
      <Box component= 'form'  onSubmit={(e)=>handleSubmit(e)}  sx={{display : 'flex' , flexDirection:'column',width : '70%',  m : '0 auto',padding:'20px', gap : 2}}>
      <Typography  variant='h5'  sx={{textAlign : 'center'}}>Registration Form</Typography>
      <TextField id="outlined-basic-name" type='text' label="Enter Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}
      sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
      />
      <TextField id="outlined-basic-email" type='email' label="Enter Email-ID" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}
      sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
      />
      <TextField id="outlined-basic-password" type='password' label="Enter Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}
      sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
      />
      <Button variant="outlined" size="medium" type='submit'
      sx={{color: 'brown',borderColor: 'brown','&:hover': {backgroundColor: 'rgba(165, 42, 42, 0.1)',borderColor: 'brown',},}}>
      Create Account</Button>
      <Typography sx={{color : 'whitesmoke'}}>-------------------------------------------------------</Typography>
      <Typography sx={{textAlign : 'center'}} onClick={()=>navigate("/loginpage")} >User Login</Typography>
      <Typography sx={{textAlign : 'center'}} onClick={()=>navigate("/adminlogin")}>Admin Login</Typography>
      </Box>
      </Card>
      </Container>
    </Box>
  )
}
