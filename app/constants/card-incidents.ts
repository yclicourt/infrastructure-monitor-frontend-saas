import { FaExclamationTriangle, FaUsers } from "react-icons/fa";
import { FaResolving } from "react-icons/fa6";
import { ImWarning } from "react-icons/im";

export const cardIncidents = [
  {
    title: "Totals Incidents",
    icon: FaExclamationTriangle,
    value: 12,
    iconColor: "text-cyan-400",
  },
  {
    title: "Active",
    icon: FaUsers,
    value: 2,
    iconColor: "text-cyan-400",
  },
  {
    title: "Warning",
    icon: ImWarning,
    value: 3,
    iconColor: "text-cyan-400",
  },
  {
    title: "Resolved",
    icon: FaResolving,
    value: 7,
    iconColor: "text-cyan-400",
  },
];
