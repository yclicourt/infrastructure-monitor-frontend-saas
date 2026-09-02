import { IncidentStatus } from "./enums/incident-status.enum";

export const incidents = [
  {
    title: "Api Gateway Latency Spike",
    status: IncidentStatus.ACTIVE,
  },

  {
    title: "High CPU Usage on Worker-02",
    status: IncidentStatus.WARNING,
  },
  {
    title: "Database Replica Sync Resolved",
    status: IncidentStatus.RESOLVED,
  },
];
