"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/40 blur-[140px]" />
      </div>

      {/* Cyan Glow */}
      <div className="absolute left-1/2 top-1/2 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute bottom-0 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/35 blur-[140px]" />
      </div>

      {/* Blue Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-[180px]" />

      {/* Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/5 to-blue-500/10" />

    </div>
  );
}