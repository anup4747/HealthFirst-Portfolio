import React from "react";
import profileImage from "../public/profile.jpg"
export const Hero: React.FC = () => {
  return (
    <div id = "Home">
   
    <section className="flex items-center justify-center  bg-whitespy-12 mt-32">
      <div className="container mx-auto flex flex-col max-w-screen-2xl md:flex-row items-center justify-between px-6 md:px-52">
        {/* Left Side - Rounded Image */}
        <div className="w-64 h-64 mb-6 md:w-96 md:h-96 md:mb-0 md:mr-8 shadow-black shadow-2xl rounded-full animate-fadeInLeft">
          <img src={profileImage} alt="Nutrition Coach" className="rounded-full w-full h-full object-cover" />
        </div>

        {/* Right Side - Text and Button */}
        <div className="text-center md:text-left md:max-w-md animate-fadeInRight">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Your Health Journey
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-xl">
            Empowering you to make lasting changes for a healthier life.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition animate-bounceIn">
            Get Started
          </button>
        </div>
      </div>
    </section>
  </div>
  );
};
export default Hero;