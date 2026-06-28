import Hero from "@/components/sections/Hero"
import PainPoints from "@/components/sections/PainPoints"
import Services from "@/components/sections/Services"
import HowItWorks from "@/components/sections/HowItWorks"
import Stats from "@/components/sections/Stats"
import ContactSection from "@/components/sections/ContactSection"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp"
import ScrollProgressBar from "@/components/ui/ScrollProgressBar"
import CustomCursor from "@/components/ui/CustomCursor"
import TempleJourney from "@/components/ui/TempleJourney"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ThaiVision",
  "description": "AI-First Digital Agency in Pattaya, Thailand. Websites, Marketing & Automation for Thai businesses.",
  "url": "https://thaivision-website.netlify.app",
  "telephone": "+66-PHONE_PLACEHOLDER",
  "email": "hello@thaivision.co",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pattaya",
    "addressRegion": "Chonburi",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9236",
    "longitude": "100.8825"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [],
  "serviceType": ["Website Design", "SEO", "Digital Marketing", "Business Automation", "AI Chatbots"],
  "areaServed": {
    "@type": "Country",
    "name": "Thailand"
  }
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global UI — behind everything */}
      <TempleJourney />

      {/* Global UI — above content */}
      <ScrollProgressBar />
      <CustomCursor />
      <Header />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <PainPoints />
        <Services />
        <HowItWorks />
        <Stats />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
