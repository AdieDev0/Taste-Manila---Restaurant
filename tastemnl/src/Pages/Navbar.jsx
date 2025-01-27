import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cyan-950 py-3 px-10">
      <div className="flex justify-between">
        {/* NAME */}
        <h1 className=" text-yellow-600 font-bold text-3xl">TASTEMNL</h1>
        {/* Routes */}
        <div className="flex gap-5 items-center">
          <h1 className=" text-yellow-600 font-semibold text-lg">HOME</h1>
          <h1 className=" text-yellow-600 font-semibold text-lg">ABOUT</h1>
          <h1 className=" text-yellow-600 font-semibold text-lg">SERVICE</h1>
          <h1 className=" text-yellow-600 font-semibold text-lg">MENU</h1>
          <h1 className=" text-yellow-600 font-semibold text-lg">PAGES</h1>
          <h1 className=" text-yellow-600 font-semibold text-lg">CONTACT</h1>
          <button className="cursor-pointer text-white font-semibold text-lg bg-yellow-600 px-5 py-1 rounded-xs hover:bg-yellow-500 duration-200">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
