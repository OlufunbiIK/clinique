import React from "react";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.svg";
import frame36_2 from "../assets/images/Frame36(2).svg";
import frame36_3 from "../assets/images/Frame36(3).svg";
import CTA from "./CTA";

const products = [
  {
    category: "Face",
    name: "Moisturizing face set",
    price: "$50",
    image: image2,
  },
  {
    category: "Body",
    name: "Moisturizing Body set",
    price: "$30",
    image: image3,
  },
  {
    category: "Hair",
    name: "Clinique Hair care",
    price: "$10",
    image: frame36_2,
  },
  {
    category: "Eye",
    name: "Moisturizing face set",
    price: "$50",
    image: frame36_3,
  },
];

export default function Product() {
  return (
    <div>
      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 font-crimson">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative bg-[#DCE0E34D] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Product Info */}
            <div className="p-6 space-y-2">
              <h3 className="text-xl text-[20px] font-semibold text-gray-800 group-hover:text-pink-600 mt-5 text-left transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-500">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Category Label */}
            <div className="absolute top-4 z-10 w-full px-4">
              <div className=" flex flex-row justify-between">
                <span className="bg-white/90 text-[16px] text-[#00000096] px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  ({product.category})
                </span>
                <div className="">
                  <CTA />
                </div>
              </div>
            </div>

            {/* Product Image Area */}
            <div className="bg-white p-8 h-64 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for actual product images */}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
