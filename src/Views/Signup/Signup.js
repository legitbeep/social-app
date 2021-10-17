import { Grid, Divider, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { Fragment } from "react";
import image from "../../images/signup.svg";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100% ",
  maxHeight: "100%",
});

const Signup = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
          container
        >
          <Grid item xs={12} md={6}>
            <Img src={image} />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            container
            sx={{ padding: "20px" }}
            container
            justifyContent="center"
            alignItems="center"
          >
            <form className={classes.form}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    margin: "-10px 0",
                    fontSize: "3em",
                  }}
                >
                  Get started
                </p>
                <p style={{ margin: "10px 0 30px 0px" }}>
                  Already have an account? <Link to="Login">Login</Link>
                </p>
              </div>
              <Button variant="outlined" fullWidth>
                <GoogleIcon />
                Sign Up with Google
              </Button>
              <Divider sx={{ width: "100%", margin: "10px" }}>OR</Divider>

              <Grid container spacing={2}>
                <Grid item xs={6} lg={6}>
                  <TextField
                    sx={{ margin: "10px 0px" }}
               
                    label="Display Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} lg={6}>
                  <TextField
                    sx={{ margin: "10px 0px" }}
                   
                    label="User name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <TextField

                sx={{ margin: "10px 0px" }}
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
              />
              
            <FormControl sx={{ m: 1,margin:"10px 0px" }} fullWidth variant="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput 
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
              
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                      
                          onClick={()=>{setShowPassword(prev=>!prev)}}
                        
                          edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  
                    label="Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1,margin:"10px 0px" }} fullWidth variant="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput 
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
              
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                      
                          onClick={()=>{setShowPassword(prev=>!prev)}}
                        
                          edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  
                    label="Confirm Password"
                  />
                </FormControl>
        
        
              <Button type="submit" fullWidth>
                SignUp
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Signup;
