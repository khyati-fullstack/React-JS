import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../../firebaseConfig";
import { doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function DashboardPro() {
  const [anchorEluser, setAnchorElUser] = useState(null);
  const [profileData, setProfiledata] = useState(null);
  const [profileUrl, setProfileurl] = useState();
  const [uplodingStatus, setUploadingSatatus] = useState(false);
  const [profileLogin, setProfilelogin] = useState(false);
  const [showpost, setShowpost] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState();
   const [allUsers, setAllusers] = React.useState([]);
   const [showcompo, setShowCompo] = useState(true);
   const [post, setPost] = React.useState([]);
   const [postUsers, setPostUsers] = React.useState({});
   const [newComment, setNewcomment] = useState("");
   const [isInputOpen, setInputOpen] = useState(null);
   const [isCommentOpen, setCommentOpen] = useState(null);
  const navigate = useNavigate("");

  let img1 = "DIY.jpeg";

  // code for user and post
   const fetchUsers = async () => {
     const querySnapshot = await getDocs(collection(db, "Stdent"));
     const users = {};
     querySnapshot.forEach((doc) => {
       const record = doc.data();
       users[doc.id] = record.name;
     });
     setPostUsers(users);
   };

   const fetchPostfun = async () => {
     try {
       const querySnapshot = await getDocs(collection(db, "Post"));
       const fetchPost = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setPost(fetchPost);
     } catch (error) {
       console.error("Error fetching posts: ", error);
     }
   };

   const handleDelete = async (postId) => {
     try {
       await deleteDoc(doc(db, "Post", postId));
       setPost(post.filter((post) => post.id !== postId));
     } catch (error) {
       console.error("Error deleting post: ", error);
     }
   };

   const handelLogout = async () => {
     try {
       await signOut(auth);
       navigate("/admin", { replace: true });
     } catch (error) {
       console.error("Error logging out: ", error);
     }
   };

   const deleteUser = async (userId) => {
     try {
       await deleteDoc(doc(db, "Stdent", userId));
       const updatedUsers = allUsers.filter((user) => user.uid !== userId);
       setAllusers(updatedUsers);
     } catch (error) {
       console.error("Error deleting user: ", error);
     }
   };

   const handleLike = async (postId) => {
     const specificPostRef = doc(db, "Post", postId);
     const specificPostSnap = await getDoc(specificPostRef);
     const postData = specificPostSnap.data();
     const user = auth.currentUser;

     if (!postData.likes) {
       postData.likes = [];
     }

     const updatedLikes = [...postData.likes];

     if (updatedLikes.includes(user.uid)) {
       const index = updatedLikes.indexOf(user.uid);
       updatedLikes.splice(index, 1);
     } else {
       updatedLikes.push(user.uid);
     }

     await updateDoc(specificPostRef, { likes: updatedLikes });

     const updatedPosts = post.map((p) => {
       if (p.id === postId) {
         return { ...p, likes: updatedLikes };
       }
       return p;
     });

     setPost(updatedPosts);
   };
   const handleComment = async (postid) => {
     const user = auth.currentUser;
     console.log("........", postid);

     const newCommentObj = {
       text: newComment,
       userid: user.uid,
       timestamp: Date.now(),
     };

     await updateDoc(doc(db, "Post", postid), {
       comments: arrayUnion(newCommentObj),
     });
     setNewcomment("");
     const updateCommentPost = await post.map((post) =>
       post.id === postid
         ? { ...post, comments: [...post.comments, newCommentObj] }
         : post
     );
     setPost(updateCommentPost);
     console.log("--------->", post);
     setInputOpen(null);
   };
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
   const handleDeleteComment = async (postid, commentIndex) => {
     const postDoc = await getDoc(doc(db, "Post", postid));
     const postData = postDoc.data();
     const updatedComments = [...postData.comments];
     updatedComments.splice(commentIndex, 1);
     await updateDoc(doc(db, "Post", postid), { comments: updatedComments });

     const updatedPost = post.map((singlePost) =>
       singlePost.id === postid
         ? { ...singlePost, comments: updatedComments }
         : singlePost
     );
     setPost(updatedPost);
   };

   const handleIconButtonClick = (index) => {
     setInputOpen(index === isInputOpen ? null : index);
   };
   const handleShareClick = () => {
     navigate("/chat");
   };
   const openComments = (index) => {
     setCommentOpen(index === isCommentOpen ? null : index);
   };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    // setProfilelogin(!profileLogin);
  };

  const fetchProfiledetails = async () => {
    const user = auth.currentUser;
    if (user) {
      const userData = await getDoc(doc(db, "Stdent", user.uid));
      setProfiledata(userData.data());
    }
    };
  useEffect(() => {
    document.body.style.background = "url(sky.jpg)no-repeat center center/cover";
  });

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProfiledetails(user);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUploadingSatatus(true);
    const user = auth.currentUser;

    if (user) {
      const storageRef = ref(storage, `profilepicture/${user.uid}`);
      await uploadBytes(storageRef, profileUrl);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log("----->downloadUrl", downloadUrl);
      await updateDoc(doc(db, "student", user.uid), {
        profilePic: downloadUrl,
      });
      const userData = await getDoc(doc(db, "Stdent", user.uid));
      setProfiledata(userData.data());
    }
    setUploadingSatatus(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };
  const handlemypostData = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const storageRef = await ref(storage, `Post/${user.uid}/${Date.now()}`);
    await uploadBytes(storageRef, imageLink);
    const downloadUrl = await getDownloadURL(storageRef);

    await setDoc(doc(db, "Post", `${Date.now()}`), {
      title: title,
      description: description,
      image: downloadUrl,
      userid: user.uid,
      timestamp: Date.now(),
    });
    // navigate("/AdminPro");
  };

  const handleShowHide = (value) => {
    setShowpost(value);
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar sx={{ bgcolor: "#fce4ec" }}>
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: "#90caf9",
                  fontSize: "30px",
                  fontFamily: "cursive",
                }}
              >
                User
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Opens settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ textAlign: "right", borderRadius: "50px" }}
                >
                  {
                    // profileData?.profilePic
                    profileData ? (
                      <Avatar alt="Remy Sharp" src={profileData?.profilePic} />
                    ) : (
                      <Avatar alt="Remy Sharp" src="userlogo.png" />
                    )
                  }
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorEluser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEluser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={() => handleShowHide("Profile")}>
                  Profile
                </MenuItem>
                <hr />
                <MenuItem onClick={() => handleShowHide("AddPost")}>
                  Add Post
                </MenuItem>
                <hr />
                <MenuItem onClick={() => handleShowHide("AdminProfile")}>
                  View Post
                </MenuItem>
                <hr />
                <MenuItem onClick={() => handleShowHide("AdminProfile")}>
                  All user
                </MenuItem>
                <hr />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Your main content with conditional rendering */}
      <Box
        component="div"
        sx={{
          backgroundImage: "url(bg.jpeg)",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center ",
          alignContent: "center",
        }}
      >
        <br /> <br /> <br /> <br />
        {showpost === "Profile" ? (
          <Card
            sx={{
              backdropFilter: "blur(5px)",
              background: "rgba(225, 225, 225, 0.1)",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
              color: "brown",
              width: "25%",
              m: "0 auto",
              padding: "10px",
              borderRadius: "30px",
            }}
          >
            <Container>
              <CardMedia
                sx={{
                  height: "130px",
                  width: "130px",
                  borderRadius: "50px",
                  margin: "0 auto",
                }}
              >
                <Avatar
                  sx={{ height: "130px", width: "130px", borderRadius: "50px" }}
                  alt="Remy Sharp"
                  src={profileData?.profilePic}
                />
              </CardMedia>
              <Typography sx={{ padding: "10px", color: "#f06292" }}>
                {profileData ? (
                  <Box
                    sx={{
                      padding: "10px",
                      textAlign: "center",
                      color: " brown[700]",
                    }}
                  >
                    <Typography>Welcome..., {profileData.name}</Typography>
                    <Typography>Email : {profileData.email}</Typography>
                  </Box>
                ) : (
                  "loding..."
                )}
                <form
                  onSubmit={handleSubmit}
                  style={{ color: brown[700], fontSize: "10px" }}
                >
                  <label htmlFor="">Upload your Image</label> :-
                  <input
                    type="file"
                    onChange={(e) => setProfileurl(e.target.files[0])}
                  />
                  <input type="submit" value="upload" />
                </form>
              </Typography>
            </Container>
          </Card>
        ) : showpost === "AddPost" ? (
          <FormControl>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="outlined-basic"
              label="Titel"
              variant="outlined"
            />
            <hr />
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <hr />
            <TextField
              type="file"
              onChange={(e) => setImageLink(e.target.files[0])}
            />
            <hr />
            <Button onClick={handlemypostData}>Add Post</Button>
          </FormControl>
        ) : (
          <h1>Welcome </h1>
        )}
      </Box>

      <Box>
        {}
        <Typography>Hey</Typography>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {!showcompo ? (
          <Grid container spacing={2}>
            {post.map((singlePost, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {singlePost.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      posted by : {postUsers[singlePost.userid]}
                    </Typography>
                    <img
                      src={singlePost.image}
                      alt="Post"
                      style={{ width: "100%", height: 200, objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton
                              onClick={() => handleLike(singlePost.id)}
                            >
                              {singlePost.likes &&
                              singlePost.likes.includes(
                                auth.currentUser.uid
                              ) ? (
                                <FavoriteIcon
                                  sx={{ height: "50px", color: "red" }}
                                />
                              ) : (
                                <FavoriteBorderIcon sx={{ height: "50px" }} />
                              )}
                            </IconButton>
                            <IconButton
                              onClick={() => handleIconButtonClick(index)}
                            >
                              <ChatBubbleOutlineIcon sx={{ height: "50px" }} />
                            </IconButton>
                            <IconButton onClick={handleShareClick}>
                              <ShareIcon sx={{ height: "50px" }} />
                            </IconButton>
                          </Box>
                        </Box>

                        {/* Spacing */}
                        <Box mb={2} width="100%">
                          <Grid container spacing={2} alignItems="center">
                            {/* Input field */}
                            <Grid item xs={isInputOpen === index ? 9 : 12}>
                              {isInputOpen === index && (
                                <div>
                                  <TextField
                                    value={newComment}
                                    onChange={(e) =>
                                      setNewcomment(e.target.value)
                                    }
                                    sx={{ textAlign: "center", width: "100%" }}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                      style: {
                                        borderRadius: "20px",
                                      },
                                      placeholder: "Write a comment",
                                    }}
                                  />
                                </div>
                              )}
                            </Grid>
                            {/* Post button */}
                            <Grid item xs={isInputOpen === index ? 3 : 0}>
                              {isInputOpen === index && (
                                <Button
                                  variant="outlined"
                                  size="large"
                                  onClick={() => handleComment(singlePost.id)}
                                  fullWidth
                                  sx={{
                                    backgroundColor: "#fce4ec",
                                    marginLeft: "20px",
                                    color: "gray",
                                    border: "none",
                                    height: "50px",
                                    width: "90px",
                                  }}
                                >
                                  Post
                                </Button>
                              )}
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>

                      <Box>
                        <IconButton
                          onClick={() => openComments(index)}
                          sx={{ margin: "10px" }}
                        >
                          <ExpandMoreIcon on />
                        </IconButton>
                      </Box>
                    </Box>
                    {isCommentOpen === index && (
                      <Box
                        id="modal-modal-description"
                        sx={{
                          m: 1,
                          height: "60vh",
                          overflow: "auto",
                        }}
                      >
                        {singlePost.comments?.length > 0 ? (
                          singlePost.comments.map((comment, index) => {
                            return (
                              <Card key={index} sx={{ m: 1 }}>
                                <CardHeader
                                  avatar={
                                    <Avatar
                                      alt="Profile Pic"
                                      src={singlePost.profilePic}
                                    />
                                  }
                                  action={
                                    <IconButton
                                      onClick={(e) =>
                                        handleDeleteComment(
                                          singlePost.id,
                                          index
                                        )
                                      }
                                    >
                                      <DeleteForeverOutlined
                                        sx={{
                                          width: "20px",
                                          height: "20px",
                                          mt: 1,
                                        }}
                                      />
                                    </IconButton>
                                  }
                                  title={
                                    <Typography>
                                      {postUsers[comment.userid]}
                                      ...
                                      {timeAgo(comment.timestamp)}
                                    </Typography>
                                  }
                                  subheader={
                                    <Typography>{comment.text}</Typography>
                                  }
                                ></CardHeader>
                              </Card>
                            );
                          })
                        ) : (
                          <p>No Comment Found</p>
                        )}
                                
                      </Box>
                    )}
                    <Typography>
                      {singlePost.likes?.length || 0} Like
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {singlePost.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleDelete(singlePost.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <h1 style={{ textAlign: "center" }}>All Users</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead sx={{ background: "#fce4ec", textAlign: "center" }}>
                  <TableRow>
                    <StyledTableCell align="center">Sr No</StyledTableCell>
                    <StyledTableCell align="center">Logo</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                      {" "}
                      Action
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUsers
                    ? allUsers.map((user, index) => {
                        return (
                          <StyledTableRow key={index}>
                            <StyledTableCell align="center">
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {user.profilepic ? (
                                <img
                                  src={user.profilepic}
                                  alt=""
                                  width={50}
                                  height={50}
                                />
                              ) : (
                                <img
                                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                  alt=""
                                  width={50}
                                  height={50}
                                />
                              )}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {user.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {user.email}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                              <Button
                                sx={{
                                  margin: "10px",
                                  bgcolor: "#e3f2fd",
                                  color: "black",
                                  border: "none",
                                }}
                                variant="outlined"
                                size="medium"
                                startIcon={<Edit />}
                                onClick={() => navigate(`/edit/${user.uid}`)}
                              >
                                Edit
                              </Button>
                              <Button
                                sx={{
                                  margin: "10px",
                                  bgcolor: "#e3f2fd",
                                  color: "black",
                                  border: "none",
                                }}
                                variant="outlined"
                                size="medium"
                                onClick={() => deleteUser(user.uid)}
                                endIcon={<Delete />}
                              >
                                Delete
                              </Button>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })
                    : "no user found"}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
}
