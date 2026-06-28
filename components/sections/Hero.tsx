"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"
import { useTranslations } from "next-intl"
import LogoMark from "@/components/ui/LogoMark"
import ShimmerButton from "@/components/ui/ShimmerButton"

// Richer particle set with varied sizes and speeds
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${4 + (i * 29 + i * i * 3) % 92}%`,
  top: `${3 + (i * 43 + i * 7) % 94}%`,
  size: 1.5 + (i % 5) * 0.7,
  opacity: 0.15 + (i % 4) * 0.12,
  duration: 2.5 + (i % 5) * 0.8,
  delay: (i * 0.25) % 4,
  yRange: 12 + (i % 4) * 8,
}))

const charVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.032,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

function AnimatedHeadline({ text, className }: { text: string; className?: string }) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          initial="hidden"
          animate="visible"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const t = useTranslations("hero")
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === Background === */}

      {/* Deep radial from top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 10%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Concentric pulse rings */}
      {!prefersReduced && [0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: "62%",
            top: "22%",
            border: "1px solid rgba(201,168,76,0.06)",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: [100 + i * 160, 280 + i * 160],
            height: [100 + i * 160, 280 + i * 160],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      ))}

      {/* Particles */}
      {!prefersReduced && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "#C9A84C",
          }}
          animate={{
            y: [0, -p.yRange, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
      />

      {/* === Content === */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Logo entrance */}
        <motion.div
          className="flex items-center justify-center mb-14"
          initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <LogoMark size={52} showText={true} glowOnHover={false} />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 text-xs font-bold uppercase tracking-widest"
          style={{
            border: "1px solid rgba(201,168,76,0.3)",
            background: "rgba(201,168,76,0.05)",
            color: "#C9A84C",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: "#C9A84C" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          AI-First Digital Agency · Pattaya, Thailand
        </motion.div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
          <AnimatedHeadline text={t("headline")} className="block" />
        </h1>

        {/* Thai sub */}
        <motion.p
          className="font-thai text-lg md:text-xl mb-8"
          style={{ color: "rgba(138,138,138,0.7)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {t("headlineTh")}
        </motion.p>

        {/* Body sub */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{ color: "#8A8A8A" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          {t("sub")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <ShimmerButton href="#contact" variant="gold" className="text-base px-9 py-4">
            {t("cta")}
          </ShimmerButton>
          <ShimmerButton href="#services" variant="outline" className="text-base px-9 py-4">
            {t("ctaSecondary")}
          </ShimmerButton>
        </motion.div>

        {/* Divider tagline */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(201,168,76,0.2)" }} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#C9A84C" }}>
            WEBSITES · MARKETING · AUTOMATION
          </span>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(201,168,76,0.2)" }} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <motion.div
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(201,168,76,0.3)" }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: "#C9A84C" }}
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
