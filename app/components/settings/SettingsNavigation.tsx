import { settingsNavigation } from "@/app/constants/settings-navigation";

export default function SettingsNavigation() {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-[#121A2B]/70
        p-2
      "
    >
      {settingsNavigation.map((setting, index) => {
        const Icon = setting.icon;

        const isActive = index === 0;

        return (
          <button
            key={setting.name}
            className={`
              flex
              w-full
              items-center
              gap-3
              rounded-lg
              px-3
              py-3
              text-left
              transition-all

              ${
                isActive
                  ? "border border-[#2A3B55] bg-[#1D2A44] text-white"
                  : "text-slate-400 hover:bg-white/3 hover:text-white"
              }
            `}
          >
            <div
              className={`
                flex
                size-9
                items-center
                justify-center
                rounded-lg
                ${isActive ? "bg-blue-500/10 text-blue-400" : "text-slate-500"}
              `}
            >
              <Icon className="text-sm" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium">{setting.name}</p>

              <p className="mt-1 truncate text-xs text-slate-500">
                {setting.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
