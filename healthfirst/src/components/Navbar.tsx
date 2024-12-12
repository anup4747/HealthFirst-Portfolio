import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className=" bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-row self-center justify-center">
        <div className="flex mx-auto justify-between w-full fixed  bg-white shadow-lg">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12 ml-32">
            {/* logo */}
            <div>
              <Link to="/" onClick={() => setToggleMenu(!toggleMenu)}>
                <div className="flex gap-1 font-bold text-gray-700 items-center ">
                  <PaperAirplaneIcon className="h-6 w-6 text-primary" />

                  <span>Health First</span>
                </div>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6 ">
            <div className="hidden xs:flex items-center gap-10 mr-32">
              <div className="hidden lg:flex items-center gap-2">
                <MoonIcon className="h-6 w-6" />
                <SunIcon className="h-6 w-6" />
              </div>
              <div>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center ">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <Link
              to="/"
              className="border-l-4 border-gray-600"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Home
            </Link>
            <Link to="/services" onClick={() => setToggleMenu(!toggleMenu)}>
              Services
            </Link>
            <Link to="/about" onClick={() => setToggleMenu(!toggleMenu)}>
              Testimonies
            </Link>
            <Link to="/contact" onClick={() => setToggleMenu(!toggleMenu)}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
