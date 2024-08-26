import {AppBar,Avatar,Box,Button,Card,CardHeader,CardMedia,Container,Drawer,IconButton,Menu,MenuItem,Modal,Paper,Tab,Tabs,TextField,Toolbar,Tooltip,Typography} from '@mui/material';
import { blue, brown } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../../../firebaseConfig';
import { arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ChatIcon from '@mui/icons-material/Chat';
import { DataArray, MoreVert } from '@mui/icons-material';

export default function UserProfilepage() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [showData, setShowData] = useState('home-page');

  // All Post...
  const [anchorElPost, setAnchorElPost] = useState(null);
  const [post,setPost] = useState([])
  const [postUsers,setPostUsers] = useState(null);
  const [newComment,setNewcomment] = useState('')
  const [isIconclick,setIsiconclick] = useState([]);
  const [open,setOpen] = useState(false)

  const navigate = useNavigate();

  const handleProfileButton = (e) => {
    setAnchorElUser(e.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleIconButton = (data) => {
    setShowData(data);
  };

  const handleIconAddButton = () => {
    navigate('/addpost', { replace: true });
  };

  const fetchProfileDetails = async () => {
    const user = auth.currentUser;
    if (user) {
      const userData = await getDoc(doc(db, 'student', user.uid));
      setProfileData(userData.data());
    }
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProfileDetails();
        
      }
    });
    return () => subscribe();
  }, []);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadingStatus(true);
    const user = auth.currentUser;

    if (user) {
      const storageRef = ref(storage, `profilepicture/${user.uid}`);
      await uploadBytes(storageRef, profileUrl);
      const downloadUrl = await getDownloadURL(storageRef);
      await updateDoc(doc(db, 'student', user.uid), {
        profilePic: downloadUrl,
      });
      const userData = await getDoc(doc(db, 'student', user.uid));
      setProfileData(userData.data());
    }
    setUploadingStatus(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/', { replace: true });
  };

  const handleProfileMenu = () => {
    setShowData('profile-page');
    handleCloseUserMenu();
  };

  // All-post

  useEffect(()=>{
    fetchPostfun();
    fetchUsers();
  },[])

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
            'profilePic' : record.profilePic,
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
  };

  const handleLike = async (postid) => {
    const specific_post = await getDoc(doc(db, 'post', postid));
    const postDataLikeList = specific_post.data().likes || [];
    const user = auth.currentUser;
  
    if (postDataLikeList.includes(user.uid)) {
      const newLikeList = postDataLikeList.filter((uid) => uid !== user.uid);
      await updateDoc(doc(db, 'post', postid), {
        likes: newLikeList,
      });
      const updatedPost = post.map((post) => post.id === postid ? { ...post, likes: newLikeList } : post);
      setPost(updatedPost);
    } else {
      const newLikeList = [...postDataLikeList, user.uid];
      await updateDoc(doc(db, 'post', postid), {
        likes: newLikeList,
      });
      const updatedPost = post.map((post) => post.id === postid ? { ...post, likes: newLikeList } : post);
      setPost(updatedPost);
    }
    setIsiconclick(!isIconclick);
  };
  

  const handleComment = async(postid)=>{
    const user = auth.currentUser;
    console.log("........" , postid);

    const newCommentObj = {
        text : newComment,
        userid : user.uid,
        timestamp : Date.now()
    }
   
    await updateDoc(doc(db,"post",postid),{
        "comments": arrayUnion(newCommentObj)
    })
    setNewcomment("");
    const updateCommentPost = await post.map((post)=> post.id === postid ? {...post,"comments" : [...post.comments, newCommentObj]} : post )
    setPost(updateCommentPost)
    console.log('--------->' ,post);
}

  const handleDelete = async(docid) => {
    console.log("---> delete ", docid);
    await deleteDoc(doc(db,'post' , docid))
    setPost(post.filter(item => item.id !== docid))
    handleDeleteMenu()
  }
  const handleDeleteComment = async (postid, commentIndex) => {
    const postDoc = await getDoc(doc(db, 'post', postid));
    const postData = postDoc.data();
    const updatedComments = [...postData.comments];
    updatedComments.splice(commentIndex, 1);
    await updateDoc(doc(db, 'post', postid), { comments: updatedComments });

    const updatedPost = post.map((singlePost) =>
      singlePost.id === postid
        ? { ...singlePost, comments: updatedComments }
        : singlePost
    );
    setPost(updatedPost);
  };
    const handleDeleteButton = (e,postId) => {
    setAnchorElPost({target : e.currentTarget,postId});
  }

  const handleDeleteMenu = () => {
    setAnchorElPost(null);
  }

  const handleOpen = (postId) => {
    setOpen((prev) => ({ ...prev, [postId]: true }));
  };

  const handleClose = (postId) => {
    setOpen((prev) => ({ ...prev, [postId]: false }));
  };

  return (
    <Box sx={{width : '100%'}}>
      <AppBar sx={{ bgcolor: brown[700] }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                variant="h3"
                sx={{ color: 'white', fontSize: '30px', fontFamily: 'cursive' }}
              >
                User
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                sx={{ color: 'white' }}
                onClick={() => handleIconButton('home-page')}
              >
                <HomeRoundedIcon sx={{ fontSize: '30px', width: '30px' }} />
              </Button>
              <Button sx={{ color: 'white' }} onClick={() => handleIconButton('all-post')}>
                <SlideshowRoundedIcon sx={{ fontSize: '30px', width: '30px' }} />
              </Button>
              <Button sx={{ color: 'white' }} onClick={handleIconAddButton}>
                <AddCircleOutlineRoundedIcon
                  sx={{ fontSize: '30px', width: '30px' }}
                />
              </Button>
              <Button
                sx={{ color: 'white' }}
              >
                <ChatIcon sx={{ fontSize: '30px', width: '30px' }} />
              </Button>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleProfileButton}
                    sx={{ textAlign: 'right', borderRadius: '50px' }}
                  >
                    {profileData ? (
                      <Avatar alt="Profile Pic" src={profileData?.profilePic} />
                    ) : (
                      <Avatar alt="Profile Pic" src="userlogo.png" />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleProfileMenu}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="div"
        sx={{
          backgroundImage: 'url(bg.jpeg)',
          width: '100%',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          alignContent: 'center',
        }}
      >
        <br />
        <br />
        <br />
        <br />

        {/* Home Page */}
        {showData === 'home-page' && (
          <Typography variant='h5' sx={{textAlign : 'center' , alignContent : 'center', fontSize : '50px' , fontFamily :'monospace' , color : brown[700]}}>
        Welcome <br /> to <br /> user page</Typography>
        )}

        {/* Profile Page */}
        {showData === 'profile-page' && (
          <Card
            sx={{
              backdropFilter: 'blur(5px)',
              background: 'rgba(225, 225, 225, 0.1)',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              color: 'brown',
              width: '25%',
              m: '0 auto',
              padding: '10px',
              borderRadius: '30px',
            }}
          >
            <Container>
              <CardMedia
                sx={{
                  height: '130px',
                  width: '130px',
                  borderRadius: '50px',
                  margin: '0 auto',
                }}
              >
                <Avatar
                  sx={{
                    height: '130px',
                    width: '130px',
                    borderRadius: '50px',
                  }}
                  alt="Profile Pic"
                  src={profileData?.profilePic}
                />
              </CardMedia>
              <Typography sx={{ padding: '10px', color: 'white' }}>
                {profileData ? (
                  <Box
                    sx={{
                      padding: '10px',
                      textAlign: 'center',
                      color: brown[700],
                    }}
                  >
                    <Typography>Welcome..., {profileData.name}</Typography>
                    <Typography>Email: {profileData.email}</Typography>
                    <Typography>Bio: ____________</Typography>
                  </Box>
                ) : (
                  'loading...'
                )}
                <form onSubmit={handleSubmit} style={{ color: brown[700], fontSize: '10px' }}>
                  <label htmlFor="">Upload your Image</label> :-
                  <input type="file" onChange={(e) => setProfileUrl(e.target.files[0])} />
                  <input type="submit" value="upload" />
                </form>
              </Typography>
            </Container>
          </Card>
        )}

        {/* All Post */}
        {showData === 'all-post' && (
        <Box sx={{ width: '30%', height: '80vh', scrollbarWidth: 'none',overflow:'auto', m : '0 auto' }}>
        {post.map((singlePost,index)=>{
           return <Card key={index} sx={{ maxWidth: 400, m:1}}>
        <CardHeader
        avatar={singlePost? (
          <Avatar alt="Profile Pic" src={postUsers[singlePost.profilePic]}  />
        ) : (
          <Avatar alt="Profile Pic" src="userlogo.png" />
        )}
        action={
          <IconButton onClick={(e) => handleDeleteButton(e, singlePost.id)}>
            <MoreVert />
            {anchorElPost && (
          <Menu
            id="post-menu"
            anchorEl={anchorElPost.target}
            keepMounted
            open={Boolean(anchorElPost)}
            onClose={handleDeleteMenu}
          >
            <MenuItem onClick={() => handleDelete(anchorElPost.postId)}>Delete Post</MenuItem>
          </Menu>
        )}
        </IconButton>
        }
        title={postUsers[singlePost.userid]}
        subheader=  {singlePost.title}
      >
        </CardHeader>
      <CardMedia
        height="200"
      >
      <Avatar sx={{height : '190px' , width : '369px' , borderRadius : '0px'}} alt="Remy Sharp" src={singlePost.image} />
      </CardMedia>
      <Box disableSpacing sx={{display : 'flex' , justifyContent : 'space-between', margin : "10px 0px"}}>
        <Box>
        <IconButton aria-label="add to favorites" onClick={()=>handleLike(singlePost.id)} >
        {singlePost.likes && singlePost.likes.includes(auth.currentUser.uid  ) ? (
                     <FavoriteIcon
                     sx={{ fontSize: '20px', width: '20px', color: "red" }}/>   
                     ) : ( <FavoriteBorderIcon sx={{ fontSize: '20px', width: '20px' }} />)}
        </IconButton>
        <IconButton aria-label="share" onClick={()=>handleOpen(singlePost.id)}>
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
        <Modal
        open={Boolean(open[singlePost.id])}
        onClose={() => handleClose(singlePost.id)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={{boxShadow: 24,width: '40%',bgcolor: 'background.paper',margin: '80px auto', p : 1}}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign :'center'}}>
        Comment Box
        </Typography>
        <Box id="modal-modal-description" sx={{ m: 1,height: '60vh', overflow : 'auto' }}>
        {singlePost.comments?.length > 0
              ?
                singlePost.comments.map((comment,index)=>{
                    return <Card key={index} sx={{m : 1}}>
                    <CardHeader
                    avatar={<Avatar alt="Profile Pic" src={singlePost.profilePic} />}
                    action={
                    <IconButton onClick={(e) => handleDeleteComment(singlePost.id,index)}>
                      <DeleteOutlineIcon sx={{width :'20px', height:'20px',mt:1}}/>
                    </IconButton>
                    }
                    
                    title= {<Typography>{postUsers[comment.userid]}...{timeAgo(comment.timestamp)}</Typography> }
                    subheader= {<Typography>{comment.text}</Typography>} 
                    
                    >
                    </CardHeader>
                    </Card>
                })
                    :
                    <p>No Comment Found</p>
                    }
        </Box>
        <Box sx={{ml:1}}>
        <TextField size="small" type='text' value={newComment} onChange={(e)=>setNewcomment(e.target.value)} placeholder='add comment' sx={{width:"74%"}}/>
        <Button variant='outlined' size='large' onClick={()=>handleComment(singlePost.id)}>Post</Button>
        </Box>
        </Box>
        </Modal>
        </Card>
        })}
        </Box>
          )}
      </Box>
    </Box>
  );
}