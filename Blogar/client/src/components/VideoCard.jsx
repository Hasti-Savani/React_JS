export default function VideoCard({ image, title, category }) {
  return (
    <div className="group cursor-pointer">
      
      {/* Image */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
        />

       

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-sm">
            ▶
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="mt-3">
        <p className="text-sm text-red-500 uppercase">{category}</p>
        <h3 className="text-xl font-medium mt-1 leading-snug text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}