import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-cyan-950 py-3 px-24">
      <div className="flex justify-between">
        {/* NAME */}
        <h1 className=" text-yellow-600 font-bold text-3xl cursor-pointer">
          TASTEMNL
        </h1>
        {/* Routes */}
        <ul className="flex gap-8 items-center">
          <li className=" text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li className=" text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className=" text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
            <NavLink to="/service">SERVICE</NavLink>
          </li>
          <li className=" text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
            <NavLink to="/menu">MENU</NavLink>
          </li>
          <details class="dropdown">
            <summary class="btn m-1">open or close</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          <li className=" text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <button className="cursor-pointer text-white font-semibold text-lg bg-yellow-600 px-5 py-1 rounded-xs hover:bg-yellow-500 duration-200">
            BOOK A TABLE
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
