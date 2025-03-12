"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sliderData from "../data/heroSliderData.json";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto slide functionality with progress tracking
  useEffect(() => {
    const slideDuration = 5000;
    const progressInterval = 50; // Update progress every 50ms for smooth animation
    let progressValue = 0;

    const slideInterval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
      progressValue = 0;
      setProgress(0);
    }, slideDuration);

    const progressTimer = setInterval(() => {
      progressValue += (progressInterval / slideDuration) * 100;
      setProgress(Math.min(progressValue, 100));
    }, progressInterval);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <section id="home-section" className="relative h-screen ">
      <div className="relative w-full h-full overflow-hidden">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === activeSlide
                ? "opacity-100 scale-[1.02]"
                : "opacity-0 scale-100"
            }`}
            style={{ zIndex: index === activeSlide ? 10 : 0 }}
          >
            {/* Background Image with subtle zoom effect */}
            <div className="absolute inset-0 w-full h-full transition-transform duration-8000 ease-out">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority
                className={`object-cover ${
                  index === activeSlide ? "scale-105 animate-gentle-zoom" : ""
                }`}
                sizes="100vw"
              />
            </div>

            {/* Enhanced overlay with better gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

            {/* Content container with higher z-index */}
            <div className="container relative mx-auto px-4 h-full flex items-center z-20 w-[80%]">
              {/* Content with improved visibility and animations */}
              <div className="hero-content w-full md:w-2/3 lg:w-1/2 text-white">
                {index === activeSlide && (
                  <>
                    <span className="inline-block uppercase text-white tracking-[.25em] text-xs mb-3 px-2 py-1 rounded-md shadow-lg animate-slideInFromLeft bg-black">
                      {slide.subheading}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] animate-slideInFromBottom">
                      {slide.heading}
                    </h1>
                    <p className="text-lg mb-8 max-w-xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] animate-fadeIn">
                      {slide.description}
                    </p>
                    <Link href={slide.buttonLink}>
                      <span className="inline-block bg-[#f79f24] hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-y-[-3px] shadow-xl hover:shadow-2xl animate-slideInFromBottom">
                        {slide.buttonText}
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Improved navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center">
        {/* Progress bar */}
        {/* <div className="w-24 h-1 bg-white/30 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div> */}

        {/* Navigation dots */}
        <div className="bg-black/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-primary scale-125 shadow-glow"
                  : "bg-white/70 hover:bg-white/90"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* Add these animations to your globals.css or tailwind.config.js */
// @keyframes slideInFromLeft {
//   0% { transform: translateX(-30px); opacity: 0; }
//   100% { transform: translateX(0); opacity: 1; }
// }
//
// @keyframes slideInFromBottom {
//   0% { transform: translateY(30px); opacity: 0; }
//   100% { transform: translateY(0); opacity: 1; }
// }
//
// @keyframes fadeIn {
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// }
//
// @keyframes gentleZoom {
//   0% { transform: scale(1); }
//   100% { transform: scale(1.05); }
// }
