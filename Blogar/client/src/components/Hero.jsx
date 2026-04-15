import React from "react"
import img from "../assets/asset 7.jpeg"
import img1 from "../assets/asset 8.png"
import { FaXTwitter, FaLink } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img
        src={img}
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute bottom-0 right-30 bg-white p-6 rounded-xl shadow-lg max-w-md h-65">
        <p className="text-red-500 text-sm mb-2">DESIGN</p>
        <h2 className="text-4xl font-semibold">
          4 types of research methods all designers should know
        </h2>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={img1}
            className="rounded-full"
          />
          <div>
            <span className="flex text-sm font-light">Rahabi Khan</span>
            <span className="text-xs text-gray-500">
              Feb 17, 2019
              300k Views
            </span>


          </div>
          <div className="flex px-12 gap-2">
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaFacebookF /></div>
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaInstagram /></div>
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaXTwitter /></div>
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaLink /></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;