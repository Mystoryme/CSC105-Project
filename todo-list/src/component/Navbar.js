import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";
import {
  faCalendarAlt,
  faHome,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navBar-box">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          height="60px"
          style={{
            marginRight: "15px",
          }}
        />
        <h3>
          <Link
            to="/Home"
            style={{
              textDecoration: "none",
            }}
          >
            My.plan{" "}
          </Link>
        </h3>
      </div>
      <div
        className="navBarRightSide"
        style={{
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <Link to="/Home">
          <FontAwesomeIcon
            icon={faHome}
            style={{
              marginRight: "10px",
            }}
          />
          Home
        </Link>
        <Link to="/calendar">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{
              marginRight: "10px",
            }}
          />
          Calendar
        </Link>
        <Link to="/login">
          <FontAwesomeIcon
            icon={faSignInAlt}
            style={{
              marginRight: "10px",
            }}
          />
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
