import { Divider } from '@mui/material';
import React from 'react'
import Post from '../../../components/post/Post'

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'BreakfastBreakfastBreakfastB reakfastBreakfastBreakfastBreakfastBreakfastBreakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
     
      title: 'BurgerBurgerBurgerBurgerBurge rBurgerBurgerBurgerBurger',
      author: '@rollelflex_graphy726',
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      
      title: 'CameraCameraCameraCameraCam eraCameraCameraCameraCamera',
      author: '@helloimnik',
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'CoffeeCoffeeCoffeeCoffeeCoffeeC offeeCoffeeCoffeeCoffee',
      author: '@nolanissac',
      cols: 2,
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'HatsCoffeeCoffeeCoffe eCoffeeCoffeeC offeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffeeCoffee ',
      author: '@hjrc33',
      cols: 2,
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey CoffeeCoffeeCoffeeCoffeeCoffeeC offeeCoffeeCoffeeCoffee',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball CoffeeCoffeeCoffeeCoffee CoffeeCoffeeCoffeeCoffeeCoffee',
      author: '@tjdragotta',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern CoffeeCoffeeCoffeeCoffeeCoffeeCo ffeeCoffeeCoffeeCoffee',
      author: '@katie_wasserman',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'MushroomsMushroomsMushroomsMushroomsMushroomsMushroomsMushroomsMushroomsMushrooms',
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
      title: 'Sea star',
      author: '@peterlaster',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
            text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
,
      cols: 2,
    },
  ];
const Explore = () => {
    return (
      <>
        

     
          
         <Post itemData={itemData} /> 
       
         
      </>
    )
}

export default Explore
