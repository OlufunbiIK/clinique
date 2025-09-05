// import React, { useState } from "react";
// import NavBar from "./NavBar";
// import lady from "../assets/images/4f87c3b61c70b9745295cb6c76dbce97439d7313.png";
// import minilady from "../assets/images/Frame21@3x.png";
// import minitext from "../assets/images/Frame23.png";

// export default function CliniqueLanding() {
//   return (
//     <section id="hero-section" className="relative">
//       <div className="relative">
//         <NavBar />
//         <div className="relative w-full h-screen flex items-center justify-center overflow-hidden px-2 lg:px-10 rounded-lg">
//           {/* Using a placeholder div since we can't import the actual image */}
//           <div
//             className="w-full h-full bg-gradient-to-br rounded-xl from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center"
//             style={{ objectPosition: "50% 30%" }}
//           >
//             <img
//               src={lady}
//               alt="Lady"
//               className="w-full h-full object-cover object-center rounded-xl"
//             />
//           </div>
//         </div>

//         {/* Responsive text overlay */}
//         <div className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-4 sm:left-14 md:left-10 lg:left-20 text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10">
//           <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight sm:leading-snug md:leading-normal text-gray-700">
//             Level up your glam game
//             <br />
//             <span className="text-black font-bold">with confidence</span>
//           </h3>
//         </div>
//         <div>
//           <img src={minilady} alt="" className="w-60" />
//         </div>
//         <div>
//           <img src={minitext} alt="" className="w-60" />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import NavBar from "./NavBar";
import lady from "../assets/images/4f87c3b61c70b9745295cb6c76dbce97439d7313.png";
import minitext from "../assets/images/Frame21@3x.png";
import minilady from "../assets/images/Frame23.png";

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

        {/* Responsive text overlay */}
        <div className="absolute top-20 sm:top-20 md:top-24 lg:top-28 left-4 sm:left-14 md:left-10 lg:left-20 text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight sm:leading-snug md:leading-normal text-gray-700">
            Level up your glam game
            <br />
            <span className="text-black font-bold">with confidence</span>
          </h3>
        </div>

        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-10 left-4 sm:left-8 md:left-10 lg:left-20 z-10">
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
              <div className="w-40 sm:w-40 md:w-40 lg:w-60 h-12 sm:h-14 md:h-16 lg:h-18 rounded-lg flex items-center justify-center">
                <img
                  src={minitext}
                  alt="minitext"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
