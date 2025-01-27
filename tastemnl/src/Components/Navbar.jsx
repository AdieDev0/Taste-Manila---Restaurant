import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-[#0F172B] py-3 px-24">
      <div className="flex justify-between">
        {/* NAME */}
        <h1 className=" text-yellow-600 font-bold text-4xl cursor-pointer">
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

          {/* FROM HEADLESS UI */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
                PAGES
                <FaCaretDown
                  aria-hidden="true"
                  className="-mr-1 text-lg text-white hover:text-yellow-600 duration-200"
                />
              </Menu.Button>
            </div>
            {/* ITEMS */}
            <Menu.Items
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-[#0F172B] transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <Menu.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md hover:font-bold duration-100 text-gray-700 data-focus:bg-gray-100 data-focus:text-yellow-600 data-focus:outline-hidden"
                  >
                    Booking
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md hover:font-bold duration-100 text-gray-700 data-focus:bg-gray-100 data-focus:text-yellow-600 data-focus:outline-hidden"
                  >
                    Our Team
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md hover:font-bold duration-100 text-gray-700 data-focus:bg-gray-100 data-focus:text-yellow-600 data-focus:outline-hidden"
                  >
                    Testimonials
                  </a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
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
