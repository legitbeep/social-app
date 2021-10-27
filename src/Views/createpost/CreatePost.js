import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import blog from '../../images/blog.svg'
import { TagsInput } from "react-tag-input-component";
import TextEditor from '../../components/textEditor/TextEditor';

const useStyles = makeStyles((theme) => ({
  bloging:{
    [theme.breakpoints.down("md")]:{
     display:"none",
   
    
  },
  },
  mainContainer:{
    margin:"50px 50px 0 100px",
    [theme.breakpoints.down("md")]:{
      margin:"60px 10px 10px 10px"
    
  },
  [theme.breakpoints.down("sm")]:{
    margin:"40px 10px 10px 10px",
  
}
  }
  
  }));


const CreatePost = () => {
  const classes=useStyles()
  const [selected, setSelected] = useState([]);
    return (
      <div style={{background:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2F&psig=AOvVaw0Torvxy_H7pB3N0scU-7ls&ust=1635071742008000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCm24Sr4PMCFQAAAAAdAAAAABAD"}}>
        
        <span>
        <p style={{fontSize:"700" ,fontWeight:"700",color:"#FF725E" ,textAlign:"center",margin:"10px 0 0 0"}}>
          Create Amazing Blog's
        </p>
        </span>
        <div className={classes.mainContainer}>
          <form>
            <Grid container direction="row" alignItems="center" >
            <Grid item container xs={12} md={5} justifyContent="center" alignItems="center"  >
              <img className={classes.bloging} src={blog}/>
            </Grid>
              
          <Grid item container xs={12} md={7} justifyContent="center" alignItems="center"  >
          <label htmlFor="icon-button-file">
            
            <input style={{display:'none'}} accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
            <Typography> Image For Blog </Typography>
              < PhotoCamera />
            </IconButton>
          </label>
        

          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
          />
                
           
      
          <TextField
          
            margin="dense"
            id="desc"
            label="Basic Description About blog"
            multiline
            rows={10}
            type="text"
            fullWidth
            variant="outlined"

          />
          <TextEditor/>
        <div style={{color:"#FF725E",width:"100%"}}>
        <TagsInput
        value={selected}
        onChange={setSelected}
        name="Tags"
        placeHolder="Tags"
        variant="outlined"
        
      />
      </div>
         
          </Grid> 
          </Grid>
          <DialogActions>
          <Button type="submit">Create</Button>
          </DialogActions>
          </form>
          
        </div>
  
        </div>
    )
}

export default CreatePost
