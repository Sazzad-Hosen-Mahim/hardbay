
import CommonWrapper from '@/common/CommonWrapper';
import { services } from './services'; 

const ServicesSection = () => {
  return (
    <CommonWrapper>
      <div className="mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-orange mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="w-full bg-primary-blue hover:bg-blue-900 text-white px-4 py-2 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ServicesSection;
