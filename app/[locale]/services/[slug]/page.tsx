import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SERVICES, getServiceBySlug } from "@/lib/services-data"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp"
import ScrollProgressBar from "@/components/ui/ScrollProgressBar"
import CustomCursor from "@/components/ui/CustomCursor"
import TempleGlowBackground from "@/components/ui/TempleGlowBackground"
import ServiceDetailPage from "@/components/sections/ServiceDetailPage"

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  const locales = ["en", "th"]
  return locales.flatMap((locale) =>
    SERVICES.map((service) => ({ locale, slug: service.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.name} | ThaiVision — Digital Agency Pattaya`,
    description: service.heroDescription,
    openGraph: {
      title: `${service.name} | ThaiVision`,
      description: service.tagline,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <TempleGlowBackground />
      <ScrollProgressBar />
      <CustomCursor />
      <Header />
      <ServiceDetailPage service={service} locale={locale} />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
