import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import backgroundImage from "../assets/images/Frame 1.png";
import lady from "../assets/images/4f87c3b61c70b9745295cb6c76dbce97439d7313.png";

export default function CliniqueLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section id="hero-section">
      <div className="">
        {/* Navigation */}
        <nav className="relative z-10 bg-white shadow-sm font-crimson text-[16px]">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#D8535E] tracking-wide">
                  CLINIQUE
                </h1>
              </div>

              <div className="flex items-center space-x-24">
                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-baseline space-x-2 bg-[#DCE0E34A] rounded-[20px] p-[5px]">
                    <a
                      href="hero-section"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href=""
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Reviews
                    </a>
                  </div>
                </div>

                {/* Shop Now Button */}
                <div className="hidden lg:block">
                  <button className="inline-flex items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white hover:bg-rose-50 font-medium rounded-md transition-colors">
                    Shop now
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  Reviews
                </a>
                <div className="px-3 py-2">
                  <button className="w-full inline-flex justify-center items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white hover:bg-rose-50 font-medium rounded-md transition-colors">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        {/* <div className="w-full h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative">
          <img
            src={lady}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div> */}
        {/* <div className="w-full h-screen flex items-center justify-center overflow-hidden">
          <img
            src={lady}
            alt="Background"
            className="min-w-full min-h-full object-cover"
          />
        </div> */}

        {/* <div className="w-full h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
          <img
            src={lady}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="w-full h-screen flex items-center justify-center overflow-hidden px-2 lg:px-10 rounded-lg">
          <img
            src={lady}
            alt="Background"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </div>
    </section>
  );
}
