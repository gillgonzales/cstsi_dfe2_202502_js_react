// import React from "react";
import appLogo from '/img/newAppLogoGreenShades.svg?url';

export const Navbar = () => {
  return (
    <nav className="flex max-h-16 justify-between bg-blue-800 pt-2">
      <div className="flex w-1/4 justify-start ">
        <a href="#">
        <img src={appLogo}  className="size-12" />
        </a>
      </div>
      <div className="flex w-3/4 justify-around text-center sm:w-[30%] md:w-1/4 lg:w-1/5 xl:w-[15%] 3xl:w-[10%] 4xl:w-[8%]">
        <a
          href="#"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Log in
        </a>
        <a
          href="#"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Register
        </a>
      </div>
    </nav>
  );
};
