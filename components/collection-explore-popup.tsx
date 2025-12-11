"use client"

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
  if (!isOpen || !collection) return null

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
              href="https://wa.me/94771103133?text=Hi!%20I'm%20interested%20in%20the%20{{title}}%20collection"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent text-background px-6 py-3 rounded-full font-light uppercase tracking-wider hover:bg-secondary hover:text-background transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.413-2.393-1.476-.887-.79-1.484-1.784-1.656-2.084-.173-.299-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.562 0-3.051.591-4.161 1.659-1.11 1.067-1.72 2.526-1.72 4.082 0 1.618.633 3.167 1.786 4.327 1.153 1.16 2.639 1.799 4.295 1.799h.004c1.647 0 3.145-.632 4.296-1.794 1.15-1.16 1.783-2.707 1.783-4.325 0-1.558-.609-3.02-1.719-4.084-1.11-1.064-2.599-1.664-4.161-1.664zm0-9.036C6.444 0 .056 6.388.056 13.944c0 2.408.617 4.776 1.786 6.857L0 27.96l8.356-4.378c1.933 1.112 4.087 1.699 6.286 1.699 7.56 0 13.948-6.388 13.948-13.944S21.504 0 13.944 0z" />
              </svg>
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

      {/* Background click to close */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
    </div>
  )
}
