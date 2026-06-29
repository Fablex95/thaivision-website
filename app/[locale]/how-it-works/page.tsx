import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp"
import ScrollProgressBar from "@/components/ui/ScrollProgressBar"
import CustomCursor from "@/components/ui/CustomCursor"
import TempleGlowBackground from "@/components/ui/TempleGlowBackground"
import HowItWorksPageContent from "@/components/sections/HowItWorksPageContent"

interface Props {
  params: Promise<{ locale: string }>
}

export const metadata: Metadata = {
  title: "How It Works | ThaiVision — Digital Agency Pattaya",
  description:
    "See exactly how ThaiVision transforms Thai businesses in 3 clear steps — from discovery and strategy to launch and growth.",
  openGraph: {
    title: "How ThaiVision Works | Digital Transformation in 3 Steps",
    description: "From zero to results — our proven process for growing Thai businesses online.",
    type: "website",
  },
}

export default async function HowItWorksPage({ params }: Props) {
  const { locale } = await params
  return (
    <>
      <TempleGlowBackground />
      <ScrollProgressBar />
      <CustomCursor />
      <Header />
      <HowItWorksPageContent locale={locale} />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
