import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>mystorymee</h4>
            <ul className="list-unstyled">
              <li>999-999-9999</li>
              <li>Bangkok, Thailand</li>
              <li>345 Street233</li>
            </ul>
          </div>
          <div className="col">
            <h4>hello world</h4>
            <ul className="list-unstyled">
              <li>menu</li>
              <li>list</li>
              <li>thank</li>
            </ul>
          </div>
          <div className="col">
            <h4>hello world</h4>
            <ul className="list-unstyled">
              <li>menu</li>
              <li>list</li>
              <li>thank</li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Thanyapat | All Right Memo |Term
              Of Aim | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
