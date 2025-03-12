import React from "react";
import Link from "next/link";
import Image from "next/image";

const ChooseSection = () => {
  return (
    <section className="bg-gray-100 w-full">
      <div className="flex  w-[80%] mx-auto h-[700px]">
        {/* Men's Collection */}
        <div
          className=" bg-cover bg-center text-white flex items-end min-h-full w-[40%] p-6  bg-opacity-70"
          style={{
            backgroundImage:
              "url('https://preview.colorlib.com/theme/minishop/images/choose-1.jpg.webp')",
          }}
        >
          <div className="mx-auto w-[80%] text-center">
            <h3 className="text-sm uppercase tracking-widest">Men's Shoes</h3>
            <h2 className="text-2xl font-bold ">Men's Collection</h2>
            <p className="text-sm mt-2 ">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <button className="mt-4 text-xs  bg-black text-white py-1 px-2 rounded-full">
              Shop now
            </button>
          </div>
        </div>

        <section className="w-full min-h-full">
          {/* Women's Collection */}
          <div className=" bg-blue-500 text-white flex items-center justify-center p-6  min-h-[50%] bg-cover bg-center bg-opacity-70"
            style={{
              backgroundImage:
                "url('https://preview.colorlib.com/theme/minishop/images/choose-2.jpg.webp')",
            }}
          >
            <div className="flex flex-col justify-end bg-black w-[30%]">
              <h3 className="text-sm uppercase">Women's Shoes</h3>
              <h2 className="text-2xl font-bold">Women's Collection</h2>
              <p className="text-sm mt-2">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4">
                Shop now
              </button>
            </div>
          </div>
          <div className="flex min-h-[50%]">
            {/* Summer Sale */}
            <div className="relative bg-gray-100 text-black flex items-center justify-center p-6 ">
              <div>
                <h3 className="text-sm uppercase">Summer Sale</h3>
                <h2 className="text-2xl font-bold">Extra 50% Off</h2>
                <p className="text-sm mt-2">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <button className="mt-4 bg-black text-white py-2 px-4">
                  Shop now
                </button>
              </div>
            </div>

            {/* Best Sellers */}
            <div
              className="relative bg-yellow-400 text-white flex items-end p-6"
              style={{
                backgroundImage: "url('/path-to-best-sellers.jpg')",
              }}
            >
              <div>
                <h3 className="text-sm uppercase">Shoes</h3>
                <h2 className="text-2xl font-bold">Best Sellers</h2>
                <p className="text-sm mt-2">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <button className="mt-4 bg-black text-white py-2 px-4">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ChooseSection;
