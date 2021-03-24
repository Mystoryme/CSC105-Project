import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import "./reset/base.css";
import Login from "./page/Login";
import Calendar from "./page/Calendar";
import Home from "./component/banner/Home";
import Footer from "./component/footer/Footer";
//
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
