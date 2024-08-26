import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../../../firebaseConfig';
import { brown } from '@mui/material/colors';

export default function Adminloginpage() {
  const [email , setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    document.body.style.background = "url(bg.avif)no-repeat center/cover"
  },[])
  const handleSubmit = async(e) => {
    e.preventDefault();

    const userCredentials = await signInWithEmailAndPassword(auth,email,password)
    const user = userCredentials.user
    const userDoc = await getDoc(doc(db, 'student' , user.uid));
    if(userDoc.exists){
      navigate("/adminprofile" , {replace : true})
    }
  }


  return (
    <Box component="div" sx={{backgroundImage :'url(bg.jpeg)',width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center ", alignContent : 'center'}}>
      <Container maxWidth = 'sm'>
        <Card sx={{backdropFilter : 'blur(5px)',background: 'rgba(255, 255, 255, 0.1)', boxShadow :'0 8px 32px rgba(31, 38, 135, 0.37)' , m : '0 auto', display : 'flex' }}>
        <Box component= 'form' onSubmit={handleSubmit} sx={{display : 'flex', flexDirection : 'column' ,width : '60%',  m : '0 auto',padding:'20px', gap : 2 }} >
        <Typography variant='h4' sx={{textAlign : 'center', color : 'brown' , fontFamily : "monospace"}}>Admin Login</Typography>
        <TextField id="outlined-basic-email" type='email' label="Enter Email-ID" variant="outlined" onChange={(e)=>setEmail(e.target.value)}
        sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
        ></TextField>
        <TextField id="outlined-basic-password" type='password' label="Enter Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}
        sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
        ></TextField>
      <Button variant="outlined" size="small" type='submit'
      sx={{color: 'brown',borderColor: 'brown','&:hover': {backgroundColor: 'rgba(165, 42, 42, 0.1)',borderColor: 'brown',},}}>
      Login </Button>
        </Box>
        <Box sx={{margin : "15px" , backgroundColor : brown[500],  width : "20vw" , height : "45vh" }}>
            <Card sx={{backdropFilter : 'blur(5px)',background: 'rgba(255, 255, 255, 0.1)', boxShadow :'0 8px 32px rgba(31, 38, 135, 0.37)' ,  alignContent : 'center', textAlign : 'center', height: '30vh', margin : '10px', color : 'white'}}>
            <Typography variant='h5' sx={{fontFamily : 'initial', p : 2}}>Hello Admin</Typography>
            <Typography variant='p' sx={{fontFamily : 'cursive',textAlign : 'center', margin : '10px'}}>Enter Your Personal <br /> Details and start <br /> journey  with us</Typography>
            </Card>
            <Button variant='outlined' size='small' type='submit' onClick={()=>navigate("/")}
            sx={{color: 'white',borderColor: 'white','&:hover': {backgroundColor: 'rgba(165, 42, 42, 0.1)',borderColor: 'white'}, margin : ' 0px 22px'}}>
            Create New Account</Button>
        </Box>
      </Card>
      </Container>
      </Box>
  )
}
