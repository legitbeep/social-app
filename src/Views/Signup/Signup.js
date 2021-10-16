import { Grid, Divider,TextField,Button } from '@mui/material'
import { styled } from '@mui/system'
import React, { Fragment } from 'react'
import image from '../../Images/signup.svg'
import useStyles from './styles'
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';


const Img=styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100% ',
    maxHeight: '100%',
})

const Signup = () => {
    const classes = useStyles();

    return (
      <Fragment>
          <Grid conaitner>
          <Grid  item justifyContent='center' alignItems="center"  sx={{minHeight:"100vh"}} container>
              <Grid item xs={12} md={6}>
                  <Img src={image} />   
              </Grid>
            
              <Grid item xs={12} md={6} container  sx={{padding:"20px",}} container justifyContent='center' alignItems="center">
                  <form  className={classes.form}>
                      <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%"}}>
                          <p style={{fontWeight:"700" ,margin:"-10px 0",fontSize:"3em"}}>Get started</p>
                          <p style={{ margin:"10px 0 30px 0px" }}>Already have an account? <Link to="Login">Login</Link></p>

                      </div> 
                      <Button variant="outlined" fullWidth><GoogleIcon />Sign Up with Google</Button>
                      <Divider sx={{width:"100%",margin:"10px"  }}>OR</Divider>

                      <Grid container spacing={2} >
                        <Grid item xs={6} lg={6}>
                        <TextField  sx={{margin:'10px 0px'}}  id="outlined-basic" label="Display Name" variant="outlined"  fullWidth/>
                         </Grid>
                         <Grid item xs={6} lg={6}>
                        <TextField  sx={{margin:'10px 0px'}}  id="outlined-basic" label="User name" variant="outlined"  fullWidth/>
                         </Grid>   
                      </Grid>

                      <TextField  id="outlined-basic" sx={{margin:'10px 0px'}} label="Email" variant="outlined"  fullWidth />
                      <TextField  id="outlined-basic" sx={{margin:'10px 0px'}} label="Password" variant="outlined"  fullWidth />
                      <TextField  id="outlined-basic" sx={{margin:'10px 0px'}} label="Conform Password" variant="outlined"  fullWidth />
                      <Button type="submit" fullWidth>SignUp</Button>
                    

                  </form>

              </Grid>
          </Grid>
          </Grid>


      </Fragment>
    )
}

export default Signup
