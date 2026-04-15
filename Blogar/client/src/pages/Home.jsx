import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedVideo from "../components/FeaturedVideo";
import FeaturedPosts from "../components/FeaturedPosts";
import Banner from "../components/Banner";
import TechSection from "../components/TechSection";


const Home = () => {


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
     
      <div className="max-w-7xl mx-auto">
        <Hero />
        <FeaturedPosts />
      </div>
      <Banner />
      <TechSection />
      <FeaturedVideo />
    </div>
  );
};

export default Home;