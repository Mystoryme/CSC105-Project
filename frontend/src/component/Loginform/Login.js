import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../../style/Login/LoginForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm1 = () => {
  const router = useHistory();

  const onKeyPressed = (e) => {
    if (e.key == "Enter") {
      login();
    }
  };

  const login = async () => {
    const islogin = await axios.post(
      "http://localhost:8080/account/login",
      qs.stringify({
        email: email,
        password: pass,
      })
    );

    if (islogin.data.isLogin) {
      Cookies.set("userid", islogin.data.user_id);
      Cookies.set("username", islogin.data.username);
      window.location.href = "/Home";
    }
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
        onKeyDown={onKeyPressed}
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
