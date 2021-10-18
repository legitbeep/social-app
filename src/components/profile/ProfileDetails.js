import { Divider, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import UploadedImages from './UploadedImages'
import { Link } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
const ProfileDetails = () => {
    const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
        <Grid conatiner>
            
        <Grid item xs={12} md={6} sx={{padding:"20px",}} container justifyContent='center' alignItems="center">
           

          
             <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%"}}>
             <p style={{fontWeight:"700" ,margin:"0 0px 0 5vw",fontSize:"1.5em"}}>Kamal Kishore joshi</p>
             <p style={{fontWeight:"500" ,margin:"1vw 0 0 5vw",fontSize:"1em"}}>@ALPHA</p>
             <p style={{fontWeight:"500" ,margin:"1vw 0  0 5vw",fontSize:"1em",}}>largest advocacy association in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization, and changed its name to the Biotechnology Innovation Organization on January 4, 2016.</p>
             <p style={{fontWeight:"500" ,margin:"1vw 0 0 5vw",fontSize:"1em"}}>Date of Birth</p>
           </div> 
          
           
           </Grid>
           <Grid item container xs={12} md={6} >
               <div style={{justifyContent:"flex-start",width:"100%"}}>
             
               </div>

           </Grid>
         

        </Grid>
        <Divider sx={{margin:"50px 50px 0 50x"}}/>
        <div style={{color:"#FF725E" ,alignItems:"center",textAlign:"center",margin:"100px 0 ",justifyContent:"center",display:"flex" }}>
           <ImageIcon/>
           <p>Posts</p>  
        </div>
            
          
        <UploadedImages/>
            
        </>
    )
}

export default ProfileDetails
