import React from "react";
import clinique from "../assets/images/CLINQUE.svg";
import facebook from "../assets/images/ri-facebook-circle-fill.svg";
import instagram from "../assets/images/ri-instagram-fill.svg";
import twitter from "../assets/images/ri-twitter-fill.svg";
import linkedin from "../assets/images/ri-linkedin-box-fill.svg";

export default function Footer() {
  return (
    <footer className="font-crimson">
      <div>
        <div className="max-w-8xl">
          <div className="flex items-center justify-between space-x-4 py-6 p-2 md:px-4 lg:px-8">
            <div className="flex flex-row gap-10">
              <div>
                <img src={facebook} alt="Facebook" className="h-6 w-6 mx-2" />
              </div>
              <div>
                <img src={instagram} alt="Facebook" className="h-6 w-6 mx-2" />
              </div>
            </div>
            <div className="flex justify-center py-6">
              <img src={clinique} alt="Clinique" className="h-12" />
            </div>
            <div className="flex flex-row gap-10">
              <div>
                <img src={twitter} alt="Facebook" className="h-6 w-6 mx-2" />
              </div>
              <div>
                <img src={linkedin} alt="Facebook" className="h-6 w-6 mx-2" />
              </div>
            </div>
          </div>
          <div className="bg-[#DCE0E3] h-[1px] w-full"></div>
          <div className="flex items-center space-x-10">
            {/* Desktop Navigation */}
            <div className="lg:block  w-full mx-4 my-4">
              <div className="ml-10 space-x-2 rounded-lg p-[5px] flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-10 text-[16px]">
                <a
                  href="#hero-section"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="product"
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
                  href="#reviews"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
