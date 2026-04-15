import TechCard from "./TechCard";
import img from "../assets/asset 19.jpeg"
import img1 from "../assets/asset 16.jpeg"
import img2 from "../assets/asset 17.jpeg"

export default function TechSection() {
  return (
    <div className="bg-white">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Innovation & Tech
      </h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap">
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

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <TechCard
          category="Accessibility"
          title="Lightweight, grippable, and ready to go."
          image={img}
        />

        <TechCard
          category="Apple Design"
          title="Bold new experience. Same Mac magic."
          image={img1}
        />

        <TechCard
          category="Gadgets"
          title="Creative Game With The New DJI Mavic Air 2"
          image={img2}
        />
      </div>
    </div>
  );
}