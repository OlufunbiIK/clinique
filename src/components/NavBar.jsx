// import React, { useState } from "react";
// import { Menu, X, ShoppingBag } from "lucide-react";

// export default function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div>
//       {/* Navigation */}
//       <nav className="sticky top-0 bg-white shadow-sm font-crimson text-[16px] z-50">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl font-bold text-[#D8535E] tracking-wide">
//                 CLINIQUE
//               </h1>
//             </div>

//             <div className="flex items-center space-x-24">
//               {/* Desktop Navigation */}
//               <div className="hidden lg:block">
//                 <div className="ml-10 flex items-baseline space-x-2 bg-[#DCE0E34A] rounded-[20px] p-[5px]">
//                   <a
//                     href="#hero-section"
//                     className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
//                   >
//                     Home
//                   </a>
//                   <a
//                     href="#about"
//                     className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
//                   >
//                     About
//                   </a>
//                   <a
//                     href="#product"
//                     className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
//                   >
//                     Products
//                   </a>
//                   <a
//                     href="#services"
//                     className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
//                   >
//                     Services
//                   </a>
//                   <a
//                     href="#reviews"
//                     className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
//                   >
//                     Reviews
//                   </a>
//                 </div>
//               </div>

//               {/* Shop Now Button */}
//               <div className="hidden lg:block">
//                 <button className="inline-flex items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white hover:bg-rose-50 font-medium rounded-md transition-colors">
//                   Shop now
//                 </button>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
//               >
//                 Products
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
//               >
//                 Reviews
//               </a>
//               <div className="px-3 py-2">
//                 <button className="w-full inline-flex justify-center items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white hover:bg-rose-50 font-medium rounded-md transition-colors">
//                   Shop now
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-section");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero-section",
        "about",
        "product",
        "services",
        "reviews",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of navbar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 font-crimson text-[16px] z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1
                className={`text-2xl font-bold tracking-wide transition-all duration-300 ${
                  scrolled ? "text-[#D8535E] scale-95" : "text-[#D8535E]"
                }`}
              >
                CLINIQUE
              </h1>
            </div>

            <div className="flex items-center space-x-24">
              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div
                  className={`ml-10 flex items-baseline space-x-2 rounded-[20px] p-[5px] transition-all duration-300 ${
                    scrolled ? "bg-[#DCE0E34A]/80" : "bg-[#DCE0E34A]"
                  }`}
                >
                  {[
                    { href: "hero-section", label: "Home" },
                    { href: "about", label: "About" },
                    { href: "product", label: "Products" },
                    { href: "services", label: "Services" },
                    { href: "reviews", label: "Reviews" },
                  ].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden group ${
                        activeSection === item.href
                          ? "text-[#D8535E] bg-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          activeSection === item.href ? "opacity-100" : ""
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop Now Button */}
              <div className="hidden lg:block">
                <button
                  className={`inline-flex items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white font-medium rounded-md transition-all duration-300 hover:bg-rose-50 hover:border-rose-400 hover:scale-105 hover:shadow-md ${
                    scrolled ? "shadow-sm" : ""
                  }`}
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Shop now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400 transition-all duration-200"
              >
                <div className="relative">
                  <Menu
                    size={24}
                    className={`transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-90 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-90 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
            {[
              { href: "hero-section", label: "Home" },
              { href: "about", label: "About" },
              { href: "product", label: "Products" },
              { href: "services", label: "Services" },
              { href: "reviews", label: "Reviews" },
            ].map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg hover:bg-rose-50 ${
                  activeSection === item.href
                    ? "text-[#D8535E] bg-rose-50"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <button className="w-full inline-flex justify-center items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white hover:bg-rose-50 hover:border-rose-400 font-medium rounded-md transition-all duration-300 hover:scale-105">
                <ShoppingBag size={16} className="mr-2" />
                Shop now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
