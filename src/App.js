import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Views/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter >
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
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
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
