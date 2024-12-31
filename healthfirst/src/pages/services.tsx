import React from "react";
import { Link } from "react-router-dom";
import Services2 from "../components/Services2";

const ExpertiseGrid = () => {
  const expertiseAreas = [
    "Weight Loss/Gain",
    "Muscle Gain",
    "Skin And Pigmentation",
    "Heart Health",
    "Joint Health",
    "Liver Health",
    "Gut Health",
    "Blood Sugar Management",
    "Blood Pressure Management",
    "Children's Health",
    "Immunity",
    "Bone Health",
    "Sleep Issues",
    "And Much More",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
        Our Expertise In
      </h2>
      <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-10"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {expertiseAreas.map((expertise, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow
                     border border-gray-100 flex items-center justify-center text-center"
          >
            <span className="text-lg font-medium text-gray-800">
              {expertise}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section className="mt-24 bg-gradient-to-b from-white to-green-100 pb-10">
      <div className="w-full h-[600px] relative z-10">
        <div
          className="w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://wallup.net/wp-content/uploads/2016/02/18/286966-nature-photography.jpg')`,
          }}
        />
        {/* Light overlay for better text readability */}
        <div className="w-full h-full absolute inset-0 bg-black/30" />

        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            Our passion is your success
          </h1>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed text-center">
            We know that one size does not fit all. Our customers' success stems
            from making each employee recognition program match each
            organization, down to the details. We work to understand the
            uniqueness of your organization and vision so we can set up and
            support your success, every day.
          </p>
        </div>
      </div>

      <Services2 />

      <ExpertiseGrid />

      <Link to="/contact">
        <div className="w-full flex justify-center  ">
          <button className="bg-green-600 text-lg  text-white py-3 px-8 rounded-xl hover:bg-green-700 transition animate-bounceIn">
            Join Now !
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Services;
