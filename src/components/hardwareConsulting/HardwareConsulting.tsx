
import type React from "react";
import { Toaster } from "react-hot-toast";

import {
  Server,
  Shield,
  RefreshCw,
  Users,
  CheckCircle,
  BarChart,
  Calendar,
  ArrowRight,
  FileText,
  // ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const HardwareConsulting: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.company) errors.company = "Company is required";
    if (!formData.date) errors.date = "Preferred date is required";
    if (!formData.time) errors.time = "Preferred time is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log("Submitting form:", formData);
    setFormErrors({});
    setIsModalOpen(false);
  };

  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Assessment",
      description:
        "Comprehensive evaluation of your current hardware infrastructure to identify optimization opportunities and reduce operational costs.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Compliance",
      description:
        "Ensure your hardware meets industry security standards and compliance requirements with our thorough security auditing protocols.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Lifecycle Management",
      description:
        "Strategic planning and management of hardware lifecycles to maximize ROI and minimize downtime during transitions.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vendor Management",
      description:
        "Expert negotiation and relationship management with hardware vendors to secure optimal pricing and support terms.",
    },
  ];

  const benefits = [
    "Reduced operational costs through optimized hardware deployment",
    "Enhanced system performance and reliability",
    "Proactive maintenance scheduling to prevent costly downtime",
    "Streamlined procurement processes with preferred vendor networks",
    "Expert technical guidance and 24/7 support",
  ];

  return (
    <div className="min-h-screen bg-slate-50 mt-16">
     
      <div className="relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" 
            alt="Enterprise Hardware Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-xl text-center mx-auto">
            <h1 className="md:text-5xl text-3xl font-bold mb-4 text-white">
              Enterprise <span className="text-orange-500">Hardware</span> Consulting
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              From comprehensive audits to strategic vendor management, we help
              you make data-driven procurement decisions and optimize your
              hardware infrastructure for maximum efficiency and ROI.
            </p>
        
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-blue mb-4">
            Enterprise-Grade Hardware Solutions
          </h2>
          <p className="text-primary-blue max-w-3xl mx-auto">
            Our consulting services are designed to optimize your hardware
            infrastructure, reduce operational costs, and enhance system
            performance across your organization.
          </p>
          <div className="h-1 w-20 bg-primary-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-0 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-lg text-primary-orange mr-5 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-blue group-hover:text-primary-blue/90 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-primary-blue">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-md p-10 mb-20">
          <div className="flex items-center mb-8">
            <BarChart className="w-7 h-7 text-primary-orange mr-4" />
            <h2 className="text-2xl font-semibold text-primary-blue">
              Key Benefits
            </h2>
          </div>
          <div className="h-px w-full bg-slate-200 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start group">
                <CheckCircle className="w-5 h-5 text-primary-orange mr-3 mt-1 flex-shrink-0 " />
                <p className="text-slate-700 group-hover:text-primary-blue/90 transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-slate-100 to-white rounded-xl p-10 shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-primary-blue mb-8">
            Our Consultative Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="relative">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange text-white text-lg font-medium">
                  1
                </span>
                <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2 h-16 hidden md:block"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-primary-blue mb-2">
                  Discovery & Assessment
                </h3>
                <p className="text-primary-blue max-w-2xl">
                  Comprehensive evaluation of your current hardware
                  infrastructure, performance metrics, and business requirements
                  to establish a baseline and identify optimization
                  opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="relative">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange text-white text-lg font-medium">
                  2
                </span>
                <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2 h-16 hidden md:block"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-primary-blue mb-2">
                  Strategic Planning & Recommendations
                </h3>
                <p className="text-primary-blue max-w-2xl">
                  Development of a tailored hardware strategy with detailed
                  recommendations, cost-benefit analysis, and implementation
                  roadmap aligned with your business objectives.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="relative">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange text-white text-lg font-medium">
                  3
                </span>
                <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2 h-16 hidden md:block"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-primary-blue mb-2">
                  Implementation & Optimization
                </h3>
                <p className="text-primary-blue max-w-2xl">
                  Coordinated execution of the hardware strategy, including
                  procurement assistance, vendor negotiations, deployment
                  oversight, and performance optimization.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange text-white text-lg font-medium">
                  4
                </span>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-primary-blue mb-2">
                  Continuous Support & Improvement
                </h3>
                <p className="text-primary-blue max-w-2xl">
                  Ongoing monitoring, maintenance planning, performance reviews,
                  and strategic adjustments to ensure your hardware
                  infrastructure continues to meet evolving business needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r bg-indigo-50 text-white rounded-xl p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2 text-primary-blue">
                Ready to optimize your hardware infrastructure?
              </h2>
              <p className=" max-w-2xl text-primary-blue">
                Schedule a consultation with our expert team to discover how our
                hardware consulting services can reduce costs and improve
                performance across your organization.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/case-studies">
                <button className="bg-primary-blue text-white  px-4 py-2 rounded-lg flex items-center font-medium cursor-pointer">
                  <FileText className="w-4 h-4 mr-2" />
                  View Case Studies
                </button>
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-orange  px-4 py-2 rounded-lg flex items-center font-medium cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        formErrors={formErrors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default HardwareConsulting;
