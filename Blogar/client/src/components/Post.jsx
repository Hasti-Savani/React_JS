export default function Post({ image, title, category }) {
    return (
      <div className="relative rounded-xl overflow-hidden h-[200px] group">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
  
        <div className="absolute inset-0 bg-black/40"></div>
  
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs uppercase opacity-80">{category}</p>
          <h3 className="text-sm font-medium mt-1 line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    );
  }