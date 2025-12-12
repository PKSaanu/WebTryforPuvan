"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function SpecialOfferPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [autoCloseTime, setAutoCloseTime] = useState(3) // 3-second timer

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    // Show popup immediately (or delay if needed)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    // Auto-close countdown
    const interval = setInterval(() => {
      setAutoCloseTime((prev) => {
        if (prev <= 1) {
          setIsOpen(false)
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isOpen])
  

  if (!isOpen) return null

  return (
    <div className="fixed pt-[120px] inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Enhanced blurred dark background */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-all duration-500"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup */}
      <div className="relative bg-background border border-accent/20 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-accent/20 animate-in fade-in zoom-in-95 duration-300">

        {/* Small 3-second timer indicator */}
        <div className="absolute -top-3 -right-3 bg-accent text-background text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {autoCloseTime}s
        </div>

        <div className="space-y-6">

          <div className="space-y-2">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-accent to-secondary text-background text-xs font-semibold rounded-full">
                FESTIVE COLLECTION
              </span>
            </div>
            <h2 className="text-3xl font-serif font-light text-foreground">
              Christmas & Thai Pongal
              <br />
              <span className="text-gradient-cyan-gold">New Stock Arrivals</span>
            </h2>
          </div>

          <p className="text-foreground/70 leading-relaxed font-light">
            With Christmas and Thai Pongal approaching, we are bringing in
            <span className="font-semibold text-accent"> new stock</span> at
            <span className="font-semibold text-accent"> lower pricing</span>.
            Explore our latest arrivals and get your favorite pieces before they’re gone!
          </p>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-6 py-3 bg-accent text-background font-light rounded-lg hover:bg-secondary transition duration-300 text-sm tracking-wide uppercase"
            >
              Explore Now
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-6 py-3 border border-accent/40 text-accent font-light rounded-lg hover:border-accent hover:bg-accent/5 transition duration-300 text-sm tracking-wide uppercase"
            >
              Later
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
