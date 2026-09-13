import { FaGoogle } from "react-icons/fa";
import {
  FaArrowRight,
  FaAws,
  FaCheck,
  FaCloud,
  FaMicrosoft,
  FaPlus,
  FaSlack,
} from "react-icons/fa6";

import { SiGrafana, SiPrometheus, SiVmware, SiPagerduty } from "react-icons/si";
const integrations = [
  {
    name: "Prometheus",
    description: "Collect and monitor infrastructure metrics.",
    category: "Monitoring",
    connected: true,
    icon: <SiPrometheus />,
  },
  {
    name: "Grafana",
    description: "Visualize infrastructure metrics and analytics.",
    category: "Monitoring",
    connected: true,
    icon: <SiGrafana />,
  },
  {
    name: "VMware",
    description: "Monitor virtual machines and VMware infrastructure.",
    category: "Virtualization",
    connected: false,
    icon: <SiVmware />,
  },
  {
    name: "Slack",
    description: "Receive infrastructure alerts and notifications.",
    category: "Notifications",
    connected: false,
    icon: <FaSlack />,
  },
  {
    name: "PagerDuty",
    description: "Manage incident escalation and alerts.",
    category: "Incident Management",
    connected: false,
    icon: <SiPagerduty />,
  },
  {
    name: "Amazon Web Services",
    description: "Monitor cloud infrastructure and services.",
    category: "Cloud",
    connected: false,
    icon: <FaAws />,
  },
  {
    name: "Microsoft Azure",
    description: "Connect and monitor Azure resources.",
    category: "Cloud",
    connected: false,
    icon: <FaMicrosoft />,
  },
  {
    name: "Google Cloud",
    description: "Monitor your Google Cloud infrastructure.",
    category: "Cloud",
    connected: false,
    icon: <FaGoogle />,
  },
];

export default function IntegrationsSettings() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
            <FaCloud />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Integrations</h2>

            <p className="mt-1 text-sm text-slate-500">
              Connect Infra Monitor with your infrastructure and external
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Connected Integrations */}

      <div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white">
            Available Integrations
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Connect your favorite infrastructure and monitoring tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="
                rounded-xl
                border
                border-white/10
                bg-[#0F1724]
                p-5
                transition
                hover:border-white/20
                hover:bg-white/2
              "
            >
              <div className="flex items-start justify-between gap-4">
                {/* Integration information */}

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-cyan-400">
                    {integration.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-white">
                        {integration.name}
                      </h4>

                      {integration.connected && (
                        <span className="flex items-center gap-1 text-xs text-emerald-400">
                          <FaCheck className="text-[10px]" />
                          Connected
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {integration.description}
                    </p>

                    <span className="mt-3 inline-block rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-400">
                      {integration.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}

              <div className="mt-5 border-t border-white/5 pt-4">
                <button
                  type="button"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-white/10
                    bg-white/2
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-slate-300
                    transition
                    hover:border-blue-500/50
                    hover:bg-blue-500/10
                    hover:text-white
                  "
                >
                  {integration.connected ? (
                    <>
                      Manage Integration
                      <FaArrowRight className="text-[10px]" />
                    </>
                  ) : (
                    <>
                      <FaPlus className="text-[10px]" />
                      Connect
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
