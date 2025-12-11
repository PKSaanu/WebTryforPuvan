"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function SpecialOfferPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  // useEffect(() => {
  //   const hasShownPopup = localStorage.getItem("specialOfferShown")
  //   const isOfferActive = true // Change this to false to disable the popup

  //   if (isOfferActive && !hasShownPopup) {
  //     const timer = setTimeout(() => {
  //       setIsOpen(true)
  //       setHasShown(true)
  //     }, 2000)

  //     return () => clearTimeout(timer)
  //   }
  // }, [])

  useEffect(() => {
    const isOfferActive = true // Change this to false to disable the popup

    if (isOfferActive) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])


  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("specialOfferShown", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>

      {/* Modal */}
      <div className="relative bg-background border border-accent/20 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-accent/20 animate-in fade-in zoom-in-95 duration-300">
        {/* <button onClick={handleClose} className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-full transition">
          <X className="w-5 h-5 text-foreground/60 hover:text-accent" />
        </button> */}

        <div className="space-y-6">
          {/* Header */}
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

          {/* Description */}
          <p className="text-foreground/70 leading-relaxed font-light">
            With Christmas and Thai Pongal approaching, we are bringing in <span className="font-semibold text-accent">new stock</span> of exquisite collections at <span className="font-semibold text-accent">lower pricing</span>. Explore our latest arrivals and get your favorite pieces before they’re gone!
          </p>

          {/* Countdown */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 items-center text-center">
            <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2">New arrivals coming in:</p>
            <p className="text-2xl font-serif font-light text-accent">In a Few Days</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 bg-accent text-background font-light rounded-lg hover:bg-secondary transition duration-300 text-sm tracking-wide uppercase"
            >
              Explore Now
            </button>
            <button
              onClick={handleClose}
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
