"use client";

import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);
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
        />

        <p className="mt-1 text-sm text-slate-500">
          Infrastructure monitoring platform
        </p>
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

        <form className="mt-8 space-y-5">
          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email address
            </label>

            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-[#1E293B]
                    bg-[#0B101D]
                    py-2
                    pl-10
                    pr-4
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
          </div>

          {/* Password */}

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-300"
              >
                Password
              </label>

              <button
                type="button"
                className="text-xs text-cyan-400 transition hover:text-cyan-300"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-[#1E293B]
                    bg-[#0B101D]
                    py-2
                    pl-10
                    pr-11
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

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                    transition
                    hover:text-white
                  "
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="
                  size-4
                  rounded
                  border
                  border-[#1E293B]
                  bg-[#0B101D]
                  accent-blue-500
                "
            />

            <span className="text-sm text-slate-400">Remember me</span>
          </label>

          {/* Submit */}

          <button
            type="submit"
            className="
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-blue-500
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-blue-600
                hover:shadow-lg
                hover:shadow-blue-500/20
                active:scale-[0.99]
              "
          >
            Sign In
          </button>
        </form>

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
