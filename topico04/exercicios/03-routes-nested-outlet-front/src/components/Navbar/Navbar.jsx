// import React from "react";
import './navbar.css'
import appLogo from './../../assets/appLogo.svg';
import { Link } from "react-router";

export const Navbar = () => {
  return (
   <nav className="nav_container">
        <div className="nav_logo">
          <Link to="/">
          <img src={appLogo}  className="nav_logo_img" />
          </Link>
        </div>
        <div className="nav_links">
          <Link to="/login">
            Log in
          </Link>
          <Link to="register">
            Register
          </Link>
        </div>
      </nav>
  );
};
