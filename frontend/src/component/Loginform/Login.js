import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../../style/Login/LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm1 = () => {
  const login = () => {
    console.log(email, pass);
  };

  const [email, setEmail] = useState("");

  const emailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const [pass, setPass] = useState("");

  const passChange = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
  };

  return (
    <div
      style={{
        flex: 1,
      }}
      id="login"
      class="input-group"
    >
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        onChange={emailChange}
      />
      {/* <input type="text" class="input-field" placeholder="User Id" required /> */}
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={passChange}
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
      {/* <Link to="/calendar" style={{ textDecoration: "none" }}> */}
      <button type="submit" class="submit-btn" onClick={login}>
        Log in
      </button>
      {/* </Link> */}
    </div>
  );
};

export default LoginForm1;
