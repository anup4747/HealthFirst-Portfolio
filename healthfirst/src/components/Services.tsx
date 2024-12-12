import React from "react";

export const Services: React.FC = () => {
  return (
    <section className=" bg-white py-6" id = "Services" >
    <div className="container mx-auto px-6 md:px-36">
      <h2
        className="text-4xl font-bold text-gray-800 text-center mb-8"
      // Scroll animation for the heading
      >
        Our Services
      </h2>
      <div className="text-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column */}
        <ul
          className="flex flex-col items-center list-disc list-outside space-y-4 text-gray-700"
    
        >
          <li className="ml-4">Online Exercise</li>
        <li className="ml-4">Free Online Sessions</li>
          <li className="ml-4">Meal & Diet Plan</li>
          <li className="ml-4">Personal Coach</li>
          <li className="ml-4">Weekly Follow-up</li>
        </ul>

        {/* Second Column */}
        <ul
          className="flex flex-col items-center list-disc list-outside space-y-4 text-gray-700"
           // Scroll animation for the second list
        >
          <li className="ml-4">1 to 1 Counseling</li>
          <li className="ml-4">Healthy Recipes</li>
          <li className="ml-4">Face Yoga</li>
          <li className="ml-4">Meditation</li>
          <li className="ml-4">Free Three-Day Trial</li>
        </ul>
      </div>
    </div>
  </section>
  );
};

export default Services;
