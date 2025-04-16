
import CommonWrapper from '@/common/CommonWrapper';
import { Users, Mail, Phone } from 'lucide-react';

const Experts = () => {
  return (
    <div className="bg-slate-900 text-white py-16">
    <CommonWrapper>
    <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary-orange" />
              <h2 className="text-2xl md:text-4xl font-bold">A Team of Experts</h2>
            </div>
            <p className="text-gray-300 md:text-lg text-base leading-relaxed">
              At Hardbay, we pride ourselves on having a highly skilled team of professionals with 
              real-world technical experience in building servers. This enables us to provide our customers 
              with the highest quality of consultancy possible when it comes to hardware products. Our 
              knowledgeable staff ensures that customers receive the best advice and recommendations on 
              the most suitable solutions to meet their specific needs before buying.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-orange" />
                <p>Call us on <a href="tel:+442034325270" className="text-blue-400 hover:text-blue-300">+00 (0) 00 1111 0000</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-orange" />
                <div className="space-y-1">
                  <p>You can reach out to the team for a friendly chat at any time.</p>
                  <p>We're happy to answer any technical questions you may have.</p>
                  <p>If you prefer email, send to <a href="hardbay@hard.com" className="text-blue-400 hover:text-blue-300">sales@hardbay.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
    </div>
  );
};

export default Experts;