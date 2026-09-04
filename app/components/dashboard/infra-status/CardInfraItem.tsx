import { infraStatus } from "@/app/constants/infra-status";
import { stylesInfraPercentageStatus } from "@/app/constants/status-infra-percentage";
import { InfrastructureStatusIcon } from "./InfrastructureStatusIcon";

export default function CardInfraItem() {
  return infraStatus.map((inf) => {
    const resultInfStatus = stylesInfraPercentageStatus.find(
      (status) => status.text === inf.status,
    );

    return (
      <div
        key={inf.title}
        className="flex items-center mt-4 gap-2 bg-gray-800 p-4 border border-white/20 rounded-xl"
      >
        <InfrastructureStatusIcon status={inf.status} />

        <div className="flex flex-1 items-center justify-between gap-4">
          <p className="text-sm font-medium text-white">{inf.title}</p>
          <span className={`text-xs ${resultInfStatus?.style}`}>
            {inf.status}
          </span>
          <p className="text-sm font-medium text-white">{inf.value}</p>
        </div>
      </div>
    );
  });
}
