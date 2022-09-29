import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import brand from "../assets/Icon.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-red-700 fixed drop-shadow-lg ">
      <div className="px-10 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={brand} alt="" />
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-white mr-4 px-8 py-3">
            Login
          </button>
          <button className="px-8 py-3">Register</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute  bg-red-600 w-full px-20"}>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-white px-8 py-3 mb-4">
            Login
          </button>
          <button className="px-8 py-3">Register</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
