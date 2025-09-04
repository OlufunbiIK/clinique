import React, { useState } from "react";
import newsletter from "../assets/images/subscribe.png";

export default function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email });
    // Reset form
    setEmail("");
  };

  return (
    <section id="newsletter" className="relative px-2 lg:px-8 font-crimson">
      {/* Background Image */}
      <div className="w-full h-[75vh] overflow-hidden relative">
        <img
          src={newsletter}
          alt="Newsletter"
          className="w-full h-full object-cover"
          style={{ objectPosition: "80% 28%" }}
        />

        {/* Form Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-2 lg:p-8">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 space-y-22">
            <h2 className="text-[48px] font-bold text-black mb-6 text-center">
              Subscribe to our Newsletter
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-row items-end gap-4"
            >
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border-0 border-b-2 border-gray-400 bg-transparent focus:border-pink-500 outline-none transition-all"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#D8535E] text-white py-3 px-6 rounded-md hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
