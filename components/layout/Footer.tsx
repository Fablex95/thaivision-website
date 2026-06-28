"use client"

import { useTranslations } from "next-intl"
import LogoMark from "@/components/ui/LogoMark"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo — proper SVG mark, no box placeholder */}
          <div className="flex flex-col gap-1">
            <LogoMark size={36} showText={true} glowOnHover={false} />
            <div className="text-xs pl-1 mt-1" style={{ color: "#8A8A8A" }}>
              {t("pattaya")}
            </div>
          </div>

          {/* Tagline */}
          <div
            className="text-center text-xs font-bold tracking-widest uppercase"
            style={{ color: "#C9A84C" }}
          >
            {t("tagline")}
          </div>

          {/* Rights */}
          <div className="text-xs" style={{ color: "#8A8A8A" }}>
            © {new Date().getFullYear()} ThaiVision. {t("rights")}
          </div>

        </div>
      </div>
    </footer>
  )
}
