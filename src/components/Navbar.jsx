"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiShoppingCart, FiChevronDown, FiX, FiSearch, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import menuItems from "../data/menuItems.json";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownRefs = useRef({});
  const pathname = usePathname();
  const { getCartCount } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key].contains(event.target)
        ) {
          setOpenDropdowns((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => {
    return pathname === path ? "text-orange-500" : "text-gray-800 hover:text-orange-500";
  };

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Render a regular menu item
  const renderMenuItem = (item) => (
    <li key={item.id} className="relative group">
      <Link
        href={item.path}
        className={`py-4 px-1 block text-sm font-medium tracking-wide transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 ${isActive(item.path)}`}
      >
        {item.title}
      </Link>
    </li>
  );

  // Render a dropdown menu item
  const renderDropdownItem = (item) => (
    <li
      key={item.id}
      className="relative group h-full flex items-center"
      ref={(el) => (dropdownRefs.current[item.id] = el)}
      onMouseEnter={() => !isMenuOpen && setOpenDropdowns(prev => ({ ...prev, [item.id]: true }))}
      onMouseLeave={() => !isMenuOpen && setOpenDropdowns(prev => ({ ...prev, [item.id]: false }))}
    >
      <button
        className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-300 py-4 px-1 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500 focus:outline-none ${openDropdowns[item.id] ? "text-orange-500 border-orange-500" : "text-gray-800"}`}
        onClick={() => toggleDropdown(item.id)}
      >
        {item.title}
        <FiChevronDown className={`ml-1 transition-transform duration-300 ${openDropdowns[item.id] ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop Dropdown */}
      <div
        className={`absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-b-lg overflow-hidden transition-all duration-300 origin-top transform z-50 border-t-2 border-orange-500 ${openDropdowns[item.id]
          ? "opacity-100 scale-y-100 visible"
          : "opacity-0 scale-y-95 invisible"
          }`}
      >
        <ul className="py-2">
          {item.children.map((child) => (
            <li key={child.id}>
              <Link
                href={child.path}
                className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${isScrolled ? "shadow-sm border-gray-100 py-0" : "border-transparent py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">

          {/* Logo */}
          {/* <Link href="/" className="group z-50 relative">
            <span className="text-2xl font-bold tracking-tighter text-black">
              Mini<span className="text-orange-500 group-hover:text-black transition-colors duration-300">shop</span>.
            </span>
          </Link> */}
          {/* <Link href="/" className="group z-50 relative">
            <Image src="/navLogo.webp" alt="Logo" width={100} height={100} />
          </Link> */}

          <Link href="/" className="flex items-center gap-3 group z-50 relative">

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black leading-none">
                Mini<span className="text-orange-500 group-hover:text-black transition-colors duration-300">Shop</span>
              </span>
              <span className="text-[8px] font-bold text-red-500 uppercase mt-1 leading-none text-end">
                Low Cost
              </span>
            </div>
            <div className="text-orange-500 group-hover:text-black transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => {
                // We'll separate special items (icons) from main nav logic for desktop
                if (item.type === "special") return null;
                if (item.type === "dropdown") return renderDropdownItem(item);
                return renderMenuItem(item);
              })}
            </ul>
          </div>

          {/* Right Icons (Search, Cart, User) - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-800 hover:text-orange-500 transition-colors duration-300">
              <FiSearch className="text-xl" />
            </button>
            <Link href="/cart" className="text-gray-800 hover:text-orange-500 transition-colors duration-300 relative group">
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">{getCartCount()}</span>
            </Link>
            {/* Mobile Menu Toggle (Visible only on mobile but placed here for structure) */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="text-gray-800 relative">
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </Link>
            <button
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col space-y-4">
          {menuItems.map((item) => {
            if (item.type === "special") return null;
            // Simple dropdown logic for mobile for better UX
            if (item.type === 'dropdown') {
              return (
                <li key={item.id} className="border-b border-gray-100 pb-2">
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-800 py-2"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.title}
                    <FiChevronDown className={`transition-transform duration-300 ${openDropdowns[item.id] ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${openDropdowns[item.id] ? "max-h-96 mt-2" : "max-h-0"}`}>
                    {item.children.map(child => (
                      <Link
                        key={child.id}
                        href={child.path}
                        className="block text-gray-600 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </li>
              )
            }
            return (
              <li key={item.id} className="border-b border-gray-100 pb-2">
                <Link
                  href={item.path}
                  className="block text-lg font-medium text-gray-800 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
