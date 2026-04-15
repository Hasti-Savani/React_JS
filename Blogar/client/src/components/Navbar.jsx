import React from "react";
import img from "../assets/asset 0.png"
import img1 from "../assets/asset 6.png"
import {FaBookmark, FaBell } from "react-icons/fa";
import {FiSearch} from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <img className="h-10" src={img} alt="" />

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Post List</li>
        <li>Life Style</li>
        <li>404 Page</li>
        <li>Privacy Policy</li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-200 rounded-full px-5 py-3 h-10">
          <FiSearch className="text-gray-500 text-xl mr-3" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
        <div className="bg-gray-200 p-3 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-blue-600 transition">
          <FaBookmark className="text-gray-600 text-xl h-4 w-4 hover:text-white" />
        </div>
        <div className="bg-gray-200 p-3 rounded-full cursor-pointer hover:bg-gray-300 transition ">
          <FaBell className="text-gray-600 text-xl h-4 w-4" />
        </div>
        <img src={img1} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;