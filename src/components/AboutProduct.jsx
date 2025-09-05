import React from "react";
import Product from "./Product";

const CosmeticsLandingSection = () => {
  return (
    <section id="about">
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-6 font-crimson">
        <div className="max-w-7xl mx-auto">
          {/* Brand Mission Section */}
          <div className="gap-12 items-center mb-20 flex flex-col lg:flex-row lg:items-center lg:space-x-12 lg:space-y-0 justify-center w-full">
            <div className="space-y-8 flex flex-col lg:flex-row items-center justify-center">
              <h1 className="lg:text-6xl font-bold text-[#212020] leading-tight lg:w-[50%] text-left text-[32px]">
                Brand Mission
              </h1>
              <div className="space-y-6 lg:w-[50%] text-left">
                <h2 className="lg:text-4xl font-semibold text-[#212020] leading-relaxed text-[24px]">
                  Empowering Confidence Through Beauty
                </h2>
                <p className="text-[24px] text-gray-600 leading-relaxed">
                  Our mission is to inspire and uplift individuals by providing
                  them with high-quality cosmetics that enhance their natural
                  beauty, boost their self-esteem, and empower them to express
                  their unique style with confidence and grace. We strive to
                  create an inclusive and welcoming environment where everyone
                  feels valued, beautiful, and empowered to embrace their own
                  definition of glamour.
                </p>
                <button className="inline-flex items-center px-8 py-3 text-pink-500 border-2 border-pink-300 rounded-md hover:bg-pink-50 hover:border-pink-400 transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div>
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsLandingSection;
