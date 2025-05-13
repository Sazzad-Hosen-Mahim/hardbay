// src/lib/data/products.ts
import image1 from "@/assets/products/server1.jpg";
import image2 from "@/assets/products/gpu1.jpg";
import image3 from "@/assets/products/storage1.jpg";
import image4 from "@/assets/products/server2.jpeg";
import image5 from "@/assets/products/gpu2.jpg";
import image6 from "@/assets/products/storage2.jpg";
export interface Product {
  id: string;
  name: string;
  category: "server" | "gpu" | "storage" | "consulting";
  price: number;
  rating: number;
  image: string;
  specs: {
    cpu?: string;
    gpu?: string;
    ram?: string;
    storage?: string;
    warranty?: string;
  };
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Enterprise Server X9000",
    category: "server",
    price: 12500,
    rating: 4.8,
    image: image1,
    specs: {
      cpu: "Dual Intel Xeon Platinum 8380",
      gpu: "NVIDIA RTX A6000",
      ram: "256GB DDR4 ECC",
      storage: "4TB NVMe SSD + 40TB HDD",
      warranty: "5 Years",
    },
    description:
      "High-performance enterprise server for mission-critical applications with redundant power and cooling.",
    inStock: true,
  },
  {
    id: "prod-2",
    name: "NVIDIA A100 80GB GPU Rental",
    category: "gpu",
    price: 4.99, // per hour
    rating: 4.9,
    image: image2,
    specs: {
      gpu: "NVIDIA A100 80GB",
      warranty: "24/7 Support",
    },
    description:
      "Cloud-based rental of high-performance GPUs for AI/ML workloads. Minimum 1 hour rental.",
    inStock: true,
  },
  {
    id: "prod-3",
    name: "Petabyte Storage Array",
    category: "storage",
    price: 85000,
    rating: 4.7,
    image: image3,
    specs: {
      storage: "1PB (expandable to 4PB)",
      warranty: "Lifetime Support",
    },
    description:
      "Massive scale-out storage solution with enterprise-grade reliability and 99.999% uptime.",
    inStock: true,
  },
  {
    id: "prod-4",
    name: "IT Infrastructure Consultation",
    category: "consulting",
    price: 200, // per hour
    rating: 4.9,
    image: image4,
    specs: {
      warranty: "Project-based",
    },
    description:
      "Expert consultation for designing and implementing enterprise IT infrastructure solutions.",
    inStock: true,
  },
  {
    id: "prod-5",
    name: "High Density Compute Server",
    category: "server",
    price: 8900,
    rating: 4.6,
    image: image5,
    specs: {
      cpu: "AMD EPYC 7763",
      ram: "128GB DDR4",
      storage: "2TB NVMe SSD",
      warranty: "3 Years",
    },
    description:
      "High density compute optimized for virtualization and container workloads.",
    inStock: false,
  },
  {
    id: "prod-6",
    name: "NVIDIA H100 Rental",
    category: "gpu",
    price: 6.99, // per hour
    rating: 5.0,
    image: image6,
    specs: {
      gpu: "NVIDIA H100 80GB",
      warranty: "24/7 Support",
    },
    description:
      "Next-generation GPU rental for cutting-edge AI research and development.",
    inStock: true,
  },
];
