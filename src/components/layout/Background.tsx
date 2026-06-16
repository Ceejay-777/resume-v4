export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.35] mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-[-10%] h-150 w-225 -translate-x-1/2 rounded-full bg-(--brand) opacity-[0.08] blur-3xl" />
      <div className="stripe-left" />
      <div className="stripe-right" />
    </div>
  );
}
