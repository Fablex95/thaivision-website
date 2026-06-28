"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle, MessageCircle, Mail, Phone } from "lucide-react"
import ShimmerButton from "@/components/ui/ShimmerButton"

const schema = z.object({
  name: z.string().min(2, "Name required"),
  company: z.string().min(1, "Company required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

function FocusInput({ className, style, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 ${className ?? ""}`}
      style={{
        background: "#1A1A1A",
        border: "1px solid rgba(201,168,76,0.15)",
        color: "#F5F5F5",
        ...style,
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "rgba(201,168,76,0.6)"
        e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.08), 0 0 16px rgba(201,168,76,0.06)"
        props.onFocus?.(e)
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "rgba(201,168,76,0.15)"
        e.target.style.boxShadow = "none"
        props.onBlur?.(e)
      }}
      {...props}
    />
  )
}

export default function ContactSection() {
  const t = useTranslations("contact")
  const prefersReduced = useReducedMotion()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setStatus("sending")
    try {
      const res = await fetch("https://simplr.app.n8n.cloud/webhook/thaivision-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "thaivision-website",
          timestamp: new Date().toISOString(),
        }),
      })
      if (res.ok) {
        setStatus("success")
        reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const services = [
    "Digital Presence",
    "Marketing & Growth",
    "Business Automation",
    "Artificial Intelligence",
    "Analytics & Intelligence",
    "Business Consulting",
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6 relative"
      style={{ background: "rgba(5,5,5,0.62)" }}
    >
      {/* Animated top divider */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", width: 0 }}
        whileInView={{ width: "66%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
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
          <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "#C9A84C" }}>
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F5F5" }}>
            {t("headline")}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
            {t("sub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
          >
            {status === "success" ? (
              <motion.div
                className="rounded-2xl p-12 flex flex-col items-center justify-center text-center"
                style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.2)", minHeight: "400px" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle className="w-20 h-20 mb-6" style={{ color: "#C9A84C" }} />
                </motion.div>
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#F5F5F5" }}>
                  {t("successTitle")}
                </h3>
                <p style={{ color: "#8A8A8A" }}>{t("successSub")}</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                {/* Top accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <FocusInput {...register("name")} placeholder={`${t("namePlaceholder")} *`} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <FocusInput {...register("company")} placeholder={`${t("companyPlaceholder")} *`} />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <FocusInput {...register("email")} type="email" placeholder={`${t("emailPlaceholder")} *`} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <FocusInput {...register("phone")} placeholder={t("phonePlaceholder")} />
                  </div>
                </div>

                <select
                  {...register("service")}
                  className="w-full px-4 py-3.5 rounded-xl text-sm outline-none mb-4 cursor-pointer transition-all duration-300"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(201,168,76,0.15)",
                    color: "#F5F5F5",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.6)"
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.08)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.15)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <option value="">{t("serviceDefault")}</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <textarea
                  {...register("message")}
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl text-sm outline-none mb-6 resize-none transition-all duration-300"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(201,168,76,0.15)",
                    color: "#F5F5F5",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.6)"
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.08), 0 0 16px rgba(201,168,76,0.06)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.15)"
                    e.target.style.boxShadow = "none"
                  }}
                />

                <ShimmerButton
                  type="submit"
                  variant="gold"
                  disabled={status === "sending"}
                  className="w-full justify-center py-4 text-base"
                >
                  {status === "sending" ? t("sending") : t("submit")}
                </ShimmerButton>

                {status === "error" && (
                  <p className="text-red-400 text-sm mt-3 text-center">{t("errorMsg")}</p>
                )}
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.1)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#8A8A8A" }}>
                {t("orReach")}
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { href: "https://wa.me/66PHONE_PLACEHOLDER", Icon: MessageCircle, label: t("whatsapp"), value: "+66 PHONE_PLACEHOLDER" },
                  { href: "https://line.me/LINE_PLACEHOLDER", Icon: Phone, label: t("line"), value: "@LINE_PLACEHOLDER" },
                  { href: "mailto:hello@thaivision.co", Icon: Mail, label: t("email"), value: "hello@thaivision.co" },
                ].map(({ href, Icon, label, value }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 no-underline group"
                    whileHover={prefersReduced ? {} : { x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:border-[rgba(201,168,76,0.5)]"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "#8A8A8A" }}>{label}</div>
                      <div className="text-sm font-medium transition-colors duration-200 group-hover:text-[#C9A84C]" style={{ color: "#F5F5F5" }}>{value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Promise card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
              <div className="text-5xl font-bold font-display mb-3" style={{ color: "rgba(201,168,76,0.12)" }}>24h</div>
              <h4 className="font-display text-lg font-semibold mb-2" style={{ color: "#F5F5F5" }}>We Respond Fast</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                Every inquiry gets a personal response within 24 hours. No bots. No templates. Real people who care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
