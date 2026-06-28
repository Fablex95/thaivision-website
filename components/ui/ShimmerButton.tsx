"use client"

import { motion, useReducedMotion } from "motion/react"
import { ReactNode, CSSProperties } from "react"

interface ShimmerButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "gold" | "outline"
  className?: string
  style?: CSSProperties
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function ShimmerButton({
  children,
  href,
  onClick,
  variant = "gold",
  className = "",
  style,
  type = "button",
  disabled,
}: ShimmerButtonProps) {
  const prefersReduced = useReducedMotion()

  const baseStyle: CSSProperties =
    variant === "gold"
      ? {
          background: "linear-gradient(135deg, #C9A84C 0%, #E8C866 50%, #A88A38 100%)",
          boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
          color: "#000",
          ...style,
        }
      : {
          border: "1.5px solid rgba(201,168,76,0.4)",
          color: "#C9A84C",
          background: "transparent",
          ...style,
        }

  const inner = (
    <motion.div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-4 text-base font-semibold cursor-pointer select-none ${className}`}
      style={baseStyle}
      whileHover={prefersReduced ? {} : { scale: 1.03 }}
      whileTap={prefersReduced ? {} : { scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {/* Shimmer sweep */}
      {!prefersReduced && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
            translateX: "-150%",
          }}
          whileHover={{ translateX: "150%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="no-underline">
        {inner}
      </a>
    )
  }

  if (type === "submit" || onClick || disabled !== undefined) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="border-0 p-0 bg-transparent cursor-pointer"
      >
        {inner}
      </button>
    )
  }

  return inner
}
