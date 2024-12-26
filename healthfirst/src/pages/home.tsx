import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Testimonies from "../components/Testimonies";

export const Home: React.FC = () => {
  return (
    <div className="Home mt-10">
      <Hero />
      <hr className="border-t-2 border-gray-400 mb-4"></hr>
      <Services />
     
      <Testimonies />
      <hr className="border-t-2 border-gray-400 mb-4"></hr>

      
      
    </div>
  );
};

export default Home;
