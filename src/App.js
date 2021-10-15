import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
