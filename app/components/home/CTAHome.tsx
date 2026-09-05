import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAHome() {
  return (
    <section className="relative z-10 px-5 pb-20 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 to-cyan-500/5 px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Take control of your infrastructure.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Start monitoring your infrastructure from one centralized platform.
        </p>

        <Link
          href="/login"
          className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-blue-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-600
            "
        >
          Get Started
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
