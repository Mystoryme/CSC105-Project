import React from "react";
import TextField from "@material-ui/core/TextField";

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
      <div
        className="login-form1"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input type="checkbox" class="check-box" />
        <span>Remember Password</span>
      </div>
      <button type="submit" class="submit-btn">
        Log in
      </button>
    </form>
  );
};

export default LoginForm1;
