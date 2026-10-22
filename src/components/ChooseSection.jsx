"use client";
import React from "react";
import Image from "next/image";

const ChooseSection = () => {
  return (
    <section className="py-24 bg-gray-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[700px]">
          {/* Left Column: Men's Collection */}
          <div className="lg:col-span-5 h-[500px] lg:h-full relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer">
            <Image
              src="https://preview.colorlib.com/theme/minishop/images/choose-1.jpg.webp"
              alt="Men's Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end transition-opacity duration-300">
              <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-300 uppercase mb-2">
                  Men's Shoes
                </h3>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                  Men's Collection
                </h2>
                <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                  Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <button className="bg-white text-black text-sm font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-200">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Top: Women's Collection */}
            <div className="flex-1 relative group overflow-hidden rounded-3xl shadow-lg h-[400px] lg:h-auto cursor-pointer">
              <Image
                src="https://preview.colorlib.com/theme/minishop/images/choose-2.jpg.webp"
                alt="Women's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent p-8 flex flex-col justify-center">
                <div className="max-w-md transform transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-300 uppercase mb-2">
                    Women's Shoes
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Women's Collection
                  </h2>
                  <p className="text-gray-200 text-sm mb-6 hidden md:block">
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </p>
                  <span className="inline-block border-b-2 border-white text-white font-medium pb-1 group-hover:text-gray-200 group-hover:border-gray-200 transition-all">
                    Discover More
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px] lg:h-auto">

              {/* Summer Sale */}
              <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-white p-8 border border-gray-100 flex flex-col justify-center items-start text-left cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  {/* Abstract Circle Decoration */}
                  <div className="w-24 h-24 rounded-full bg-blue-50 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="w-24 h-24 rounded-full bg-purple-50 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 absolute top-0 -left-4"></div>
                </div>

                <h3 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-2">
                  Summer Sale
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Extra 50% Off
                </h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Separated they live in Bookmarksgrove right at the coast of the Semantics.
                </p>
                <button className="text-black font-semibold uppercase text-xs tracking-widest hover:text-blue-600 transition-colors flex items-center gap-2 group-hover:gap-3 transition-all">
                  Shop Now <span>&rarr;</span>
                </button>
              </div>

              {/* Best Sellers */}
              <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-yellow-400 cursor-pointer">
                {/* Fallback pattern or image if available */}
                <div className="absolute inset-0 bg-[url('/path-to-best-sellers.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/90 to-yellow-400/80 group-hover:to-yellow-400/70 transition-colors p-8 flex flex-col justify-end">
                  <h3 className="text-sm font-bold tracking-[0.2em] text-yellow-900 uppercase mb-2">
                    Featured
                  </h3>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Best Sellers
                  </h2>
                  <p className="text-yellow-50 text-sm mb-6 line-clamp-2">
                    Separated they live in Bookmarksgrove right at the coast.
                  </p>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-yellow-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for simple animations if not available in project tailwind config */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ChooseSection;
