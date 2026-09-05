import { FaCircle } from "react-icons/fa6";

const alerts = [
  {
    title: "High CPU Usage on worker-02",
    time: "10 min ago",
    status: "Warning",
    color: "text-amber-400",
  },
  {
    title: "API Gateway Latency Spike",
    time: "25 min ago",
    status: "Critical",
    color: "text-red-400",
  },
  {
    title: "Database Connection Pool High",
    time: "1 hour ago",
    status: "Warning",
    color: "text-amber-400",
  },
];

export default function RecentAlerts() {
  return (
    <div
      className="
        rounded-lg
        border
        border-[#1E293B]
        bg-[#121A2B]
        p-4
        sm:p-5
      "
    >
      <h2 className="text-sm font-semibold text-white sm:text-base">
        Recent Alerts
      </h2>

      <div className="mt-4 divide-y divide-[#1E293B]">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="
              flex
              items-center
              gap-3
              py-3
            "
          >
            <FaCircle className={`${alert.color} shrink-0 text-[7px]`} />

            <p className="min-w-0 flex-1 truncate text-xs text-slate-300">
              {alert.title}
            </p>

            <span className="hidden text-[10px] text-slate-500 sm:block">
              {alert.time}
            </span>

            <span
              className={`
                rounded
                bg-white/5
                px-2
                py-1
                text-[10px]
                font-medium
                ${alert.color}
              `}
            >
              {alert.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
