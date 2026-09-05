import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackHome() {
  return (
    <Link
      href="/"
      className="
          absolute
          left-5
          top-5
          z-10
          flex
          items-center
          gap-2
          text-sm
          text-slate-400
          transition
          hover:text-white
          sm:left-8
          sm:top-8
        "
    >
      <ArrowLeft className="size-4" />
      Back to home
    </Link>
  );
}
