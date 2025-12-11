"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: number
    name: string
    category: string
    image: string
    description: string
    colors: Array<{ name: string; hex: string }>
    sizes: string[]
    price: string
    images: string[]
  }
}

export default function ProductDetailModal({ isOpen, onClose, product }: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  const handleWhatsAppClick = () => {
    const phoneNumber = "94771103133"
    const message =
      "Hello! I'd like to inquire about Puvan Tex new arrivals and collections."
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappURL, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-background border border-accent/20 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-accent/20">
        {/* Close button */}
        {/* <button
          onClick={onClose}
          className="sticky top-4 right-4 absolute z-10 p-2 hover:bg-accent/10 rounded-full transition"
        >
          <X className="w-6 h-6 text-foreground/60 hover:text-accent" />
        </button> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl aspect-square bg-muted">
              <img
                src={product.images[currentImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail gallery */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                    currentImageIndex === idx ? "border-accent" : "border-accent/20 hover:border-accent/40"
                  }`}
                >
                  <img src={img || "/placeholder.svg"} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">{product.category}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-2">{product.name}</h2>
              <p className="text-xl font-light text-accent">{product.price}</p>
            </div>

            <p className="text-foreground/70 leading-relaxed font-light">{product.description}</p>

            {/* Colors */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Available Colors</p>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition ${
                      selectedColor.name === color.name
                        ? "border-accent bg-accent/10"
                        : "border-accent/20 hover:border-accent/40"
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }}></div>
                    <span className="text-sm font-light">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Available Size</p>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg border-2 font-light text-sm transition ${
                      selectedSize === size
                        ? "border-accent bg-accent text-background"
                        : "border-accent/20 text-foreground hover:border-accent/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-4">
              <button onClick={handleWhatsAppClick} className="flex-1 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-background font-light rounded-lg hover:shadow-lg hover:shadow-accent/30 transition duration-300 text-sm tracking-wide uppercase">
                WhatsApp Me
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-accent/40 text-accent font-light rounded-lg hover:border-accent hover:bg-accent/5 transition duration-300 text-sm tracking-wide uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
