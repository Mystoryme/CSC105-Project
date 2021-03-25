import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import "./reset/base.css";
import Login from "./page/Login";
import Calendar from "./page/Calendar";
import Home from "./page/Home";
import Footer from "./component/footer/Footer";
import { Fab } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
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
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
      <Fab
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: "2000",
          backgroundColor: "white",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </Fab>
    </div>
  );
};

export default App;
