import React from "react";
import "../style/navbar.css";
import logo from "../img/logo.png";

const MiniNavbar = () => {
  return (
    <>
      <nav>
        <div class="top1">
          <img src={logo} height="80px" />
          <a href="#home">My.plan</a>
        </div>
      </nav>
    </>
  );
};

export default MiniNavbar;
