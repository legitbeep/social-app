import { createTheme } from "@mui/material";

const theme=createTheme({
    palette: {
        primary: {
          main: "#FF725E",
        },
        secondary: {
          main: "#11052C",
        },
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
        
      }, 
      shape: {
        borderRadius: 8,
      },
      spacing: 5,
  components : {
    MuiPaper :{
      styleOverrides : {
        root : {
          padding : "10px",
          boxShadow : "none",
          border : "1px solid grey",
        },
      },
    },
    MuiButton : {
      // style :
      styleOverrides : {
        root : {
          borderRadius : 10,
          padding : "14px 16px",
          backgroundColor : "#FF725E",
          color : "white",
          '&:hover' : {
            backgroundColor : "#FF725E",
            opacity: "0.8"
          }
        }
      },
      // default props for components :
      defaultProps : {
        disableRipple : true,
      },
      // variants - styles depending on supplied props :
      variants : [
        // {
        //   // for custom types use module augmentation
        //   props : { variant : "outlined" }, // must be from specified props from mui
        //   style : {},
        // }
        {

          props:{
           variant:"outlined"
          },
          style:{
            borderRadius : 10,
            padding : "14px 16px",
            border : "1px solid #FF725E",
            color : "#FF725E",
            backgroundColor:"white",
            '&:hover' : {
              backgroundColor:"white",
              border : "1px solid #FF725E",
              opacity: "0.8"
          }

        }
      }
      ]
    }
  },

})
export default theme;
