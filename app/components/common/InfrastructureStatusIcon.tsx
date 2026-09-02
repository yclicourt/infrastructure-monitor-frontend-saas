import { InfrastructureStatus } from "@/app/constants/enums/infra-status.enum";
import { Circle } from "lucide-react";

export const statusColors: Record<InfrastructureStatus, string> = {
  DOWN: "fill-red-500 text-red-500",
  DEGRADED: "fill-amber-400 text-amber-400",
  OPERATIONAL: "fill-emerald-500 text-emerald-500",
};

export function InfrastructureStatusIcon({
  status,
}: {
  status: InfrastructureStatus;
}) {
  return <Circle className={`size-2.5 ${statusColors[status]}`} />;
}
