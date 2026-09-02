import { InfrastructureStatus } from "./enums/infra-status.enum";

export const stylesInfraPercentageStatus = [
  {
    text: InfrastructureStatus.DOWN,
    style: "text-red-500",
  },
  {
    text: InfrastructureStatus.DEGRADED,
    style: "text-amber-500",
  },
  {
    text: InfrastructureStatus.OPERATIONAL,
    style: "text-green-500",
  },
];
