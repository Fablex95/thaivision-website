import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp"
import ScrollProgressBar from "@/components/ui/ScrollProgressBar"
import CustomCursor from "@/components/ui/CustomCursor"
import TempleGlowBackground from "@/components/ui/TempleGlowBackground"
import AboutPageContent from "@/components/sections/AboutPageContent"

interface Props {
  params: Promise<{ locale: string }>
}

export const metadata: Metadata = {
  title: "About ThaiVision | AI-First Digital Agency Pattaya",
  description:
    "Meet the team behind ThaiVision — an AI-first digital agency based in Pattaya helping Thai businesses grow through websites, marketing and automation.",
  openGraph: {
    title: "About ThaiVision | AI-First Digital Agency Pattaya",
    description: "The team behind Thailand's fastest-growing digital transformation agency.",
    type: "website",
  },
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  return (
    <>
      <TempleGlowBackground />
      <ScrollProgressBar />
      <CustomCursor />
      <Header />
      <AboutPageContent locale={locale} />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
