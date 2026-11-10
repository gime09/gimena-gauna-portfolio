export function NoiseBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="noise-orb h-[38rem] w-[38rem] opacity-25"
        style={{ top: "-12rem", left: "-10rem", background: "var(--primary-violet)" }}
      />
      <div
        className="noise-orb h-[26rem] w-[26rem] opacity-[0.1]"
        style={{
          top: "35%",
          left: "45%",
          background: "var(--primary)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="noise-orb h-[32rem] w-[32rem] opacity-20"
        style={{
          bottom: "-10rem",
          right: "-8rem",
          background: "var(--primary-blue)",
          animationDelay: "-11s",
        }}
      />
      <div className="noise-specks" />
      <div className="noise-grain" />
    </div>
  );
}
