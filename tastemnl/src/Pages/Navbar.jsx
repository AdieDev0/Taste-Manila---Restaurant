import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        {/* NAME */}
        <h1></h1>
        {/* Routes */}
        <div>
          <h1>HOME</h1>
          <h1>ABOUT</h1>
          <h1>SERVICE</h1>
          <h1>MENU</h1>
          <h1>PAGES</h1>
          <h1>CONTACT</h1>
          <button className="cursor-pointer">BOOK A TABLE</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
