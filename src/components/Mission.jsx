import mission1 from "../assets/images/mission1.jpg";
import mission2 from "../assets/images/mission2.png";
export default function Mission() {
  return (
    <section
      id="mission"
      className="h-screen flex items-center justify-center py-12"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-48 sm:gap-56 md:gap-64 lg:gap-32 px-6 -mt-40">
        {/* Text Content */}
        <div className="flex-1 lg:flex-[0.6] space-y-6 font-crimson text-center lg:text-left max-w-2xl">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-black leading-tight">
            Introducing the new glam of Lip gloss
          </h2>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-gray-700 leading-relaxed">
            Our mission is to inspire and uplift individuals by providing them
            with high-quality cosmetics that enhance their natural beauty, boost
            their self-esteem, and empower them to express their unique style
            with confidence and grace.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="inline-flex items-center px-6 py-2 border border-rose-300 text-rose-400 bg-white hover:bg-rose-50 font-medium rounded-md transition-colors">
              Shop now
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="flex-1 relative flex items-center justify-center h-[400px] sm:h-[450px] md:h-[600px] lg:h-[600px] w-full">
          {/* Back image */}
          <img
            src={mission1}
            alt="Mission 1"
            className="absolute w-[220px] sm:w-[280px] md:w-[280px] lg:w-[400px] h-[300px] sm:h-[380px] md:h-[420px] lg:h-[450px] object-cover rounded-lg shadow-lg z-10 transform translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-5"
          />

          {/* Three comfort labels on image 1 - Flex row at upper part */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 translate-x-1 sm:translate-x-2 md:translate-x-2 lg:translate-x-3 z-20 flex flex-row gap-2">
            <div className="rounded-full px-3 py-1 bg-[#F4EFF51A] text-xs text-gray-700">
              Comfort
            </div>
            <div className="rounded-full px-3 py-1 bg-[#F4EFF51A] text-xs text-gray-700">
              Comfort
            </div>
            <div className="rounded-full px-3 py-1 bg-[#F4EFF51A] text-xs text-gray-700">
              Comfort
            </div>
          </div>

          {/* Front image */}
          <img
            src={mission2}
            alt="Mission 2"
            className="absolute w-[140px] sm:w-[180px] md:w-[170px] lg:w-[290px] h-[180px] sm:h-[220px] md:h-[210px] lg:h-auto object-cover rounded-lg shadow-xl z-20 transform -translate-x-16 sm:-translate-x-24 md:-translate-x-28 lg:-translate-x-48 translate-y-20 sm:translate-y-28 md:translate-y-32 lg:translate-y-48"
          />

          {/* One comfort label on image 2 - Lower part of image */}
          <div className="absolute z-30 transform -translate-x-16 sm:-translate-x-24 md:-translate-x-28 lg:-translate-x-48 translate-y-32 sm:translate-y-40 md:translate-y-44 lg:translate-y-60 left-1/2 -translate-x-1/2">
            <div className="rounded-full px-3 py-1 bg-[#F4EFF51A] text-xs text-gray-700">
              Comfort
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
