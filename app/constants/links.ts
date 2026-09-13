import {
  FaChartLine,
  FaCog,
  FaExclamationTriangle,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";

export const getNavigationSections = (organizationId: number | undefined) => [
  {
    title: "Overview",
    items: [
      {
        name: "Overview",
        href: `/organizations/${organizationId}`,
        icon: FaHome,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        name: "Organizations",
        href: "/organizations",
        icon: VscOrganization,
      },
      {
        name: "Clients",
        href: `/organizations/${organizationId}/clients`,
        icon: FaUsers,
      },
      {
        name: "Assets",
        href: `/organizations/${organizationId}/assets`,
        icon: FaServer,
      },
    ],
  },
  {
    title: "Observability",
    items: [
      {
        name: "Monitoring",
        href: "/monitoring",
        icon: FaChartLine,
      },
      {
        name: "Incidents",
        href: `/organizations/${organizationId}/incidents`,
        icon: FaExclamationTriangle,
      },
    ],
  },
  {
    title: "System",
    items: [{ name: "Settings", href: "/settings", icon: FaCog }],
  },
];
