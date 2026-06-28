"use client"

import { motion, useScroll, useReducedMotion } from "motion/react"

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height: "2px",
        background: "linear-gradient(90deg, #C9A84C, #E8C866, #A88A38)",
        scaleX: scrollYProgress,
        transformOrigin: "0% 50%",
      }}
    />
  )
}
