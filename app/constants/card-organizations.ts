import { AlertTriangle } from "lucide-react";
import { FaUsers } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";

export const cardOrganizations = [
  {
    title: "Totals Organizations",
    icon: VscOrganization,
    value: 8,
    iconColor: "text-cyan-400",
  },
  {
    title: "Totals Clients",
    icon: FaUsers,
    value: 24,
    iconColor: "text-cyan-400",
  },
  {
    title: "Totals Assets",
    icon: FaServer,
    value: 156,
    iconColor: "text-cyan-400",
  },
  {
    title: "Active Alerts",
    icon: AlertTriangle,
    value: 2,
    iconColor: "text-cyan-400",
  },
];
