import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Toolbar,
  Typography,
  Divider,
  MenuItem,
  Grid,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  styled,
  TableCell,
  Table,
  tableCellClasses,
  IconButton,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Delete, Edit, Feedback } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const drawerWidth = 240;

// user tabel code start here

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e3f2fd",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// user tabel code end here

export default function Adminprofile() {
  const [allUsers, setAllusers] = React.useState([]);
  const [showcompo, setShowCompo] = useState(true);
  const [post, setPost] = React.useState([]);
  const [postUsers, setPostUsers] = React.useState({});
  const navigate = useNavigate();
  let img1 = "i4.jpg";

  React.useEffect(() => {
    fetchPostfun();
    fetchUsers();
    fetchAllUsers();
  }, []);

  useEffect(() => {
    document.body.style.background = "url(i4.jpg)no-repeat center center/cover";
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundSize = "cover";
  });
  const fetchAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Stdent"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ uid: doc.id, ...doc.data() });
    });
    setAllusers(users);
  };
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Stdent"));
    const users = {};
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      console.log("===>Record", record);
      console.log(".... doc id", doc.id);
      users[doc.id] = record.name;
    });
    console.log("users :", users);
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
  const handleLike = async (postid) => {
    const specific_post = await getDoc(doc(db, "Post", postid));
    const postDataLikeList = (await specific_post.data().likes) || [];
    console.log(".....> postdata", postDataLikeList);
    const user = auth.currentUser;
    if (postDataLikeList.includes(user.uid)) return;
    console.log("....> adding 1 like");
    await updateDoc(doc(db, "Post", postid), {
      likes: [...postDataLikeList, user.uid],
    });
    const updatePost = await post.map((post) =>
      post.id === postid ? { ...post, likes: [...post.likes, user.uid] } : post
    );
    setPost(updatePost);
    console.log("hey");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ bgcolor: "#fce4ec" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              width: "100%",
              textAlign: "center",
              alignContent: "center",
              fontSize: "30px",
            }}
          >
            Admin Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        variant="permanent"
        sx={{
          height: "100vh",
          overflow: "auto",
          bgcolor: "#e3f2fd",
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Divider />
            <MenuItem
              onClick={() => setShowCompo(true)}
              sx={{ fontSize: "20px" }}
            >
              All Users
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => setShowCompo(false)}
              sx={{ fontSize: "20px" }}
            >
              All Post
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handelLogout("adminid")}
              sx={{ fontSize: "20px" }}
            >
              Log Out
            </MenuItem>
            <Divider />
          </List>
          <Divider />
        </Box>
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
                      <Box sx={{ display: "flex" }}>
                        <IconButton onClick={() => handleLike(singlePost.id)}>
                          <FavoriteBorderIcon sx={{ height: "50px" }} />
                        </IconButton>
                        <IconButton>
                          <ChatBubbleOutlineIcon sx={{ height: "50px" }} />
                        </IconButton>
                        <IconButton>
                          <ShareIcon sx={{ height: "50px" }} />
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton>
                          <BookmarkIcon sx={{ height: "50px" }} />
                        </IconButton>
                      </Box>
                    </Box>
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
