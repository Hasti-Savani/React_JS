import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../assets/asset 63.jpeg"
import img2 from "../assets/asset 64.jpeg"
import img3 from "../assets/asset 65.jpeg"
import img4 from "../assets/asset 66.jpeg"
import img5 from "../assets/asset 67.jpeg"
import img6 from "../assets/asset 68.jpeg"
import img7 from '../assets/About.jpg'
import tech from '../assets/Tech.jpeg'
import style from '../assets/Style.jpeg'
import travel from '../assets/Travel.jpeg'
import food from '../assets/Food.jpeg'
import img8 from '../assets/asset 50.jpeg'
import img9 from '../assets/asset 51.jpeg'
import img10 from '../assets/asset 52.jpeg'
import { FiSearch } from "react-icons/fi"
import { BsSlack } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img11 from "../assets/asset 0.png"


const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={img7} alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6 leading-relaxed">
          <h2 className="text-3xl font-semibold pt-4">The Professional Publishing Platform</h2>
          <p className='w-[750px]'>Aenean consectetur massa quis sem volutpat, a condimentum tortor pretium. Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient montes.</p>
          <p>Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend, dolor vel condimentum imperdiet.</p>
          <p className='w-[750px]'>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that’s filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.</p>
          <h2 className="text-3xl font-semibold pt-4">Our Growing News Network</h2>
          <p className='w-[750px]'>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)</p>
          <p className='w-[730px]'>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don’t necessarily match the original, which is intended to add variety.</p>
          <h2 className="text-3xl font-semibold pt-4">The Professional Publishing Platform</h2>
          <p className='w-[750px]'>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)</p>
          <p className='w-[730px]'>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don’t necessarily match the original, which is intended to add variety.</p>
        </div>

        {/* Sidebar */}
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

export default AboutUs