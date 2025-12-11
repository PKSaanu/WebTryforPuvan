"use client"

import { useState, useRef, useEffect } from "react"
import ProductDetailModal from "./product-detail-modal"

const arrivals = [
  {
    id: 1,
    name: "Silk Saree Collection",
    category: "Premium Sarees",
    image: "/blue-silk-saree-traditional-south-indian.jpg",
    tag: "New",
    description: "Handwoven silk with traditional motifs",
    price: "₨4,500",
    fullDescription:
      "Luxurious handwoven silk sarees featuring intricate traditional patterns and premium craftsmanship.",
    images: [
      "/blue-silk-saree-traditional-south-indian.jpg",
      "/emerald-green-silk-saree-premium.jpg",
      "/blue-silk-saree-traditional-south-indian.jpg",
    ],
    colors: [
      { name: "Royal Blue", hex: "#4169E1" },
      { name: "Emerald", hex: "#50C878" },
      { name: "Maroon", hex: "#800000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Cotton Salwar Suits",
    category: "Salwars",
    image: "/maroon-cotton-salwar-suit-traditional.jpg",
    tag: "Trending",
    description: "Comfortable cotton blend with modern cuts",
    price: "₨2,800",
    fullDescription: "Breathable cotton salwar suits perfect for everyday elegance with contemporary tailoring.",
    images: [
      "/maroon-cotton-salwar-suit-traditional.jpg",
      "/summer-wear-light-colors-cotton-textile.jpg",
      "/maroon-cotton-salwar-suit-traditional.jpg",
    ],
    colors: [
      { name: "Maroon", hex: "#800000" },
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Navy", hex: "#000080" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "Designer Frocks",
    category: "Frocks",
    image: "/gold-embroidered-designer-frock-elegant.jpg",
    tag: "Exclusive",
    description: "Elegant designs for special occasions",
    price: "₨3,200",
    fullDescription:
      "Exquisitely designed frocks with gold embroidery, perfect for celebrations and special occasions.",
    images: [
      "/gold-embroidered-designer-frock-elegant.jpg",
      "/kids-traditional-colorful-wear-playful.jpg",
      "/gold-embroidered-designer-frock-elegant.jpg",
    ],
    colors: [
      { name: "Gold", hex: "#FFD700" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Premium Collection",
    category: "Sarees",
    image: "/emerald-green-silk-saree-premium.jpg",
    tag: "Featured",
    description: "Limited edition collection",
    price: "₨5,500",
    fullDescription: "Limited edition premium sarees with rare designs and exceptional quality materials.",
    images: [
      "/emerald-green-silk-saree-premium.jpg",
      "/blue-silk-saree-traditional-south-indian.jpg",
      "/emerald-green-silk-saree-premium.jpg",
    ],
    colors: [
      { name: "Emerald", hex: "#50C878" },
      { name: "Sapphire", hex: "#0F52BA" },
      { name: "Rose Gold", hex: "#B76E79" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "Kids Traditional Wear",
    category: "Kids",
    image: "/colorful-kids-traditional-wear-south-indian.jpg",
    tag: "New",
    description: "Perfect for young trendsetters",
    price: "₨1,800",
    fullDescription: "Vibrant and playful designs for children that combine traditional charm with modern comfort.",
    images: [
      "/colorful-kids-traditional-wear-south-indian.jpg",
      "/kids-traditional-colorful-wear-playful.jpg",
      "/colorful-kids-traditional-wear-south-indian.jpg",
    ],
    colors: [
      { name: "Crimson", hex: "#DC143C" },
      { name: "Saffron", hex: "#FF6600" },
      { name: "Peacock Blue", hex: "#0A3161" },
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
  },
]

export default function NewArrivals() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<(typeof arrivals)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("resize", handleScroll)
    return () => window.removeEventListener("resize", handleScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleDiscover = (product: (typeof arrivals)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="arrivals" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-accent/70 uppercase tracking-[0.2em]">What's New</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground">
                New
                <br />
                <span className="text-gradient-cyan-gold">Arrivals</span>
              </h2>
              <p className="text-foreground/60 max-w-md font-light text-sm leading-relaxed">
                Discover our latest collections handpicked for discerning taste
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollContainer}
            onScroll={handleScroll}
            className="carousel-scroll flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          >
            {arrivals.map((item) => (
              <div
                key={item.id}
                className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-[calc(33.333%-1rem)] snap-start group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl h-96 md:h-[500px] mb-6 bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleDiscover(item)}
                      className="px-8 py-3 bg-accent text-background font-light rounded-full hover:bg-secondary hover:text-secondary-foreground transition duration-300 text-sm tracking-wide"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-light text-foreground group-hover:text-accent transition">
                    {item.name}
                  </h3>
                  <p className="text-sm text-foreground/60 font-light">{item.description}</p>
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-xs text-secondary font-semibold uppercase tracking-wider">{item.category}</p>
                    <p className="text-sm font-light text-accent">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProduct(null)
          }}
          product={selectedProduct}
        />
      )}
    </>
  )
}
