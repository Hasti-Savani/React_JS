import React from "react"
import img from "../assets/logo-white2.png"
import img1 from "../assets/author.png"

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
                <div>
                    <img src={img1} alt="" />
                </div>
            </nav>
    )
}
export default Navbar;