import { Box, Button, Container, Input, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db, storage } from '../../../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

export default function AddPost() {
    const [title,setTitle] = useState('')
    const [description , setDescription] = useState("");
    const [imageLink,setImageLink] = useState();
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
      e.preventDefault();
      const user = auth.currentUser;
      const storageRef = await ref(storage,`post/${user.uid}/${Date.now()}`)
      await uploadBytes(storageRef,imageLink);
      const downloadUrl = await getDownloadURL(storageRef)

      await setDoc(doc(db,"post",`${Date.now()}`),{
        "title" : title,
        "description" : description,
        "image" : downloadUrl,
        "userid" : user.uid,
        "timestamp" : Date.now()
      })
    }
    
  return (
    <Box   sx={{backgroundImage :'url(bg.jpeg)',width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center ", alignContent : 'center'}}>
      <Container maxWidth = 'ms'>
      <Paper 
      sx={{backdropFilter: 'blur(7px)', background: 'rgba(150, 49, 50, 0.4)', boxShadow :'0 8px 32px rgba(31, 38, 135, 0.37)',color : 'brown' , width : '40%' , m : '0 auto' }}
      >
      <Box component= 'form'  onSubmit={(e)=>handleSubmit(e)}  sx={{display : 'flex' , flexDirection:'column',width : '70%',  m : '0 auto',padding:'20px', gap : 2}}>
      <Typography  variant='h5'  sx={{textAlign : 'center'}}>Add New Post</Typography>
      <TextField id="outlined-basic-name" type='text' label="Enter Name" variant="outlined" onChange={(e)=>setTitle(e.target.value)}
      sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
      />
      <TextareaAutosize style={{fontFamily : 'cursive', backdropFilter: 'blur', backgroundColor : 'transparent' , boxShadow :'0 8px 32px rgba(31, 38, 135, 0.37)',color : 'white', border : '1px solid brown' }}  aria-label="minimum height" minRows={6} onChange={(e)=>setDescription(e.target.value)} />
      <TextField type='file' onChange={(e)=>setImageLink(e.target.files[0])}
            sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'brown'},'&:hover fieldset': {borderColor: 'brown'},'&.Mui-focused fieldset': {borderColor: 'brown'},},'& .MuiInputLabel-root': {color: 'brown'},'& .MuiInputLabel-root.Mui-focused': {color: 'brown'},}}
       />
      <Button variant="outlined" size="medium" type='submit' 
      sx={{color: 'brown',borderColor: 'brown','&:hover': {backgroundColor: 'rgba(165, 42, 42, 0.1)',borderColor: 'brown',},}}>
      Add Post</Button>
      <Typography sx={{textAlign : 'center', p : 2}} onClick={()=>navigate("/userprofile")}>User Profile</Typography>
      </Box>
      </Paper>
      </Container>
    </Box>
  )
}
