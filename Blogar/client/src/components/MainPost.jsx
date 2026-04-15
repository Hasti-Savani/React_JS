import FeaturedPost from "./FeaturedPost";
import PostCard from "./Post";
import img from "../assets/lifestyle-post-02.jpg"
import img1 from "../assets/lifestyle-post-03.jpg"
import img2 from "../assets/lifestyle-post-04.jpg"
import img3 from "../assets/lifestyle-post-05.jpg"

export default function MainPost() {
  return (
    <div className=" bg-gray-100 bg-[#f1f2f5] p-6">
   

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* Left Featured */}
        <div className="col-span-2">
          <FeaturedPost />
        </div>

        {/* Right Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <PostCard
            category="Travel"
            title="The beautiful girl standing on a balcony of apartments looking at the seaside."
            image={img1}
          />

          <PostCard
            category="Travel"
            title="A good traveler has no fixed plans, and is not intent on arriving."
            image={img2}
          />

          <PostCard
            category="Travel"
            title="A good traveler has no fixed plans, and is not intent on arriving."
            image={img3}
          />

          <PostCard
            category="Accessory"
            title="Fashion portrait of young businessman handsome model man in casual cloth."
            image={img}
          />
        </div>
      </div>
    </div>
  );
}