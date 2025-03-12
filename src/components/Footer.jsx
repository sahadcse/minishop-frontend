import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import footerData from "../data/footerData.json";

// Function to get the appropriate social media icon
const getSocialIcon = (iconName) => {
  switch (iconName) {
    case "twitter":
      return <FaTwitter />;
    case "facebook":
      return <FaFacebook />;
    case "instagram":
      return <FaInstagram />;
    default:
      return null;
  }
};

// Function to get the appropriate contact icon
const getContactIcon = (type) => {
  switch (type) {
    case "address":
      return <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />;
    case "phone":
      return <FaPhone className="text-gray-400 mt-1 mr-3 flex-shrink-0" />;
    case "email":
      return <FaEnvelope className="text-gray-400 mt-1 mr-3 flex-shrink-0" />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="relative -top-10">
            <a
              href="#"
              className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="animate-bounce">
                <IoIosArrowUp className="text-2xl text-gray-700" />
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">{footerData.about.title}</h2>
              <p className="text-gray-600 mb-5">
                {footerData.about.description}
              </p>
              <div className="flex space-x-3 mt-5">
                {footerData.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`bg-gray-200 hover:${social.hoverBg} hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300`}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">{footerData.menu.title}</h2>
              <ul>
                {footerData.menu.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="py-2 block text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">{footerData.help.title}</h2>
              <div className="flex">
                {footerData.help.columns.map((column, colIndex) => (
                  <ul key={colIndex} className={colIndex === 0 ? "mr-8" : ""}>
                    {column.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.url}
                          className="py-2 block text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* Questions */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">{footerData.contact.title}</h2>
              <div>
                <ul className="space-y-4">
                  {footerData.contact.items.map((item, index) => (
                    <li key={index} className="flex">
                      {getContactIcon(item.type)}
                      <span className="text-gray-600">
                        {item.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-gray-600">
              {footerData.copyright.text.replace("{year}", new Date().getFullYear())}{" "}
              <FaHeart className="text-red-500 inline-block mx-1" /> by{" "}
              <a
                href={footerData.copyright.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700"
              >
                {footerData.copyright.company.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
