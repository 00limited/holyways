import React, { useState, useEffect, Fragment } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import brand from "../assets/Icon.png";
import img1 from "../assets/img6.png";
import raise from "../assets/raiseFund.png";
import user from "../assets/profile.png";
import logout from "../assets/logout.png";
import { Menu, Transition } from "@headlessui/react";
import ModalLogin from "../modals/auth/ModalLogin";
import ModalRegister from "../modals/auth/ModalRegister";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-red-700 fixed drop-shadow-lg ">
      <div className="px-20 flex justify-between items-center w-full h-full">
        <Link to="/" className="flex items-center">
          <img src={brand} alt="" />
        </Link>

        <div className="md:flex pr-4">
          <button
            className="border-none bg-transparent text-white mr-4 px-8 py-3"
            onClick={() => {
              setOpenModalLogin(true);
            }}
          >
            Login
          </button>
          <button
            className="px-8 py-3"
            onClick={() => {
              setOpenModalRegister(true);
            }}
          >
            Register
          </button>
        </div>
      </div>
      <ModalLogin
        setOpenModalLogin={setOpenModalLogin}
        showModalLogin={openModalLogin}
        setOpenModalRegister={setOpenModalRegister}
        showModalRegis={openModalRegister}
      />
      <ModalRegister
        setOpenModalRegister={setOpenModalRegister}
        showModalRegis={openModalRegister}
        setOpenModalLogin={setOpenModalLogin}
        showModalLogin={openModalLogin}
      />
    </div>
  );
};

export default Navbar;

{
  /* <div className="md:hidden" onClick={handleClick}>
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
      </ul> */
}
