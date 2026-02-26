import React from 'react'
import img from "../assets/logo-white2.png"
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";


const LifeStyle = () => {
    return (
        <>
            <footer>
                {/* Top Section */}
                <div className="flex align-center">
                    <h4 className="font-semibold">Follow Us</h4>
                    <div className="flex gap=15px ">
                        <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e5e5e5] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition:0.3s"><FaFacebookF /></div>
                        <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e5e5e5] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition:0.3s"><FaInstagram /></div>
                        <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e5e5e5] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition:0.3s"><FaXTwitter /></div>
                        <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e5e5e5] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition:0.3s"><FaLinkedinIn /></div>
                    </div>
                </div>
               

                {/* Bottom Section */}
                <div className="flex items-center border-t">
                    <div className="">
                        <img className="h-10" src={img} alt="" />
                    </div>

                    <div className="text-gray-400 flex gap-10 mx-20">
                        <a className="hover:text-blue-600" href="#">Contact Us</a>
                        <a className="hover:text-blue-600" href="#">Terms of Use</a>
                        <a className="hover:text-blue-600" href="#">AdChoices</a>
                        <a className="hover:text-blue-600" href="#">Advertise with Us</a>
                        <a className="hover:text-blue-600" href="#">Blogar Store</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default LifeStyle;

