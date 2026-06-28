"use client"

import { motion, useReducedMotion } from "motion/react"
import { useTranslations, useLocale } from "next-intl"
import { Globe, TrendingUp, Cog, Brain, BarChart2, Lightbulb } from "lucide-react"
import Link from "next/link"

const icons = [Globe, TrendingUp, Cog, Brain, BarChart2, Lightbulb]
const serviceKeys = ["s1", "s2", "s3", "s4", "s5", "s6"] as const
const serviceSlugs = [
  "digital-presence",
  "marketing-growth",
  "business-automation",
  "ai",
  "analytics",
  "consulting",
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] as const },
  },
} as const

export default function Services() {
  const t = useTranslations("services")
  const locale = useLocale()
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="services"
      className="py-24 px-6 relative"
      style={{ background: "rgba(5,5,5,0.62)" }}
    >
      {/* Animated top divider */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)", width: 0 }}
        whileInView={{ width: "66%" }}
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
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F5F5" }}>
            {t("headline")}
          </h2>
          <p className="font-thai text-lg mb-4" style={{ color: "#8A8A8A" }}>
            {t("headlineTh")}
          </p>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8A8A8A" }}>
            {t("sub")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={prefersReduced ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {serviceKeys.map((key, i) => {
            const Icon = icons[i]
            const slug = serviceSlugs[i]
            return (
              <motion.div
                key={key}
                variants={prefersReduced ? {} : cardVariants}
                className="rounded-2xl p-7 flex flex-col group relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #131313 0%, #111111 100%)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
                whileHover={
                  prefersReduced
                    ? {}
                    : {
                        scale: 1.02,
                        y: -4,
                        borderColor: "rgba(201,168,76,0.45)",
                        boxShadow: "0 16px 48px rgba(201,168,76,0.1)",
                      }
                }
                transition={{ duration: 0.25 }}
              >
                {/* Gradient border accent top-left */}
                <div
                  className="absolute top-0 left-0 w-1/2 h-[1px] pointer-events-none"
                  style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                />
                <div
                  className="absolute top-0 left-0 w-[1px] h-1/2 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, #C9A84C, transparent)" }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.05) 0%, transparent 65%)",
                  }}
                />

                {/* Icon with float animation */}
                <motion.div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                  animate={
                    prefersReduced
                      ? {}
                      : {
                          y: [0, -4, 0],
                          rotate: [0, 2, 0, -2, 0],
                        }
                  }
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </motion.div>

                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                  {t(`${key}Name` as any)}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8A8A8A" }}>
                  {t(`${key}Desc` as any)}
                </p>
                <Link
                  href={`/${locale}/services/${slug}`}
                  className="text-sm font-semibold no-underline group/link flex items-center gap-1"
                  style={{ color: "#C9A84C" }}
                >
                  <span className="relative">
                    {t("learnMore")}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-0 group-hover/link:w-full transition-all duration-300"
                      style={{ background: "#C9A84C" }}
                    />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
