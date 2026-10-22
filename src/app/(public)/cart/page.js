"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";
import { useCart } from "../../../context/CartContext";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-12 px-6 flex flex-col items-center justify-center bg-gray-50/50">
                <div className="text-center max-w-md mx-auto">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiTrash2 className="w-10 h-10 text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                    >
                        <FiArrowLeft className="mr-2" />
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-6 items-center"
                            >
                                {/* Product Image */}
                                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden p-2">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain object-center"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                        <div className="font-bold text-lg text-gray-900">
                                            ${(item.discount ? item.discountPrice : item.price).toFixed(2)}
                                        </div>
                                    </div>

                                    {/* Quantity & Remove */}
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center bg-gray-50 rounded-xl p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                                                disabled={item.quantity <= 1}
                                            >
                                                <FiMinus className="w-3 h-3" />
                                            </button>
                                            <span className="w-10 text-center font-bold text-sm text-gray-900">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                                            >
                                                <FiPlus className="w-3 h-3" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                            title="Remove Item"
                                        >
                                            <FiTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end pt-4">
                            <button
                                onClick={clearCart}
                                className="text-sm font-semibold text-red-500 hover:text-red-700 underline underline-offset-4"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="border-t border-gray-50 my-4"></div>
                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
                                Checkout Now
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-6">
                                Secure Checkout - 100% Satisfaction Guaranteed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
