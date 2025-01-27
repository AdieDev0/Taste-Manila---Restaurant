import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cyan-950 py-3 px-10">
      <div className="flex justify-between">
        {/* NAME */}
        <h1 className=" text-yellow-600 font-bold text-3xl cursor-pointer">TASTEMNL</h1>
        {/* Routes */}
        <div className="flex gap-5 items-center">
          <h1 className=" text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">HOME</h1>
          <h1 className=" text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">ABOUT</h1>
          <h1 className=" text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">SERVICE</h1>
          <h1 className=" text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">MENU</h1>
          <h1 className=" text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">PAGES</h1>
          <h1 className=" text-white hover:text-yellow-600 duration-200 font-semibold text-lg cursor-pointer">CONTACT</h1>
          <button className="cursor-pointer text-white font-semibold text-lg bg-yellow-600 px-5 py-1 rounded-xs hover:bg-yellow-500 duration-200">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
