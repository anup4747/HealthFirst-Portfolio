import React from "react";
import { FC } from "react";
import {
  Dumbbell,
  VideoIcon,
  Utensils,
  UserCog,
  ClipboardCheck,
  Heart,
  Soup,
  Flower2,
  Brain,
  Clock,
} from "lucide-react";

// Define types for ServiceItem
type ServiceItem = {
  icon: FC<{ className: string }>; // Icon component type
  title: string;
};

// ServiceCard component that accepts icon and title as props
type ServiceCardProps = {
  icon: FC<{ className: string }>;
  title: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
    <div className="p-3 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-100 transition-colors duration-300">
      <Icon className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
      {title}
    </h3>
  </div>
);




const Services: FC = () => {
  const services: ServiceItem[] = [
    { icon: Dumbbell, title: "Online Exercise" },
    { icon: VideoIcon, title: "Free Online Sessions" },
    { icon: Utensils, title: "Meal & Diet Plan" },
    { icon: UserCog, title: "Personal Coach" },
    { icon: ClipboardCheck, title: "Weekly Follow-up" },
    { icon: Heart, title: "1 to 1 Counseling" },
    { icon: Soup, title: "Healthy Recipes" },
    { icon: Flower2, title: "Face Yoga" },
    { icon: Brain, title: "Meditation" },
    { icon: Clock, title: "Free Three-Day Trial" },
  ];

  return (
    <section className= " bg-white py-10 z-0 bg-gradient-to-b from-white to-green-50" id="Services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
