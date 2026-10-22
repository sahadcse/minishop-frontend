"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import sliderData from "../data/heroSliderData.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const [direction, setDirection] = useState("next");

  // Handle auto-slide
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection("next");
        setActiveSlide((prev) => (prev + 1) % sliderData.length);
      }, 6000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setDirection("next");
    setActiveSlide((prev) => (prev + 1) % sliderData.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    setIsAutoPlaying(false);
  };

  return ( // Added relative h-screen w-full overflow-hidden to main section
    <section id="home-section" className="relative h-screen w-full overflow-hidden bg-black">

      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full">
        {sliderData.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              {/* Background Image with Ken Burns Effect */}
              <div className={`absolute inset-0 w-full h-full overflow-hidden`}>
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  priority={index === 0}
                  className={`object-cover w-full h-full transition-transform duration-[8000ms] ease-out ${isActive ? "scale-110" : "scale-100"
                    }`}
                  sizes="100vw"
                />

                {/* Sophisticated Overlays */}
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content Container - Centered and Elegant */}
              <div className="absolute inset-0 flex items-center justify-center sm:justify-start">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
                  <div className="max-w-4xl">

                    {/* Animated Subheading */}
                    <div className={`overflow-hidden mb-4 ${isActive ? "opacity-100" : "opacity-0"}`}>
                      <p
                        className={`text-[#f79f24] font-medium tracking-[0.3em] uppercase text-sm md:text-base flex items-center gap-4 ${isActive ? "animate-[slideDown_0.8s_ease-out_0.2s_both]" : ""
                          }`}
                      >
                        <span className="h-[2px] w-12 bg-[#f79f24] inline-block"></span>
                        {slide.subheading.replace('#', '')}
                      </p>
                    </div>

                    {/* Animated Main Heading with Staggered Reveal */}
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl ${isActive ? "opacity-100" : "opacity-0"
                      }`}>
                      <span className={`block ${isActive ? "animate-[slideUp_0.8s_ease-out_0.4s_both]" : ""}`}>
                        {slide.heading.split(' ').slice(0, 2).join(' ')}
                      </span>
                      <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 ${isActive ? "animate-[slideUp_0.8s_ease-out_0.6s_both]" : ""
                        }`}>
                        {slide.heading.split(' ').slice(2).join(' ')}
                      </span>
                    </h1>

                    {/* Description with Fade In */}
                    <p className={`text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed ${isActive ? "animate-[slideUp_1s_ease-out_0.8s_both]" : "opacity-0"
                      }`}>
                      {slide.description}
                    </p>

                    {/* CTA Button - Modern & Sleek */}
                    <div className={`${isActive ? "animate-[zoomIn_0.8s_ease-out_1s_both]" : "opacity-0"}`}>
                      <Link href={slide.buttonLink} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#f79f24] text-white overflow-hidden transition-all duration-300 hover:bg-[#e08810] hover:shadow-[0_0_30px_rgba(247,159,36,0.4)]">
                        <span className="relative z-10 font-semibold tracking-wider uppercase text-sm">
                          {slide.buttonText}
                        </span>
                        <FaArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center gap-6">

        {/* Slide Counter */}
        <div className="text-white font-mono text-lg tracking-widest hidden md:block">
          <span className="text-[#f79f24]">0{activeSlide + 1}</span>
          <span className="text-white/40 mx-2">/</span>
          <span className="text-white/60">0{sliderData.length}</span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white rounded-full hover:bg-[#f79f24] hover:border-[#f79f24] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div
          key={activeSlide} // Reset animation on slide change
          className="h-full bg-[#f79f24]"
          style={{
            animation: isAutoPlaying ? 'revealWidth 6s linear forwards' : 'none',
            width: isAutoPlaying ? '100%' : '0%' // Fallback/Static state
          }}
        />
        {/* We need a specific keyframe for width 0 to 100% that uses vw or % */}
        <style jsx>{`
          @keyframes revealWidth {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>

    </section>
  );
};

export default Hero;
