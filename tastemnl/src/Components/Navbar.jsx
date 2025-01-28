import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="bg-[#0F172B] py-3 px-6 md:px-24">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-yellow-600 font-bold text-4xl cursor-pointer">
          TASTEMNL
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8 items-center">
          {["HOME", "ABOUT", "SERVICE", "MENU"].map((item) => (
            <li
              key={item}
              className="text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer"
            >
              <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
            </li>
          ))}

          {/* Dropdown Menu */}
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center gap-1.5 text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
              PAGES
              <FaCaretDown className="text-lg" aria-hidden="true" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-[#0F172B] focus:outline-none">
              <div className="py-1">
                {["Booking", "Our Team", "Testimonials"].map((page) => (
                  <Menu.Item key={page}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          active
                            ? "bg-gray-100 text-yellow-600 font-bold"
                            : "text-gray-700"
                        }`}
                      >
                        {page}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>

          <li className="text-white hover:text-yellow-600 duration-200 font-semibold text-sm cursor-pointer">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <button className="cursor-pointer text-white font-semibold text-sm bg-yellow-600 px-4 py-2 rounded-sm hover:bg-yellow-500 duration-200">
            BOOK A TABLE
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden text-white text-2xl"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-20 bg-[#0F172B] flex flex-col gap-4 p-6">
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="self-end text-white text-2xl"
            aria-label="Close mobile menu"
          >
            <IoClose />
          </button>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-4">
            {["HOME", "ABOUT", "SERVICE", "MENU"].map((item) => (
              <li
                key={item}
                className="text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer"
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}

            {/* Dropdown Menu in Mobile */}
            <li className="text-white">
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center gap-1.5 text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">
                  PAGES
                  <FaCaretDown className="text-lg" aria-hidden="true" />
                </Menu.Button>
                <Menu.Items className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-[#0F172B] focus:outline-none">
                  <div className="py-1">
                    {["Booking", "Our Team", "Testimonials"].map((page) => (
                      <Menu.Item key={page}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${
                              active
                                ? "bg-gray-100 text-yellow-600 font-bold"
                                : "text-gray-700"
                            }`}
                          >
                            {page}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </li>

            <li className="text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <button className="cursor-pointer text-white font-semibold text-lg bg-yellow-600 px-4 py-2 rounded-sm hover:bg-yellow-500 duration-200">
            BOOK A TABLE
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
