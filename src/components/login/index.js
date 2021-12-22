import logo from "../navbar/logo.png";
import { useState, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { fetchRequestLogin } from "../../utils";
import "./login.css";

export const Login = ({ authContext }) => {
  const useAuth = () => {
    return useContext(authContext);
  }
  const location = useLocation();
  const auth = useAuth();
  const { from } = location.state || { from: { pathname: "/" } };
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
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

  const logInHandler = async () => {
    // e.preventDefault();
    const success = fetchRequestLogin(username, password);
    setUsername("");
    setPassword("");
    if (success) {
      auth.signin(() => {
        history.replace(from);
      });
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
      <input onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" />
      <div className="password-input">
        <input onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type={inputType} />
        <i class={passIcon} onClick={visiblePassHandler}></i>
      </div>
      <span className="forgotten-pass">Forgotten password?</span>
      <button onClick={logInHandler}>Log In</button>
      <div className="sign-up-section">
        <p>Don't have an account? <span className="sign-up"><Link to="/signup">Sign Up</Link></span></p>
      </div>
    </div >
  );
}