import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Cards() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2,padding:'10px' }}>
      <Card sx={{ maxwidth: "150px", background: "rgb(248 233 231)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="apple.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Apple
          </Typography>
          <Typography variant="body2" color="text.secondary">
            21 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(251 242 234)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="Snack.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Snack
          </Typography>
          <Typography variant="body2" color="text.secondary">
            24 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(252 244 253)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="tomato.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vegetables
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(241 249 226)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="strawberry.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            StrawBerry
          </Typography>
          <Typography variant="body2" color="text.secondary">
            24 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(241 249 226)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="Blackplum.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Black plum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            24 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(255 252 235)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="custard.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Custard Apple
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(254 239 236)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="coffe.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coffee & Tea
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(235 253 234)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="headphone.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Headphone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(238 245 221)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="burger.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coke & Milk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(253 250 233)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="Kiwi.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Organic Kiwi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            28 items
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
