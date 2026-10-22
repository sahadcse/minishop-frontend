"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiTruck, FiGift, FiCreditCard, FiHeadphones } from "react-icons/fi";

const services = [
    {
        icon: <FiTruck className="w-8 h-8" />,
        title: "Free Shipping",
        description: "Separated they live in. A small river named Duden flows",
        bgColor: "bg-[#f8f5f1]", // Lightest beige
        iconColor: "text-amber-600",
    },
    {
        icon: <FiGift className="w-8 h-8" />,
        title: "Valuable Gifts",
        description: "Separated they live in. A small river named Duden flows",
        bgColor: "bg-[#ebded1]", // Darker beige
        iconColor: "text-amber-700",
    },
    {
        icon: <FiCreditCard className="w-8 h-8" />,
        title: "All Day Support",
        description: "Separated they live in. A small river named Duden flows",
        bgColor: "bg-[#dccbb1]", // Gold-ish beige
        iconColor: "text-amber-800",
    },
    {
        icon: <FiHeadphones className="w-8 h-8" />,
        title: "24/7 Support",
        description: "Separated they live in. A small river named Duden flows",
        bgColor: "bg-black",
        iconColor: "text-amber-400",
        textColor: "text-white",
        descColor: "text-gray-400",
    },
];

const testimonials = [
    {
        id: 1,
        name: "Garreth Smith",
        role: "Marketing Manager",
        image: "https://preview.colorlib.com/theme/minishop/images/person_1.jpg.webp",
        quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
        id: 2,
        name: "John Doe",
        role: "CEO, Tech Corp",
        image: "https://preview.colorlib.com/theme/minishop/images/person_2.jpg.webp",
        quote: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        id: 3,
        name: "Sarah Jones",
        role: "Design Lead",
        image: "https://preview.colorlib.com/theme/minishop/images/person_3.jpg.webp",
        quote: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave.",
    },
];

const Testimony = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleDotClick((activeIndex + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleDotClick = (index) => {
        if (index === activeIndex || isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 300); // Wait for transition out
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row">

                    {/* Left Column: Services Stack */}
                    <div className="lg:w-1/3 flex flex-col shadow-2xl rounded-3xl overflow-hidden z-10 mx-auto w-full max-w-md lg:max-w-none">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`${service.bgColor} p-8 flex items-center gap-6 group transition-all duration-300 hover:brightness-95 cursor-default relative overflow-hidden`}
                            >
                                {/* Hover Decoration */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className={`p-4 rounded-full bg-white/10 backdrop-blur-sm ${service.iconColor} shadow-inner`}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg uppercase tracking-wider mb-1 ${service.textColor || "text-gray-900"}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm ${service.descColor || "text-gray-600"} leading-relaxed`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Testimonial */}
                    <div className="lg:w-2/3 lg:pl-20 mt-16 lg:mt-0 flex flex-col justify-center relative min-h-[500px]">

                        {/* Background Quotes Decoration */}
                        <div className="absolute top-0 left-10 text-9xl text-gray-100 font-serif opacity-50 select-none -z-10">
                            &ldquo;
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-12">
                                Our satisfied customer says
                            </h2>

                            {/* Dynamic Content Area */}
                            <div
                                className={`transition-all duration-300 ease-in-out transform ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                                    }`}
                            >
                                <p className="text-xl md:text-2xl text-gray-500 italic font-light leading-loose mb-12 relative">
                                    <span className="text-amber-500 mr-2 text-4xl align-top">&ldquo;</span>
                                    {testimonials[activeIndex].quote}
                                    <span className="text-amber-500 ml-2 text-4xl align-bottom">&rdquo;</span>
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        {/* Customer Image */}
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            <Image
                                                src={testimonials[activeIndex].image}
                                                alt={testimonials[activeIndex].name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                                        <p className="text-sm text-gray-400 font-medium tracking-[0.2em] uppercase mt-1">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Slider Dots */}
                            <div className="flex gap-3 mt-12">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? "w-8 bg-amber-500"
                                                : "w-3 bg-gray-200 hover:bg-gray-300"
                                            }`}
                                        aria-label={`View testimonial ${index + 1}`}
                                    ></button>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimony;
