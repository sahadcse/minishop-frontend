import { FiPhone, FiMail } from "react-icons/fi";

const NavUpper = () => {
  return (
    <div className="py-0.5 bg-[#050505] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 text-xs font-medium tracking-wide text-gray-400">
            <div className="flex items-center sm:mr-8 hover:text-white transition-colors duration-300 cursor-default">
              <FiPhone className="mr-2.5 text-orange-500" />
              <span>+ 0174 666 9174</span>
            </div>
            <div className="flex items-center hover:text-white transition-colors duration-300 cursor-default">
              <FiMail className="mr-2.5 text-orange-500" />
              <span>sahaduzzaman.cse@gmail.com</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-500">
              Free Shipping & Returns
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUpper;
