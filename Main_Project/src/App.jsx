import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">BLOGAR</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Posts</li>
          <li className="hover:text-red-500 cursor-pointer">Pages</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-300 to-pink-300 h-[400px] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
          <p className="text-sm text-red-500 font-semibold mb-2">
            DESIGN / UX
          </p>
          <h2 className="text-xl font-bold mb-3">
            4 types of research methods all designers should know
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Read More
          </button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-10 py-12">
        <h2 className="text-xl font-bold mb-6">More Featured Posts</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src="https://source.unsplash.com/400x250/?ocean"
              alt=""
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">
              Apple reimagines the iPhone experience
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src="https://source.unsplash.com/400x250/?mountain"
              alt=""
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">
              Build the ultimate VR headset today
            </h3>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="px-10 py-12 bg-white">
        <h2 className="text-xl font-bold mb-6">Trending Topics</h2>

        <div className="flex gap-4 overflow-x-auto">
          {["travel", "nature", "technology", "food", "fitness"].map(
            (item, index) => (
              <div
                key={index}
                className="min-w-[150px] bg-gray-200 rounded-lg p-4 text-center capitalize"
              >
                {item}
              </div>
            )
          )}
        </div>
      </section>

      {/* Most Popular */}
      <section className="px-10 py-12">
        <h2 className="text-xl font-bold mb-6">Most Popular</h2>

        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow flex gap-6"
            >
              <img
                src="https://source.unsplash.com/200x150/?technology"
                alt=""
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  Here's what you should (and shouldn't) do when giving feedback
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Video */}
      <section className="bg-black text-white px-10 py-12">
        <h2 className="text-xl font-bold mb-6">Featured Video</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg p-4">
              <img
                src="https://source.unsplash.com/400x250/?laptop"
                alt=""
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold">
                Security isn’t just a technology problem
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="px-10 py-12 bg-white">
        <h2 className="text-xl font-bold mb-6">Instagram</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img
              key={item}
              src="https://source.unsplash.com/200x200/?fashion"
              alt=""
              className="rounded-lg"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 px-10 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-white font-bold mb-3">BLOGAR</h3>
            <p className="text-sm">
              Modern blog website template built with React & Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-3 font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Technology</li>
              <li>Design</li>
              <li>Travel</li>
              <li>Food</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3 font-semibold">Subscribe</h4>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-md text-black"
            />
            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md w-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center text-sm mt-8">
          © 2026 Blogar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;