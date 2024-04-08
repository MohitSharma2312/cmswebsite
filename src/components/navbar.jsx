import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../CSS/navbar.css"; // Import your CSS file
import profilePic from '../assets/baking.png';
// import scrollTop from "../pages/home.jsx";

const Navbar = ({ scrollTop, isAuthenticated, }) => {
    // Destructure scrollTop, isAuthenticated, and profilePic from props
    return (
      <nav className={`navbar ${scrollTop > 100 ? "scrolled" : ""}`}>
        {/* Add a conditional className for styling */}
        <ul className="navbar-list">
        <li className="navbar-item">
            <Link to="/" className="navbar-link">
              CAMPUS BITES
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/item" className="navbar-link">
              Item
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>


          {isAuthenticated ? (
            <li className="navbar-item">
              <img src={profilePic} alt="Profile" className="profile-pic" /> {/* Display profile picture when authenticated */}
            </li>
          ) : (
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">

                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  };
  

export default Navbar;
