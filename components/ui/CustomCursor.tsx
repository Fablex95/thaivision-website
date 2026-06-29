"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useReducedMotion } from "motion/react"

export default function CustomCursor() {
  const prefersReduced = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const rawX = useSpring(0, { stiffness: 400, damping: 30 })
  const rawY = useSpring(0, { stiffness: 400, damping: 30 })

  // Trailing dot with more lag
  const trailX = useSpring(0, { stiffness: 120, damping: 20 })
  const trailY = useSpring(0, { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (prefersReduced) return
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)
      setIsVisible(true)
    }

    const enter = () => setIsVisible(true)
    const leave = () => setIsVisible(false)

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button"
      setIsHovering(isInteractive)
    }

    const handlePointerOut = () => setIsHovering(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("pointerover", handlePointerOver)
    window.addEventListener("pointerout", handlePointerOut)
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
  }, [prefersReduced, rawX, rawY, trailX, trailY])

  if (prefersReduced) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-difference"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
        }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isHovering ? "rgba(201,168,76,0.2)" : "#C9A84C",
            border: isHovering ? "1.5px solid #C9A84C" : "none",
          }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: 28,
          height: 28,
          opacity: isVisible ? 0.4 : 0,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: "1px solid rgba(201,168,76,0.5)",
          }}
        />
      </motion.div>
    </>
  )
}
