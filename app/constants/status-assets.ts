import { AssetStatus } from "./enums/asset-status.enum";

export const stylesInfraPercentageStatus = [
  {
    text: AssetStatus.DOWN,
    style: "text-red-500",
  },
  {
    text: AssetStatus.INACTIVE,
    style: "text-amber-500",
  },
  {
    text: AssetStatus.UP,
    style: "text-green-500",
  },
];
