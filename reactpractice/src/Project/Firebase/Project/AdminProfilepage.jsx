import { AppBar, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, Container, CssBaseline, Divider, Drawer, FormControl, FormControlLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tabs, Toolbar, Typography } from '@mui/material';
import { brown, red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import {  db } from '../../../../firebaseConfig';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { MoreVert } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function AdminProfilepage() {
  const navigate = useNavigate();

  // All User
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [allusers, setAllusers] = useState([]);
  const [selectMenu,setSelectmenu] = useState('all user')

  // All Post...
  const [post,setPost] = useState([])
  const [postUsers,setPostUsers] = useState(null);
  const [newComment,setNewcomment] = useState('')
  const [profileData,setProfiledata] = useState(null);
  const [isIconclick,setIsiconclick] = useState([]);




  useEffect(()=>{
    fetchAllUsers();
    fetchPostfun();
    fetchUsers();
    // fetchIcon();
  },[])

  const fetchAllUsers = async() => {
    const querySnapshot = await getDocs(collection(db,'student'))
    const users = [];
    querySnapshot.forEach((doc)=>{
      users.push({uid : doc.id, ...doc.data()})
    })
    setAllusers(users)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleClick = (event) => {
    setSelectmenu(event)
  }

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const deleteUser = async(userid) => {
    await deleteDoc(doc(db,'student' , userid))
    const newarr = await allusers.filter(user => user.uid !== userid)
    setAllusers(newarr);
  }

  // all post

  const fetchUsers = async() => {
    const querySnapshot = await getDocs(collection(db,"student"))
    const users = {};
    querySnapshot.forEach((doc)=>{
      const record = doc.data();
      console.log("===>Record" , record);
      users[doc.id] = record.name
    })
    console.log("users" , users);
    setPostUsers(users);
  }

  const fetchPostfun = async() => {
    const querySnapshot = await getDocs(collection(db,"post"))
    const fetchPost = [];
    querySnapshot.forEach((doc) => {
        const record = doc.data();
        console.log('record', record);
        fetchPost.push({
            'id' : doc.id,
            'title' : record.title,
            'description' : record.description,
            'image' : record.image,
            'userid' : record.userid,
            'likes' : record.likes || [],
            'comments' : record.comments || [],
            'createdAt' : timeAgo(record.timestamp)
        })
    })
    console.log(fetchPost);
    setPost(fetchPost)
}

const timeAgo = (timestamp) => {
  const now = Date.now();
  const seconds = Math.floor((now - timestamp) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
      return `${interval} years ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
      return `${interval} months ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
      return `${interval} days ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
      return `${interval} hours ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
      return `${interval} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} sx={{ bgcolor: brown[700], zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex' }}>
        <Typography
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
        >
            <MenuIcon sx={{ fontSize: '40px', width: '40px' }} />
        </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontSize: '30px', fontFamily: 'cursive' }}>
            Admin Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', bgcolor: brown[400], height: '100vh' }}>
          <List sx={{ color: 'white' }}>
            <Divider sx={{ borderColor: brown[500]}} />
            <VisibilityIcon/>
            <MenuItem onClick={()=>handleClick('all user')} sx={{ fontSize: '20px' }}>All Users</MenuItem>
            <Divider sx={{ borderColor: brown[500] }} />
            <MenuItem onClick={()=>handleClick('all post')} sx={{ fontSize: '20px' }}>All Post</MenuItem>
            <Divider sx={{ borderColor: brown[500] }} />
            <MenuItem onClick={() => handleClick('admin id')} sx={{ fontSize: '20px' }}>Admin ID</MenuItem>
            <Divider sx={{ borderColor: brown[500] }} />
          </List>
        </Box>
      </Drawer>

      
      <Box component="main" sx={{ backgroundImage: 'url(bg.jpeg)', width: "100vw", height: "100vh", backgroundRepeat: "repeat", backgroundSize: "cover", padding: "40px 0", backgroundPosition: "center " }}>
        <Toolbar />
        <Box>
        {selectMenu === 'all user' && (
        <Paper
          sx={{ backdropFilter: 'blur(7px)', background: 'rgba(150, 49, 50, 0.4)', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)', color: brown[400], width: '80%', m: '0 auto', padding: '5px', }}
        >
          <TableContainer sx={{  width: "100%" , height : "60vh" }}>
            <Table sx={{border : 1}}>
              <TableHead >
                <TableRow stickyHeader aria-label="sticky table">
                  <TableCell sx={{border : '1px solid white', textAlign : 'center',fontSize : '20px', color : brown[900] }}>Sr No</TableCell>
                  <TableCell sx={{border : '1px solid white', textAlign : 'center',fontSize : '20px', color : brown[900] }}>Logo</TableCell>
                  <TableCell sx={{border : '1px solid white', textAlign : 'center',fontSize : '20px', color : brown[900] }}>Name</TableCell>
                  <TableCell sx={{border : '1px solid white', textAlign : 'center',fontSize : '20px', color : brown[900] }}>Email</TableCell>
                  <TableCell sx={{ columnSpan: 2 , border : '1px solid white', textAlign : 'center',fontSize : '20px', color : brown[900]}}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  allusers ?
                  allusers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user,index)=>{
                    return <TableRow key={index} hover role="checkbox" tabIndex={-1} >
                    <TableCell sx={{border : '1px solid white', textAlign : 'center',color : 'white' , fontSize : '20px' }}>{index + 1}</TableCell>
                    <TableCell sx={{border : '1px solid white', textAlign : 'center' }}>
                    {user.profilePic ?
                    <img src={user.profilePic} alt="" height={50} width={50} />
                    :
                    <img src="userlogo.png"height={50} width={50}/>
                    }
                    </TableCell>
                    <TableCell sx={{border : '1px solid white', textAlign : 'center',color : 'white' , fontSize : '20px' }}>{user.name}</TableCell>
                    <TableCell sx={{border : '1px solid white', textAlign : 'center',color : 'white' , fontSize : '20px' }}>{user.email}</TableCell>
                    <TableCell sx={{border : '1px solid white', textAlign : 'center','& button' : {m : 1} }}>
                      <Button variant='outlined' size='small' 
                      sx={{color: 'brown',borderColor: 'white','&:hover': {backgroundColor: 'rgba(165, 42, 42, 0.1)',borderColor: 'brown',},}}>
                      <EditTwoToneIcon sx={{ fontSize: '20px', width: '20px' }} /></Button> 
                      <Button variant='outlined' size='small' onClick={()=>deleteUser(user.uid)}
                      sx={{color: 'brown',borderColor: 'white','&:hover': {backgroundColor: 'rgba(165, 42, 42, 0.1)',borderColor: 'brown',},}}>
                      <DeleteTwoToneIcon sx={{ fontSize: '20px', width: '20px' }} /></Button>
                    </TableCell>
                  </TableRow>
                  })
                  :
                  <Typography>No User Found</Typography>
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
          rowsPerPageOptions={[3, 25, 100]}
          component="div"
          count={allusers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
        )}
        </Box>

        <Box>
        {selectMenu === 'all post' && (
        <Box sx={{ width: '35%', height: '80vh', overflow: 'auto', margin : "0 auto" }}>
        {post.map((singlePost,index)=>{
           return <Card key={index} sx={{ maxWidth: 350, m:1 }}>
        <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={singlePost.profilePic} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert></MoreVert>
          </IconButton>
        }
        title={postUsers[singlePost.userid]}
        subheader=  {singlePost.title}
      >
      </CardHeader>
      <CardMedia
        height="200"
      >
      <Avatar sx={{height : '190px' , width : '350px' , borderRadius : '0px'}} alt="Remy Sharp" src={singlePost.image} />
      </CardMedia>
      <Box disableSpacing sx={{display : 'flex' , justifyContent : 'space-between'}}>
        <Box>
        <IconButton aria-label="add to favorites" onClick={()=>handleLike(singlePost.id)} >
        <FavoriteIcon sx={{ fontSize: '20px', width: '20px',  fill : 'red'  }}   />
        </IconButton>
        <IconButton aria-label="share">
        <ModeCommentOutlinedIcon sx={{ fontSize: '20px', width: '20px' }} />
        </IconButton>
        <IconButton aria-label="share">
        <SendOutlinedIcon sx={{ fontSize: '20px', width: '20px' }} />
        </IconButton>
        </Box>
        <Box>
        <IconButton aria-label="share">
        <BookmarkBorderOutlinedIcon sx={{ fontSize: '20px', width: '20px' }} />
        </IconButton>
        </Box>
      </Box>
      <Box sx={{padding : " 0px 2px 10px 10px"}}>
      <Typography>
        {singlePost.likes?.length || 0 } Like
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {singlePost.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {singlePost.createdAt}
        </Typography>
        </Box>
        </Card>
        })
        }
        </Box>
          )}
        </Box>

          <Box>
          {selectMenu === 'admin id' && (
            <Paper sx={{ padding: '20px', marginTop: '20px' }}>
              <Typography variant="h6">Admin ID</Typography>
              <Typography>Here you can display specific admin details or any other relevant information.</Typography>
            </Paper>
          )}
          </Box>

      </Box>
      
    </Box>
  );
}
