"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll } from "motion/react"
import { useTranslations } from "next-intl"
import StatCounter from "@/components/ui/StatCounter"
import { Cpu, Target, Package } from "lucide-react"

export default function Stats() {
  const t = useTranslations("stats")
  const prefersReduced = useReducedMotion()

  // Attach scroll tracking to this section
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start counting when section enters viewport (top hits bottom of window),
    // finish when section exits (bottom hits top of window).
    offset: ["start end", "end start"],
  })

  const stats = [
    { target: 50, suffix: "+", prefix: "", label: t("stat1Label") },
    { target: 3,  suffix: "x", prefix: "", label: t("stat2Label") },
    { target: 48, suffix: "h", prefix: "", label: t("stat3Label") },
    { target: 100,suffix: "%", prefix: "", label: t("stat4Label") },
  ]

  const differentiators = [
    { icon: Cpu,    titleKey: "diff1Title", descKey: "diff1Desc" },
    { icon: Target, titleKey: "diff2Title", descKey: "diff2Desc" },
    { icon: Package,titleKey: "diff3Title", descKey: "diff3Desc" },
  ]

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-24 px-6 relative"
      style={{ background: "rgba(5,5,5,0.62)" }}
    >
      {/* Animated top divider */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)", width: 0 }}
        whileInView={{ width: "50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            style={{ color: "#C9A84C" }}
          >
            Track Record
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F5F5" }}>
            {t("headline")}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
            {t("sub")}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #141414 0%, #111111 100%)",
                border: "1px solid rgba(201,168,76,0.1)",
              }}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={
                prefersReduced ? {} : {
                  borderColor: "rgba(201,168,76,0.35)",
                  boxShadow: "0 8px 32px rgba(201,168,76,0.1)",
                }
              }
            >
              {/* Glow behind counter */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 65%)",
                }}
              />
              <div className="relative z-10">
                <StatCounter
                  scrollProgress={scrollYProgress}
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                  // Count from 20% into the section to 70% (centre-weighted)
                  inputRange={[0.15, 0.65]}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Divider */}
        <motion.div
          className="h-px w-0 mx-auto mb-16"
          style={{ background: "rgba(201,168,76,0.12)" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((diff, i) => {
            const Icon = diff.icon
            return (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                  animate={prefersReduced ? {} : { y: [0, -5, 0] }}
                  transition={{
                    duration: 3 + i * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#C9A84C" }} />
                </motion.div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                  {t(diff.titleKey as any)}
                </h3>
                <p className="leading-relaxed" style={{ color: "#8A8A8A" }}>
                  {t(diff.descKey as any)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
