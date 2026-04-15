export default function PostCardHorizontal({
    category,
    title,
    author,
    image,
    avatar,
  }) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p className="text-sm uppercase text-red-500 font-semibold mb-2">
            {category}
          </p>
  
          <h2 className="text-4xl  font-semibold text-gray-800 leading-snug underline decoration-2 underline-offset-4">
            {title}
          </h2>
  
          {/* Author */}
          <div className="flex items-center gap-3 mt-6">
            <img
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {author}
              </p>
              <p className="text-xs text-gray-400">
                Feb 17, 2019 • 300k Views
              </p>
            </div>
          </div>
        </div>
  
        {/* RIGHT IMAGE */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt=""
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
          />
        </div>
      </div>
    );
  }