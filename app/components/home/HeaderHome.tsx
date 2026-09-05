import Link from "next/link";
import Image from "next/image";

export default function HeaderHome() {
  return (
    <header className="relative z-10 border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/infra-monitor-logo.svg"
            alt="Infrastructure Monitor"
            width={200}
            height={200}
            priority
          />
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-400 transition hover:text-white sm:block"
          >
            Sign In
          </Link>

          <Link
            href="/login"
            className="
                rounded-lg
                bg-blue-500
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-600
              "
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
