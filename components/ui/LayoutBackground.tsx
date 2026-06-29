"use client"

import { usePathname } from "next/navigation"
import TempleStaticBackground from "./TempleStaticBackground"

// Renders the sub-page background on every route EXCEPT the homepage.
// Homepage renders its own TempleJourney directly in page.tsx.
export default function LayoutBackground() {
  const pathname = usePathname()
  const isHomePage = /^\/(en|th)\/?$/.test(pathname)
  if (isHomePage) return null
  return <TempleStaticBackground />
}
