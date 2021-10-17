import {  Grid } from '@mui/material'
import React from 'react'
import useStyles from './profilestyle'
import EditProfile from './EditProfile'

const Profileimages = () => {
    const classes = useStyles();

    return (
        <>
        <Grid container >
        <Grid item container sx={{height:"40vh",width:"100%"}}>
                
            <img className={classes.backgroundImage}
               
                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Paella dish"
            />
             </Grid>
        <Grid item container sx={{ height:"15vh",}} >
            <img className={classes.profileimage} alt="profile-image" src="https://cdn.shopify.com/s/files/1/0722/9621/products/AcandythemedHalloweenbackground_Fred_LowRes_large.jpg?v=1603360598" />
            <Grid item container sx={{margin:"50px"}}justifyContent="flex-end">
            <EditProfile />
            </Grid>
            
            
        </Grid>
        </Grid>
        
        </>
    )
}

export default Profileimages
