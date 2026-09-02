import { incidents } from "@/app/constants/incidents";

import { stylesIncidentStatus } from "@/app/constants/status-incident";
import { IncidentStatusIcon } from "../../common/IncidentStatusIcon";

export default function CardIncidentItem() {
  return incidents.map((inc) => {
    const resultIncidentStatus = stylesIncidentStatus.find(
      (status) => status.text === inc.status,
    );
    return (
      <div
        key={inc.title}
        className="flex items-center mt-4 gap-2 bg-gray-900 p-4 border border-white/20 rounded-xl"
      >
        <IncidentStatusIcon status={inc.status} />

        <div className="flex flex-1 items-center justify-between gap-4">
          <p className="text-sm font-medium text-white capitalize">{inc.title}</p>
          <span className={`text-xs ${resultIncidentStatus?.style}`}>
            {inc.status}
          </span>
        </div>
      </div>
    );
  });
}
