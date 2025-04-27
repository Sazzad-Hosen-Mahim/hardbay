import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import { services } from "./services";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);

  return (
    <CommonWrapper>
      <div className="mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="flex flex-col flex-grow p-6">
                <div>
                  <div className="flex items-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-orange mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => handleOpen(index)}
                    className="w-full bg-primary-blue hover:bg-primary-orange  text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Enhanced Modal */}
              {openIndex === index && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 p-4"
                  onClick={handleClose}
                >
                  <div
                    className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full relative animate-fadeInUp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Modal Header with Image */}
                    <div className="relative h-48 w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-6">
                        <h2 className="text-2xl font-bold text-white">
                          {service.modal.heading}
                        </h2>
                      </div>
                      <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 space-y-4">
                      <p className="text-gray-700 text-lg">
                        {service.modal.body}
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3 text-lg flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-orange mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {service.modal.featuresTitle}
                        </h4>
                        <ul className="space-y-2">
                          {service.modal.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary-blue mt-0.5 mr-2 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link
                          to={service.link}
                          className="relative block text-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-primary-orange hover:to-primary-orange/60 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-primary-orange-dark ring-offset-2 overflow-hidden"
                          onClick={handleClose}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-primary-orange via-primary-orange-dark to-primary-orange opacity-0 hover:opacity-20 transition-all duration-500 rounded-xl"></span>
                          {service.modal.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ServicesSection;
