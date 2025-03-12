import React from "react";
import { FaShoppingBag, FaHeadset, FaShieldAlt } from "react-icons/fa";

const InfoSection = () => {
  const services = [
    {
      icon: <FaShoppingBag className="text-4xl text-teal-500" />,
      title: "Free Shipping",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaHeadset className="text-4xl text-teal-500" />,
      title: "Support Customer",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-teal-500" />,
      title: "Secure Payments",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 text-center">
              <div className="p-4 md:py-8 transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-center items-center mb-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
