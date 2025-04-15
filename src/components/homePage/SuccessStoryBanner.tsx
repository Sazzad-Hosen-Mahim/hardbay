
import { Link } from "react-router-dom"
import Image from "../../assets/home/case-studies.avif"
import CommonWrapper from "@/common/CommonWrapper"

const SuccessStoryBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0  z-10">
 
       <img src={Image} alt=""
       className="object-cover object-center w-full h-full" />
      </div>

      {/* Content container */}
   <CommonWrapper>
   <div className="relative z-20 h-full mx-auto px-6 py-4 flex items-center justify-between md:mt-10 mt-4">
        <div className="max-w-3xl bg-primary-blue/80 p-4 rounded-lg">
          <h2 className="text-[#4ECDC4] text-3xl font-medium mb-3">Success Story</h2>
          <p className="text-white text-lg font-light mb-6 leading-snug">
          "How we helped an AI startup achieve 3x faster training times while reducing costs by 30%"
          </p>
        
          <Link to="/case-studies" className=" text-white hover:text-[#4ECDC4] transition-colors font-medium">
            Learn More
          </Link>
        </div>
      
      </div>
   </CommonWrapper>
    </div>
  )
}

export default SuccessStoryBanner
