import { FaServer, FaUpDown } from "react-icons/fa6";
import { CardAsset } from "./interfaces/card-assets.interface";
import { FiArrowDown } from "react-icons/fi";
import { FaCog } from "react-icons/fa";

export const cardAssets: CardAsset[] = [
  {
    title: "Totals Assets",
    icon: FaServer,
    value: 156,
    iconColor: "text-cyan-400",
  },
  {
    title: "Online",
    icon: FaUpDown,
    value: 145,
    subtitle: "91%",
    iconColor: "text-cyan-400",
  },
  {
    title: "Offline",
    icon: FiArrowDown,
    value: 8,
    subtitle: "5%",
    iconColor: "text-cyan-400",
  },
  {
    title: "Maintenance",
    icon: FaCog,
    value: 2,
    subtitle: "4%",
    iconColor: "text-cyan-400",
  },
];
