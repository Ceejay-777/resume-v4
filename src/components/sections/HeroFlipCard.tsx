"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ceejay from "@/assets/Ceejay-nobg.png";
import logo from "@/assets/Ceejay.png";
import { RefreshCcw } from "lucide-react";

// ─── Timing constants ────────────────────────────────────────────────────────
const FIRST_FLIP_DELAY = 2_500;
const FLIP_INTERVAL = 6_000;
const FLIP_DURATION = 0.85; 
const FLIP_EASE = [0.45, 0, 0.55, 1] as const;

export default function HeroFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Kick off the auto-flip cycle
  useEffect(() => {
    const first = setTimeout(() => {
      setIsFlipped(true);

      intervalRef.current = setInterval(() => {
        setIsFlipped((prev) => !prev);
      }, FLIP_INTERVAL);
    }, FIRST_FLIP_DELAY);

    return () => {
      clearTimeout(first);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, FLIP_INTERVAL);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="relative mx-auto w-full max-w-md"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
    >
      {/* ── Flip container ─────────────────────────────────────────────────── */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: FLIP_DURATION, ease: FLIP_EASE }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative aspect-4/5 w-full cursor-pointer"
      >
        {/* ══ FRONT FACE ════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-surface"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-(--brand)/15 via-transparent to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="absolute inset-0 grid place-items-start">
            <div className="text-center w-full">
              <div className="mx-auto relative grid h-3/5 w-4/5 place-items-center rounded-2xl text-background text-5xl font-semibold overflow-hidden mt-4">
                <img
                  src={ceejay}
                  alt="Ceejay"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-surface/95 pointer-events-none w-4/5 mx-auto" />
              </div>

              <div className="mt-6 font-mono text-sm text-muted-foreground">
                ceejay@theCovenantDev:~$
              </div>
              <div className="mt-2 text-foreground">
                building. shipping. reviewing.
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-border bg-background/70 p-3 backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-muted-foreground">
                ~/services/api
              </span>
              <span className="text-brand">● live</span>
            </div>
            <div className="mt-1 font-mono text-xs text-foreground/80">
              p95 182ms · 99.95% uptime
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 backdrop-blur-md"
          >
            <RefreshCcw className="text-muted-foreground w-3 h-3" />
            <span className="font-mono text-[10px] text-muted-foreground">
              flip
            </span>
          </motion.div>
        </div>

        {/* ══ BACK FACE ═════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/*
           * Back-face palette: adapts to the current theme.
           * Light mode  → rich off-black card   (bg-foreground, text-background)
           * Dark mode   → clean white card       (bg-background, text-foreground)
           * Swap the Tailwind classes below if your theme works inversely.
           */}
          <div className="absolute inset-0 bg-foreground" />

          {/* subtle noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-surface"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* thin grid lines for depth */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(var(--background) 2px, transparent 2px), linear-gradient(90deg, var(--background) 2px, transparent 2px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* centred logo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <div className="relative flex items-center justify-center">
              {/* soft glow ring behind the logo */}
              <div className="absolute h-36 w-36 rounded-full bg-background/10 blur-2xl" />

              <img
                src={logo}
                alt="Covenant Adeosun logo"
                draggable={false}
                className="relative h-28 w-28 select-none object-contain rounded-md"
                /*
                 * If your logo is dark/coloured, add:
                 *   style={{ filter: "invert(1)" }}
                 * to make it legible on the dark back face.
                 */
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-sm tracking-[0.3em] text-background/40 uppercase font-medium">
                covenant adeosun
              </span>
              <span className="font-mono text-[10px] tracking-widest text-background/25 uppercase font-medium">
                Full-stack engineer
              </span>
            </div>
          </div>

          {/* corner accents */}
          {(["tl", "tr", "bl", "br"] as const).map((corner) => (
            <span
              key={corner}
              className={`absolute h-6 w-6 border-background/20 ${
                corner === "tl"
                  ? "top-4 left-4 border-t border-l"
                  : corner === "tr"
                    ? "top-4 right-4 border-t border-r"
                    : corner === "bl"
                      ? "bottom-4 left-4 border-b border-l"
                      : "bottom-4 right-4 border-b border-r"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="font-mono text-xs text-background/20 tracking-widest">
              covenant.dev
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
