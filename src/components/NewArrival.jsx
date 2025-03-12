import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiShoppingCart, FiStar } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-1.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: null,
    discount: false,
  },
  {
    id: 2,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-2.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: 80.0,
    discount: true,
    discountPercent: "50% Off",
  },
  {
    id: 3,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-3.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: null,
    discount: false,
  },
  {
    id: 4,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-4.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: null,
    discount: false,
  },
  {
    id: 5,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-5.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: null,
    discount: false,
  },
  {
    id: 6,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-6.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: 80.0,
    discount: true,
    discountPercent: "50% Off",
  },
  {
    id: 7,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-7.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: null,
    discount: false,
  },
  {
    id: 8,
    name: "Nike Free RN 2019 iD",
    image: "/images/product-8.png",
    category: "Lifestyle",
    price: 120.0,
    discountPrice: null,
    discount: false,
  },
];

const NewArrival = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Collection
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 relative">
              New Shoes Arrival
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-gray-600 mt-8 text-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group transform transition duration-500 hover:-translate-y-2"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                <div className="relative block h-72 overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity z-10"></div>
                    {/* Replace with Next.js Image component when images are available */}
                    {/* <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    /> */}
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">
                        Product Image
                      </span>
                    </div>
                  </div>

                  {/* Action buttons that appear on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 gap-2 px-3 pb-3">
                    <div className="flex w-full space-x-3 justify-around">
                      <Link
                        href={`/products/${product.id}/add-to-cart`}
                        className=" bg-white text-primary hover:bg-[#f79f24] hover:text-white font-medium px-1 rounded-xs flex items-center justify-center transition-all duration-300 shadow-md transform translate-y-2 group-hover:translate-y-0"
                      >
                        <span>Add to cart</span>
                        <FiPlus className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href={`/products/${product.id}/buy-now`}
                        className=" bg-primary hover:bg-[#f79f24]/90 text-white font-medium rounded-xs flex px-1 items-center justify-center transition-all duration-300 shadow-md transform translate-y-2 group-hover:translate-y-0 delay-75"
                      >
                        <span>Buy now</span>
                        <FiShoppingCart className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs py-1.5 px-3 rounded-full font-semibold shadow-lg animate-pulse">
                      {product.discountPercent}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mb-3 items-center">
                      <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                        {product.category}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mt-2 mb-1">
                      <Link
                        href={`/products/${product.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {product.name}
                      </Link>
                    </h3>
                  </div>

                  <div className="mt-2">
                    <div>
                      {product.discount ? (
                        <p className="font-bold text-lg">
                          <span className="line-through text-gray-400 mr-2 text-base">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-primary">
                            ${product.discountPrice.toFixed(2)}
                          </span>
                        </p>
                      ) : (
                        <p className="font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-all duration-300 hover:shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
