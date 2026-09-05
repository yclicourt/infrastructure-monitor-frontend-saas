
export default function BackgroundDecorationHome() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/4 top-0 h-125 w-125 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="absolute right-0 top-1/3 h-100 w-100 rounded-full bg-blue-600/5 blur-[120px]" />
    </div>
  );
}
