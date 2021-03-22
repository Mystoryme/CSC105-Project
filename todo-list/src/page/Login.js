import { useState } from "react";
import LoginForm1 from "../component/Loginform/LoginForm1";
import LoginForm2 from "../component/Loginform/LoginForm2";
import Socialicon from "../component/Socialicon/Social-icon";
import { Link } from "react-router-dom";
import MiniNavbar from "../component/MiniNavbar";
//
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onLoginClick = () => {
    console.log("login");
    setIsLogin(true);
  };
  const onRegisterClick = () => {
    console.log("register");
    setIsLogin(false);
  };
  return (
    <div>
      <div class="fight">
        <div class="form-box">
          <div class="button-box">
            <button
              type="button"
              class={`toggle-btn-login ${isLogin ? "btn-color" : ""}`}
              onClick={onLoginClick}
            >
              Log In
            </button>
            <button
              type="button"
              class={`toggle-btn-register ${!isLogin ? "btn-color" : ""}`}
              onClick={onRegisterClick}
            >
              Register
            </button>
          </div>
          <Socialicon />
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "200%",
                transition: "1s",
                transform: isLogin ? "translateX(0%)" : "translateX(-50%)",
              }}
            >
              <LoginForm1 />
              <LoginForm2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;