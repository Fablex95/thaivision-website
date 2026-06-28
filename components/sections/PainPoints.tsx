"use client"

import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"
import { Monitor, Search, Megaphone, Zap } from "lucide-react"

const icons = [Monitor, Search, Megaphone, Zap]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as const },
  },
} as const

export default function PainPoints() {
  const t = useTranslations("pain")
  const prefersReduced = useReducedMotion()

  const cards = [
    { titleKey: "card1Title", textKey: "card1Text" },
    { titleKey: "card2Title", textKey: "card2Text" },
    { titleKey: "card3Title", textKey: "card3Text" },
    { titleKey: "card4Title", textKey: "card4Text" },
  ]

  return (
    <section
      id="pain-points"
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

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F5F5" }}>
            {t("headline")}
          </h2>
          <p className="font-thai text-lg mb-4" style={{ color: "#8A8A8A" }}>
            {t("headlineTh")}
          </p>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
            {t("sub")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={prefersReduced ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                variants={prefersReduced ? {} : cardVariants}
                className="rounded-2xl relative overflow-hidden group cursor-default"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
                whileHover={
                  prefersReduced
                    ? {}
                    : {
                        y: -6,
                        borderColor: "rgba(201,168,76,0.5)",
                        boxShadow: "0 16px 48px rgba(201,168,76,0.1)",
                      }
                }
                transition={{ duration: 0.25 }}
              >
                {/* Top gold accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, #C9A84C, #E8C866, transparent)",
                  }}
                />

                <div className="p-8">
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
                  />

                  {/* Icon with hover animation */}
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                    whileHover={prefersReduced ? {} : { rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  </motion.div>

                  {/* Number */}
                  <div
                    className="text-6xl font-bold font-display absolute top-6 right-8 opacity-5 select-none"
                    style={{ color: "#C9A84C" }}
                  >
                    0{i + 1}
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                    {t(card.titleKey as any)}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#8A8A8A" }}>
                    {t(card.textKey as any)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm" style={{ color: "#8A8A8A" }}>
            Sound familiar?{" "}
            <a href="#services" className="font-semibold no-underline" style={{ color: "#C9A84C" }}>
              We fix all of this →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
