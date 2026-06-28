"use client"

import { motion, useReducedMotion } from "motion/react"
import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const prefersReduced = useReducedMotion()

  return (
    <motion.a
      href="https://wa.me/66842291402?text=Hello%20ThaiVision%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #C9A84C 0%, #E8C866 100%)",
        boxShadow: "0 4px 24px rgba(201,168,76,0.4)",
      }}
      // Slide in from right after 2s delay
      initial={{ x: 80, opacity: 0 }}
      animate={
        prefersReduced
          ? { x: 0, opacity: 1 }
          : {
              x: [80, 0, 0, 0, 0],
              opacity: [0, 1, 1, 1, 1],
              scale: [1, 1, 1, 1.08, 1],
            }
      }
      transition={{
        duration: 4,
        times: [0, 0.15, 0.4, 0.7, 1],
        delay: 2,
        repeat: Infinity,
        repeatDelay: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ scale: 1.15, boxShadow: "0 8px 32px rgba(201,168,76,0.6)" }}
      whileTap={{ scale: 0.92 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-black" />
    </motion.a>
  )
}
