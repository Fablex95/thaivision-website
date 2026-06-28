"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

// Each room image maps to a section of the page
// The user "walks through" the temple as they scroll:
// Room 0: Outside — Wat Arun at golden sunset (Hero + PainPoints)
// Room 1: Approaching — closer view of Wat Arun (Services)
// Room 2: At the Gate — ornate golden temple facade (How It Works)
// Room 3: Inside the Shrine — golden Buddha interior (Stats)
// Room 4: Temple Garden — golden evening silhouettes (Contact)
const ROOMS = [
  "/room-0.webp",
  "/room-1.webp",
  "/room-2.webp",
  "/room-3.webp",
  "/room-4.webp",
]

const SECTION_TO_ROOM: Record<string, number> = {
  "hero": 0,
  "pain-points": 0,
  "services": 1,
  "how-it-works": 2,
  "stats": 3,
  "contact": 4,
}

export default function TempleJourney() {
  const prefersReduced = useReducedMotion()
  const [activeRoom, setActiveRoom] = useState(0)

  useEffect(() => {
    // Track intersection ratios so we always show the most-visible section's room
    const ratios = new Map<string, number>()

    const updateRoom = () => {
      let bestRoom = 0
      let bestRatio = -1
      ratios.forEach((ratio, sectionId) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestRoom = SECTION_TO_ROOM[sectionId] ?? 0
        }
      })
      setActiveRoom(bestRoom)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })
        updateRoom()
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0],
      }
    )

    Object.keys(SECTION_TO_ROOM).forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Temple room backgrounds — crossfade on scroll ── */}
      {ROOMS.map((src, index) => (
        <motion.div
          key={src}
          aria-hidden="true"
          animate={{ opacity: activeRoom === index ? 1 : 0 }}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          transition={{
            opacity: {
              duration: prefersReduced ? 0 : 1.1,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url("${src}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ── Left-side dark gradient for text readability ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(108deg, rgba(5,5,5,0.93) 0%, rgba(5,5,5,0.78) 28%, rgba(5,5,5,0.42) 52%, rgba(5,5,5,0.12) 72%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top vignette so header stays readable ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "130px",
          zIndex: 0,
          background: "linear-gradient(to bottom, rgba(5,5,5,0.65) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Bottom fade to solid dark ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "38vh",
          zIndex: 0,
          background:
            "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.55) 42%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </>
  )
}
