/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-full h-[50px]">
        <div className="max-w-[1200px] mx-auto mt-4 px-4 flex justify-between">
          <p>Logo</p>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>Favourites</li>
            <li>About</li>
          </ul>
          {/* Hamburger icon */}
          <div onClick={handleClick} className="md:hidden">
            {nav ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={
          nav
            ? "md:hidden absolute top-[66px] w-full"
            : "absolute left-[-100%] md:hidden"
        }
      >
        <ul className="w-full h-[100px] text-center">
          <li className="mb-4">Home</li>
          <li className="mb-4">Favourites</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
