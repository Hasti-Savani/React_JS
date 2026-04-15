import React from 'react'
import img from "../assets/asset 0.png"
import Navbar from '../components/Navbar';
import MainPost from '../components/MainPost';
import img1 from "../assets/lifestyle-post-06.jpg"
import img2 from "../assets/liststyle-sm-01.jpg"
import img3 from "../assets/liststyle-sm-02.jpg"
import img4 from "../assets/liststyle-sm-03.jpg"
import img5 from "../assets/post-seo-list-02.jpg"
import StoryItem from '../components/StoryItem';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import MostPopular from '../components/MostPopular';
import FeaturedVideo from '../components/FeaturedVideo';


const LifeStyle = () => {
    return (
        <>
            <div className='flex justify-between items-center px-10 py-4 shadow-md bg-[#f1f2f5]'>
                <ul className='flex justify-between items-center text-sm gap-12 text-gray-400'>
                    <li>4 November, 2022</li>
                    <li>Advertisement</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-6'>
                    <div className="hover:text-blue-600">
                        <FaFacebookF />
                    </div>
                    <div className="hover:text-blue-600">
                        <FaInstagram />
                    </div>
                    <div className="hover:text-blue-600">
                        <FaXTwitter />
                    </div>
                    <div className="hover:text-blue-600">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <Navbar />

            <MainPost/>

        <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 mt-20">
          Top Stories
        </h1>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
      {/* Categories */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        {["Travel", "Lifestyle", "Accessory", "Gadgets"].map((item, i) => (
          <button
            key={i}
            className="px-4 py-2 rounded-lg bg-white text-gray-700  shadow  transition text-xl"
          >
            {item}
          </button>
        ))}

        
      </div>
      <div className="space-y-6">
        <StoryItem
          category="Policy"
          title="TikTok pulls out of Hong Kong due to new security law"
          image={img2}
        />

        <StoryItem
          category="App"
          title="Slack is giving your weekends back with per-day"
          image={img3}
        />

        <StoryItem
          category="Google"
          title="How to personalize your Google Chrome homepage with GIF"
          image={img4}
        />

        <StoryItem
          category="Business"
          title="Chinese EV startups Byton and Nio received paycheck"
          image={img5}
        />
      </div>
     
    </div>  
    <div className="relative rounded-2xl overflow-hidden h-[650px] mt-20">
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute bottom-6 left-6 text-white max-w-md">
        <p className="text-xs uppercase opacity-80">Business</p>

        <h2 className="text-xl font-semibold mt-2 leading-snug">
          If you can build a business up big enough, it's respectable.
        </h2>
      </div>
    </div>  
        </div>
      </div>

      <MostPopular/>
      <FeaturedVideo/>
      

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
                        <img className='h-10' src={img} alt="" />
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

export default LifeStyle;

