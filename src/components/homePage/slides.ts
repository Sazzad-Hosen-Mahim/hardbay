// slides.ts

export type Slide = {
  title: string;
  highlight: string;
  description: string;
  image: string;
  buttons: {
    text: string;
    primary: boolean;
  }[];
};

export const slides: Slide[] = [
  {
    title: "Powering Infrastructure, Enabling Innovation.",
    highlight: "Infrastructure,",
    description:
      "Tortuga7 is a UK-based IT consultancy specialising in enterprise-grade hardware solutions. We deliver high-performance servers, scalable GPU infrastructure, and cutting-edge storage systems to fuel your most demanding workloads.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
    buttons: [
      { text: "Explore Our Services", primary: true },
      { text: "Request a Consultation", primary: false },
    ],
  },
  {
    title: "Enterprise-Grade Solutions for Modern Workloads",
    highlight: "Solutions",
    description:
      "From AI compute clusters to high-performance storage systems, we provide the infrastructure that powers innovation.",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=2000",
    buttons: [
      { text: "Explore Our Services", primary: true },
      { text: "Request a Consultation", primary: false },
    ],
  },
];
