import { useState } from 'react';
import CommonWrapper from '@/common/CommonWrapper';
import { services } from './services'; 
import { Link } from 'react-router-dom';

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
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
                    className="w-full bg-primary-blue hover:bg-primary-orange text-white px-4 py-2 rounded transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Modal */}
              {openIndex === index && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
                  <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl relative">
                    <button
                      onClick={handleClose}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                      &times;
                    </button>
                    <h2 className="text-xl font-bold mb-2">{service.modal.heading}</h2>
                    <p className="text-gray-700 mb-4">{service.modal.body}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">{service.modal.featuresTitle}</h4>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                      {service.modal.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="block text-center bg-primary-orange text-white px-4 py-2 rounded hover:bg-primary-orange-dark transition-colors cursor-pointer"
                      onClick={handleClose} 
                    >
                      {service.modal.cta}
                    </Link>
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
