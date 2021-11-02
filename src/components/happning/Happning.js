import React from 'react'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:"grey",
        textAlign:"center",
        position:"fixed"
        ,maxWidth:"100%"
        ,padding:"0 50px",
        borderRadius:"10px",
        marginRight:"100px"
      
    },
    happingLink:
    {
        display:"flex",
        flexDirection:"column" ,
        flexWrap:"wrap",
        marginTop:"10px"
    }
    
    }));
const Happning = () => {
    const classes=useStyles()
    const theme = useTheme();
    return (
        <div className={classes.container}>
         <div>
             <p>What's Happing?</p>
         </div>
         <div>
            {itemData.map((item)=>(
                <div className={classes.happingLink}>
                 <Link to="/" style={{maxWidth:"100%",width:"120px"}}>
                     {item.title}
                 </Link></div>
            ))}
         
         </div>

        </div>
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: "A surprising amount of people don't kno use the debugger in JavaScript and rely on c",
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
     
      title: "A surprising amount of people don't know about  to use the debugger in JavaScript and rely on c",
      author: '@rollelflex_graphy726',
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      
      title:"A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@helloimnik',
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: "A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@nolanissac',
      cols: 2,
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: "A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@hjrc33',
      cols: 2,
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: "A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: "A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@tjdragotta',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title:"A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@katie_wasserman',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: "A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@silverdalex',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'TomatoTomatoTomatoTomatoTomatoTomatoTomatoTomatoTomato basilbasilbasilbasilbasilbasilbasilbasilbasil',
      author: '@shelleypauls',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: "A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@peterlaster',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title:"A surprising amount of people don't know about or/how to use the debugger in JavaScript and rely on c",
      author: '@southside_customs',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
      cols: 2,
    },
  ];

export default Happning
