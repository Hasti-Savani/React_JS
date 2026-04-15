import img from "../assets/asset 15.png"

export default function Banner() {
    return (
        <div className="bg-white mt-30">
      <div className="relative rounded-2xl overflow-hidden h-[200px]">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
        />
        </div>
        </div>
    );
  }