import { Grid, Typography } from '@mui/material'
import React from 'react'

const ProfileDetails = () => {
    return (
        <>
        <Grid conatiner>
            
        <Grid item xs={12} md={6} sx={{padding:"20px",}} container justifyContent='center' alignItems="center">
           

          
             <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%"}}>
             <p style={{fontWeight:"700" ,margin:"0 0px 0 100px",fontSize:"1.5em"}}>Kamal Kishore joshi</p>
             <p style={{fontWeight:"500" ,margin:"10px 0 0 100px",fontSize:"1em"}}>@ALPHA</p>
             <p style={{fontWeight:"500" ,margin:"10px 0  0 100px",fontSize:"1em",}}>largest advocacy association in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization, and changed its name to the Biotechnology Innovation Organization on January 4, 2016.</p>
             <p style={{fontWeight:"500" ,margin:"10px 0 0 100px",fontSize:"1em"}}>Date of Birth</p>

           </div> 
           
           </Grid>
        </Grid>
            
        </>
    )
}

export default ProfileDetails
