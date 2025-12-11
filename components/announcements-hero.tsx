"use client"

import { useState } from "react"
import CollectionExplorePopup from "./collection-explore-popup"

const announcements = [
  {
    id: 1,
    title: "Grand Festival Collection",
    subtitle: "Celebrate tradition in style",
    description:
      "Exclusive designs for weddings and celebrations. Limited edition pieces featuring heritage patterns and premium materials.",
    image: "/grand-festival-celebration-traditional-clothing.jpg",
    badge: "December Release",
    details:
      "Our Grand Festival Collection showcases meticulously crafted pieces perfect for your most special occasions. Each design blends traditional artistry with contemporary elegance, featuring hand-selected premium fabrics and intricate embellishments.",
  },
  {
    id: 2,
    title: "Premium Summer Range",
    subtitle: "Lightweight comfort meets elegance",
    description:
      "Our new summer collection features breathable fabrics perfect for warm weather, blending comfort with sophisticated style.",
    image: "/summer-wear-light-colors-cotton-textile.jpg",
    badge: "Now Available",
    details:
      "Experience ultimate comfort with our Premium Summer Range. Crafted from the finest breathable materials, this collection is designed for warm climates while maintaining our signature elegance and style.",
  },
  {
    id: 3,
    title: "Kids Exclusive Launch",
    subtitle: "Young style. Pure joy",
    description:
      "Introducing vibrant and playful designs for children that honor tradition while celebrating youthful energy and personality.",
    image: "/kids-traditional-colorful-wear-playful.jpg",
    badge: "New Collection",
    details:
      "Our Kids Exclusive Launch brings joy and comfort to young fashion enthusiasts. Featuring playful colors, comfortable fits, and safe materials, these designs let children express themselves while celebrating their heritage.",
  },
]

export default function Announcements() {
  const [selectedCollection, setSelectedCollection] = useState<(typeof announcements)[0] | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleExplore = (announcement: (typeof announcements)[0]) => {
    setSelectedCollection(announcement)
    setIsPopupOpen(true)
  }

  return (
    <>
      <section id="announcements" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-xs font-semibold text-accent/70 uppercase tracking-[0.2em] mb-4">Featured Collections</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground">
              Curated
              <br />
              <span className="text-gradient-cyan-gold">Collections</span>
            </h2>
          </div>

          <div className="space-y-16">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className="group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s backwards`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[500px] bg-muted order-2 md:order-1">
                    <img
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-6 order-1 md:order-2">
                    <div className="inline-block">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] bg-secondary/20 px-4 py-2 rounded-full backdrop-blur-sm">
                        {announcement.badge}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <p className="text-accent font-light text-base uppercase tracking-wider">
                        {announcement.subtitle}
                      </p>
                      <h3 className="text-4xl md:text-5xl font-serif font-light text-foreground group-hover:text-accent transition duration-300">
                        {announcement.title}
                      </h3>
                    </div>

                    <p className="text-foreground/70 leading-relaxed font-light text-base">
                      {announcement.description}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => handleExplore(announcement)}
                        className="inline-flex items-center gap-3 text-sm font-light text-accent hover:text-secondary transition-all group/btn uppercase tracking-wider bg-accent/10 hover:bg-accent/20 px-6 py-3 rounded-full"
                      >
                        Explore Collection
                        <svg
                          className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {index < announcements.length - 1 && <div className="mt-20 h-px bg-border/50"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CollectionExplorePopup
        isOpen={isPopupOpen}
        collection={selectedCollection}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  )
}
