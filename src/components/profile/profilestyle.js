import { makeStyles } from '@mui/styles';
import { maxHeight, width } from '@mui/system';
const useStyles = makeStyles((theme) => ({

  backgroundImage:{
   width:'100%',
   objectFit:"cover",
   height:"100%",
   [theme.breakpoints.down("md")]:{
    
   }
  },

  profileimage:{
    borderRadius: "50%",
    width:"25vh",
    height:"25vh",
    position:"absolute",
    marginTop:"-100px",
    marginLeft:"70px",
    border:"8px solid white ", 
    [theme.breakpoints.down("md")]:{
      width:"20vh",
      height:"20vh",

    
    }

    

  }


  }));
  export default useStyles