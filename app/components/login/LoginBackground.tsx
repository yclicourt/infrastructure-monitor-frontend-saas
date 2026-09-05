export default function LoginBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-cyan-500/5 blur-[140px]" />
    </div>
  );
}
