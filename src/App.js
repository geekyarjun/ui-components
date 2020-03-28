import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/signIn";
import Register from "./pages/regsiter";
import "./App.css";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/home">
          <div>Hello world</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
