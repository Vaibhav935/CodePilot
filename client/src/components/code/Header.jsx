import React from "react";
import { FaCode } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between p-1 border-b  border-[#2A2B2C] ">
      <div className="flex gap-5">
        <div className="logo flex items-center justify-center">
          <FaCode fill="white" />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>File</li>
            <li>Edit</li>
            <li>Terminal</li>
            <li>Run</li>
          </ul>
        </nav>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="border border-[#262728] outline-none px-2 rounded-lg w-100 bg-[#202122] "
        />
      </div>
      <div>Extras</div>
    </div>
  );
};

export default Header;
