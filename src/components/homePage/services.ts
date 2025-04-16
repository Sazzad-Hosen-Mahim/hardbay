import { Server, Cpu, Database, Building2 } from 'lucide-react';

export const services = [
  {
    title: "Custom Servers & Clusters",
    description: "Engineered for compute-intensive environments. Our custom server solutions are built to handle your most demanding workloads with maximum efficiency and reliability.",
    icon: Server,
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&q=80&w=400",
    link: "/service/custom-server-build"
  },
  {
    title: "GPU Rental & AI Compute",
    description: "H100, L40S & 6000 ADA – available on demand. Access cutting-edge GPU technology without the capital investment, perfect for AI/ML workloads and research.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400",
    link: "/service/gpu-rental"
  },
  {
    title: "Enterprise Storage Solutions",
    description: "DAOS & WekaIO – performance without compromise. High-performance storage solutions designed for modern data-intensive applications and real-time analytics.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400",
    link: "/service/enterprise-storage"
  },
  {
    title: "Trusted by Industry Leaders",
    description: "Partnering with leading organizations across finance, research, and technology sectors. Our solutions power mission-critical infrastructure worldwide.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    link: "/service/it-hardware-consult"
  }
];
