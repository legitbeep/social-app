import { makeStyles } from '@mui/styles';
import { maxHeight, width } from '@mui/system';
const useStyles = makeStyles((theme) => ({

  backgroundImage:{
   width:'100%',
   objectFit:"cover",
   height:"100%",
 
  },

  profileimage:{
    borderRadius: "50%",
    width:"25vh",
    height:"25vh",
    position:"absolute",
    marginTop:"-100px",
    marginLeft:"70px",
    border:"8px solid white ", 
    [theme.breakpoints.down("sm")]:{
      width:"20vh",
      height:"20vh",
      marginTop:"-70px",
      marginLeft:"30px",
      border:"6px solid white ", 

    
    }

    

  },



  }));
  export default useStyles