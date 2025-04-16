
import CommonWrapper from '@/common/CommonWrapper';
import { Server, Cpu, HardDrive } from 'lucide-react';

const Enterprise = () => {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'grayscale(100%)'
        }}></div>
      </div>
      
     <CommonWrapper>
     <div className=" mx-auto px-4 md:py-16 py-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-primary-orange" />
              <HardDrive className="w-8 h-8 text-primary-orange" />
              <Server className="w-8 h-8 text-primary-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl  font-bold mb-6">
              Enterprise Hardware <span className='text-primary-orange'>Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              From high-performance servers and workstations to enterprise storage solutions, 
              we deliver cutting-edge hardware that powers your business. Our expert team ensures 
              you get the perfect configuration for your specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-blue hover:bg-primary-orange group text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg flex items-center gap-2">
                <Server className="w-5 h-5 text-primary-orange group-hover:text-white" />
                Browse Servers
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Custom Builds
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
              alt="Server Hardware" 
              className="rounded-lg shadow-2xl max-w-md w-full object-cover"
            />
          </div>
        </div>
      </div>
     </CommonWrapper>
    </div>
  );
};

export default Enterprise;