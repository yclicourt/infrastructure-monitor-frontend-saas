import { FaCheck, FaDesktop, FaPalette } from "react-icons/fa6";

const themes = [
  {
    name: "Dark",
    description: "Optimized for low-light environments.",
    active: true,
  },
  {
    name: "Light",
    description: "Clean and bright interface.",
    active: false,
  },
  {
    name: "System",
    description: "Use your device preferences.",
    active: false,
  },
];

const colors = [
  "bg-blue-500",
  "bg-cyan-400",
  "bg-purple-500",
  "bg-emerald-500",
  "bg-amber-400",
  "bg-red-500",
];

export default function AppearanceSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
            <FaPalette />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Appearance</h2>

            <p className="mt-1 text-sm text-slate-500">
              Customize the appearance of your Infra Monitor workspace.
            </p>
          </div>
        </div>
      </div>

      {/* Theme */}

      <div>
        <h3 className="text-sm font-semibold text-white">Theme</h3>

        <p className="mt-1 text-xs text-slate-500">
          Choose how Infra Monitor looks on your device.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {themes.map((theme) => (
            <button
              key={theme.name}
              type="button"
              className={`
                relative
                rounded-xl
                border
                p-5
                text-left
                transition
                ${
                  theme.active
                    ? "border-blue-500 bg-blue-500/5"
                    : "border-white/10 bg-[#0F1724] hover:border-white/20"
                }
              `}
            >
              {theme.active && (
                <div className="absolute right-4 top-4 flex size-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  <FaCheck />
                </div>
              )}

              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-white/5 text-slate-400">
                <FaDesktop />
              </div>

              <h4 className="text-sm font-medium text-white">{theme.name}</h4>

              <p className="mt-2 text-xs text-slate-500">{theme.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">Accent Color</h3>

        <p className="mt-1 text-xs text-slate-500">
          Choose your preferred accent color.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          {colors.map((color, index) => (
            <button
              key={color}
              type="button"
              className={`
                flex
                size-9
                items-center
                justify-center
                rounded-full
                ${color}
                transition
                hover:scale-110
                ${
                  index === 0
                    ? "ring-2 ring-white ring-offset-2 ring-offset-[#0F1724]"
                    : ""
                }
              `}
            >
              {index === 0 && <FaCheck className="text-xs text-white" />}
            </button>
          ))}
        </div>
      </div>

      {/* Interface Density */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">Interface Density</h3>

        <p className="mt-1 text-xs text-slate-500">
          Adjust the spacing and density of the dashboard interface.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <DensityButton
            title="Compact"
            description="More information in less space."
          />

          <DensityButton
            title="Comfortable"
            description="Balanced spacing and readability."
            active
          />

          <DensityButton
            title="Spacious"
            description="More room between interface elements."
          />
        </div>
      </div>

      {/* Dashboard Layout */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">Dashboard Layout</h3>

        <p className="mt-1 text-xs text-slate-500">
          Configure how information is displayed across the dashboard.
        </p>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-300">Remember sidebar state</p>

            <p className="mt-1 text-xs text-slate-500">
              Keep the sidebar collapsed or expanded between sessions.
            </p>
          </div>

          <Toggle active />
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
          Save Appearance
        </button>
      </div>
    </div>
  );
}

function DensityButton({
  title,
  description,
  active,
}: {
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`
        rounded-lg
        border
        p-4
        text-left
        transition
        ${
          active
            ? "border-blue-500 bg-blue-500/10"
            : "border-white/10 bg-white/2 hover:border-white/20"
        }
      `}
    >
      <p className="text-sm font-medium text-white">{title}</p>

      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </button>
  );
}

function Toggle({ active }: { active?: boolean }) {
  return (
    <button
      type="button"
      className={`
        relative
        h-6
        w-11
        rounded-full
        transition
        ${active ? "bg-blue-600" : "bg-slate-700"}
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
          ${active ? "left-6" : "left-1"}
        `}
      />
    </button>
  );
}
