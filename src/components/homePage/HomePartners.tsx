import { Building2 } from 'lucide-react';
import intel from "../../assets/partners/Intel_logo.svg"
import amd from "../../assets/partners/AMD-Logo.png"
import nvidia from "../../assets/partners/nvidia.png"
import supermicro from "../../assets/partners/Supermicro-Logo.png"
import micron from "../../assets/partners/Micron_Technology.png"
import asus from "../../assets/partners/Asus-Logo.png"
import gigabyte from "../../assets/partners/Gigabyte-Logo.png"
import CommonWrapper from '@/common/CommonWrapper';


const partners = [
    {
        name: 'NVIDIA',
        logo: nvidia,
      },
      {
        name: 'Micron',
        logo: micron,
      }, 
      {
        name: 'Supermicro',
        logo: supermicro,
      },
      {
        name: 'Gigabyte',
        logo: gigabyte,
      },
      {
        name: 'Asus',
        logo: asus,
      },
  {
    name: 'Intel',
    logo: intel,
  },
  {
    name: 'AMD',
    logo: amd,
  },
 
 
 
 
  
];

const HomePartners = () => {
  return (
 <CommonWrapper>
       <section className=" py-20 px-6 md:px-10">
      <div className=" mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 bg-white p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-primary-orange" />
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-blue">Our Partners</h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg">
            At HardBay, we offer a diverse range of components from the industry's leading manufacturers — ensuring
            flexibility, no vendor lock-in, and perfectly tailored solutions for every customer.
          </p>
        </div>

        {/* Right Side: Partner Logos */}
        <div className="lg:w-1/2  flex items-center flex-wrap justify-center gap-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-4 flex items-center justify-center shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-14 w-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
 </CommonWrapper>
  );
};

export default HomePartners;
