import React from "react";
import green from "../assets/images/image_7-removebg-preview 1.svg";

export default function Services() {
  return (
    <section id="services font-crimson">
      <div className="px-12">
        <h3 className="text-left">Products</h3>
      </div>
      <div className="relative top-0 flex flex-col items-center justify-center">
        {/* Background Text */}
        <div className="lg:text-[360px] md:text-[260px] text-[130px] xl:text-[500px] text-center relative z-0 font-crimson">
          Clique
        </div>

        {/* Overlay Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10 md:top-32 md:left-18 lg:top-52 lg:left-28">
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
