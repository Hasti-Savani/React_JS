import React from "react";

export default function PopularCard({ image, title, category }) {
    return (
      <div className="container relative rounded-2xl overflow-hidden group">
        
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
  
        <div className="absolute inset-0 bg-black/20"></div>
  
        {/* Overlay Card */}
        <div className="absolute bottom-0 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow">
          <p className="text-lg uppercase text-red-500">{category}</p>
  
          <h3 className="text-gray-800 font-semibold mt-1 leading-snug text-4xl">
            {title}
          </h3>
        </div>
      </div>
    );
  }