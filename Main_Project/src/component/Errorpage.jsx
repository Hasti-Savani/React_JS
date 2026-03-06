import React from 'react'
import Footer from "./Footer"
import Navbar from './Navbar'
// import errimg from "../assets/error.jpeg"


const Errorpage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-between px-20">

        <div className="max-w-lg">
          <h1 className="text-[140px] font-bold text-gray-300 leading-none">
            404
          </h1>

          <h2 className="text-4xl font-semibold mt-4">
            Page not found!
          </h2>

          <p className="text-gray-500 mt-4">
            Sorry, but the page you were looking for could not be found.
          </p>

          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Back to Homepage
          </button>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Errorpage;

