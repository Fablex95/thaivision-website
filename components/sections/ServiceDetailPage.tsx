"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react"
import {
  Globe,
  TrendingUp,
  Cog,
  Brain,
  BarChart2,
  Lightbulb,
  Search,
  Megaphone,
  Zap,
  Target,
  Shield,
  Clock,
  Star,
  Users,
  Monitor,
  ArrowLeft,
  ChevronDown,
  Check,
} from "lucide-react"
import Link from "next/link"
import type { ServiceData } from "@/lib/services-data"
import ShimmerButton from "@/components/ui/ShimmerButton"

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, TrendingUp, Cog, Brain, BarChart2, Lightbulb,
  Search, Megaphone, Zap, Target, Shield, Clock, Star, Users, Monitor,
}

function getIcon(name: string): React.ElementType {
  return ICON_MAP[name] ?? Globe
}

// Animated counter on scroll into view
function AnimatedNumber({
  value,
  suffix,
  delay,
}: {
  value: number
  suffix: string
  delay: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const prefersReduced = useReducedMotion()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView && !prefersReduced) {
      const ctrl = animate(count, value, {
        duration: 1.4,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      })
      return ctrl.stop
    }
  }, [isInView, prefersReduced, count, value, delay])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold" style={{ color: "#C9A84C" }}>
      {prefersReduced ? value : <motion.span>{rounded}</motion.span>}
      <span className="text-3xl md:text-4xl ml-1">{suffix}</span>
    </span>
  )
}

// FAQ accordion item
function FAQItem({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  const [open, setOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(201,168,76,0.12)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
        style={{ background: "rgba(17,17,17,0.9)" }}
      >
        <span className="font-display text-base font-semibold" style={{ color: "#F5F5F5" }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ flexShrink: 0, color: "#C9A84C" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden", background: "rgba(10,10,10,0.95)" }}
          >
            <div className="px-6 pb-5 pt-1">
              <p className="leading-relaxed text-sm" style={{ color: "#8A8A8A" }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ServiceDetailPage({
  service,
  locale,
}: {
  service: ServiceData
  locale: string
}) {
  const prefersReduced = useReducedMotion()
  const MainIcon = getIcon(service.icon)

  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-6 pb-20 pt-32">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-24 left-6 md:left-12"
        >
          <Link
            href={`/${locale}#services`}
            className="inline-flex items-center gap-2 no-underline group"
            style={{ color: "#8A8A8A" }}
          >
            <motion.div
              whileHover={prefersReduced ? {} : { x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4 transition-colors group-hover:text-[#C9A84C]" />
            </motion.div>
            <span className="text-sm font-medium transition-colors group-hover:text-[#C9A84C]">
              All Services
            </span>
          </Link>
        </motion.div>

        <div className="max-w-5xl mx-auto w-full">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.35em] mb-6 block"
              style={{ color: "#C9A84C" }}
            >
              {service.label}
            </span>
          </motion.div>

          {/* Icon + Headline */}
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
              style={{
                background: "rgba(201,168,76,0.10)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
              animate={prefersReduced
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 1, scale: 1, filter: "blur(0px)", y: [0, -5, 0] }}
              transition={prefersReduced
                ? { duration: 0.6, delay: 0.25 }
                : { opacity: { duration: 0.6, delay: 0.25 }, scale: { duration: 0.6, delay: 0.25 }, filter: { duration: 0.6, delay: 0.25 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            >
              <MainIcon className="w-7 h-7" style={{ color: "#C9A84C" }} />
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: "#F5F5F5" }}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {service.name}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            className="font-display text-xl md:text-2xl font-semibold mb-6"
            style={{ color: "#C9A84C" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {service.tagline}
          </motion.p>

          {/* Hero description */}
          <motion.p
            className="text-lg max-w-2xl leading-relaxed mb-10"
            style={{ color: "#8A8A8A" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {service.heroDescription}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <ShimmerButton href={`/${locale}#contact`} variant="gold" className="text-base px-8 py-4">
              {service.ctaText} →
            </ShimmerButton>
            <ShimmerButton href={`/${locale}#services`} variant="outline" className="text-base px-8 py-4">
              Explore All Services
            </ShimmerButton>
          </motion.div>
        </div>

        {/* Decorative gradient line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(5,5,5,0.68)" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              What We Deliver
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              Everything Included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, i) => {
              const FeatureIcon = getIcon(feature.icon)
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl p-7 flex gap-5 group relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #131313 0%, #111111 100%)",
                    border: "1px solid rgba(201,168,76,0.10)",
                  }}
                  initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
                  whileHover={
                    prefersReduced
                      ? {}
                      : {
                          y: -4,
                          borderColor: "rgba(201,168,76,0.4)",
                          boxShadow: "0 12px 40px rgba(201,168,76,0.10)",
                          transition: { duration: 0.25 },
                        }
                  }
                >
                  {/* Corner glow accent */}
                  <div
                    className="absolute top-0 left-0 w-1/3 h-[1px] pointer-events-none"
                    style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                  />
                  <div
                    className="absolute top-0 left-0 w-[1px] h-1/3 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, #C9A84C, transparent)" }}
                  />
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                    whileHover={prefersReduced ? {} : { rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FeatureIcon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  </motion.div>

                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#F5F5F5" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              From Zero to Results
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-11 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px overflow-visible">
              <svg className="w-full overflow-visible" height="2" viewBox="0 0 800 2" preserveAspectRatio="none">
                <motion.path
                  d="M 0 1 L 800 1"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.2 }}
                >
                  <motion.div
                    className="w-22 h-22 rounded-full flex items-center justify-center mb-6 relative"
                    style={{
                      width: 88,
                      height: 88,
                      background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.04))",
                      border: "2px solid rgba(201,168,76,0.35)",
                    }}
                    whileHover={
                      prefersReduced
                        ? {}
                        : { borderColor: "rgba(201,168,76,0.8)", boxShadow: "0 0 32px rgba(201,168,76,0.2)" }
                    }
                    transition={{ duration: 0.25 }}
                  >
                    <span className="font-display text-3xl font-bold" style={{ color: "#C9A84C" }}>
                      {step.num}
                    </span>
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed max-w-xs text-sm" style={{ color: "#8A8A8A" }}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(5,5,5,0.68)" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Proven Results
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              Numbers That Matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-8 text-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #141414 0%, #111111 100%)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={
                  prefersReduced
                    ? {}
                    : { borderColor: "rgba(201,168,76,0.35)", boxShadow: "0 8px 32px rgba(201,168,76,0.10)" }
                }
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
                />
                <div className="relative z-10 mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} delay={i * 0.15} />
                </div>
                <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#8A8A8A" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Common Questions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              Everything You Need to Know
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {service.faq.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(5,5,5,0.75)" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Gold check list */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["No long-term contracts", "Results in 30 days", "Personal Thai support"].map((item, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#C9A84C",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <Check className="w-3.5 h-3.5" />
                  {item}
                </motion.span>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5" style={{ color: "#F5F5F5" }}>
              {service.ctaText}
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
              Tell us about your business. We respond within 24 hours — no bots, no templates.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ShimmerButton href={`/${locale}#contact`} variant="gold" className="text-base px-10 py-5">
                Get a Free Consultation →
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
