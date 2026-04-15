import React from "react";
import img from "../assets/lifestyle-grid-03.jpg"
import img1 from "../assets/asset 8.png"
import { FaXTwitter, FaLink } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function LargeCard() {
    return (
        <div className="conatiner relative rounded-2xl overflow-hidden h-full min-h-[460px] group">

            <img
                src={img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 container"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-6 right-6 bg-white/95 p-6 rounded-xl shadow-lg">

                <p className="text-md uppercase text-red-500">Design</p>

                <h2 className="text-4xl font-semibold text-gray-800 mt-2">
                    Eating right is part of my lifestyle now.
                </h2>

                {/* Author */}
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
          <div className="flex gap-2 px-28">
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaFacebookF /></div>
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaInstagram /></div>
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaXTwitter /></div>
            <div className="hover:text-blue-600 flex items-center justify-center text-gray-600"><FaLink /></div>

          </div>
        </div>
            </div>
        </div>
    );
}