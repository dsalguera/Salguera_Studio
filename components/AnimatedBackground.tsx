export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] sm:bg-[size:60px_60px]" />

      <div className="absolute -left-28 -top-28 h-[360px] w-[360px] rounded-full bg-violet-500/25 blur-[80px] sm:h-[520px] sm:w-[520px] sm:blur-[110px]" />

      <div className="absolute -bottom-36 -right-32 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[85px] sm:h-[560px] sm:w-[560px] sm:blur-[115px]" />

      <div className="absolute left-1/2 top-[45%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[90px] sm:h-[560px] sm:w-[560px] sm:blur-[125px]" />
    </div>
  );
}