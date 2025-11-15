import { DottedGlowBackground } from "@/components/animated/dotted-glow-background";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/*  */}
        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
          opacity={1}
          gap={10}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
        <h3 className="font-exo2 font-bold tracking-tight mx-auto w-fit text-4xl text-center sm:text-6xl md:text-7xl lg:text-8xl">Coming Soon</h3>
      </main>
      <footer className="absolute font-montserrat-alternates bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-neutral-500 dark:text-neutral-400">
  © 2025 Vyoma Studio. All rights reserved.
</footer>

    </div>
  );
}
