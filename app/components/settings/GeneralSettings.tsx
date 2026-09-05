import SettingToggle from "./SettingsToggle";

export default function GeneralSettings() {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-[#121A2B]/60
        p-5
        sm:p-6
      "
    >
      {/* Header */}

      <div className="border-b border-white/10 pb-5">
        <h2 className="text-lg font-semibold text-white">General Settings</h2>

        <p className="mt-1 text-sm text-slate-500">
          Update your system settings and preferences.
        </p>
      </div>

      {/* Form */}

      <div className="mt-6 space-y-5">
        {/* System Name */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            System Name
          </label>

          <input
            type="text"
            defaultValue="Infra Monitor"
            className="
              h-11
              w-full
              rounded-md
              border
              border-[#1E293B]
              bg-[#0B101D]
              px-4
              text-sm
              text-white
              outline-none
              transition-all
              placeholder:text-slate-600
              hover:border-slate-600
              focus:border-[#00F2FE]
              focus:ring-1
              focus:ring-[#00F2FE]
            "
          />
        </div>

        {/* Time Zone */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Time Zone
          </label>

          <select
            className="
              h-11
              w-full
              rounded-md
              border
              border-[#1E293B]
              bg-[#0B101D]
              px-4
              text-sm
              text-slate-300
              outline-none
              transition-all
              hover:border-slate-600
              focus:border-[#00F2FE]
              focus:ring-1
              focus:ring-[#00F2FE]
            "
          >
            <option>UTC-5 Eastern Time</option>
            <option>UTC</option>
            <option>UTC-6 Central Time</option>
            <option>UTC-8 Pacific Time</option>
          </select>
        </div>

        {/* Date Format */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Date Format
          </label>

          <select
            className="
              h-11
              w-full
              rounded-md
              border
              border-[#1E293B]
              bg-[#0B101D]
              px-4
              text-sm
              text-slate-300
              outline-none
              transition-all
              hover:border-slate-600
              focus:border-[#00F2FE]
              focus:ring-1
              focus:ring-[#00F2FE]
            "
          >
            <option>May 12, 2024</option>
            <option>12/05/2024</option>
            <option>2024-05-12</option>
          </select>
        </div>

        {/* Time Format */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Time Format
          </label>

          <select
            className="
              h-11
              w-full
              rounded-md
              border
              border-[#1E293B]
              bg-[#0B101D]
              px-4
              text-sm
              text-slate-300
              outline-none
              transition-all
              hover:border-slate-600
              focus:border-[#00F2FE]
              focus:ring-1
              focus:ring-[#00F2FE]
            "
          >
            <option>24 Hour</option>
            <option>12 Hour</option>
          </select>
        </div>

        {/* Settings Toggle */}
        <div className="mt-8 space-y-6 border-t border-white/10 pt-6">
          <SettingToggle
            title="Enable Maintenance Mode"
            description="Temporarily disable monitoring"
          />

          <SettingToggle
            title="Auto-refresh Data"
            description="Automatically refresh dashboard data"
            enabled
          />

          <SettingToggle
            title="Email Reports"
            description="Send daily summary reports"
            enabled
          />
        </div>

        {/* Button Saved */}
        <div className="mt-8 flex justify-end border-t border-white/10 pt-5">
          <button
            className="
            rounded-md
            bg-blue-500
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-600
            active:scale-[0.98]
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
