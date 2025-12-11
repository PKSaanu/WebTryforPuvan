"use client"

import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [isLordIconLoaded, setIsLordIconLoaded] = useState(false)

  useEffect(() => {
    const checkLordicon = () => {
      if (window.lordicon) {
        setIsLordIconLoaded(true)
      } else {
        setTimeout(checkLordicon, 100)
      }
    }
    checkLordicon()
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "94771103133"
    const message = "Hello! I'd like to inquire about Puvan Tex new arrivals and collections."
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="fixed bottom-8 right-8 z-30">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-accent hover:bg-secondary text-accent-foreground rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-accent/40 backdrop-blur-sm"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {isLordIconLoaded ? (
          <lord-icon
            src="https://cdn.lordicon.com/mktwwc7w.json"
            trigger="hover"
            style={{ width: "32px", height: "32px" }}
          />
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.397-.921 1.23-1.12 1.482-.199.253-.307.344-.605.194-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.404 2.122 7.723l-2.258 6.253 6.41-2.085c2.201 1.207 4.694 1.843 7.268 1.843 5.432 0 9.834-4.4 9.834-9.834 0-2.630-.636-5.114-1.846-7.331a9.827 9.827 0 00-7.78-3.567z" />
          </svg>
        )}
      </button>

      <div className="absolute inset-0 w-16 h-16 bg-accent/20 rounded-full animate-pulse pointer-events-none shadow-lg shadow-accent/20"></div>
    </div>
  )
}
