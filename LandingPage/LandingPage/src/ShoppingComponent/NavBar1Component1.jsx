import {
  AppBar,
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  colors,
} from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import {
  CardTravel,
  CloudUpload,
  ExpandMore,
  Favorite,
  HeadphonesOutlined,
  HeartBroken,
  Microsoft,
  Person,
  Restore,
  Search,
  SearchRounded,
  ShoppingCart,
} from "@mui/icons-material";
import Component2 from "./Component2";

export default function NavBar1Component1() {
  return (
    <>
      <Box
        sx={{
          display:{ xs:'block',sm:'block',md:"flex",lg:'flex'},
          // width:{xs:'100%',sm:'100%'},
          fontFamily: "serif",
          justifyContent: "space-between",
          px: 1,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <p>About us</p>
          <p>My Account</p>
          <p>Wishlist</p>
          <p>Order Tracking</p>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <p>Get great devices up to 50% off</p>
          <p> View details</p>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <p> Need help call us 1800 1200</p>

          <Button
            sx={{ color: "black" }}
            variant="text"
            startIcon={<LanguageIcon />}
          >
            English
          </Button>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Select Cur</InputLabel>
            <Select sx={{ width: "10ch" }}>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="AUD">AUD</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          display:{ xs:'block',sm:'block',md:"flex",lg:'flex'},
          gap:{xs:'20px'},
          fontFamily: "serif",
          justifyContent: "space-between",
          px: 1,
          alignItems: "center",
        }}
      >
        <Box>
          <img src="grocery.png" style={{ width: 150, height: 150 }} alt="" />
        </Box>

        <Box
          sx={{
            display:{ xs:'block',sm:'block',md:"flex",lg:'flex'},
            gap:{xs:'20px',sm:'10px',md:'20px'},
            alignItems: "center",
            gap: 1,
            position: "relative",
          }}
        >
          <label htmlFor="">All cateogries </label>

          <TextField
            id="outlined-multiline-flexible"
            label="Search"
            variant="outlined"
            sx={{ width: "35ch", textAlign: "center" }}
          />
          <SearchRounded
            sx={{ position: "absolute", top: "20px", left: "340px"  }}
            
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexWrap:'wrap' }}>
          
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Select Your Location
            </InputLabel>
            <Select sx={{ width: "22ch" }}>
              <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
              <MenuItem value={"Surat"}>Surat</MenuItem>
              <MenuItem value={"Rajkot"}>Rajkot</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="text"
              startIcon={<Restore />}
              sx={{ color: "black" }}
            >
              Compare
            </Button>

            <Button
              variant="text"
              startIcon={<Favorite />}
              sx={{ color: "black" }}
            >
              Wishlist
            </Button>

            <Button
              variant="text"
              startIcon={<ShoppingCart />}
              sx={{ color: "black" }}
            >
              Cart
            </Button>

            <Button
              variant="text"
              startIcon={<Person />}
              sx={{ color: "black" }}
            >
              Account
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", flexWrap:{xs:'wrap',sm:'wrap'}, alignItems:'center' , gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<Microsoft />}
            endIcon={<ExpandMore />}
            sx={{width:'200px',height:'100px'}}
          >
            Browse All cateogries
          </Button>

          <Button
            variant="text"
            sx={{ color: "black" }}
            startIcon={<CloudUpload />}
          >
            Hot Deals
          </Button>
          <Button variant="text" sx={{ color: "black" }}>
            Home
          </Button>
          <Button variant="text" sx={{ color: "black" }}>
            About
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            endIcon={<ExpandMore />}
          >
            Shop
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            endIcon={<ExpandMore />}
          >
            Vendors
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            endIcon={<ExpandMore />}
          >
            Mega Menu{" "}
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            endIcon={<ExpandMore />}
          >
            Blog
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            endIcon={<ExpandMore />}
          >
            Pages
          </Button>
          <Button variant="text" sx={{ color: "black" }}>
            Contact
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: {xs:"cennter"} , flexDirection:{xs:"column-reverse",sm:"column"}  ,fontFamily:'sans-serif' }}>
          <Box>
            <HeadphonesOutlined sx={{ fontSize:{sx:'10px',sm:'30px',md:'40px'} }} />
          </Box>

          <Box>
            <p style={{ color: "green", fontSize: 20 }}> 1900-888 </p>
            <p>24/7 support Center</p>
          </Box>
        </Box>
      </Box>
    </>
  );
}
