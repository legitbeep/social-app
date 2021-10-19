import React from 'react'
import ProfileLayout from '../../layout/ProfileLayout'
import {Switch, Route,useRouteMatch } from 'react-router-dom'
import Posts from './overview/Posts'
const Profile = () => {
const {path}=useRouteMatch();

    return (
        <>
            <ProfileLayout>
                <Switch>
                <Route path={`${path}`} exact><Posts/></Route>
                <Route path={`${path}/followers`} exact></Route>
                <Route path={`${path}/following`} exact></Route>
                <Route path={`${path}/saved-posts`} exact></Route>
                <Route path={`${path}/followers`} exact></Route>

                <Route path="*" exact>NotFOUND </Route>
                </Switch>
            </ProfileLayout>
        
        </>
    )
}

export default Profile
