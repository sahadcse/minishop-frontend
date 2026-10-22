"use client";
import React from "react";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";

const instagramImages = [
    "https://preview.colorlib.com/theme/minishop/images/gallery-1.jpg.webp",
    "https://preview.colorlib.com/theme/minishop/images/gallery-2.jpg.webp",
    "https://preview.colorlib.com/theme/minishop/images/gallery-3.jpg.webp",
    "https://preview.colorlib.com/theme/minishop/images/gallery-4.jpg.webp",
    "https://preview.colorlib.com/theme/minishop/images/gallery-5.jpg.webp",
];

const InstagramFeed = () => {
    return (
        <section className="py-20 bg-white">
            {/* Header */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Follow Us On Instagram
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    Far far away, behind the word mountains, far from the countries Vokalia
                    and Consonantia, there live the blind texts. Separated they live in.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {instagramImages.map((src, index) => (
                    <div
                        key={index}
                        className="group relative h-64 md:h-80 lg:h-96 cursor-pointer overflow-hidden"
                    >
                        {/* Image */}
                        <Image
                            src={src}
                            alt={`Instagram post ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                <FiInstagram className="text-white w-12 h-12" />
                            </div>
                        </div>

                        {/* Optional decorative border on active state or just clean */}
                        <div className="absolute inset-0 border-0 group-hover:border-[10px] border-white/10 transition-all duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InstagramFeed;
