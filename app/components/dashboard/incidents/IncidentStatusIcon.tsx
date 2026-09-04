import { IncidentStatus } from "@/app/constants/enums/incident-status.enum";
import { Circle } from "lucide-react";

export const statusColors: Record<IncidentStatus, string> = {
  ACTIVE: "fill-red-500 text-red-500",
  WARNING: "fill-amber-400 text-amber-400",
  RESOLVED: "fill-emerald-500 text-emerald-500",
};

export function IncidentStatusIcon({ status }: { status: IncidentStatus }) {
  return <Circle className={`size-2.5 ${statusColors[status]}`} />;
}
