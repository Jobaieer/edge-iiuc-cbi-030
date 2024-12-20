import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex flex-col lg:w-[30%] h-screen gap-16">
      <div className="flex flex-col">
        <a className="btn btn-ghost text-xl w-32">
          My <span className="text-orange-400">Book</span> <span>Shelf</span>
        </a>
      </div>

      <div className="flex lg:flex-col gap-48 ">
        <div className="flex lg:flex-col ">
          <a className="btn btn-ghost">Home</a>
          <a className="btn btn-ghost">Search</a>
          <a className="btn btn-ghost">My Self</a>
          <a className="btn btn-ghost">Favorite</a>
        </div>

        <div className="flex lg:flex-col ">
          <a className="btn btn-ghost">About</a>
          <a className="btn btn-ghost">Support</a>
          <a className="btn btn-ghost">Terms & Condition</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
