import React from "react";
import img from "../assets/asset 59.jpeg"

const MainVideo = () => {
    return (
      <div className="container space-y-4">
        
        <div className="container rounded-xl overflow-hidden">
          <img
            src={img}
            className="container h-[400px] w-[500px] px-10"
          />
  
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black p-4 rounded-full text-xl">
              ▶
            </button>
          </div>
        </div>
  
        {/* Content */}
        <div className="">
          <p className="text-red-500 text-sm mb-2">CAREERS</p>
  
          <h2 className="text-2xl font-semibold leading-snug">
            Security isn’t just a technology problem it’s about design, too
          </h2>
  
          <p className="text-gray-400 text-sm mt-2">
            Ismat Jahan • Feb 17, 2019 • 3 min read
          </p>
        </div>
      </div>
    );
  };
  
  export default MainVideo;