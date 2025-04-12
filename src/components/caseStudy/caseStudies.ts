// caseStudies.ts
import { Zap, TrendingUp, Users, Server, Database, Cpu, Clock, Shield, Cloud, Brain } from 'lucide-react';

export const caseStudies = [
  {
    id: 1,
    title: "Enabling AI Compute at Scale",
    subtitle: "How we helped an AI startup achieve 3x faster training times while reducing costs by 30%",
    backgroundImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    challenge: "Our client, a cutting-edge AI startup, needed to build a real-time LLM platform that required significant computational resources. They faced challenges with accessing high-performance GPUs and maintaining zero downtime while scaling their operations.",
    solution: "We implemented a sophisticated 8-node GPU cluster powered by NVIDIA H100s, complemented by 1PB of DAOS-backed storage. This architecture was designed to handle intensive computational workloads while ensuring optimal performance.",
    metrics: [
      {
        icon: Zap,
        title: "Training Speed",
        metric: "3x Faster",
        description: "Significantly reduced model training times through optimized GPU utilization and parallel processing"
      },
      {
        icon: TrendingUp,
        title: "Cost Reduction",
        metric: "30% Lower",
        description: "Decreased monthly operational costs through efficient resource allocation and management"
      },
      {
        icon: Users,
        title: "User Capacity",
        metric: "10x Growth",
        description: "Enabled the platform to handle 10 times more concurrent users without performance degradation"
      }
    ],
    technical: [
      {
        icon: Server,
        title: "Infrastructure",
        points: [
          "8-node GPU cluster deployment",
          "16x NVIDIA H100 GPUs",
          "High-availability configuration",
          "Load balancing optimization"
        ]
      },
      {
        icon: Database,
        title: "Storage Solution",
        points: [
          "1PB DAOS-backed storage",
          "High-speed data access",
          "Redundant backup systems",
          "Automated data replication"
        ]
      },
      {
        icon: Cpu,
        title: "Processing Power",
        points: [
          "Distributed computing setup",
          "Real-time processing capability",
          "Dynamic resource allocation",
          "Automated scaling"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Building a Secure Cloud Infrastructure",
    subtitle: "Transforming a financial services company's infrastructure with 99.99% uptime and enhanced security",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    challenge: "A rapidly growing fintech company needed to scale their infrastructure while maintaining strict security compliance and ensuring zero downtime for their critical financial services.",
    solution: "We designed and implemented a multi-region cloud architecture with automated failover, enhanced security measures, and real-time monitoring systems.",
    metrics: [
      {
        icon: Clock,
        title: "System Uptime",
        metric: "99.99%",
        description: "Achieved near-perfect system availability through redundant architecture and automated failover"
      },
      {
        icon: Shield,
        title: "Security Score",
        metric: "95%",
        description: "Improved security posture with advanced threat detection and prevention systems"
      },
      {
        icon: Cloud,
        title: "Response Time",
        metric: "50ms",
        description: "Reduced average response time through optimized cloud infrastructure and caching"
      }
    ],
    technical: [
      {
        icon: Cloud,
        title: "Cloud Architecture",
        points: [
          "Multi-region deployment",
          "Auto-scaling configuration",
          "Load balancing setup",
          "Disaster recovery system"
        ]
      },
      {
        icon: Shield,
        title: "Security Measures",
        points: [
          "End-to-end encryption",
          "Zero-trust architecture",
          "Regular security audits",
          "Compliance monitoring"
        ]
      },
      {
        icon: Brain,
        title: "Monitoring System",
        points: [
          "Real-time analytics",
          "Predictive maintenance",
          "Automated alerts",
          "Performance tracking"
        ]
      }
    ]
  }
];
