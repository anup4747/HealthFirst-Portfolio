import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Testimonies from "../components/Testimonies";

export const Home: React.FC = () => {
  return (
    <div className="Home mt-40 sm:mt-36 md:mt-28 lg:mt-32 xl:mt-16">
      <Hero />
      <hr className="border-t-2 border-gray-400 "></hr>

      <Testimonies />
      <hr className="border-t-2 border-gray-400 "></hr>
      <Services />
      <hr className="border-t-2 border-gray-400 "></hr>
    </div>
  );
};

export default Home;
