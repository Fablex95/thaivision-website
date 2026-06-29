"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"

export default function CustomCursor() {
  const prefersReduced = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Main dot: instant via useMotionValue (no spring = no lag)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Ring: slight spring trail for visual depth only
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 })

  useEffect(() => {
    if (prefersReduced) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button"
      )
    }

    const handlePointerOut = () => setIsHovering(false)
    const enter = () => setIsVisible(true)
    const leave = () => setIsVisible(false)

    window.addEventListener("mousemove", move, { passive: true })
    window.addEventListener("pointerover", handlePointerOver, { passive: true })
    window.addEventListener("pointerout", handlePointerOut, { passive: true })
    document.addEventListener("mouseenter", enter)
    document.addEventListener("mouseleave", leave)
    document.documentElement.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("pointerover", handlePointerOver)
      window.removeEventListener("pointerout", handlePointerOut)
      document.removeEventListener("mouseenter", enter)
      document.removeEventListener("mouseleave", leave)
      document.documentElement.style.cursor = ""
    }
  }, [prefersReduced, x, y, isVisible])

  if (prefersReduced) return null

  return (
    <>
      {/* Main dot — follows cursor instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 36 : 8,
          height: isHovering ? 36 : 8,
        }}
        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isHovering ? "rgba(201,168,76,0.25)" : "#C9A84C",
            border: isHovering ? "1.5px solid #C9A84C" : "none",
          }}
        />
      </motion.div>

      {/* Ring — slight trail for depth */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 28,
          height: 28,
          opacity: isVisible ? 0.35 : 0,
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.45)",
        }}
      />
    </>
  )
}
