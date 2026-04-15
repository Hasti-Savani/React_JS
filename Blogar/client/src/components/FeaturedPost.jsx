import img from "../assets/lifestyle-post-01.jpg"

function FeaturedPost() {
    return (
      <div className="relative rounded-2xl overflow-hidden h-[500px] group">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
  
        <div className="absolute inset-0 bg-black/40"></div>
  
        <div className="absolute bottom-6 left-6 text-white">
          <p className="uppercase text-sm tracking-wide opacity-80">
          FEATURED POST
          </p>
  
          <h2 className="text-2xl  font-semibold mt-2 max-w-md">
          Fashion portrait of young businessman handsome model man in casual cloth.
          </h2>
        </div>
      </div>
    );
  }
  export default FeaturedPost;