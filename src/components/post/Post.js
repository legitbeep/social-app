import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function RecipeReviewCard({itemData}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    {itemData.map((item)=>(
        <Card sx={{ maxWidth: "100%", width:"700px",margin:"10px" ,border:"none",boxShadow:"0px 2px 10px grey" }}>
        {item.img&&
        <CardMedia
        component="img"
        height="200"
        image={item.img}
        alt="Paella dish"
        />}

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#FF725E" }} aria-label="recipe">
              R
            </Avatar>
          }
         
          title="Kamal joshi"
          subheader="September 14, 2016"
          
        />
        <div style={{display:"flex"}}>
        {/* {item.img&&
        <img alt="" style={{maxWidth:"100%",maxHeight:"100%",height:"150px",width:"150px",}} src={item.img}/>
        } */}
        <CardContent>
         <Link style={{color:"black"}} to={`/blog/${item.title}`}> <p style={{ fontWeight:"700", fontSize:"20px" }}>
          {item.title}
          </p>
          </Link>

        </CardContent>
        </div>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        
         {/* <Link to={`/blog/${item.title}`}>Read More...</Link> */}
        </CardActions>
       
      </Card>
      
    ))}

    
        
      </>

    
  );
}
