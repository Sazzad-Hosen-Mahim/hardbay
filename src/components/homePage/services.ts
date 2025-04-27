import { Server, Cpu, Database, Building2 } from 'lucide-react';

export const services = [
  {
    title: "Custom Servers & Clusters",
    description:
      "Engineered for compute-intensive environments. Our custom server solutions are built to handle your most demanding workloads with maximum efficiency and reliability.",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&q=80&w=400",
    link: "/service/custom-server-build",
    modal: {
      heading: "Enterprise-Grade Performance",
      body: "Our custom server solutions are engineered specifically for compute-intensive environments, delivering unparalleled performance for your most demanding workloads.",
      featuresTitle: "Key Features",
      features: [
        "High-density compute configurations",
        "Custom cooling solutions for optimal thermal management",
        "Enterprise-grade components with extended warranties",
        "24/7 monitoring and support services",
        "Scalable architecture to grow with your needs",
      ],
      cta: "Learn More",
    },
  },
  {
    title: "GPU Rental & AI Compute",
    description:
      "H100, L40S & 6000 ADA – available on demand. Access cutting-edge GPU technology without the capital investment, perfect for AI/ML workloads and research.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400",
    link: "/service/gpu-rental",
    modal: {
      heading: "Cutting-Edge GPU Technology",
      body: "Access the latest GPU technology without the capital investment. Our GPU rental service provides H100, L40S & 6000 ADA GPUs on demand, perfect for AI/ML workloads and research.",
      featuresTitle: "Available Hardware",
      features: [
        "NVIDIA H100 - 80GB HBM3",
        "NVIDIA L40S - 48GB GDDR6",
        "AMD Instinct MI250 - 128GB HBM2e",
        "NVIDIA RTX 6000 Ada - 48GB GDDR6",
      ],
      cta: "Learn More",
    },
  },
  {
    title: "Enterprise Storage Solutions",
    description:
      "DAOS & WekaIO – performance without compromise. High-performance storage solutions designed for modern data-intensive applications and real-time analytics.",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400",
    link: "/service/enterprise-storage",
    modal: {
      heading: "High-Performance Storage",
      body: "Our enterprise storage solutions featuring DAOS & WekaIO deliver performance without compromise, designed specifically for modern data-intensive applications and real-time analytics.",
      featuresTitle: "Storage Technologies",
      features: [
        "DAOS (Distributed Asynchronous Object Storage)",
        "WekaIO Matrix™ - High-performance file system",
        "NVMe over Fabrics (NVMe-oF)",
        "Software-defined storage solutions",
        "Hybrid cloud storage architectures",
      ],
      cta: "Learn More",
    },
  },
  {
    title: "Trusted by Industry Leaders",
    description:
      "Partnering with leading organizations across finance, research, and technology sectors. Our solutions power mission-critical infrastructure worldwide.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    link: "/service/it-hardware-consult",
    modal: {
      heading: "Global Partnerships",
      body: "We partner with leading organizations across finance, research, and technology sectors, powering mission-critical infrastructure worldwide.",
      featuresTitle: "Industry Sectors",
      features: [
        "Financial Services & FinTech",
        "Research & Academia",
        "Healthcare & Life Sciences",
        "Media & Entertainment",
        "Government & Defense",
      ],
      cta: "Schedule a Demo",
    },
  },
];
