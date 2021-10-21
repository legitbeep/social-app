import React from 'react'
import Grid from '@mui/material/Grid'
import { useRouteMatch,NavLink,Link } from 'react-router-dom'
import { Button,Avatar   } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Happning from '../components/happning/Happning';
const useStyles = makeStyles((theme) => ({
    sidebar:{
        textAlign:"center",
        position:"fixed"
        ,maxWidth:"100%"
        ,padding:"0 50px",
        [theme.breakpoints.down("md")]:{
            position:"inherit",
            padding:"0",
        }
       },
      
    btn:{
      borderRadius:"50px !important",
      width:"200px"
  
    },
    navlink:{
        margin:"20px",
        '&:hover' : {
         
            opacity: "0.5"
          },
          display:"flex" 
            ,flexDirection:"row",
            fontWeight:"500",
            
             textAlign:"justify"
             ,alignItems:"center" 
        
    },
    linknav:{
        color:"aqua",
        borderRadius:"50px",
  
        
    },
    
    }));
  
  

const HomeLayout = (props) => {
    const classes=useStyles()

    const {path}=useRouteMatch();

    return (
        <Grid container>
                <Grid   item container xs={12} md={3} flexDirection="column" justifyContent="flex-start" alignItems="center" sx={{padding:"30px 30px" ,}}  >
                <div className={classes.sidebar}>
                 
               
            <div style={{margin:"20px 0" ,textAlign:"center"}} >

               <Link to="/profile" style={{display:"flex",color:"black" ,flexDirection:"row",fontWeight:"500",fontSize:"18px", margin:"20px 0",textAlign:"justify",alignItems:"center" }}> <Avatar
                    alt=""
                    src="https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/d3334d40f2a08ae67617618e167b60a9~c5_720x720.jpeg"
                    sx={{ width: 40, height: 40,marginRight:"10px" }}
                    />
                    <p style={{fontSize:'15px'}}>Kamal Kishore Joshi</p>
                </Link>
                </div>
               
               <div style={{display:"flex" ,flexDirection:"column",fontSize:"25px" ,margin:"15px 0",textAlign:"justify"  }}>
                    <NavLink activeClassName={classes.linknav}  className={classes.navlink} to={`${path}`} exact><HomeIcon sx={{marginRight:"10px"}}/>Home</NavLink>
                    <NavLink activeClassName={classes.linknav}  className={classes.navlink}  to={`${path}/explore`} exact><TravelExploreIcon sx={{marginRight:"10px"}}/>Explore</NavLink>
                    <NavLink activeClassName={classes.linknav}  className={classes.navlink} to={`${path}/post`} exact><AllInboxIcon sx={{marginRight:"10px"}}/>Posts</NavLink>
                    <NavLink activeClassName={classes.linknav}  className={classes.navlink} to={`${path}/post/latest`}><WatchLaterIcon sx={{marginRight:"10px"}}/>Latest </NavLink>
                    <NavLink activeClassName={classes.linknav}  className={classes.navlink} to={`${path}/post/trending`}><WhatshotIcon sx={{marginRight:"10px"}}/>Trending</NavLink>
                    <Link to="/profile" style={{margin:"25px 0 0 0"}} ><Button className={classes.btn}>Create post</Button></Link>
                    <Link to="/login" style={{margin:'25px 0 0 0'}}><Button className={classes.btn}>Login</Button></Link>
                </div>
                </div>
            </Grid>
            <Grid item container xs={12} md={9}  justifyContent="center">
            {props.children}

            </Grid>

            
        </Grid>
        
    )
}

export default HomeLayout
