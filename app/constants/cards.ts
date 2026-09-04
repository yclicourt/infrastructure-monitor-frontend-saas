import { Server, HeartPulse, TriangleAlert, Gauge } from "lucide-react";

export const cards = [
  {
    title: "Total Assets",
    icon: Server,
    value: 24,
    iconColor: "text-cyan-400",
  },
  {
    title: "Healthy",
    icon: HeartPulse,
    value: 21,
    iconColor: "text-cyan-400",
  },
  {
    title: "Alerts",
    icon: TriangleAlert,
    value: 2,
    iconColor: "text-cyan-400",
  },
  {
    title: "Uptime",
    icon: Gauge,
    value: 99.8,
    iconColor: "text-cyan-400",
  },
];
