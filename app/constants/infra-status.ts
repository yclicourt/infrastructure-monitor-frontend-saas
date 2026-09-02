import { InfrastructureStatus } from "./enums/infra-status.enum";

export const infraStatus = [
  {
    title: "api-production",
    status: InfrastructureStatus.OPERATIONAL,
    value: "99.9%",
  },
  {
    title: "postgres-primary",
    status: InfrastructureStatus.DEGRADED,
    value: "70.00%",
  },
  {
    title: "redis-cache",
    status: InfrastructureStatus.DOWN,
    value: "1.9%",
  },
];
