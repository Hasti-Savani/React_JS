 function StoryItem({ image, title, category }) {
    return (
      <div className="flex items-start gap-4 border-b pb-4 border-gray-300">
        
        <img
          src={image}
          alt=""
          className="w-14 h-14 rounded-lg object-cover h-[100px] w-[100px]"
        />
  
        <div>
          <p className="text-xl uppercase text-red-500 font-semibold ">
            {category}
          </p>
  
          <h3 className="text-gray-800 font-medium leading-snug mt-1 hover:underline cursor-pointer text-4xl">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  export default StoryItem;