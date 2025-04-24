import { Link } from "react-router-dom"
 import { ArrowRight } from "lucide-react"
 import intel from "../../assets/partners/Intel_logo.svg"
 import amd from "../../assets/partners/AMD-Logo.png"
 import nvidia from "../../assets/partners/nvidia.png"
 import supermicro from "../../assets/partners/Supermicro-Logo.png"
 import micron from "../../assets/partners/Micron_Technology.png"
 import asus from "../../assets/partners/Asus-Logo.png"
 import gigabyte from "../../assets/partners/Gigabyte-Logo.png"
 
 import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"
 import CommonWrapper from "@/common/CommonWrapper"
 
 export default function PartnersPage() {
   const partners = [
     {
       id: "nvidia",
       name: "NVIDIA",
       logo: nvidia,
       description:
         "NVIDIA is a global leader in AI computing and graphics processing. Our partnership enables cutting-edge GPU solutions for high-performance computing and AI applications.",
       partnershipDetails:
         "We work closely with NVIDIA to optimize our products for their latest GPU architectures, ensuring maximum performance and efficiency for our customers' most demanding workloads.",
       productLink: "/partners/nvidia",
     },
     {
       id: "micron",
       name: "Micron",
       logo: micron,
       description:
         "Micron is a world leader in innovative memory and storage solutions. Our partnership delivers high-performance memory components for enterprise and consumer applications.",
       partnershipDetails:
         "Together with Micron, we develop memory solutions that power next-generation computing platforms with reliability and performance at their core.",
       productLink: "/partners/micron",
     },
     {
       id: "supermicro",
       name: "Supermicro",
       logo:supermicro,
       description:
         "Supermicro specializes in high-performance, high-efficiency server technology. Our partnership focuses on delivering scalable server solutions for enterprise environments.",
       partnershipDetails:
         "Our collaboration with Supermicro enables us to offer custom-configured server solutions optimized for specific workloads and environments.",
       productLink: "/partners/supermicro",
     },
     {
       id: "gigabyte",
       name: "GIGABYTE",
       logo: gigabyte,
       description:
         "GIGABYTE is a leading manufacturer of motherboards, graphics cards, and computing hardware. Our partnership delivers reliable hardware solutions for diverse computing needs.",
       partnershipDetails:
         "Working with GIGABYTE allows us to provide our customers with robust hardware platforms that serve as the foundation for our integrated solutions.",
       productLink: "/partners/gigabyte",
     },
     {
       id: "asus",
       name: "ASUS",
       logo:  asus ,
       description:
         "ASUS is a multinational company known for producing high-quality computer hardware and consumer electronics. Our partnership focuses on innovative computing solutions.",
       partnershipDetails:
         "Our strategic alliance with ASUS combines their hardware expertise with our software solutions to create integrated products that exceed customer expectations.",
       productLink: "/partners/asus",
     },
     {
       id: "intel",
       name: "Intel",
       logo: intel,
       description:
         "Intel is a technology leader in the semiconductor industry. Our partnership leverages Intel's processors to power high-performance computing solutions.",
       partnershipDetails:
         "We work closely with Intel to optimize our software for their latest processor architectures, ensuring maximum performance and efficiency.",
       productLink: "/partners/intel",
     },
     {
       id: "amd",
       name: "AMD",
       logo: amd,
       description:
         "AMD is a global semiconductor company developing computer processors and related technologies. Our partnership delivers cutting-edge CPU and GPU solutions.",
       partnershipDetails:
         "Our collaboration with AMD enables us to offer high-performance computing solutions that leverage their latest processor technologies for optimal performance.",
       productLink: "/partners/amd",
     },
   ]
 
   return (
    <CommonWrapper>
      <div className="mx-auto py-12 px-4 md:py-10 md:px-6">
       <div className="space-y-4 text-center mb-12">
         <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary-blue">
           Our <span className="text-primary-orange">Technology</span> Partners
         </h1>
         <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
           We collaborate with industry-leading technology companies to deliver innovative solutions for our customers.
         </p>
       </div>
 
       <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4 lg:grid-cols-7">
         {partners.map((partner) => (
           <a
             key={partner.id}
             href={`#${partner.id}`}
             className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
           >
             <img
               src={partner.logo}
               alt={`${partner.name} logo`}
               className="h-16 w-auto object-contain"
             />
           </a>
         ))}
       </div>
 
       <div className="space-y-12">
         {partners.map((partner) => (
           <Card key={partner.id} id={partner.id} className="overflow-hidden">
             <div className="md:flex">
               <div className="flex items-center justify-center p-8 bg-white md:w-1/4">
                 <img
                   src={partner.logo}
                   alt={`${partner.name} logo`}
                   className="h-24 w-auto object-contain"
                 />
               </div>
               <div className="md:w-3/4">
                 <CardHeader>
                   <CardTitle className="text-2xl">{partner.name}</CardTitle>
                   <CardDescription className="text-base">{partner.description}</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <h3 className="font-medium mb-2 pt-2 text-primary-orange text-lg">Our Partnership</h3>
                   <p className="text-gray-600">{partner.partnershipDetails}</p>
                 </CardContent>
                 <CardFooter>
                   <Link
                     to={partner.productLink}
                     className="inline-flex items-center mt-3 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-orange transition group"
                   >
                     View {partner.name} Products
                     <ArrowRight className="ml-2 h-4 w-4 text-primary-orange group-hover:text-white" />
                   </Link>
                 </CardFooter>
               </div>
             </div>
           </Card>
         ))}
       </div>
     </div>
    </CommonWrapper>
   )
 }