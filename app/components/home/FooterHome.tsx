import Image from "next/image";

export default function FooterHome() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/infra-monitor-logo.svg"
            alt="Infrastructure Monitor"
            width={200}
            height={200}
            priority
          />

        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Infrastructure Monitor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
