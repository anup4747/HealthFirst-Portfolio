import React from "react";
import { Heart, Users, Clock, Target } from 'lucide-react';


export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-green-50 to-green-200">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet Your Health  <span className="text-green-600"> Journey </span> Guides
        </h1>
        <p className="text-xl text-gray-600 px-9">
          With over <b>4 years</b>  of combined experience in transforming lives
        </p>
      </div>

      {/* Couple Image Section */}
      <div className="relative max-w-4xl mx-auto px-4 mb-16">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden transition-shadow duration-100 shadow-xl hover:shadow-2xl">
          <img
            src="https://i.pinimg.com/736x/91/f0/6a/91f06a779e321fa4b1c61ae181031079.jpg"
            alt="Health Coach Couple"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-lg">
          <p className="text-green-600 font-semibold text-center">Transforming Lives Since 2020</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl transition-shadow duration-100 shadow-xl hover:shadow-2xl p-8 mb-16">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our journey began <b>4 years</b> ago when we discovered our shared passion for helping others achieve optimal health. As certified nutritionists and wellness coaches, we've dedicated our lives to understanding the intricate connection between <b>mind, body, and nutrition.</b>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in a holistic approach to health, combining evidence-based nutrition science with practical lifestyle modifications. Our expertise spans across <b>weight management, sports nutrition, metabolic health, and mindful eating practices.</b> 
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl transition-shadow  duration-100 shadow-xl hover:shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Personalized Nutrition Plans</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Lifestyle Transformation</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Group Wellness Programs</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Long-term Support</span>
              </li>
            </ul>
          </div>

          {/* Creative Timeline Element */}
          <div className="bg-white rounded-2xl transition-shadow duration-100 shadow-xl hover:shadow-2xl  p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Journey With Us</h3>
            <div className="space-y-6">
              {[
                { week: "Week 1", title: "Foundation", desc: "Initial assessment and custom plan creation" },
                { week: "Week 4", title: "Growth", desc: "Habit formation and lifestyle adjustments" },
                { week: "Week 8", title: "Transformation", desc: "Visible results and increased energy" },
                { week: "Week 12", title: "Mastery", desc: "Sustainable healthy lifestyle achievement" }
              ].map((phase, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-200">
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-green-600"></div>
                  <p className="text-green-600 font-semibold">{phase.week}</p>
                  <p className="font-medium text-gray-900">{phase.title}</p>
                  <p className="text-sm text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;