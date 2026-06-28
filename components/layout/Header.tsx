"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoMark from "@/components/ui/LogoMark"
import ShimmerButton from "@/components/ui/ShimmerButton"

export default function Header() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const hrefFor = (hash: string) => (isHome ? hash : `/${locale}${hash}`)

  const navLinks = [
    { label: t("services"), href: hrefFor("#services") },
    { label: t("howItWorks"), href: hrefFor("#how-it-works") },
    { label: t("about"), href: hrefFor("#stats") },
    { label: t("contact"), href: hrefFor("#contact") },
  ]

  const otherLocale = locale === "en" ? "th" : "en"

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="no-underline">
          <LogoMark size={38} showText={true} glowOnHover={true} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium no-underline group"
              style={{ color: "#8A8A8A" }}
            >
              <span className="transition-colors duration-200 group-hover:text-[#F5F5F5]">
                {link.label}
              </span>
              {/* Underline reveal left-to-right */}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ease-out"
                style={{ background: "linear-gradient(90deg, #C9A84C, #E8C866)" }}
              />
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <Link
            href={`/${otherLocale}`}
            className="text-xs font-semibold uppercase tracking-widest no-underline px-3 py-1.5 rounded-md border transition-all duration-200 hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]"
            style={{
              color: "#8A8A8A",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            {otherLocale === "th" ? "ไทย" : "EN"}
          </Link>

          {/* CTA with Shimmer */}
          <ShimmerButton href={hrefFor("#contact")} variant="gold" className="hidden md:inline-flex px-5 py-2.5 text-sm">
            {t("getStarted")}
          </ShimmerButton>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#C9A84C" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden px-6 pb-6"
          style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(16px)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium no-underline hover:text-[#C9A84C] transition-colors duration-200"
                style={{ color: "#F5F5F5" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ShimmerButton href={hrefFor("#contact")} variant="gold" className="mt-2 justify-center" onClick={() => setMenuOpen(false)}>
              {t("getStarted")}
            </ShimmerButton>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
