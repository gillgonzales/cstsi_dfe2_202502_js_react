// import React from "react";
import './navbar.css'
import appLogo from './../../assets/appLogo.svg';
import { Link, Navigate, useNavigate } from "react-router";
import { ThemeButton } from '../Buttons/ThemeButton';
import { useTheme } from '../../contexts/ThemeProvider';
import { useAuthContext } from '../../contexts/AuthProvider';

import logoutIcon from "../../assets/logout.svg";

export const Navbar = () => {

  const { theme } = useTheme();
  const { isAuthenticated, setIsLogged } = useAuthContext();
  const navigate = useNavigate();

  const onLogout = () => {
    setIsLogged(false)
    navigate("/login");
  };

  return (
    <nav className={`nav_container ${theme}`}>
      <div className="nav_logo">
        <Link to="/">
          <img src={appLogo} className="nav_logo_img" />
        </Link>
      </div>
      <div className="nav_links">
        {!isAuthenticated
          ? <>
            <Link to="/login">
              Log in
            </Link>
            <Link to="register">
              Register
            </Link>
          </>
          :
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>
            <div className="logout">
              <a href="#" onClick={onLogout} >
                <img src={logoutIcon} />
              </a>
            </div>
          </>
        }
        <ThemeButton
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
};
