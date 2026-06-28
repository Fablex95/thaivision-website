"use client"

import { motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 37) % 90}%`,
  top: `${5 + (i * 53) % 90}%`,
  size: 1.5 + (i % 3) * 0.8,
  duration: 3 + (i % 4),
  delay: (i * 0.3) % 3,
}))

export default function ParticleBackground() {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gold glow top right */}
      <div
        className="absolute"
        style={{
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "70%",
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Subtle center glow */}
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "20%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "#C9A84C",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
