import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
