import { footer } from "@/app/constants/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="relative w-full border-t border-white/10 bg-transparent px-4 py-6 select-none sm:px-6
    lg:px-8"
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          justify-between
          gap-5
          text-center
          md:flex-row
          md:text-left
        "
      >
        {/* Left */}
        <div>
          <h3 className="text-base font-semibold text-white sm:text-xl">
            {footer.name}
          </h3>
        </div>

        {/* Center */}
        <div>
          <p className="text-xs text-slate-600">{footer.copyright}</p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-xl
              text-slate-400
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-cyan-400
              sm:text-2xl
            "
          >
            <FaGithub />
          </a>

          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-xl
          text-slate-400
          transition-all
          duration-300
          hover:-translate-y-1
          hover:text-cyan-400
          sm:text-2xl
            "
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
