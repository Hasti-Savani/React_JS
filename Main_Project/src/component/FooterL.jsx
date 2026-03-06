import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import img4 from "../assets/logo-white2.png"

const FooterL = () => {
    return (
        <>
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
                        <img className='h-10' src={img4} alt="" />
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

export default FooterL