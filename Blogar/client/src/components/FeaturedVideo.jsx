import VideoCard from "./VideoCard";
import img from "../assets/asset 59.jpeg"
import img1 from "../assets/asset 60.jpeg"
import img2 from "../assets/asset 61.jpeg"
import img3 from "../assets/asset 62.jpeg"
import { FaXTwitter, FaLink } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


export default function FeaturedVideo() {
  return (
    <>
      <div className="bg-[#1a1a1a] p-2 mt-15">
        <h1 className="text-4xl font-semibold text-white mb-6 mt-20 px-11">
          Featured Video
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT BIG VIDEO */}
          <div>
            <div className="relative rounded-2xl overflow-hidden group px-11">
              <img
                src={img}
                alt=""
                className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-500"
              />

              \

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center text-xl cursor-pointer">
                  ▶
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <p className="text-sm text-red-500 uppercase px-11">Careers</p>

              <h2 className="text-3xl font-semibold mt-2 leading-snug text-white px-11">
                Security isn’t just a technology problem it’s about design, too
              </h2>

              <div className="p-11">
                <span className="flex text-sm font-light text-white">Rahabi Khan</span>
                <span className="text-xs text-gray-500">
                  Feb 17, 2019
                  300k Views
                </span>
              </div>  
            </div>
          </div>
          

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <VideoCard
              category="Design"
              title="Get Ready To Up Your Creative Game With The"
              image={img1}
            />

            <VideoCard
              category="Leadership"
              title="Traditional design won’t save us in the COVID-19 era"
              image={img2}
            />

            <VideoCard
              category="Product Updates"
              title="New: Freehand Templates, built for the whole team"
              image={img1}
            />

            <VideoCard
              category="Collaboration"
              title="The 1 tool that helps remote teams collaborate better"
              image={img3}
            />
          </div>
        </div>
      </div>
    </>
  );
}