import { Button, Grid, TextField } from '@mui/material'
import React ,{useState}from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { FormatUnderlined } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { padding } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    navbar:{
        display:"flex",
        flexDirection:"column",
        position:"inherit",
      justifyContent:"center",
      padding:"200px",
      position:"fixed",
        [theme.breakpoints.down("lg")]:{
            display:"none"
          
        },

    },

    maincontainer:{
       width:"65%",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginLeft:"-200px",
        border:"1px solid #FF725E",
        [theme.breakpoints.down("lg")]:{
            marginLeft:"0px",
            width:"80%"
          
        },
        [theme.breakpoints.down("md")]:{
            marginLeft:"0px",
            width:"90%"
          
        },  
        [theme.breakpoints.down("sm")]:{
            marginLeft:"0px",
            width:"95%",
            minWidth:"300px"

          
        }
   
        
    },
    comments:{
        width:"65%",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginLeft:"-200px",
        border:"1px solid #FF725E",
        marginTop:"20px",
        [theme.breakpoints.down("lg")]:{
            marginLeft:"0px",
            width:"80%"
          
        },
        [theme.breakpoints.down("md")]:{
            marginLeft:"0px",
            width:"90%"
          
        },  
        [theme.breakpoints.down("sm")]:{
            marginLeft:"0px",
            width:"95%",
            minWidth:"300px"

          
        }

        
    },
    containerimages:
    {

    width:"100%" ,
    
    
    [theme.breakpoints.down("sm")]:{
        width:"100%" ,
    
      
    }
},    
    title:{
        fontSize:"40px", 
        fontWeight:"500",
        margin:"10px 0",
        [theme.breakpoints.down("sm")]:{
            fontSize:"20px", 
            fontWeight:"700",
            margin:"10px 0"
          
        }
    },
    text:{
        fontSize:"18px", 
    },
    btn:{
       
        borderRadius:"50px !important",
        width:"100px",
        margin:"0 10px 0 0 !important"

    
      },
      comment:{

      }
  }));
const itemData = 
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: ' Kamal Joshi is great :))',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
      
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.Attention reader! Don’t stop learning now. Get hold of all the important DSA concepts with the DSA Self Paced Course at a student-friendly price and become industry ready.  To complete your preparation from learning a language to DS Algo and many more,  please refeAttention reader! Don’t stop learning now. Get hold of all the important DSA concepts with the DSA Self Paced Course at a student-friendly price and become industry ready.  To complete your preparation from learning a language to DS Algo and many more,  please refeAttention reader! Don’t stop learning now. Get hold of all the important DSA concepts with the DSA Self Paced Course at a student-friendly price and become industry ready.  To complete your preparation from learning a language to DS Algo and many more,  V8 is incredibly important to the web – and no, I'm not talking about the juice or the car engine. I'm talking about Google's JavaScript Engine V8 that launched with the release of the Google Chrome Browser on September 2, 2008 as a part of the open source Chromium Project. Before Chrome's release, JavaScript (and Jscript) performed slowly and would often bog down websites' responsiveness. I, and many others, would block JavaScript, using a Firefox add-on called NoScript. As seen in the image below, it was originally released for a much older version of Firefox. V8 is incredibly important to the web – and no, I'm not talking about the juice or the car engine. I'm talking about Google's JavaScript Engine V8 that launched with the release of the Google Chrome Browser on September 2, 2008 as a part of the open source Chromium Project. Before Chrome's release, JavaScript (and Jscript) performed slowly and would often bog down websites' responsiveness. I, and many others, would block JavaScript, using a Firefox add-on called NoScript. As seen in the image below, it was originally released for a much older version of Firefox.V8 is incredibly important to the web – and no, I'm not talking about the juice or the car engine. I'm talking about Google's JavaScript Engine V8 that launched with the release of the Google Chrome Browser on September 2, 2008 as a part of the open source Chromium Project. Before Chrome's release, JavaScript (and Jscript) performed slowly and would often bog down websites' responsiveness. I, and many others, would block JavaScript, using a Firefox add-on called NoScript. As seen in the image below, it was originally released for a much older version of Firefox.V8 is incredibly important to the web – and no, I'm not talking about the juice or the car engine. I'm talking about Google's JavaScript Engine V8 that launched with the release of the Google Chrome Browser on September 2, 2008 as a part of the open source Chromium Project. Before Chrome's release, JavaScript (and Jscript) performed slowly and would often bog down websites' responsiveness. I, and many others, would block JavaScript, using a Firefox add-on called NoScript. As seen in the image below, it was originally released for a much older version of Firefox.",
      comments:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas "
    }

const Blog = () => {
   const classes=useStyles()
   const [comment, setComment] = useState("");
   
 
   const changeComment = (e) => {
    setComment(e.target.value);
   };
   
   const onClose = () => {
    setComment("");
  };
   console.log(comment);

    return (
        <div>
            <Grid container sx={{marginTop:"40px"}}>
                <Grid item xs={2} lg={2} container alignItems >
                  <div className={classes.navbar}>
                  <IconButton style={{margin:"40px 0"}} color="primary" aria-label="upload picture" component="span">
                    <FavoriteBorderIcon/>
                   </IconButton>
                   <IconButton style={{margin:"40px 0"}} color="primary" aria-label="upload picture" component="span">
                   <BookmarkBorderIcon/>
                    </IconButton>
                  <a href="#comment" ><IconButton style={{margin:"40px 0"}} color="primary" aria-label="upload picture" component="span">
                  <CommentIcon/>
                    </IconButton>
                    </a>
                 
                      
                  </div>
                </Grid>
                <Grid item xs={12} lg={10}  container alignItems="center" justifyContent="center" sx={{display:"flex",flexDirection:"column"}}>
            
            <Paper className={classes.maincontainer}  >
                
                <img  class={classes.containerimages}src={itemData.img}/>

                <p className={classes.title}>{itemData.title}</p>
                <p>#tags</p>
                <p className={classes.text}>{itemData.text}</p>
                
            </Paper>
            <Paper className={classes.comments} id="comment" >
                <p style={{fontWeight:"700",fontSize:"20px" ,marginTop:"10px"  }}>Comments</p>
                <form>              
                    
                  <FormControl  fullWidth      variant="standard">
                
                    <Input
                    id="commentdata"
                    onChange={changeComment}
                    value={comment}
                    startAdornment={
                        <InputAdornment position="start" >
                        <AccountCircle />
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <div style={{display:"flex", marginTop:"10px", justifyContent:"flex-end"}}>
                <Button className={classes.btn} disabled={comment.length < 1}>Comment</Button>
                <Button  className={classes.btn} onClick={onClose}  >Cancel</Button>
                </div>
                </form>
                <div class={classes.comment}>
                    <p>{itemData.comments}</p>
                </div>


            </Paper>
            </Grid>
            
            </Grid>
     
        </div>
    )
}

export default Blog
