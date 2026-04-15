export default function TechCard({ category, title, image }) {
    return (
      <div className="bg-gray-100 bg-[#1f2f5] rounded-2xl p-6 text-center relative overflow-hidden group">
        
        {/* Top Text */}
        <p className="text-sm uppercase text-red-500 font-semibold">
          {category}
        </p>
  
        <h3 className="text-3xl font-semibold text-gray-800  mt-2">
          {title}
        </h3>
  
        {/* Curved Shape */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-full"></div>
  
        {/* Image */}
        <img
          src={image}
          alt=""
          className="relative mx-auto mt-6 w-32 h-32 object-contain group-hover:scale-110 transition duration-500"
        />
      </div>
    );
  }