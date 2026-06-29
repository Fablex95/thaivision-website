"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { Heart, Zap, Target, Shield, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ShimmerButton from "@/components/ui/ShimmerButton"

const STATS = [
  { value: "6", label: "Core Services" },
  { value: "24/7", label: "AI-Powered Support" },
  { value: "48h", label: "Avg. Launch Time" },
  { value: "100%", label: "Client Satisfaction" },
]

const VALUES = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We measure success by your revenue and growth — not by hours billed or deliverables shipped. Every strategy we build starts with your business outcome.",
  },
  {
    icon: Zap,
    title: "AI-Powered Efficiency",
    description:
      "We embed AI at every layer of your digital presence — from content creation to customer response. You get enterprise tools at SME prices.",
  },
  {
    icon: Heart,
    title: "Real Relationships",
    description:
      "We're based in Pattaya, Thailand. Your point of contact speaks your language, understands your market, and picks up the phone when it matters.",
  },
]

const PRINCIPLES = [
  {
    icon: Shield,
    title: "No lock-in contracts",
    description: "We earn your business every month, not just at signing.",
  },
  {
    icon: Users,
    title: "One team, full ownership",
    description: "No freelancer patchwork — a coordinated team owns your entire digital stack.",
  },
  {
    icon: TrendingUp,
    title: "Continuous improvement",
    description: "We review, refine and report — not just deliver and disappear.",
  },
]

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView || prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPageContent({ locale }: { locale: string }) {
  const prefersReduced = useReducedMotion()

  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col justify-end px-6 pb-20 pt-36">
        <div className="max-w-5xl mx-auto w-full">
          <motion.span
            className="text-xs font-bold uppercase tracking-[0.35em] mb-6 block"
            style={{ color: "#C9A84C" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Us
          </motion.span>

          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: "#F5F5F5" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The{" "}
            <span style={{ color: "#C9A84C" }}>ThaiVision</span>
            <br />
            Team
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ color: "#8A8A8A" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            We are a digital agency born in Thailand, built for Thailand. Our mission is simple:
            help local businesses compete in the digital era — with real strategies, real tools,
            and real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ShimmerButton href={`/${locale}#contact`} variant="gold" className="text-base px-8 py-4">
              Work With Us →
            </ShimmerButton>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </section>

      {/* ── MISSION QUOTE ─────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(3,3,3,0.55)", contain: "paint" }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <div
              className="text-5xl mb-8 select-none"
              style={{ color: "rgba(201,168,76,0.25)", fontFamily: "serif", lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </div>
            <p
              className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-8"
              style={{ color: "#F5F5F5" }}
            >
              Every Thai business deserves a world-class digital presence.
              <br />
              <span style={{ color: "#C9A84C" }}>We make that possible.</span>
            </p>
            <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#8A8A8A" }}>
              — ThaiVision, Pattaya
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl p-8 text-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #141414 0%, #111111 100%)",
                    border: "1px solid rgba(201,168,76,0.10)",
                  }}
                  whileHover={
                    prefersReduced
                      ? {}
                      : { borderColor: "rgba(201,168,76,0.35)", boxShadow: "0 8px 32px rgba(201,168,76,0.10)" }
                  }
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 65%)" }}
                  />
                  <div
                    className="font-display text-4xl md:text-5xl font-bold mb-2 relative z-10"
                    style={{ color: "#C9A84C" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest font-semibold relative z-10" style={{ color: "#8A8A8A" }}>
                    {stat.label}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(3,3,3,0.55)", contain: "paint" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              What Drives Us
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <FadeUp key={i} delay={i * 0.12}>
                  <motion.div
                    className="rounded-2xl p-8 flex flex-col gap-5 group relative overflow-hidden h-full"
                    style={{
                      background: "linear-gradient(145deg, #131313 0%, #111111 100%)",
                      border: "1px solid rgba(201,168,76,0.10)",
                    }}
                    whileHover={
                      prefersReduced
                        ? {}
                        : {
                            y: -4,
                            borderColor: "rgba(201,168,76,0.4)",
                            boxShadow: "0 12px 40px rgba(201,168,76,0.10)",
                          }
                    }
                    transition={{ duration: 0.25 }}
                  >
                    {/* Corner accent */}
                    <div
                      className="absolute top-0 left-0 w-1/3 h-[1px] pointer-events-none"
                      style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                    />
                    <div
                      className="absolute top-0 left-0 w-[1px] h-1/3 pointer-events-none"
                      style={{ background: "linear-gradient(180deg, #C9A84C, transparent)" }}
                    />
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
                    />

                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                      whileHover={prefersReduced ? {} : { rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#C9A84C" }} />
                    </motion.div>

                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                        {v.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                        {v.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CLIENT REFERENCE ──────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Trusted By
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              Businesses That Chose Growth
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <motion.a
              href="https://flyingmangotrip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-6 px-12 py-10 rounded-2xl no-underline group"
              style={{
                background: "linear-gradient(145deg, #131313 0%, #111111 100%)",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
              whileHover={
                prefersReduced
                  ? {}
                  : {
                      borderColor: "rgba(201,168,76,0.4)",
                      boxShadow: "0 12px 48px rgba(201,168,76,0.12)",
                      y: -4,
                    }
              }
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-40 h-16">
                <Image
                  src="https://flyingmangotrip-website.netlify.app/logo.svg"
                  alt="Flying Mango Trip"
                  fill
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1) opacity(0.85)" }}
                  unoptimized
                />
              </div>
              <div>
                <p className="font-display text-base font-semibold mb-1" style={{ color: "#F5F5F5" }}>
                  Flying Mango Trip
                </p>
                <p className="text-sm" style={{ color: "#8A8A8A" }}>
                  Korea–Thailand B2B Travel Platform
                </p>
              </div>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-200"
                style={{ color: "#C9A84C" }}
              >
                View Website <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          </FadeUp>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(3,3,3,0.55)", contain: "paint" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              How We Work
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div
                    className="rounded-2xl px-7 py-8 flex flex-col gap-4"
                    style={{
                      background: "rgba(17,17,17,0.9)",
                      border: "1px solid rgba(201,168,76,0.10)",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#C9A84C" }} />
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#F5F5F5" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                      {p.description}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5" style={{ color: "#F5F5F5" }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
              Tell us about your goals. We respond within 24 hours — no bots, no templates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ShimmerButton href={`/${locale}#contact`} variant="gold" className="text-base px-10 py-5">
                Get a Free Consultation →
              </ShimmerButton>
              <ShimmerButton href={`/${locale}/how-it-works`} variant="outline" className="text-base px-8 py-4">
                See How It Works
              </ShimmerButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
