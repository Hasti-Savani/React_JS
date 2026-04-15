import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/asset 63.jpeg'
import img2 from '../assets/asset 64.jpeg'
import img3 from '../assets/asset 65.jpeg'
import img4 from '../assets/asset 66.jpeg'
import img5 from '../assets/asset 67.jpeg'
import img6 from '../assets/asset 68.jpeg'
import img7 from '../assets/Contact.jpg'
import img8 from '../assets/asset 50.jpeg'
import img9 from '../assets/asset 51.jpeg'
import img10 from '../assets/asset 52.jpeg'
import img11 from "../assets/asset 0.png"
import tech from '../assets/Tech.jpeg'
import travel from '../assets/Travel.jpeg'
import food from '../assets/Food.jpeg'
import style from '../assets/Style.jpeg'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsSlack } from "react-icons/bs";
import { FiSearch } from "react-icons/fi"

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={img7} alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-semibold mb-6">Say Hello!</h1>


          <p className="text-gray-600 leading-7 mb-6">
            Donec cursus dolor vitae congue consectetur. Morbi mattis viverra felis. Etiam dapibus id turpis at sagittis. Cras mollis mi vel ante ultricies, id ullamcorper mi pulvinar. Proin bibendum ornare risus, lacinia cursus quam condimentum id. Curabitur auctor massa eget porttitor molestie. Aliquam imperdiet dolor nec metus pulvinar sollicitudin.
          </p>

          <p className="text-gray-600 leading-7 mb-6">
            <span className="font-semibold text-black">
              Aliquam iaculis at odio ut tempus.
            </span>{" "}
            Suspendisse blandit luctus dui, a consequat mauris mollis id. Sed in ante at tortor malesuada imperdiet. Vestibulum sed gravida nibh. Nulla suscipit congue lorem, id tempor ipsum molestie sit amet. Nulla ultricies vitae erat in tincidunt. Maecenas tempus quam et ipsum elementum, a efficitur lectus tincidunt. Praesent diam elit, tincidunt ac tempus vulputate, aliquet viverra mauris. Etiam eu nunc efficitur, sagittis est ut, fringilla neque. Ut interdum eget lorem eget congue. Ut nec arcu placerat, mattis urna vel, consequat diam. Sed in leo in dolor suscipit molestie.
          </p>

          <p className="mb-10">
            <span className="text-blue-600 font-medium">Email:</span>{" "}
            Email: mepress@gmail.com
          </p>

          {/* FORM TITLE */}
          <h2 className="text-2xl font-semibold mb-2">
            Send Us a Message
          </h2>

          <p className="text-gray-500 mb-8">
            Your email address will not be published. All the fields are required.
          </p>

          {/* FORM */}
          <form className="space-y-6">

            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-3 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Phone</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-3 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-100 p-3 rounded-lg outline-none"
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-2">Your Message</label>
              <textarea
                rows="6"
                className="w-full bg-gray-100 p-4 rounded-lg outline-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Submit
            </button>

          </form>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-[#fbfbfd] px-4 py-2 rounded-xl ">
              <img
                src={tech}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm ">Tech</span>
            </div>

            <div className="flex items-center gap-2 bg-[#fbfbfd] px-4 py-2 rounded-xl">
              <img
                src={style}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">Style</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-[#fbfbfd] px-4 py-2 rounded-xl">
              <img src={travel} className="w-8 h-8 rounded-full" />
              <span className="text-sm">Travel</span>
            </div>
            <div className="flex items-center gap-2 bg-[#fbfbfd] px-4 py-2 rounded-xl">
              <img src={food} className="w-8 h-8 rounded-full" />
              <span className="text-sm">Food</span>
            </div>
          </div>

          {/* SEARCH */}
          <div className="bg-[#fbfbfd] p-6 rounded-xl">
            <h3 className="font-medium text-lg mb-1 items-center flex justify-center">Search</h3>
            <div className='border mb-5 border-gray-200'></div>
            <div className="flex items-center bg-gray-200 rounded-full px-5 py-3 h-10">
              <FiSearch className="text-gray-400 text-xl mr-3" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-gray-200 placeholder-gray-400"
              />
            </div>
          </div>

          {/* POPULAR POSTS */}
          <div className="bg-[#fbfbfd] p-6 rounded-xl">
            <h3 className="font-medium text-lg mb-1 items-center flex justify-center">Popular on Blogar</h3>
            <div className='border mb-5 border-gray-200'></div>
            <div className="mt-4 ">
              <div className="flex gap-4">
                <img src={img8} alt="" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium">The underrated design book that transformed the way I work</p>
                  <span className="text-xs text-gray-500">
                    Feb 17, 2019
                    300k Views
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-4">
                <img src={img9} alt="" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium">Here’s what you should (and shouldn’t) do when</p>
                  <span className="text-xs text-gray-500">
                    Feb 17, 2019
                    300k Views
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-4">
                <img src={img10} alt="" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium">How a developer and designer duo at Deutsche Bank keep remote</p>
                  <span className="text-xs text-gray-500">
                    Feb 17, 2019
                    300k Views
                  </span>
                </div>
              </div>
            </div>
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

        </div>
      </div >


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
                        <img className='h-10' src={img11} alt="" />
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

export default ContactUs