import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Mystorymee</h4>
            <p>999-999-9999</p>
            <p>Bangkok, Thailand</p>
            <p>345 Street233</p>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
          <div className="col">
            <h4>Thank You💖</h4>
            <p>
              Thank you for all our friend and family who have to help me for
              this project 💖.
            </p>
            {/* <p>pst</p>
            <p>thank</p> */}
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Thanyapat, All rights reserved
            &nbsp;|&nbsp; Term Of Aim &nbsp;|&nbsp; Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
