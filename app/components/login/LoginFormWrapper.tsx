"use client";

import { authenticate } from "@/app/helpers/actions";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useOrganizationStore } from "@/app/store/organization.store";

function LoginFormWrapper() {
  const [showPassword, setShowPassword] = useState(false);

  const activeOrganization = useOrganizationStore(
    (state) => state.activeOrganization,
  );

  const organizationId = activeOrganization?.id;

  const searchParams = useSearchParams();
  const callbackUrl =
    searchParams.get("callbackUrl") || `/organizations/${organizationId}`;
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form className="mt-8 space-y-5" action={formAction}>
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
            name="email"
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
            name="password"
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
          name="remember"
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

      <input type="hidden" name="redirectTo" value={callbackUrl} />
      {/* Submit */}

      <button
        type="submit"
        aria-disabled={isPending}
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

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

export default LoginFormWrapper;
