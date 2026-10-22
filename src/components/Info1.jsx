"use client";

import React from "react";
import { FaShoppingBag, FaHeadset, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const InfoSection = () => {
  const services = [
    {
      icon: <FaShoppingBag className="w-8 h-8 text-white" />,
      title: "Free Shipping",
      description: "Complimentary reliable delivery on all global orders over $200.",
      delay: "0s"
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-white" />,
      title: "24/7 Support",
      description: "Dedicated concierge team available around the clock.",
      delay: "0.2s"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-white" />,
      title: "Secure Payment",
      description: "Bank-level encryption keeping your data completely safe.",
      delay: "0.4s"
    },
  ];

  return (
    <section className="relative py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 md:p-12 rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 animate-[slideUp_0.8s_ease-out_both] flex flex-col items-center text-center"
              style={{ animationDelay: service.delay }}
            >
              {/* Icon Container with sophisticated gradient */}
              <div className="mb-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#f79f24] to-[#f3bd6c] flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 group-hover:text-[#f79f24] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-8 font-light max-w-xs mx-auto">
                {service.description}
              </p>

              {/* Minimalist Action Indicator */}
              <div className="mt-auto opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 text-[#f79f24] text-xs font-bold tracking-widest uppercase">
                <span>Learn More</span>
                <FaArrowRight className="w-3 h-3" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="w-2 h-2 bg-[#f79f24] absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
