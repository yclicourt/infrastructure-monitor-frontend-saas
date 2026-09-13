import { FaBell, FaEnvelope, FaMobileScreen, FaSlack } from "react-icons/fa6";

const notificationChannels = [
  {
    name: "Email Notifications",
    description: "Receive infrastructure alerts by email.",
    icon: FaEnvelope,
    enabled: true,
  },
  {
    name: "Slack Notifications",
    description: "Send alerts directly to your Slack workspace.",
    icon: FaSlack,
    enabled: false,
  },
  {
    name: "Push Notifications",
    description: "Receive real-time browser notifications.",
    icon: FaMobileScreen,
    enabled: true,
  },
];

export default function NotificationsSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
            <FaBell />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Notifications</h2>

            <p className="mt-1 text-sm text-slate-500">
              Configure how and when you receive infrastructure alerts.
            </p>
          </div>
        </div>
      </div>

      {/* Channels */}

      <div>
        <h3 className="text-sm font-semibold text-white">
          Notification Channels
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Choose where you want to receive notifications.
        </p>

        <div className="mt-4 space-y-3">
          {notificationChannels.map((channel) => {
            const Icon = channel.icon;

            return (
              <div
                key={channel.name}
                className="
                  flex
                  flex-col
                  gap-4
                  rounded-xl
                  border
                  border-white/10
                  bg-[#0F1724]
                  p-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-slate-400">
                    <Icon />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {channel.name}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`
                    relative
                    h-6
                    w-11
                    rounded-full
                    transition
                    ${channel.enabled ? "bg-blue-600" : "bg-slate-700"}
                  `}
                >
                  <span
                    className={`
                      absolute
                      top-1
                      size-4
                      rounded-full
                      bg-white
                      transition
                      ${channel.enabled ? "left-6" : "left-1"}
                    `}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alert Preferences */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-5">
        <h3 className="text-sm font-semibold text-white">Alert Preferences</h3>

        <p className="mt-1 text-xs text-slate-500">
          Select which types of infrastructure events should trigger alerts.
        </p>

        <div className="mt-6 space-y-5">
          <NotificationPreference
            title="Critical Incidents"
            description="Receive notifications immediately for critical incidents."
            enabled
          />

          <NotificationPreference
            title="Warning Alerts"
            description="Get notified when infrastructure warnings occur."
            enabled
          />

          <NotificationPreference
            title="Resolved Incidents"
            description="Receive a notification when an incident is resolved."
            enabled={false}
          />

          <NotificationPreference
            title="Weekly Summary"
            description="Receive a weekly summary of your infrastructure health."
            enabled
          />
        </div>
      </div>

      {/* Save */}

      <div className="flex justify-end">
        <button
          type="button"
          className="
            rounded-lg
            bg-blue-600
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-500
          "
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}

function NotificationPreference({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h4 className="text-sm text-slate-200">{title}</h4>

        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      <button
        type="button"
        className={`
          relative
          h-6
          w-11
          shrink-0
          rounded-full
          transition
          ${enabled ? "bg-blue-600" : "bg-slate-700"}
        `}
      >
        <span
          className={`
            absolute
            top-1
            size-4
            rounded-full
            bg-white
            transition
            ${enabled ? "left-6" : "left-1"}
          `}
        />
      </button>
    </div>
  );
}
