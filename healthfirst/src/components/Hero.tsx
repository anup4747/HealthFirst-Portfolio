import React from "react";
import profileImage from "../public/profile.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Brain } from "lucide-react";
export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-green-100 z-0">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-block animate-bounce">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
                    Transform Your Life Today
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Journey to
                  <span className="text-green-600"> Wellness </span>
                  Starts Here
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  Expert guidance, personalized nutrition plans, and ongoing
                  support to help you achieve your health goals.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                {[
                  { icon: Leaf, text: "Custom Meal Plans" },
                  { icon: Heart, text: "Lifestyle Coaching" },
                  { icon: Brain, text: "Mindful Eating" },
                  { icon: ArrowRight, text: "Progress Tracking" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <feature.icon className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/services">
                  <button className="group relative px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Your Journey
                    <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-6 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-all duration-300">
                    Free Consultation
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative">
              <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Nutrition Coach"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-green-100"
                />
                {/* Floating Achievement Cards */}
                <div className="absolute -right-4 top-10 bg-white p-4 rounded-xl shadow-lg animate-float">
                  <p className="text-sm font-bold text-gray-800">500+</p>
                  <p className="text-xs text-gray-600">Clients Helped</p>
                </div>
                <div className="absolute -left-4 bottom-10 bg-white p-4 rounded-xl shadow-lg animate-float delay-150">
                  <p className="text-sm font-bold text-gray-800">10+ Years</p>
                  <p className="text-xs text-gray-600">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
