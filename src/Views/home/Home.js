import React from 'react'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import HomeLayout from '../../layout/HomeLayout';
import Homedata from './overview/Homedata';
import Explore from './overview/Explore'
import Posts from './overview/Posts';
import LatestPosts from './overview/LatestPosts';
import TrendingPosts from './overview/TrendingPosts';

const Home = () => {
    const {path} =useRouteMatch();
    return (
        <>
        <HomeLayout>
            <Switch>
            <Route path={`${path}`} exact><Homedata/></Route> 
            <Route path={`${path}/explore`} exact><Explore/></Route>  
            <Route path={`${path}/post`} exact><Posts/></Route>  
            <Route path={`${path}/post/latest`} exact><LatestPosts/></Route>  
            <Route path={`${path}/post/trending`} exact><TrendingPosts/></Route> 
            <Route path={`${path}/about`} exact></Route>  
            <Route path={`${path}/contact`} exact></Route>  
            <Route path="*">Not Found</Route>
            </Switch>    
        </HomeLayout>    
        </>
    )
}

export default Home
