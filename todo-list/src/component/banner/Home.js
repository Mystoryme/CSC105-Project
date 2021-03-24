import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Flowerline from "../../img/flowerline.png";

const Home = () => {
  return (
    <div className="banner">
      <div className="boxup">
        <h1
          style={{
            margin: "70px",
          }}
        >
          My.Plan
        </h1>
        <img src={Flowerline}></img>
      </div>
      <div className="getstart">
        <Link
          to="/login"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            style={{
              background: "white",
              transform: "translateY(-115px)",
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
      {/* <div className="bannerLeft">aaa</div>
      <div className="bannerRight">bbb</div> */}
    </div>
  );
};

export default Home;
