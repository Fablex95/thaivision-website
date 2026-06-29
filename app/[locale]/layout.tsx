import type { Metadata } from "next"
import { Inter, Playfair_Display, Sarabun } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import LayoutBackground from "@/components/ui/LayoutBackground"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ThaiVision | Digital Agency Pattaya — Websites, Marketing, Automation",
  description:
    "Transform your Thai business with AI-powered websites, marketing & automation. More customers. More sales. More growth. Based in Pattaya, Thailand.",
  openGraph: {
    title: "ThaiVision — Your Digital Transformation Partner",
    description: "More Customers. More Sales. More Growth.",
    locale: "en_US",
    alternateLocale: ["th_TH"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThaiVision | Digital Agency Pattaya",
    description: "More Customers. More Sales. More Growth.",
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} ${sarabun.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <NextIntlClientProvider messages={messages}>
          <LayoutBackground />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
