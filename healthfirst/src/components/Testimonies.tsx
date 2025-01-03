import maintainance from "../public/maintainance.png";
import testimony1 from "../public/result1.png";
import testimony2 from "../public/result2.png";
import testimony3 from "../public/result3.png";
import testimony4 from "../public/result4.png";
import testimony5 from "../public/result5.png";
import testimony6 from "../public/result6.jpg";
import React from "react";
import { Link } from "react-router-dom";
export const Testimonies: React.FC = () => {
  return (
    <section id="Testimonies " className="bg-gradient-to-b from-green-50 to-green-100 pt-14 pb-10">
      <div className="container mx-auto px-6 md:px-36">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-5">
          Testimonies
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-10"></div>
        <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-full h-full ">
            <img
              src={testimony1}
              alt="Gallery1"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105 z-10"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={testimony2}
              alt="Gallery 2"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={testimony3}
              alt="Gallery 3"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={testimony4}
              alt="Gallery 4"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={testimony5}
              alt="Gallery 5"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={testimony6}
              alt="Gallery 6"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={maintainance}
              alt="Gallery 7"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={maintainance}
              alt="Gallery 8"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={maintainance}
              alt="Gallery 9"
              className="object-cover w-full h-full rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-400  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link to="/services">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition animate-bounceIn mt-10">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Testimonies;
