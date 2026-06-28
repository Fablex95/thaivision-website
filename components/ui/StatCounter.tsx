"use client"

import { useTransform, motion, type MotionValue } from "motion/react"

interface StatCounterProps {
  /** scrollYProgress MotionValue from the parent section's useScroll */
  scrollProgress: MotionValue<number>
  target: number
  suffix: string
  prefix?: string
  label: string
  /** Input range within which counting goes 0 → target. Defaults to full [0,1] */
  inputRange?: [number, number]
}

export default function StatCounter({
  scrollProgress,
  target,
  suffix,
  prefix = "",
  label,
  inputRange = [0, 1],
}: StatCounterProps) {
  // Map scroll progress bidirectionally: 0 → 0, 1 → target (rounds to int)
  const rawValue = useTransform(scrollProgress, inputRange, [0, target])
  const displayValue = useTransform(rawValue, (v) => Math.round(v))

  return (
    <div className="text-center">
      <div
        className="font-display text-5xl md:text-6xl font-bold mb-2"
        style={{ color: "#C9A84C" }}
      >
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </div>
      <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-semibold">
        {label}
      </div>
    </div>
  )
}
