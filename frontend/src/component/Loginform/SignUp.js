import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const LoginForm2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [boxCheckEmail, setBoxCheckEmail] = useState(false);
  const onKeyPressed = (e) => {
    if (e.key == "Enter") {
      register();
    }
  };

  const router = useHistory();
  const register = async () => {
    if (emailCheck()) {
      await axios.post(
        "http://localhost:8080/account/register",
        qs.stringify({
          username: username,
          password: password,
          email: email,
        })
      );
      router.push("/");
    } else {
      console.log("error");
    }
  };

  const emailCheck = () => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailPattern.test(email) === true) {
      setBoxCheckEmail(false);
      return true;
    } else {
      setBoxCheckEmail(true);
      return false;
    }
  };

  return (
    <div
      style={{
        flex: 1,
      }}
      id="register"
      class="input-group"
    >
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="User Name"
        type="text"
        autoComplete="current-password"
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        error={boxCheckEmail}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        style={{ width: "100%" }}
        // id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(event) => setPassword(event.target.value)}
        onKeyDown={onKeyPressed}
      />
      <input type="checkbox" class="check-box" />
      <span>I agree to the terms & conditions</span>
      <button class="submit-btn" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default LoginForm2;
