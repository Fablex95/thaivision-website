"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"

interface Particle {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  phase: number
  phaseV: number
  baseOpacity: number
  glow: boolean
}

const BEAMS = [
  { left: "6%",  delay: 0,   duration: 24, opacity: 0.055, width: 90 },
  { left: "26%", delay: 9,   duration: 30, opacity: 0.040, width: 65 },
  { left: "50%", delay: 4,   duration: 21, opacity: 0.050, width: 110 },
  { left: "72%", delay: 15,  duration: 27, opacity: 0.038, width: 75 },
  { left: "90%", delay: 6,   duration: 33, opacity: 0.055, width: 85 },
]

export default function TempleGlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const w = () => canvas.width || 1440
    const h = () => canvas.height || 900

    const makeParticle = (): Particle => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      r: 0.4 + Math.random() * 1.6,
      vy: 0.12 + Math.random() * 0.36,
      vx: (Math.random() - 0.5) * 0.18,
      phase: Math.random() * Math.PI * 2,
      phaseV: 0.006 + Math.random() * 0.014,
      baseOpacity: 0.15 + Math.random() * 0.55,
      glow: Math.random() > 0.94,
    })

    const particles: Particle[] = Array.from({ length: 45 }, makeParticle)

    if (prefersReduced) {
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.baseOpacity * 0.4})`
        ctx.fill()
      })
      return () => window.removeEventListener("resize", resize)
    }

    const tick = () => {
      ctx.fillStyle = "#030303"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.y -= p.vy
        p.x += p.vx
        p.phase += p.phaseV

        if (p.y < -4) {
          const np = makeParticle()
          Object.assign(p, np)
          p.y = canvas.height + 4
        }
        if (p.x < -4) p.x = canvas.width + 4
        if (p.x > canvas.width + 4) p.x = -4

        const opacity = p.baseOpacity * (0.4 + 0.6 * Math.abs(Math.sin(p.phase)))

        if (p.glow) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(201,168,76,${opacity * 0.10})`
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${opacity})`
        ctx.fill()
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [prefersReduced])

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background: "#030303",
      }}
    >
      {/* Gold orb A — top-left */}
      <motion.div
        animate={prefersReduced ? {} : { x: [0, 45, -22, 0], y: [0, -28, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Gold orb B — bottom-right */}
      <motion.div
        animate={prefersReduced ? {} : { x: [0, -50, 28, 0], y: [0, 38, -28, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />

      {/* Gold orb C — centre pulse */}
      <motion.div
        animate={prefersReduced ? {} : { scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          top: "calc(50% - 210px)",
          left: "calc(50% - 210px)",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.055) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Vertical light shafts — scroll upward */}
      {!prefersReduced &&
        BEAMS.map((beam, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: beam.left,
              width: beam.width,
              height: "280vh",
              background: `linear-gradient(to bottom,
                transparent 0%,
                rgba(201,168,76,${beam.opacity * 0.2}) 10%,
                rgba(201,168,76,${beam.opacity}) 35%,
                rgba(201,168,76,${beam.opacity}) 65%,
                rgba(201,168,76,${beam.opacity * 0.2}) 90%,
                transparent 100%)`,
              filter: "blur(24px)",
              skewX: -14,
              willChange: "transform",
            }}
            initial={{ y: "100vh" }}
            animate={{ y: "-270vh" }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

      {/* Canvas particles — gold dust drifting upward */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", willChange: "transform", transform: "translateZ(0)" }}
      />
    </div>
  )
}
