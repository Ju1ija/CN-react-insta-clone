import logo from "../navbar/logo.png";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchRequestSignup } from "../../utils";
import "./signUp.css";

export const SignUp = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const signUpHandler = async () => {
    // e.preventDefault();
    const success = fetchRequestSignup(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    if (success) {
      history.push("/login");
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
      <input onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" value={username} />
      <input onChange={(e) => setEmail(e.target.value)} autocapitalize="none" placeholder="Email address" type="text" value={email} />
      {/* <input autocapitalize="none" placeholder="Full Name" type="text" /> */}
      <div className="password-input">
        <input onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type={inputType} value={password} />
        <i class={passIcon} onClick={visiblePassHandler}></i>
      </div>
      <button onClick={signUpHandler}>Sign Up</button>
      <div className="sign-in-section">
        <p>Already have an account? <span className="sign-in"><Link to="/login">Sign In</Link></span></p>
      </div>
    </div >
  );
}