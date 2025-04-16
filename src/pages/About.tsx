import { motion } from "framer-motion";
import icon1 from "@/assets/about/icon/businessman.png";
import icon2 from "@/assets/about/icon/target.png";
import icon3 from "@/assets/about/icon/success.png";

const AboutPage = () => {
  return (
    <div className="text-gray-800  font-sans">
      {/* Top Navigation */}

      {/* About Header */}
      <header className="text-center py-12 md:py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm md:blur"
          style={{
            backgroundImage: `url("/about-bg.jpg")`,
          }}
        ></div>
        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 mt-10 md:mt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About us
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-700 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We provide top-tier servers, workstations, and storage hardware with
            expert services.
          </motion.p>

          {/* Image Gallery */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2 md:gap-4 px-2">
            {[
              "/src/assets/about/server.png",
              "/src/assets/about/storage.avif",
              "/src/assets/about/workstation.jpg",
              "/src/assets/about/service.jpg",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Hardware Product"
                className="w-36 h-36 md:w-64 md:h-64 rounded-lg shadow-md object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="px-4 sm:px-6 md:px-20 py-12 md:py-20 bg-primary-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">
              We make sure your idea & creation is delivered properly
            </h3>
            <p className="text-gray-600 mb-4">
              With our cutting-edge infrastructure, we help bring your business
              ideas to life by delivering performance-focused solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're scaling up or upgrading, our tailored hardware
              services have you covered.
            </p>
            <p className="text-gray-600 mb-4">
              From initial consultation to implementation, we guide you every
              step of the way. Our expert technicians ensure seamless
              integration, reduced setup time, and optimal performance.
            </p>
            <p className="text-gray-600">
              We believe in building long-term relationships through consistent
              support, proactive maintenance, and hardware upgrades that grow
              with your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <img
              src="src/assets/about/founder.jpg"
              alt="Founder"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <p className="italic text-gray-600 mt-2">
              "Making an impact, together" – HardBay Founder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Support */}
      <section className="px-4 sm:px-6 md:px-20 py-12 md:py-20 bg-primary-blue">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <h2 className="text-xl md:text-2xl text-white font-bold mb-4">
            We help businesses to grow faster and bigger
          </h2>
          <p className="text-white text-sm md:text-base">
            From startups to enterprises, we support scalable growth with
            reliable tech solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center px-4 sm:px-0">
          {[
            {
              icon: icon1,
              title: "Professional Team",
              desc: "Skilled staff to ensure reliable systems.",
            },
            {
              icon: icon2,
              title: "Target Oriented",
              desc: "Hardware aligned with your business goals.",
            },
            {
              icon: icon3,
              title: "Success Guarantee",
              desc: "Top-tier products with support & service.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-primary-bg/90 rounded-xl p-4 md:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4"
              />

              <h4 className="text-base md:text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

// import { motion } from "framer-motion";
// import icon1 from "@/assets/about/icon/businessman.png";
// import icon2 from "@/assets/about/icon/target.png";
// import icon3 from "@/assets/about/icon/success.png";

// const AboutPage = () => {
//   return (
//     <div className="text-gray-800 mt-10 font-sans">
//       {/* Top Navigation */}

//       {/* About Header */}
//       <header
//         className="text-center py-20 px-4 "
//         // style={{
//         //   backgroundImage: `url(${backgroundImage})`,
//         // }}
//       >
//         <div
//           style={{
//             backgroundImage: `url("/about-bg.jpg")`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             filter: "blur(3px)",
//             width: "100%",
//             height: "400px",
//             position: "absolute",
//             zIndex: -1,
//           }}
//         ></div>
//         <motion.h2
//           className="text-4xl font-bold mb-4 mt-32"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           About Us
//         </motion.h2>
//         <motion.p
//           className="max-w-2xl mx-auto text-lg text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           We provide top-tier servers, workstations, and storage hardware with
//           expert services.
//         </motion.p>

//         {/* Image Gallery */}
//         <div className="mt-12 flex flex-wrap justify-center gap-4">
//           {[
//             "/src/assets/about/server.png",
//             "/src/assets/about/storage.avif",
//             "/src/assets/about/workstation.jpg",
//             "/src/assets/about/service.jpg",
//           ].map((src, i) => (
//             <motion.img
//               key={i}
//               src={src}
//               alt="Hardware Product"
//               className="w-64 h-64 rounded-lg shadow-md object-cover"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.2, duration: 0.5 }}
//             />
//           ))}
//         </div>
//       </header>

//       {/* Main Content */}
//       <section className="px-6 md:px-20 py-20 bg-primary-bg">
//         <div className="grid md:grid-cols-2 gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-bold mb-4">
//               We make sure your idea & creation is delivered properly
//             </h3>
//             <p className="text-gray-600 mb-4">
//               With our cutting-edge infrastructure, we help bring your business
//               ideas to life by delivering performance-focused solutions.
//             </p>
//             <p className="text-gray-600 mb-4">
//               Whether you're scaling up or upgrading, our tailored hardware
//               services have you covered.
//             </p>
//             <p className="text-gray-600 mb-4">
//               From initial consultation to implementation, we guide you every
//               step of the way. Our expert technicians ensure seamless
//               integration, reduced setup time, and optimal performance.
//             </p>
//             <p className="text-gray-600">
//               We believe in building long-term relationships through consistent
//               support, proactive maintenance, and hardware upgrades that grow
//               with your business.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="src/assets/about/founder.jpg"
//               alt="Founder"
//               className="rounded-lg shadow-md"
//             />
//             <p className="italic text-gray-600 mt-2">
//               "Making an impact, together" – HardBay Founder
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Business Support */}
//       <section className="px-6 md:px-20 py-20 bg-primary-blue">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-2xl text-white font-bold mb-4">
//             We help businesses to grow faster and bigger
//           </h2>
//           <p className="text-white">
//             From startups to enterprises, we support scalable growth with
//             reliable tech solutions.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           {[
//             {
//               icon: icon1,
//               title: "Professional Team",
//               desc: "Skilled staff to ensure reliable systems.",
//             },
//             {
//               icon: icon2,
//               title: "Target Oriented",
//               desc: "Hardware aligned with your business goals.",
//             },
//             {
//               icon: icon3,
//               title: "Success Guarantee",
//               desc: "Top-tier products with support & service.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-primary-bg/90 rounded-xl p-6 shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-16 h-16 mx-auto mb-4"
//               />

//               <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
//               <p className="text-sm text-gray-600">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
