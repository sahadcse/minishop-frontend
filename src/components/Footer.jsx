import Link from "next/link";
import { IoIosArrowUp, IoMdArrowForward } from "react-icons/io";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import footerData from "../data/footerData.json";

// Function to get the appropriate social media icon
const getSocialIcon = (iconName) => {
  switch (iconName) {
    case "twitter":
      return <FaTwitter />;
    case "facebook":
      return <FaFacebookF />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedinIn />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white font-sans pt-24 pb-12 border-t border-white/5 relative overflow-hidden">

      {/* Subtle background glow - very minimal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Hero Newsletter Section */}
        {footerData.newsletter && (
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-24 border-b border-white/5 pb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-white leading-[1.1]">
                {footerData.newsletter.title}
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-lg">
                {footerData.newsletter.description}
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[300px] xl:min-w-[400px]">
              <form className="group relative">
                <div className="relative flex items-center border-b border-gray-700 group-focus-within:border-white transition-colors duration-500 pb-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent text-white text-lg placeholder-gray-600 focus:outline-none py-2"
                  />
                  <button
                    type="button"
                    className="ml-4 text-white p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Subscribe"
                  >
                    <IoMdArrowForward className="text-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <Link href="/" className="inline-block mb-8 group">
                <span className="text-2xl font-bold tracking-tighter text-white">
                  Mini<span className="text-white/50 group-hover:text-white transition-colors duration-300">shop</span>.
                </span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                {footerData.about.description}
              </p>
            </div>

            {/* Socials - Minimal */}
            <div className="flex gap-4">
              {footerData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300"
                  aria-label={`Follow us on ${social.icon}`}
                >
                  <span className="text-sm">{getSocialIcon(social.icon)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Navigation Columns - Masonry style feel */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Menu</h4>
            <ul className="space-y-4">
              {footerData.menu.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Help</h4>
            <ul className="space-y-4">
              {footerData.help.columns.flat().map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Contact</h4>
            <ul className="space-y-6">
              {footerData.contact.items.map((item, index) => (
                <li key={index} className="group">
                  <span className="block text-xs text-gray-600 mb-1 capitalize">{item.type}</span>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs text-center md:text-left">
            {footerData.copyright.text.replace("{year}", new Date().getFullYear())}
            <span className="mx-2">•</span>
            <a href={footerData.copyright.company.url} className="hover:text-gray-400 transition-colors">
              {footerData.copyright.company.name}
            </a>
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
