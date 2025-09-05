import React from "react";
import green from "../assets/images/image_7-removebg-preview 1.svg";

export default function Services() {
  return (
    <section id="services">
      <div className="px-12 ">
        <h3 className="text-left font-crimson text-[32px]">Products</h3>
      </div>
      <div className="relative top-0 flex flex-col items-center justify-center">
        {/* Background Text */}
        <div className="lg:text-[360px] md:text-[260px] text-[130px] xl:text-[500px] text-center relative z-0 font-crimson">
          Clique
        </div>

        {/* Overlay Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10 md:top-32 md:left-18 lg:top-52 lg:left-28">
          <div className="absolute top-4 left-1/2 transform -translate-x-28 translate-x-1 -translate-y-36 sm:-translate-x-28 md:-translate-x-24 md:-translate-y-48 lg:-translate-x-20 lg:translate-y-24 z-20 flex flex-row gap-2">
            <div className="rounded-full px-3 py-1 bg-gradient-to-r from-white to-black text-xs text-white">
              Comfort
            </div>

            <div className="rounded-full px-3 py-1 bg-gradient-to-r from-white to-pink-400  text-xs text-white">
              Quality
            </div>
          </div>
          <img
            src={green}
            alt="Overlay"
            className="max-w-[50%] max-h-[50%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
