import {
  FaChartLine,
  FaCog,
  FaExclamationTriangle,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";

export const navigationSections = [
  {
    title: "Overview",
    items: [{ name: "Overview", href: "/features/dashboard", icon: FaHome }],
  },
  {
    title: "Management",
    items: [
      {
        name: "Organizations",
        href: "/features/dashboard/organizations",
        icon: VscOrganization,
      },
      {
        name: "Clients",
        href: "/features/dashboard/organizations/clients",
        icon: FaUsers,
      },
      { name: "Assets", href: "/features/dashboard/assets", icon: FaServer },
    ],
  },
  {
    title: "Observability",
    items: [
      {
        name: "Monitoring",
        href: "/features/dashboard/monitoring",
        icon: FaChartLine,
      },
      {
        name: "Incidents",
        href: "/features/dashboard/incidents",
        icon: FaExclamationTriangle,
      },
    ],
  },
  {
    title: "System",
    items: [
      { name: "Settings", href: "/features/dashboard/settings", icon: FaCog },
    ],
  },
];
