import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Avatar, CardHeader, CardMedia, FormControlLabel, imageListItemClasses } from '@mui/material';
import { green } from '@mui/material/colors';

export default function ProductDetails() {
  const { id } = useParams();
  const [productdata, setProductdata] = useState([]);

useEffect(() => {
    document.body.style.backgroundColor = 'skyblue'
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductdata([response.data]);
  };
  return (
    <div>
      {
        productdata.map((product,item)=>{
          return <div key={item} style={{margin : '60px' ,display : 'flex', justifyContent : 'center' }}>
                <Card sx={{textAlign : 'center',p : 3}}>
                <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt="green iguana"
                />
                {/* <img src={product.image} alt="" width={250} height={240} /> */}
                </Card>
                <Card sx={{ maxWidth: 550}}>
                <CardHeader
                avatar = {
                <Avatar sx={{bgcolor : green[500]}}>
                  {product.id}
                </Avatar>
                }
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {product.category}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                {product.title}
                </Typography>
                <br />
                <Typography paragraph>
                  {product.description}
                </Typography>
                <Typography gutterBottom>
                   {product.price} rs.
                </Typography>
                <Typography gutterBottom>
                rating - {product.rating.rate}/{product.rating.count}
                </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
                </div>
        })
      }
    </div>

  );
}


