import { IncidentStatus } from "./enums/incident-status.enum";

export const stylesIncidentStatus = [
  {
    text: IncidentStatus.ACTIVE,
    style: "text-red-500",
  },
  {
    text: IncidentStatus.WARNING,
    style: "text-amber-500",
  },
  {
    text: IncidentStatus.RESOLVED,
    style: "text-green-500",
  },
];
