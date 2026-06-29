"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, useReducedMotion } from "motion/react"
import { Search, Lightbulb, Rocket, ChevronDown, Check, Clock, Users, TrendingUp, Shield } from "lucide-react"
import ShimmerButton from "@/components/ui/ShimmerButton"

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Discovery & Strategy",
    tagline: "We learn your business inside-out",
    description:
      "We begin with a deep-dive consultation — understanding your industry, customers, competitors, and goals. No assumptions, no templates. From this we build a custom digital roadmap tailored to your specific market position in Thailand.",
    details: [
      "Business & market analysis",
      "Competitor landscape review",
      "Customer journey mapping",
      "Priority action list with clear ROI",
      "Full strategy delivered within 48 hours",
    ],
    duration: "48 hours",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Build & Launch",
    tagline: "From strategy to live in record time",
    description:
      "We execute the strategy with speed and precision. Whether it's a premium website, an automated marketing funnel, or AI-powered customer engagement — we build, test and deploy it. You stay informed at every step.",
    details: [
      "Professional website or landing page",
      "SEO-optimised content & meta data",
      "Marketing automation setup",
      "AI tools integration & configuration",
      "Quality-checked before every launch",
    ],
    duration: "1–2 weeks",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Grow & Optimise",
    tagline: "Results, then more results",
    description:
      "Launch is just the beginning. We monitor performance, run data-driven optimisations, and continuously improve your digital presence. Monthly reports keep you fully informed — in plain language, not agency jargon.",
    details: [
      "Monthly performance reporting",
      "A/B testing & conversion optimisation",
      "SEO ranking improvements",
      "Campaign performance tuning",
      "Dedicated point of contact",
    ],
    duration: "Ongoing",
  },
]

const DIFFERENTIATORS = [
  {
    icon: Clock,
    title: "Faster Than Anyone",
    description:
      "Most agencies take weeks to start. We deliver your first results within 48 hours of kickoff.",
  },
  {
    icon: Users,
    title: "Local Market Expertise",
    description:
      "We're based in Pattaya. We know the Thai market, the Thai customer mindset, and what actually converts.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered at Every Layer",
    description:
      "From copywriting to customer support — we use cutting-edge AI tools so you get enterprise results at SME prices.",
  },
  {
    icon: Shield,
    title: "No Lock-in Contracts",
    description:
      "We earn your trust every single month. No long-term commitments, no hidden fees.",
  },
]

const FAQ = [
  {
    question: "How long does the whole process take?",
    answer:
      "Most clients have their website live and first marketing campaigns running within 2 weeks. The strategy and initial plan are delivered within 48 hours of our first conversation.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Zero. We handle everything — from domain setup to AI tool configuration. You just tell us your goals, and we translate them into results.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our packages start from a one-time website build. Ongoing marketing and automation are offered as flexible monthly plans — no long-term lock-in. Book a free consultation and we'll give you a personalised quote.",
  },
  {
    question: "Can I pause or cancel at any time?",
    answer:
      "Yes. We don't believe in locking clients in. If you need to pause, scale down, or stop — just let us know. No penalty fees, no complicated exit process.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across all industries — hospitality, retail, professional services, travel, healthcare, education, and more. Our AI-first approach adapts to any business type operating in Thailand.",
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

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  return (
    <FadeUp delay={index * 0.07}>
      <div
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
      </div>
    </FadeUp>
  )
}

export default function HowItWorksPageContent({ locale }: { locale: string }) {
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
            How It Works
          </motion.span>

          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: "#F5F5F5" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            From Zero to Results
            <br />
            <span style={{ color: "#C9A84C" }}>In 3 Steps</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ color: "#8A8A8A" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            No confusing jargon. No endless meetings. Just a clear, fast path from where your
            business is now to where you want it to be.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ShimmerButton href={`/${locale}#contact`} variant="gold" className="text-base px-8 py-4">
              Start Now →
            </ShimmerButton>
            <ShimmerButton href={`/${locale}/about`} variant="outline" className="text-base px-8 py-4">
              About the Team
            </ShimmerButton>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </section>

      {/* ── STEPS ─────────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(3,3,3,0.55)", contain: "paint" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              The Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              Three Steps. Real Results.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-16">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
                  >
                    {/* Left: Number + Title */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.04))",
                            border: "2px solid rgba(201,168,76,0.4)",
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: "#C9A84C" }} />
                        </div>
                        <div>
                          <span
                            className="font-display text-xs font-bold uppercase tracking-widest block mb-1"
                            style={{ color: "rgba(201,168,76,0.6)" }}
                          >
                            Step {step.num}
                          </span>
                          <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "#F5F5F5" }}>
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="font-display text-lg font-semibold mb-4"
                        style={{ color: "#C9A84C" }}
                      >
                        {step.tagline}
                      </p>

                      <p className="text-base leading-relaxed mb-4" style={{ color: "#8A8A8A" }}>
                        {step.description}
                      </p>

                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(201,168,76,0.08)",
                          border: "1px solid rgba(201,168,76,0.2)",
                          color: "#C9A84C",
                        }}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        Timeline: {step.duration}
                      </div>
                    </div>

                    {/* Right: Detail card */}
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <motion.div
                        className="rounded-2xl p-8 relative overflow-hidden"
                        style={{
                          background: "linear-gradient(145deg, #131313 0%, #111111 100%)",
                          border: "1px solid rgba(201,168,76,0.10)",
                        }}
                        whileHover={
                          prefersReduced
                            ? {}
                            : {
                                borderColor: "rgba(201,168,76,0.3)",
                                boxShadow: "0 8px 32px rgba(201,168,76,0.08)",
                              }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="absolute top-0 left-0 w-1/3 h-[1px] pointer-events-none"
                          style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                        />
                        <div
                          className="absolute top-0 left-0 w-[1px] h-1/3 pointer-events-none"
                          style={{ background: "linear-gradient(180deg, #C9A84C, transparent)" }}
                        />

                        <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>
                          What's included
                        </p>
                        <ul className="flex flex-col gap-3">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
                              >
                                <Check className="w-3 h-3" style={{ color: "#C9A84C" }} />
                              </div>
                              <span className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Connector between steps */}
                  {i < STEPS.length - 1 && (
                    <div className="flex justify-center mt-10">
                      <div
                        className="w-px h-12"
                        style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }}
                      />
                    </div>
                  )}
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ───────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Why ThaiVision
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              What Makes Us Different
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    className="rounded-2xl p-7 flex gap-5 group relative overflow-hidden"
                    style={{
                      background: "linear-gradient(145deg, #131313 0%, #111111 100%)",
                      border: "1px solid rgba(201,168,76,0.10)",
                    }}
                    whileHover={
                      prefersReduced
                        ? {}
                        : {
                            y: -4,
                            borderColor: "rgba(201,168,76,0.35)",
                            boxShadow: "0 10px 36px rgba(201,168,76,0.09)",
                          }
                    }
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
                    />
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#F5F5F5" }}>
                        {d.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                        {d.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(3,3,3,0.55)", contain: "paint" }}>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
              Common Questions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F5" }}>
              Got Questions?
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["Free consultation", "Results in 48 hours", "No lock-in contracts"].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#C9A84C",
                  }}
                >
                  <Check className="w-3.5 h-3.5" />
                  {item}
                </span>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5" style={{ color: "#F5F5F5" }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
              Tell us about your business. We respond within 24 hours — no bots, no templates, just real conversation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ShimmerButton href={`/${locale}#contact`} variant="gold" className="text-base px-10 py-5">
                Get a Free Consultation →
              </ShimmerButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
