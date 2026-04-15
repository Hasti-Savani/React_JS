import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/asset 50.jpeg'
import img2 from '../assets/asset 51.jpeg'
import img3 from '../assets/asset 52.jpeg'
import img4 from '../assets/asset 53.jpeg'
import img5 from '../assets/asset 54.jpeg'
import img6 from '../assets/asset 55.jpeg'
import img11 from '../assets/asset 57.jpeg'
import img12 from '../assets/asset 55.jpeg'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsSlack } from "react-icons/bs";
import travel1 from '../assets/travel1.jpeg'
import img13 from "../assets/asset 0.png"


const PostList = () => {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">

                {/* LEFT BLOG POSTS */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 flex gap-6">

                        <img
                            src={travel1}
                            className="w-56 h-40 object-cover rounded-lg"
                            alt=""
                        />


                        <div>
                            <p className="text-red-500 text-sm font-semibold">
                                TRAVEL
                            </p>

                            <h2 className="text-xl font-semibold mt-2 mb-3">
                                Traditional design won’t save us in the COVID-19 era
                            </h2>

                            <p className="text-sm text-gray-500">
                                Rahabi Khan • Feb 17, 2019 • 3 min read
                            </p>

                            <div className="flex gap-4 mt-4 text-gray-400">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaXTwitter />
                            </div>
                        </div>
                    </div>


                </div>

                {/* SIDEBAR */}
                <div className="space-y-8">

                    {/* SEARCH */}
                    <div className="bg-gray-100 p-6 rounded-xl">
                        <h3 className="text-center font-semibold mb-4">Search</h3>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-3 rounded-full outline-none"
                        />
                    </div>

                    {/* POPULAR POSTS */}
                    <div className="bg-gray-100 p-6 rounded-xl">
                        <h3 className="text-center font-semibold mb-6">
                            Popular on Blogar
                        </h3>
                    </div>

                    {/* STAY IN TOUCH */}
                    <div className="bg-gray-100 p-6 rounded-xl text-center">
                        <h3 className="font-semibold text-lg mb-1">Stay In Touch</h3>
                        <div className='border mb-5 border-gray-200'></div>
                        <div className="max-w-xl mx-auto bg-gray-100 rounded-2xl text-center">

                            <div className="flex justify-center gap-3">
                                <div className="hover:bg-blue-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition">
                                    <FaFacebookF />
                                </div>
                                <div className="hover:bg-blue-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition">
                                    <FaInstagram />
                                </div>
                                <div className="hover:bg-blue-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition">
                                    <FaXTwitter />
                                </div>
                                <div className="hover:bg-blue-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition">
                                    <BsSlack />
                                </div>
                                <div className="hover:bg-blue-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition">
                                    <FaLinkedinIn />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* INSTAGRAM */}
                    <div className="bg-gray-100 p-6 rounded-xl">
                        <h3 className="text-center font-semibold mb-1">Instagram</h3>
                        <div className='border mb-5 border-gray-200'></div>
                        <div className="grid grid-cols-3 gap-3">

                            <img src={travel1} className="rounded-lg h-20 w-full object-cover" alt="" />
                            <img src={img2} className="rounded-lg h-20 w-full object-cover" alt="" />
                            <img src={img11} className="rounded-lg h-20 w-full object-cover" alt="" />
                            <img src={img4} className="rounded-lg h-20 w-full object-cover" alt="" />
                            <img src={img12} className="rounded-lg h-20 w-full object-cover" alt="" />
                            <img src={img6} className="rounded-lg h-20 w-full object-cover" alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-gray-200 py-16 px-20 mt-7">
                <h2 className="text-5xl font-semibold mb-10">Instagram</h2>
                <div className="flex gap-8 overflow-x-auto scrollbar-hide">
                    <ul className='flex gap-8 overflow-x-auto scrollbar-hide'>
                        <li><img src={img1} alt="" /></li>
                        <li><img src={img2} alt="" /></li>
                        <li><img src={img3} alt="" /></li>
                        <li><img src={img4} alt="" /></li>
                        <li><img src={img5} alt="" /></li>
                        <li><img src={img6} alt="" /></li>
                    </ul>
                </div>
            </div>

            <footer className="py-8 px-16">
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-medium">Follow Us</h3>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                            <FaFacebookF />
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                            <FaInstagram />
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                            <FaXTwitter />
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 mb-6"></div>
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center gap-3">
                        <img className='h-10' src={img13} alt="" />
                        <ul className='flex gap-8 text-gray-600 ms-12'>
                            <li className='hover:text-blue-600'>Contact Us</li>
                            <li className='hover:text-blue-600'>Terms of Use</li>
                            <li className='hover:text-blue-600'>AdChoices</li>
                            <li className='hover:text-blue-600'>Advertise with Us</li>
                            <li className='hover:text-blue-600'>Blogar Store</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default PostList