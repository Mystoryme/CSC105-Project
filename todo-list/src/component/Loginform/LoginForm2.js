import React from "react";
import TextField from "@material-ui/core/TextField";

const LoginForm2 = () => {
  return (
    <form
      style={{
        flex: 1,
      }}
      id="register"
      class="input-group"
    >
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="User Id"
        type="text"
        autoComplete="current-password"
      />
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
      />
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <input type="checkbox" class="check-box" />
      <span>I agree to the terms & conditions</span>
      <button type="submit" class="submit-btn">
        Register
      </button>
    </form>
  );
};

export default LoginForm2;
