"use client"

import { useState } from "react"

const arrivals = [
  {
    id: 1,
    name: "Silk Saree - Peacock Blue",
    category: "Sarees",
    image: "/silk-saree-peacock-blue-south-indian-traditional.jpg",
    tag: "New",
  },
  {
    id: 2,
    name: "Cotton Salwar Suit",
    category: "Salwars",
    image: "/cotton-salwar-suit-maroon-traditional-wear.jpg",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Designer Frocks",
    category: "Frocks",
    image: "/designer-frocks-golden-embroidered-traditional.jpg",
    tag: "New",
  },
  {
    id: 4,
    name: "Silk Blend Saree",
    category: "Sarees",
    image: "/silk-blend-saree-emerald-green-south-indian.jpg",
    tag: "Popular",
  },
]

export default function NewArrivals() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="arrivals" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">Latest Collection</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">New Arrivals</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Handpicked selections of the finest South Indian textiles, fresh from our collection
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arrivals.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Hover CTA */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <button className="px-6 py-2 bg-white text-foreground font-medium rounded-full hover:bg-foreground hover:text-white transition transform scale-90 group-hover:scale-100">
                      View Details
                    </button>
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
