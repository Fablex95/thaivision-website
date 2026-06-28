"use client"

import { motion, useReducedMotion } from "motion/react"

interface LogoMarkProps {
  size?: number
  showText?: boolean
  glowOnHover?: boolean
  className?: string
}

export default function LogoMark({
  size = 40,
  showText = true,
  glowOnHover = false,
  className = "",
}: LogoMarkProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={
        glowOnHover && !prefersReduced
          ? { filter: "drop-shadow(0 0 12px rgba(201,168,76,0.6))" }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      {/* SVG Mark — TA Monogram with Pagoda */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ThaiVision Logo Mark"
      >
        {/* Background circle (optional subtle ring) */}
        <circle cx="20" cy="20" r="19" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />

        {/* === T — Gold, left-dominant === */}
        {/* T horizontal bar */}
        <rect x="4" y="13" width="18" height="3.5" rx="1" fill="#C9A84C" />
        {/* T vertical stem */}
        <rect x="11" y="13" width="4" height="18" rx="1" fill="#C9A84C" />

        {/* === A — Silver/White, overlapping T === */}
        {/* A left leg */}
        <path d="M 16 31 L 22 14 L 24 14 L 30 31 L 27 31 L 23 19 L 19 31 Z" fill="#E8E8E8" />
        {/* A crossbar */}
        <rect x="19.5" y="23.5" width="7" height="2.5" rx="1" fill="#E8E8E8" />

        {/* === Pagoda over the A === */}
        {/* Pagoda base tier (widest) */}
        <path d="M 19 13.5 L 23 13.5 L 24.5 11.5 L 17.5 11.5 Z" fill="#C9A84C" />
        {/* Pagoda second tier */}
        <path d="M 19.5 11.5 L 22.5 11.5 L 23.5 9.5 L 18.5 9.5 Z" fill="#C9A84C" />
        {/* Pagoda tip */}
        <path d="M 20 9.5 L 22 9.5 L 21 7 Z" fill="#E8C866" />
        {/* Pagoda finial */}
        <circle cx="21" cy="6.5" r="1" fill="#E8C866" />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div
            className="font-display font-bold tracking-[0.3em] text-xs uppercase select-none"
            style={{ letterSpacing: "0.3em" }}
          >
            <span style={{ color: "#C9A84C" }}>THAI</span>
            <span style={{ color: "#C0C0C0" }}>VISION</span>
          </div>
          <div
            className="text-[9px] tracking-widest uppercase mt-0.5 select-none"
            style={{ color: "rgba(201,168,76,0.5)", letterSpacing: "0.2em" }}
          >
            Digital Agency
          </div>
        </div>
      )}
    </motion.div>
  )
}
