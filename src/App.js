import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./views/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import Signup from "./views/Signup/Signup";
import Profile from "./views/profile/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/home">
            {/* layout */}
            <Route path="/posts" exact>
              {/* posts */}
            </Route>
            <Route path="/find-friends" exact>
              {/* find-friends */}
            </Route>
          </Route>
          <Route path="/create-post" exact>
            {/* Create posts */}
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/profile" >
            <Profile/>
          </Route>
          <Route exact path="/blog/:title">
               
              </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
