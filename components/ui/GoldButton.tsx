"use client"

import { motion, useReducedMotion } from "motion/react"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "solid" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
}

export default function GoldButton({
  children,
  variant = "solid",
  size = "md",
  href,
  className = "",
  ...props
}: GoldButtonProps) {
  const prefersReduced = useReducedMotion()

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  }

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg cursor-pointer transition-all duration-300 ${sizeClasses[size]} ${className}`

  const variantClasses =
    variant === "solid"
      ? "text-black"
      : "border-2 text-[#C9A84C] bg-transparent"

  const style =
    variant === "solid"
      ? {
          background: "linear-gradient(135deg, #C9A84C 0%, #E8C866 50%, #A88A38 100%)",
          boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
        }
      : {
          borderColor: "#C9A84C",
        }

  const content = (
    <motion.button
      className={`${baseClasses} ${variantClasses}`}
      style={style}
      whileHover={
        prefersReduced
          ? {}
          : {
              scale: 1.03,
              boxShadow:
                variant === "solid"
                  ? "0 8px 32px rgba(201,168,76,0.4)"
                  : "0 0 20px rgba(201,168,76,0.3)",
            }
      }
      whileTap={prefersReduced ? {} : { scale: 0.98 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}
