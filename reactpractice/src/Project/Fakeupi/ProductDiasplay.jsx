/* eslint-disable no-unused-vars */
import { ExpandMore } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, FormControl, Grid, InputLabel, MenuItem, Select, Typography, styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductDisplay() {
 const [productdata,setProductData] = useState([]);
 const navigate = useNavigate();
  useEffect(()=>{
    document.body.style.backgroundColor = 'skyblue'
    myfetchRecord();
  },[]) 

  const myfetchRecord = async() =>{
    const response =await axios.get("https://fakestoreapi.com/products")
    // console.log(response.data);
    setProductData(response.data);
  }
  const handleOlddata = async() => {
    const oldres = await axios.get("https://fakestoreapi.com/products?sort=desc")
    setProductData(oldres.data)
  }
  const handleNewdata = async() => {
    const newres = await axios.get("https://fakestoreapi.com/products?sort=asc")
    setProductData(newres.data)
  }

  const handleAddm = async() => {
    const mensection = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
    setProductData(mensection.data)
  }

  const handleAddw = async() => {
    const mensection = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
    setProductData(mensection.data)
  }

  const handleAddj = async() => {
    const mensection = await axios.get("https://fakestoreapi.com/products/category/jewelery")
    setProductData(mensection.data)
  }

  const handleAdde = async() => {
    const mensection = await axios.get("https://fakestoreapi.com/products/category/electronics")
    setProductData(mensection.data)
  }

  const [expanded,setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [category,setCategory] = React.useState('')
  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  if(productdata.length < 0)
    {
        return <h1>Loading.... </h1>
    }

  return (
    <div>
      <div style={{display : 'flex' , justifyContent : 'space-between'}}>
      <Box sx={{'& button' : {m : 1}}}>
        <Button variant='contained' size='medium' onClick={handleOlddata}>New to Old</Button>
        <Button variant='contained' size='medium' onClick={handleNewdata}>Old to New</Button>
      </Box>  

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{color : 'whitesmoke'}}>Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Categorys"
          onChange={handleChange}
        >
          <MenuItem value={0} onClick={myfetchRecord}>All</MenuItem>
          <MenuItem value={1} onClick={handleAddm}>Men's clothing</MenuItem>
          <MenuItem value={2} onClick={handleAddw}>Women's clothing</MenuItem>
          <MenuItem value={3} onClick={handleAddj}>Jewelery</MenuItem>
          <MenuItem value={4} onClick={handleAdde}>Electronics</MenuItem>
        </Select>
      </FormControl>
      </Box> 
      
      </div> 
        <Grid container spacing={1} sx={{padding : 2}}>
      {
        productdata.map((product,index)=>{
          return <Grid key={index}  xs={6} md={2.4} padding={0.5}>
            <Card 
            sx={{Width : 400, height : 475}}
            >
              <CardHeader sx={{bgcolor : blue[700] , color : 'whitesmoke'}}
                avatar = {
                <Avatar sx={{bgcolor : 'skyblue'}}>
                  {product.id}
                </Avatar>
                }
                
                title = {product.category}
              />
                <br />
                <img src={product.image} 
                width={200} height={150} style={{marginLeft : 20}}/>
                <br /> <br />
              <CardContent sx={{width : 205 , height : 70 , bgcolor : blue[700], color : 'whitesmoke'}}>
                <Typography variant="body2">
                {product.title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom sx={{color : blue[700]}}>
                  rs : {product.price} / rating : {product.rating.rate}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button variant='outlined' size='medium'
                onClick={()=> navigate(`product/${product.id}`)}
                >View</Button>
                
              </CardActions>
                
            </Card>
            
            </Grid>
          
        })
      }
      </Grid>
    </div>
  )
}
