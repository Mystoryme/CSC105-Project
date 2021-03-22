import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div
      style={{
        width: "calc(100% - 48px)",
        height: "64px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        boxShadow: "0px 5px 10px 0px rgb(0 0 0 / 20%)",
      }}
    >
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
        <h3>My.plan</h3>
      </div>
      <div
        className="navBarRightSide"
        style={{
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/calendar">Calendar</Link>
      </div>
    </div>
  );
};

export default Navbar;
