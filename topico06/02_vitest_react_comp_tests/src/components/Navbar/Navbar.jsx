// import React from "react";
import { Link } from 'react-router-dom';
import appLogo from '/img/newAppLogoGreenShades.svg?url';
import { NavLinks } from '../NavLinks/NavLinks';
import { useAuthContext } from '../../context/AuthProvider';

export const Navbar = () => {

  const {user} = useAuthContext()

  return (
    <nav className="flex max-h-16 justify-between bg-blue-800 pt-2">
      <div className="flex w-1/4 justify-start ">
        <Link to="/">
        <img src={appLogo}  className="size-12" />
        </Link>
      </div>
      <NavLinks  user={user}></NavLinks>
    </nav>
  );
};
