"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

/**
 * Large TA-monogram + pagoda SVG as a fixed watermark background.
 * opacity ~3%, parallax scroll (drifts slowly upward as user scrolls).
 * z-index: -1 so it sits behind all content.
 */
export default function BackgroundLogo() {
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Over the full page scroll, drift -200px upward (very slow parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"])

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center pointer-events-none select-none"
      style={{
        zIndex: -1,
        y: prefersReduced ? 0 : y,
      }}
    >
      <svg
        width="700"
        height="700"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.03 }}
      >
        {/* === T — Gold === */}
        {/* T horizontal bar */}
        <rect x="4" y="13" width="18" height="3.5" rx="1" fill="#C9A84C" />
        {/* T vertical stem */}
        <rect x="11" y="13" width="4" height="18" rx="1" fill="#C9A84C" />

        {/* === A — Silver/White === */}
        {/* A body */}
        <path d="M 16 31 L 22 14 L 24 14 L 30 31 L 27 31 L 23 19 L 19 31 Z" fill="#E8E8E8" />
        {/* A crossbar */}
        <rect x="19.5" y="23.5" width="7" height="2.5" rx="1" fill="#E8E8E8" />

        {/* === Pagoda === */}
        {/* Base tier */}
        <path d="M 19 13.5 L 23 13.5 L 24.5 11.5 L 17.5 11.5 Z" fill="#C9A84C" />
        {/* Second tier */}
        <path d="M 19.5 11.5 L 22.5 11.5 L 23.5 9.5 L 18.5 9.5 Z" fill="#C9A84C" />
        {/* Tip */}
        <path d="M 20 9.5 L 22 9.5 L 21 7 Z" fill="#E8C866" />
        {/* Finial */}
        <circle cx="21" cy="6.5" r="1" fill="#E8C866" />
      </svg>
    </motion.div>
  )
}
