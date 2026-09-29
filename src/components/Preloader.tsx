import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const p = Math.min(100, ((performance.now() - start) / 1000) * 100);
      setProgress(Math.floor(p));
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 120);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary">
            INITIALIZING SYSTEM... [VARSHITHA.DEV]
          </p>
          <div className="mt-6 font-display text-6xl font-bold tabular-nums text-neon">
            {progress}%
          </div>
          <div className="mt-6 h-px w-56 overflow-hidden bg-border">
            <div
              className="h-full bg-primary transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
