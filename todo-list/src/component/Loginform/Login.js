import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../style/Login/LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm1 = () => {
  return (
    <form
      style={{
        flex: 1,
      }}
      id="login"
      class="input-group"
    >
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="User Id"
        type="text"
        autoComplete="current-password"
      />
      {/* <input type="text" class="input-field" placeholder="User Id" required /> */}
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      {/* <input
        type="password"
        class="input-field"
        placeholder="Enter Password"
        required
      /> */}
      <div className="login-form1">
        <input type="checkbox" class="check-box" />
        <span>Remember Password</span>
      </div>
      <Link to="/calendar">
        <button type="submit" class="submit-btn">
          Log in
        </button>
      </Link>
    </form>
  );
};

export default LoginForm1;
