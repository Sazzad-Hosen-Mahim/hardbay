import { Server, Cpu, Database, Users } from "lucide-react";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

export const serviceData: Service[] = [
  {
    icon: Server,
    title: "Custom Server Builds",
    description:
      "Tailored hardware configurations to match specific workloads. Whether you're running render farms, trading platforms, or scientific simulations, we build for performance, reliability, and thermal efficiency.",
    features: [
      "Rackmount & blade solutions",
      "Supermicro & Broadberry partners",
      "Colocation-ready systems",
    ],
  },
  {
    icon: Cpu,
    title: "GPU Rental & AI Compute Up",
    description:
      "Need scalable AI infrastructure without the upfront capital? We rent NVIDIA H100, L40S, and A100 Ada GPUs, hosted in high-density data centres for ultra-low latency.",
    features: ["ML model training", "Data inference", "Real-time rendering"],
  },
  {
    icon: Database,
    title: "Enterprise Storage",
    description:
      "We deploy high-throughput, scalable storage platforms built for large data sets and high IOPS.",
    features: [
      "NetApp & DAOS deployments",
      "500TB to multi-petabyte systems",
      "NVMe, hybrid and HDD-based tiers",
    ],
  },
  {
    icon: Users,
    title: "IT Hardware Consulting",
    description:
      "From audits to vendor management, we help you make smarter procurement decisions.",
    features: [
      "Lifecycle management",
      "Hardware refresh planning",
      "Pre-sales engineering",
    ],
  },
];
