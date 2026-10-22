import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

import products from "../data/products";

const NewArrival = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              New Shoes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arrival</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              Discover our latest collection of premium footwear, designed for comfort, style, and performance. Elevate your everyday look.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="/products"
              className="group flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-blue-600 pb-1"
            >
              View All Collection
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-sm tracking-wider uppercase hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
