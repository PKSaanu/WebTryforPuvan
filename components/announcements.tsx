"use client"

const announcements = [
  {
    id: 1,
    title: "Grand Festival Collection",
    date: "December 2024",
    description:
      "Celebrate this festive season with our exclusive collection featuring traditional South Indian designs perfect for weddings and celebrations.",
    image: "/festival-collection-traditional-south-indian-desig.jpg",
  },
  {
    id: 2,
    title: "Community Special Offer",
    date: "Limited Time",
    description:
      "15% off on all purchases for our valued Tamil community members. Celebrate culture, celebrate savings.",
    image: "/discount-offer-shopping-tamil-textiles.jpg",
  },
  {
    id: 3,
    title: "Kids Collection Launch",
    date: "Now Available",
    description: "Introducing vibrant kids wear collection featuring traditional and modern styles for every occasion.",
    image: "/kids-traditional-wear-colorful-south-indian.jpg",
  },
]

export default function Announcements() {
  return (
    <section id="announcements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">Latest Updates</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Announcements</h2>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <div
              key={announcement.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-muted">
                <img
                  src={announcement.image || "/placeholder.svg"}
                  alt={announcement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-xs text-accent font-semibold uppercase tracking-[0.1em]">{announcement.date}</p>
                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition">
                  {announcement.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{announcement.description}</p>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
