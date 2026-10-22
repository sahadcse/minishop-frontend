"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const DealOfMonth = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [activeImage, setActiveImage] = useState(0);

    // Mock Data - In a real app, this would come from props or an API
    const productImages = [
        "https://preview.colorlib.com/theme/minishop/images/product-1.jpg.webp",
        "https://preview.colorlib.com/theme/minishop/images/product-2.jpg.webp",
        "https://preview.colorlib.com/theme/minishop/images/product-3.jpg.webp",
    ];

    useEffect(() => {
        // Set deadline to 7 days from now for demo purposes
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 7);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = deadline - now;

            if (difference <= 0) {
                clearInterval(timer);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 transform transition-transform duration-300 group-hover:-translate-y-2 border border-gray-100">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    {value.toString().padStart(2, "0")}
                </span>
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                {label}
            </span>
        </div>
    );

    return (
        <section className="relative py-20 bg-[#f8f5f1] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-yellow-200/20 blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl p-8 md:p-12 lg:p-16 border border-white/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Product Image Showcase */}
                        <div className="relative">
                            <div className="aspect-square relative z-10 rounded-3xl overflow-hidden bg-white shadow-inner mb-8 group">
                                <Image
                                    src={productImages[activeImage]}
                                    alt="Deal of the Month"
                                    fill
                                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                                    -50%
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex justify-center gap-4">
                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === index
                                                ? "border-black scale-110 shadow-md"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="text-center lg:text-left space-y-8">
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">
                                    Deal of the Month
                                </h4>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                    Nike Free RN 2019 iD
                                </h2>
                                <div className="flex flex-col md:flex-row items-center lg:items-start md:gap-4 justify-center lg:justify-start">
                                    <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
                                        Experience dynamic comfort with the Nike Free RN 2019. Designed for short runs, this shoe is your daily companion.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <span className="text-3xl font-bold text-red-500">$80.00</span>
                                <span className="text-xl text-gray-400 line-through">$120.00</span>
                            </div>

                            {/* Countdown Timer */}
                            <div className="flex flex-wrap justify-center lg:justify-start -mx-2 md:-mx-4 py-6 border-t border-b border-gray-200/60">
                                <TimeUnit value={timeLeft.days} label="Days" />
                                <TimeUnit value={timeLeft.hours} label="Hours" />
                                <TimeUnit value={timeLeft.minutes} label="Mins" />
                                <TimeUnit value={timeLeft.seconds} label="Secs" />
                            </div>

                            <div className="pt-4">
                                <button className="bg-black text-white text-lg font-medium py-4 px-12 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto">
                                    Shop Deal Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealOfMonth;
