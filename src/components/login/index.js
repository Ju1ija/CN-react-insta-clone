import logo from "../navbar/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [passIcon, setPassIcon] = useState("bi bi-eye-slash");

  const visiblePassHandler = () => {
    setVisiblePass(!visiblePass);
    if (visiblePass) {
      setInputType("password");
      setPassIcon("bi bi-eye-slash");
    } else {
      setInputType("text");
      setPassIcon("bi bi-eye");
    }
  }

  return (
    <div className="login-page">
      <img src={logo} alt="Instagram logo" id="insta-logo-login" />
      <button className="facebook-login">
        <i class="bi bi-facebook"></i>
        <span>Log in with Facebook</span>
      </button>
      <div className="or">
        <span className="line"></span>
        <span>OR</span>
        <span className="line"></span>
      </div>
      <input autocapitalize="none" placeholder="Phone number, username or email address" type="text" />
      <div className="password-input">
        <input autocapitalize="none" placeholder="Password" type={inputType} />
        <i class={passIcon} onClick={visiblePassHandler}></i>
      </div>
      <span className="forgotten-pass">Forgotten password?</span>
      <button>Log In</button>
      <div className="sign-up-section">
        <p>Don't have an account? <span className="sign-up"><Link to="/signup">Sign Up</Link></span></p>
      </div>
    </div >
  );
}