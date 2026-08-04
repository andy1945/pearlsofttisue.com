"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Split-text reveal (ReactBits "SplitText" style) */
export function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Reveal on scroll */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Tilt card following the pointer */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Count-up number */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/** Infinite marquee strip */
export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm font-semibold tracking-[0.28em] whitespace-nowrap uppercase"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}