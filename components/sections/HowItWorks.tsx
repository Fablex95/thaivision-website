"use client"

import { useRef, useEffect } from "react"
import { motion, useReducedMotion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { useTranslations } from "next-intl"
import { Search, Rocket, TrendingUp } from "lucide-react"
import ShimmerButton from "@/components/ui/ShimmerButton"

const stepIcons = [Search, Rocket, TrendingUp]

// Animated step number that counts up from 00 to the final value
function StepNumber({ num, delay }: { num: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const prefersReduced = useReducedMotion()
  const targetNum = parseInt(num)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) =>
    String(Math.round(v)).padStart(2, "0")
  )

  useEffect(() => {
    if (isInView && !prefersReduced) {
      const controls = animate(count, targetNum, {
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      })
      return controls.stop
    }
  }, [isInView, prefersReduced, count, targetNum, delay])

  return (
    <div ref={ref} className="font-display text-3xl font-bold" style={{ color: "#C9A84C" }}>
      {prefersReduced ? num : <motion.span>{rounded}</motion.span>}
    </div>
  )
}

export default function HowItWorks() {
  const t = useTranslations("howItWorks")
  const prefersReduced = useReducedMotion()

  const steps = [
    { num: "01", titleKey: "step1Title", descKey: "step1Desc" },
    { num: "02", titleKey: "step2Title", descKey: "step2Desc" },
    { num: "03", titleKey: "step3Title", descKey: "step3Desc" },
  ]

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 relative"
      style={{ background: "rgba(5,5,5,0.62)" }}
    >
      {/* Animated top divider */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", width: 0 }}
        whileInView={{ width: "50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            style={{ color: "#C9A84C" }}
          >
            The Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F5F5" }}>
            {t("headline")}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
            {t("sub")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* SVG Connector — desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px overflow-visible">
            <svg className="w-full overflow-visible" height="2" viewBox="0 0 800 2" preserveAspectRatio="none">
              <motion.path
                d="M 0 1 L 800 1"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.45 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <motion.div
                  key={step.num}
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: i * 0.2 }}
                >
                  {/* Animated Step Circle */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-24 h-24 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.04))",
                        border: "2px solid rgba(201,168,76,0.4)",
                      }}
                      whileHover={
                        prefersReduced ? {} : {
                          borderColor: "rgba(201,168,76,0.8)",
                          boxShadow: "0 0 32px rgba(201,168,76,0.2)",
                        }
                      }
                      transition={{ duration: 0.25 }}
                    >
                      <StepNumber num={step.num} delay={i * 0.2 + 0.3} />
                    </motion.div>

                    {/* Icon badge */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #C9A84C, #E8C866)" }}
                      animate={prefersReduced ? {} : { rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <Icon className="w-3.5 h-3.5 text-black" />
                    </motion.div>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                    {t(step.titleKey as any)}
                  </h3>
                  <p className="leading-relaxed max-w-xs" style={{ color: "#8A8A8A" }}>
                    {t(step.descKey as any)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ShimmerButton href="#contact" variant="gold" className="text-base px-8 py-4">
            Start Your 48h Analysis →
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  )
}
