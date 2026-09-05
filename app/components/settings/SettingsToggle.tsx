type SettingToggleProps = {
  title: string;
  description: string;
  enabled?: boolean;
};

export default function SettingToggle({
  title,
  description,
  enabled = false,
}: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div>
        <h3 className="text-sm font-medium text-slate-300">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        className={`
          relative
          h-6
          w-11
          rounded-full
          transition-all
          ${
            enabled
              ? "bg-blue-500"
              : "bg-slate-700"
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            size-4
            rounded-full
            bg-white
            transition-all
            ${
              enabled
                ? "left-6"
                : "left-1"
            }
          `}
        />
      </button>
    </div>
  );
}