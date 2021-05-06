import React from "react";
import "../style/Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Flowerline from "../img/flowerline.png";
import Cloud from "../img/cloud.png";

const Home = () => {
  return (
    <div className="banner">
      <div className="boxup">
        <img className="cloud" src={Cloud}></img>
        <img className="cloud2" src={Cloud}></img>

        <h1>MyPlan</h1>
        <img className="flower" src={Flowerline}></img>
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
              borderRadius: "20px",
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
