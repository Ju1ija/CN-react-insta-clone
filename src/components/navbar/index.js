import logo from "./logo.png";
import personalProfile from "./profile-picture.jpeg";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <a href=""><img src={logo} alt="Instagram logo" id="insta-logo" /></a>
      <i class="bi bi-house-door-fill"></i>
      <i class="bi bi-envelope"></i>
      <i class="bi bi-plus-square"></i>
      <a href="https://www.instagram.com/explore/"><i class="bi bi-compass"></i></a>
      <i class="bi bi-heart"></i>
      <img src={personalProfile} alt="Personal profile picture" id="profile-picture"></img>
    </div>
  );
}