import logo from "../navbar/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";

export const SignUp = () => {
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
    <div className="signup-page">
      <img src={logo} alt="Instagram logo" id="insta-logo-signup" />
      <button className="facebook-signup">
        <i class="bi bi-facebook"></i>
        <span>Sign up with Facebook</span>
      </button>
      <div className="or">
        <span className="line"></span>
        <span>OR</span>
        <span className="line"></span>
      </div>
      <input autocapitalize="none" placeholder="Email address" type="text" />
      <input autocapitalize="none" placeholder="Full Name" type="text" />
      <input autocapitalize="none" placeholder="Username" type="text" />
      <div className="password-input">
        <input autocapitalize="none" placeholder="Password" type={inputType} />
        <i class={passIcon} onClick={visiblePassHandler}></i>
      </div>
      <button>Sign Up</button>
      <div className="sign-in-section">
        <p>Already have an account? <span className="sign-in"><Link to="/login">Sign In</Link></span></p>
      </div>
    </div >
  );
}