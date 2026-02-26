import React from "react"
import img from "../assets/logo-white2.png"


{/* Footer */ }
const Footer = () => {
  return (
    <>
      <footer className="bg-white px-10 py-8">
        <div className="mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div>
            <h3 className="font-bold mb-3">World</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>U.N.</li>
              <li>Conflicts</li>
              <li>Terrorism</li>
              <li>Disasters</li>
              <li>Global Economy</li>
              <li>Environment</li>
              <li>Religion</li>
              <li>Scandals</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Politics</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Executive</li>
              <li>Senate</li>
              <li>House</li>
              <li>Judiciary</li>
              <li>Global Economy</li>
              <li>Foreign policy</li>
              <li>Polls</li>
              <li>Elections</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Entertainment</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Celebrity News</li>
              <li>Movies</li>
              <li>TV News</li>
              <li>Disasters</li>
              <li>Music News</li>
              <li>Environment</li>
              <li>Style News</li>
              <li>Entertainment Video</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Business</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Environment</li>
              <li>Conflicts</li>
              <li>Terrorism</li>
              <li>Disasters</li>
              <li>Global Economy</li>
              <li>Environment</li>
              <li>Religion</li>
              <li>Scandals</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Health</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Movies</li>
              <li>Conflicts</li>
              <li>Terrorism</li>
              <li>Disasters</li>
              <li>Global Economy</li>
              <li>Environment</li>
              <li>Religion</li>
              <li>Scandals</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-bold">About</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>U.N.</li>
              <li>Conflicts</li>
              <li>Terrorism</li>
              <li>Disasters</li>
              <li>Global Economy</li>
              <li>Environment</li>
              <li>Religion</li>
              <li>Scandals</li>
            </ul>
          </div>
        </div>

        <div className="text-gray-400 border-t mt-20"></div>
        <div className="bg-white ">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">


            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl">
                <img className="h-10" src={img} alt="" />
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <span className="text-lg font-medium">Follow Us</span>

              <div className="flex space-x-3">
                <div className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 cursor-pointer">
                  <FaFacebookF />
                </div>

                <div className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 cursor-pointer">
                  <FaInstagram />
                </div>

                <div className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 cursor-pointer">
                  <FaXTwitter />
                </div>

                <div className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 cursor-pointer">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-400 border-t"></div>
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex flex-wrap gap-6 text-center md:text-left">
              <a href="#" className="hover:text-blue-600 text-[15px] px-1">Contact Us</a>
              <a href="#" className="hover:text-blue-600 text-[15px] px-1">Terms of Use</a>
              <a href="#" className="hover:text-blue-600 text-[15px] px-1">AdChoices</a>
              <a href="#" className="hover:text-blue-600 text-[15px] px-1">Advertise with Us</a>
              <a href="#" className="hover:text-blue-600 text-[15px] px-1">Blogar Store</a>
            </div>
          </div>
        </div>

      </footer>
    </>

  )
}
export default Footer;
