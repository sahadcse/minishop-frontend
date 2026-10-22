"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiShoppingCart, FiStar, FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 flex flex-col h-full">
            {/* Badge Section */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {product.discount && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow-lg shadow-red-500/30">
                        {product.discountPercent}
                    </span>
                )}
                {product.isNew && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow-lg shadow-blue-600/30">
                        New
                    </span>
                )}
            </div>

            {/* Action Buttons - Top Right */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors duration-300 shadow-lg hover:cursor-pointer" aria-label="Add to wishlist">
                    <FiHeart className="w-4 h-4" />
                </button>
                <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors duration-300 shadow-lg delay-75 hover:cursor-pointer" aria-label="Quick view">
                    <FiEye className="w-4 h-4" />
                </button>
            </div>

            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-gray-50 group-hover:bg-gray-100 transition-colors duration-500">
                {/* Decorative Circle Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-gray-200/50 to-transparent blur-2xl"></div>
                </div>

                {/* Product Image */}
                <div className="w-full h-full flex items-center justify-center relative z-10 p-4">
                    <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain object-center drop-shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </div>
                </div>
                {/* Bottom Actions Overlay */}
                <div className="absolute inset-x-4 bottom-4 z-20 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-1.5 shadow-lg border border-white/20 flex gap-2">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-black text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                        >
                            <span>Add to Cart</span>
                            <FiPlus className="group-hover/btn:rotate-90 transition-transform duration-300" />
                        </button>
                        <Link
                            href={`/products/${product.id}/buy-now`}
                            className="bg-gray-100 text-black p-2.5 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
                            aria-label="Buy now"
                        >
                            <FiShoppingCart className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full">
                        {product.category}
                    </span>
                    <div className="flex items-center gap-0.5">
                        <FiStar className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium text-gray-500 ml-1">4.8</span>
                    </div>
                </div>

                <h3 className="font-bold text-base text-gray-900 mb-1 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>

                <div className="mt-auto pt-3 flex items-end justify-between border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-medium">Price</span>
                        <div className="flex items-center gap-2">
                            {product.discount ? (
                                <>
                                    <span className="font-bold text-lg text-gray-900">${product.discountPrice?.toFixed(2)}</span>
                                    <span className="text-sm text-gray-400 line-through decoration-gray-300 decoration-1">${product.price.toFixed(2)}</span>
                                </>
                            ) : (
                                <span className="font-bold text-lg text-gray-900">${product.price.toFixed(2)}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
