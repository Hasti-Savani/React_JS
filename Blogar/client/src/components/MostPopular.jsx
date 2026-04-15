import PopularCard from "./PopularCard";
import LargeCard from "./LargeCard";
import img from "../assets/asset 34.jpeg"
import img1 from "../assets/lifestyle-grid-02.jpg"

export default function MostPopular() {
  return (
    <div className="bg-[#f1f2f5]">
        <div className="container">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 mt-20 px-20 pt-25">
        Most Popular
      </h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap px-20">
        {["Accessibility", "Android Dev", "Blockchain", "Gadgets"].map(
          (item, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-lg bg-white shadow text-gray-700 text-xl"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-20">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <PopularCard
            image={img}
            category="Lifestyle"
            title="iPadOS 14 new designed specifically for iPad"
          />

          <PopularCard
            image={img1}
            category="Travel"
            title="Apple reimagines the iPhone experience with iOS 14"
          />
        </div>

        {/* RIGHT LARGE */}
        <LargeCard />
      </div>
      </div>
    </div>
  );
}