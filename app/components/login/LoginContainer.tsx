import Image from "next/image";
import LoginFormWrapper from "./LoginFormWrapper";

export default function LoginContainer() {
  return (
    <div className="relative z-10 w-full max-w-md">
      {/* Logo */}

      <div className="mb-8 flex flex-col items-center">
        <Image
          src="/infra-monitor-logo.svg"
          alt="Infrastructure Monitor"
          width={300}
          height={100}
          priority
          className="h-auto w-full max-w-75"
        />
      </div>

      {/* Card */}

      <div
        className="
            rounded-2xl
            border
            border-white/10
            bg-[#121A2B]/80
            p-6
            shadow-2xl
            backdrop-blur-xl
            sm:p-8
          "
      >
        {/* Header */}

        <div>
          <h2 className="text-2xl font-semibold text-white">Welcome back</h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to access your infrastructure dashboard.
          </p>
        </div>

        {/* Form */}

        <LoginFormWrapper />

        {/* Footer */}

        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              className="font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              Contact your administrator
            </button>
          </p>
        </div>
      </div>

      {/* Security */}

      <p className="mt-6 text-center text-xs text-slate-600">
        Secure access to your infrastructure monitoring platform.
      </p>
    </div>
  );
}
