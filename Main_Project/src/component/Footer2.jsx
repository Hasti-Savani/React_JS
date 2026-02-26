import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import img3 from "../assets/logo-white.png"

const Footer2 = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-8 mt-24 w-fu">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="flex items-center gap-6">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition">
                            <FaFacebookF />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition">
                            <FaInstagram />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition">
                            <FaXTwitter />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 my-6"></div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="flex items-center gap-3">
                    <img className="h-10" src={img3} alt="" />
                </div>

                <div className="text-gray-400 flex gap-10 text-sm mx-20">
                        <a className="hover:text-blue-600" href="#">Contact Us</a>
                        <a className="hover:text-blue-600" href="#">Terms of Use</a>
                        <a className="hover:text-blue-600" href="#">AdChoices</a>
                        <a className="hover:text-blue-600" href="#">Advertise with Us</a>
                        <a className="hover:text-blue-600" href="#">Blogar Store</a>
                    </div>  
            </div>
        </footer>
    );
};

export default Footer2;