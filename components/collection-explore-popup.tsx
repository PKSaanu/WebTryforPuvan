"use client"

import { useEffect } from "react"

interface CollectionExplorePopupProps {
  isOpen: boolean
  collection: {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    badge: string
    details?: string
  } | null
  onClose: () => void
}

export default function CollectionExplorePopup({ isOpen, collection, onClose }: CollectionExplorePopupProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen || !collection) return null

  const whatsappUrl = `https://wa.me/94771103133?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(collection.title)}%20collection`

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border/40 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={collection.image || "/placeholder.svg"}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] bg-secondary/20 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
              {collection.badge}
            </span>
            <p className="text-accent font-light text-base uppercase tracking-wider mt-4">{collection.subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">{collection.title}</h2>
          </div>

          <p className="text-foreground/70 leading-relaxed font-light text-base">{collection.description}</p>

          {collection.details && (
            <div className="bg-muted/50 border border-border/40 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-serif text-foreground">Collection Details</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{collection.details}</p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent text-background px-6 py-3 rounded-full font-light uppercase tracking-wider hover:bg-secondary hover:text-background transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              Inquire on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="flex-1 border border-accent text-accent px-6 py-3 rounded-full font-light uppercase tracking-wider hover:bg-accent/10 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
