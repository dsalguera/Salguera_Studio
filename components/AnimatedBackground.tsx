export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[var(--page-background)] transition-colors duration-500">
      <div className="absolute inset-0 bg-[var(--page-background)] transition-colors duration-500" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(var(--accent-rgb),0.16),transparent_42%)] opacity-100 transition-opacity duration-500 [html[data-theme='light']_&]:opacity-30" />

      <div className="theme-grid absolute inset-0 bg-[size:44px_44px] opacity-80 transition-[background-image] duration-500 sm:bg-[size:60px_60px]" />

      <div className="theme-glow-primary background-float-one absolute -left-56 -top-56 h-[620px] w-[620px] rounded-full blur-[34px] transition-[background] duration-500 sm:h-[850px] sm:w-[850px]" />

      <div className="theme-glow-secondary background-float-two absolute -bottom-72 -right-64 h-[680px] w-[680px] rounded-full blur-[42px] transition-[background] duration-500 sm:h-[900px] sm:w-[900px]" />

      <div className="theme-glow-primary background-float-three absolute left-1/2 top-[52%] h-[520px] w-[520px] rounded-full opacity-50 blur-[90px] transition-[background] duration-500 sm:h-[780px] sm:w-[780px]" />

      <div className="absolute right-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb-secondary),0.18),transparent_70%)] blur-[55px] transition-opacity duration-500 sm:h-[420px] sm:w-[420px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(0,0,0,0.32)_72%,rgba(0,0,0,0.72)_100%)] opacity-100 transition-opacity duration-500 [html[data-theme='light']_&]:opacity-0" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.22)_100%)] opacity-100 transition-opacity duration-500 [html[data-theme='light']_&]:opacity-0" />
    </div>
  );
}