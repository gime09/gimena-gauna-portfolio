export function NoiseBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="noise-orb h-[38rem] w-[38rem] opacity-30"
        style={{ top: "-12rem", left: "-10rem", background: "var(--chart-2)" }}
      />
      <div
        className="noise-orb h-[30rem] w-[30rem] opacity-[0.12]"
        style={{
          bottom: "-10rem",
          right: "-8rem",
          background: "var(--primary)",
          animationDelay: "-11s",
        }}
      />
      <div className="noise-specks" />
      <div className="noise-grain" />
    </div>
  );
}
