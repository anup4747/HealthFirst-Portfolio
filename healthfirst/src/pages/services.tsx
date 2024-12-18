import React from "react";

export const Services: React.FC = () => {
  return (
    <section>
      <div className="w-full h-[600px]">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ">
          <div className="w-full h-full flex flex-col items-center justify-center bg-black/50 px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
              Our passion is your success
            </h1>

            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed text-center">
              We know that one size does not fit all. Our customers' success
              stems from making each employee recognition program match each
              organization, down to the details. We work to understand the
              uniqueness of your organization and vision so we can set up and
              support your success, every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
