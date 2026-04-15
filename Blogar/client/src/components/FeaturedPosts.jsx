import PostCardHorizontal from "./PostCardHorizontal";
import img from "../assets/asset 13.jpeg" 
import img1 from "../assets/asset 14.jpeg"
import img2 from "../assets/asset 10.png"
import img3 from "../assets/asset 12.png"

export default function FeaturedPosts() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-800  mb-8 mt-50">
        More Featured Posts.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <PostCardHorizontal
          category="Apple Design"
          title="Apple reimagines the iPhone experience with iOS 14"
          author="Ismat Jahan"
          image={img}
          avatar={img3}
        />

        <PostCardHorizontal
          category="Tech"
          title="Flutter: the good, the bad and the ugly"
          author="Jone Doe"
          image={img1}
          avatar={img2}
        />
      </div>
    </div>
  );
}