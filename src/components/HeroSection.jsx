import React, { useState } from "react";
import NavBar from "./NavBar";
import lady from "../assets/images/4f87c3b61c70b9745295cb6c76dbce97439d7313.png";
import minitext from "../assets/images/Frame21@3x.png";
import minilady from "../assets/images/Frame23.png";
import CTA from "./CTA";
import products from "../assets/images/Frame26.svg";

export default function CliniqueLanding() {
  return (
    <section id="hero-section" className="relative font-crimson">
      <div className="relative">
        <NavBar />
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden px-2 lg:px-10 rounded-lg">
          {/* Using a placeholder div since we can't import the actual image */}
          <div
            className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center"
            style={{ objectPosition: "50% 30%" }}
          >
            <img
              src={lady}
              alt="Lady"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
        </div>

        <div
          className="absolute 
    text-white lg:text-black 
    w-full 
    top-1/4 lg:top-28 
    left-1/3 lg:left-14 
    transform -translate-x-20 -translate-y-20 lg:translate-y-5 lg:translate-x-0
    text-center lg:text-left 
    max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl 
    z-10"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl leading-tight sm:leading-snug md:leading-normal">
            Level up your glam game
            <br />
            <span className="font-bold">with confidence</span>
          </h3>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between w-full md:w-auto">
          <div className="absolute bottom-16 sm:bottom-20 md:bottom-0 lg:-bottom-3 left-4 sm:left-8 md:left-10 lg:left-20 z-10">
            {/* minilady - bottom layer */}
            <div className="relative">
              <div className="w-[280px] sm:w-[280px] md:w-[300px] lg:w-[400px] h-44 sm:h-36 md:h-40 lg:h-44 rounded-lg flex items-center justify-center">
                <img
                  src={minilady}
                  alt="minilady"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* minitext - positioned on the right side of minilady */}
              <div className="absolute top-16 right-12 sm:top-16 sm:right-12 md:top-12 md:right-12 lg:top-14 lg:left-32 lg:right-30 z-20">
                <div className="w-40 sm:w-40 md:w-44 lg:w-64 h-12 sm:h-14 md:h-16 lg:h-18 rounded-lg flex items-center justify-center">
                  <img
                    src={minitext}
                    alt="minitext"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute px-2 py-2 bottom-56 md:bottom-10 right-4 lg:bottom-5 lg:right-14 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-4">
            <div>
              <h2 className="text-left w-full text-white text-[16px]">
                (size -15%)
              </h2>
              <div className="flex flex-row justify-between text-left">
                <h2 className="text-white text-[32px]">
                  Clinque Replenish
                  <br /> Hydrator
                </h2>
                <div className="mt-2">
                  <CTA />
                </div>
              </div>
              <div>
                <img src={products} alt="products" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute px-2 py-2 top-48 right-20 md:top-96 md:right-20 lg:bottom-96 lg:right-32 xl:bottom-32 xl:right-32 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row gap-5 py-2 px-2 rounded-lg">
            <h3 className="bg-white bg-opacity-30 backdrop-blur-sm rounded-lg px-1 py-1">
              Authentice
            </h3>
            <h3 className="bg-white bg-opacity-30 backdrop-blur-sm rounded-lg px-1 py-1">
              Comfort
            </h3>
            <h3 className="bg-white bg-opacity-30 backdrop-blur-sm rounded-lg px-1 py-1">
              Quality
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
