import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/infra-monitor-logo.svg"
        alt="Infrastructure Monitor"
        width={500}
        height={100}
        priority
      />
    </div>
  );
};
export default Logo;
