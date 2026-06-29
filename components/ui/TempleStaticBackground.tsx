"use client"

// Static version of TempleJourney for sub-pages.
// No animation, no canvas, no RAF — zero runtime cost.
// Shows room-1.webp (closer Wat Arun view) with the same
// gradient overlays as the homepage TempleJourney.
export default function TempleStaticBackground() {
  return (
    <>
      {/* Room image — fixed, covers entire viewport */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url("/room-1.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      {/* Left-side dark gradient for text readability */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(108deg, rgba(5,5,5,0.93) 0%, rgba(5,5,5,0.78) 28%, rgba(5,5,5,0.42) 52%, rgba(5,5,5,0.12) 72%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top vignette so header stays readable */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "130px",
          zIndex: 0,
          background: "linear-gradient(to bottom, rgba(5,5,5,0.65) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade to solid dark */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "38vh",
          zIndex: 0,
          background:
            "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.55) 42%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </>
  )
}
