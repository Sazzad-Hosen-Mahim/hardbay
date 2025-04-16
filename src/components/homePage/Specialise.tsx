
import { ArrowRight } from 'lucide-react';
import { serviceData } from './serviceData'; 
import { Link } from 'react-router-dom';
import CommonWrapper from '@/common/CommonWrapper';

function Specialise() {
  return (
    <div className=" ">
      <div className="container mx-auto px-4 md:py-10 py-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold mb-6 ">
          What We Specialise In 
           
          </h1>
        
        </div>

        {/* Services Grid */}
       <CommonWrapper>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="relative p-8">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 text-white  mb-6">
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-blue mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-primary-blue"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
               <Link to="/service"> 
               <button className=" cursor-pointer inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button></Link>
              </div>
            </div>
          ))}
        </div>
       </CommonWrapper>
      </div>
    </div>
  );
}

export default Specialise;
