"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
import menuItems from "../data/menuItems.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownRefs = useRef({});
  const pathname = usePathname();

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => {
    return pathname === path ? "text-blue-500" : "text-gray-800";
  };

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Render a regular menu item
  const renderMenuItem = (item) => (
    <li key={item.id} className="py-2 md:py-0">
      <Link
        href={item.path}
        className={`hover:text-blue-500 ${isActive(item.path)}`}
      >
        {item.title}
      </Link>
    </li>
  );

  // Render a dropdown menu item
  const renderDropdownItem = (item) => (
    <li
      key={item.id}
      className="py-2 md:py-0 relative"
      ref={(el) => (dropdownRefs.current[item.id] = el)}
    >
      <button
        className="flex items-center hover:text-blue-500 focus:outline-none w-full text-left"
        onClick={() => toggleDropdown(item.id)}
      >
        {item.title}
        <FiChevronDown className="ml-1" />
      </button>

      <div
        className={`${
          openDropdowns[item.id] ? "block" : "hidden"
        } md:absolute relative left-0 md:top-full mt-1 py-2 bg-white md:shadow-lg rounded-md md:w-48 z-20`}
      >
        {item.children.map((child) => (
          <Link
            key={child.id}
            href={child.path}
            className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500"
          >
            {child.title}
          </Link>
        ))}
      </div>
    </li>
  );

  // Render a special menu item (like cart)
  const renderSpecialItem = (item) => (
    <li key={item.id} className="py-2 md:py-0">
      <Link
        href={item.path}
        className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 rounded-full flex items-center w-max"
      >
        <FiShoppingCart className="mr-1" /> [{item.badge}]
      </Link>
    </li>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container md:w-[80%] mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-blue-500"
          >
            Minishop
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="h-6 w-6 mr-1" />
          </button>

          {/* Navigation links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none z-30`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
              {menuItems.map((item) => {
                if (item.type === "dropdown") return renderDropdownItem(item);
                if (item.type === "special") return renderSpecialItem(item);
                return renderMenuItem(item);
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
