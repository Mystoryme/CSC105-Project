import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";
import {
  faCalendarAlt,
  faHome,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logincheck = () => {
    if (Cookies.get("userid")) {
      setUsername(Cookies.get("username"));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    Cookies.remove("userid");
    Cookies.remove("username");
    window.location.href = "/login";
  };

  useEffect(() => {
    logincheck();
  }, []);

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
              color: "darkslateblue",
            }}
          >
            MyPlan{" "}
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
        {isLoggedIn ? (
          <>
            <Link to="/Home">
              <FontAwesomeIcon
                icon={faHome}
                style={{
                  marginRight: "10px",
                }}
              />
              {username}
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
            <Link onClick={logout}>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{
                  marginRight: "10px",
                }}
              />
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon
              icon={faSignInAlt}
              style={{
                marginRight: "10px",
              }}
            />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
