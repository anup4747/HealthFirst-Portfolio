import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Testimonies from "../components/Testimonies";

export const Home: React.FC = () => {
  return (
    <div className="Home mt-36">
      <Hero />
      <hr className="border-t-2 border-gray-400 my-8"></hr>
      <Services />
      <hr className="border-t-2 border-gray-400 my-8"></hr>
      <Testimonies />
    </div>
  );
};

export default Home;
