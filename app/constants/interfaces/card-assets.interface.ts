import { IconType } from "react-icons";

export interface CardAsset {
  title: string;
  subtitle?: string;
  icon: IconType;
  value: number;
  iconColor: string;
}
