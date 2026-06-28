"use client"

import { motion, useReducedMotion } from "motion/react"

export default function SectionDivider() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="flex items-center justify-center py-2">
      <motion.div
        className="h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          width: prefersReduced ? "50%" : 0,
        }}
        whileInView={{ width: "50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  )
}
