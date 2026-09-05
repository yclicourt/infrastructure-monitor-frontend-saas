import {
  FaBell,
  FaCreditCard,
  FaGear,
  FaLink,
  FaPalette,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6";

export const settingsNavigation = [
  {
    name: "General",
    description: "System settings and preferences",
    icon: FaGear,
  },
  {
    name: "Users",
    description: "Manage users and permissions",
    icon: FaUsers,
  },
  {
    name: "Integrations",
    description: "Configure external integrations",
    icon: FaLink,
  },
  {
    name: "Notifications",
    description: "Alerting and notification settings",
    icon: FaBell,
  },
  {
    name: "Billing",
    description: "Subscription and billing details",
    icon: FaCreditCard,
  },
  {
    name: "Security",
    description: "Security and access control",
    icon: FaShieldHalved,
  },
  {
    name: "Appearance",
    description: "Theme and display settings",
    icon: FaPalette,
  },
];
