import { FaKey, FaLock, FaShieldHalved } from "react-icons/fa6";

export default function SecuritySettings() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
            <FaShieldHalved />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Security</h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your account security and access preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Security Options */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724]">
        <SecurityOption
          icon={FaShieldHalved}
          title="Two-Factor Authentication"
          description="Add an additional layer of security to your account."
          action="Configure"
          enabled
        />

        <SecurityOption
          icon={FaKey}
          title="Login Notifications"
          description="Receive notifications when a new device accesses your account."
          action="Enabled"
          enabled
        />

        <SecurityOption
          icon={FaLock}
          title="Session Timeout"
          description="Automatically sign out inactive sessions."
          action="30 minutes"
        />
      </div>

      {/* IP Whitelist */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">IP Access Control</h3>

        <p className="mt-1 text-xs text-slate-500">
          Restrict access to your organization from specific IP addresses.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Enter IP address"
            className="
              h-10
              flex-1
              rounded-lg
              border
              border-[#1E293B]
              bg-[#121A2B]
              px-4
              text-sm
              text-slate-300
              outline-none
              placeholder:text-slate-600
              focus:border-[#00F2FE]
            "
          />

          <button
            type="button"
            className="
              rounded-lg
              bg-blue-600
              px-5
              py-2
              text-sm
              font-medium
              text-white
              hover:bg-blue-500
            "
          >
            Add IP
          </button>
        </div>
      </div>

      {/* Password */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">Change Password</h3>

        <p className="mt-1 text-xs text-slate-500">
          Update your password to keep your account secure.
        </p>

        <div className="mt-6 space-y-4">
          <SecurityInput label="Current Password" />

          <SecurityInput label="New Password" />

          <SecurityInput label="Confirm New Password" />
        </div>

        <div className="mt-6 flex justify-end">
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
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

function SecurityOption({
  icon: Icon,
  title,
  description,
  action,
  enabled,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  action: string;
  enabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-white/5 p-5 last:border-none sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-400">
          <Icon />
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">{title}</h4>

          <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>
      </div>

      {enabled ? (
        <span className="w-fit rounded-md bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
          {action}
        </span>
      ) : (
        <button className="w-fit text-sm text-blue-400 hover:text-blue-300">
          {action}
        </button>
      )}
    </div>
  );
}

function SecurityInput({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs text-slate-400">{label}</label>

      <input
        type="password"
        className="
          h-10
          w-full
          rounded-lg
          border
          border-[#1E293B]
          bg-[#121A2B]
          px-4
          text-sm
          text-white
          outline-none
          focus:border-[#00F2FE]
        "
      />
    </div>
  );
}
