import { FiPhone, FiMail } from "react-icons/fi";

const NavUpper = () => {
  return (
    <div className="py-1 bg-black text-white">
      <div className="container md:w-[80%] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
            <div className="flex items-center md:mr-6">
              <div className="mr-2 flex items-center justify-center">
                <FiPhone className="text-sm" />
              </div>
              <span className="text-xs md:text-sm">+ 0174 666 9174</span>
            </div>
            <div className="flex items-center md:mr-6">
              <div className="mr-2 flex items-center justify-center">
                <FiMail className="text-sm" />
              </div>
              <span className="text-xs md:text-sm">sahaduzzaman.cse@gmail.com</span>
            </div>
          </div>
          <div className="text-center md:text-right mt-2 md:mt-0">
            <span className="text-xs md:text-sm">
              3-5 Business days delivery &amp; Free Returns
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUpper;
