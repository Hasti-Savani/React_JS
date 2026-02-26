import React from "react"
import img from "../assets/logo-white2.png"
import img1 from "../assets/author.png"
import { FiSearch, FiBookmark, FiBell } from "react-icons/fi";

const Navbar = () => {
    return ( 
            <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
                <img className="h-10" src={img} alt="" />
                <ul className="flex gap-6 text-gray-400 font-medium">
                    <li className=" cursor-pointer">Home</li>
                    <li className=" cursor-pointer">Posts</li>
                    <li className=" cursor-pointer">Mega Menu</li>
                    <li className=" cursor-pointer">Pages</li>
                    <li className="cursor-pointer">Lifestyle</li>
                    <li className=" cursor-pointer">Gadgets</li>
                </ul>
                <div className="p-4">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        
        {/* Search Input */}
        <div className="flex items-center bg-gray-200 rounded-full px-5 py-3 mr-4 h-10">
          <FiSearch className="text-gray-500 text-xl mr-3" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          
          <div className="bg-gray-200 p-3 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-blue-600 transition">
            <FiBookmark className="text-gray-600 text-xl h-4 w-4 hover:text-white" />
          </div>

          <div className="bg-gray-200 p-3 rounded-full cursor-pointer hover:bg-gray-300 transition">
            <FiBell className="text-gray-600 text-xl h-4 w-4" />
          </div>

        </div>
      </div>
    </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </nav>
    )
}
export default Navbar;