import React from 'react'
import Grid from '@mui/material/Grid'
import { margin, minHeight, padding } from '@mui/system'
import EditProfile from '../components/profile/EditProfile'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { NavLink,useRouteMatch } from 'react-router-dom'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const useStyles = makeStyles((theme) => ({
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
  sidebar:{
   textAlign:"center",
   position:"fixed"
   ,maxWidth:"100%"
   ,padding:"0 50px",
   [theme.breakpoints.down("md")]:{
       position:"inherit",
       padding:"0",
   }
  }
  }));


const ProfileLayout = (props) => {
    const classes=useStyles()
    const {path}=useRouteMatch()
    return (
        <>
           
            <Grid container >
                <Grid   item container xs={12} md={3} flexDirection="column" justifyContent="flex-start" alignItems="center" sx={{padding:"30px 30px" ,}}  >
                    <div  className={classes.sidebar} >
                    <div style={{textAlign:"center",}}>
                    <img style={{borderRadius:"50%",minWidth:"150px", minHeight:"150px" ,width:"20vh",height:"20vh"}} src="https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/d3334d40f2a08ae67617618e167b60a9~c5_720x720.jpeg" alt="No Image"/>
                    </div>
                    <div style={{margin:"20px 0" ,textAlign:"center"}} >
                        <p style={{fontWeight:"700",fontSize:"30px"}}>Display Name</p>
                        <p style={{fontWeight:"200" }}>@UserName</p>
                        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu augue leo. Aenean quis neque sit amet elit finibus ornare. Praesent bibendum est vel eros ullamcorper volutpat eget lacinia nisi laoreet.</p>
                        </div>
                    <EditProfile/>
                    {/* <div style={{margin:"10px 0"}}>
                        <Button className={classes.btn}>Follow</Button>
                    </div>
                      */}
                     <div style={{display:"flex" ,flexDirection:"column",fontSize:"25px" ,margin:"15px 0",textAlign:"justify"  }}>
                         <NavLink to={`${path}`} className={classes.navlink} exact activeClassName={classes.linknav}><AllInboxIcon sx={{marginRight:"10px"}}/>Posts</NavLink>
                         {/* <NavLink to={`${path}/notifications`} className={classes.navlink}  exact activeClassName={classes.linknav}>Notifications</NavLink> */}
                         <NavLink to={`${path}/followers`} className={classes.navlink}  exact activeClassName={classes.linknav}>Followers</NavLink>
                         <NavLink to={`${path}/following`} className={classes.navlink}  exact activeClassName={classes.linknav}>Following</NavLink>
                         <NavLink to={`${path}/saved-posts`} className={classes.navlink}  exact activeClassName={classes.linknav}><BookmarksIcon sx={{marginRight:"10px"}}/>Saved Posts</NavLink>
                         <NavLink to={`${path}/explore`} className={classes.navlink} exact activeClassName={classes.linknav}><TravelExploreIcon sx={{marginRight:"10px"}}/>Explore</NavLink>
                     </div>

                    
                   
                     </div>

                </Grid>
                <Grid item container xs={12} md={8} justifyContent="center">
                {props.children}
               
                
                </Grid>

            </Grid>
        </>
    )
}

export default ProfileLayout
