
import CommonWrapper from '@/common/CommonWrapper';
import { Quote, Star, Award, Shield } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    quote: 'Their enterprise server solutions have transformed our data center operations. The performance improvements and power efficiency exceeded our expectations.',
    stats: '45% performance increase',
  },
  {
    id: 2,
    company: 'DataStream Networks',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    quote: 'The custom workstation builds perfectly match our intensive computational needs. Their technical expertise and attention to detail are unmatched.',
    stats: '99.99% uptime achieved',
  },
  {
    id: 3,
    company: 'CloudScale Inc',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    quote: 'From specification to deployment, their team provided exceptional support. The hardware performance has been crucial to our cloud infrastructure.',
    stats: '3x processing power',
  },
];

const features = [
  { icon: Star, text: 'Enterprise-grade hardware' },
  { icon: Shield, text: 'Lifetime support' },
  { icon: Award, text: 'Industry certified' },
];

const Testimonials = () => {
  return (
    <CommonWrapper>
        <div className=" md:py-10 px-4 py-4">
      <div className=" mx-auto">
        <div className="flex justify-center md:gap-8 gap-4 md:mb-10 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <feature.icon className="w-5 h-5 text-primary-orange" />
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 md:mb-10 mb-4">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
              <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{testimonial.company}</h3>
                  <p className="text-[#4ECDC4] font-medium text-sm">{testimonial.stats}</p>
                </div>
                <Quote className="w-8 h-8 text-primary-orange" />
              </div>
              
              <blockquote className="text-gray-700 text-lg mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-1 text-yellow-400 mt-auto">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    </CommonWrapper>
  );
};

export default Testimonials;