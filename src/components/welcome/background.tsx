export function Background() {
  return (
    <>
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

      {/* Акцентные элементы */}
      <div className="hidden md:block absolute top-0 -left-4 w-[500px] h-[500px] bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="hidden md:block absolute -bottom-8 left-20 w-[500px] h-[500px] bg-zinc-500/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      <div className="hidden md:block absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-neutral-500/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
    </>
  );
}
