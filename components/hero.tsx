"use client"

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up flex flex-col justify-center h-full">
            <div className="space-y-6">
              <p className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">
                Premium Collection
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif font-light text-foreground leading-tight">
                Lower Price
                <br />
                <span className="text-gradient-cyan-gold font-normal glow-accent">
                  Best Collections
                </span>
              </h1>
            </div>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg font-light">
              Curated textile collections that blend South Indian tradition with contemporary design.
              Each piece crafted for those who appreciate refined style and authenticity.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#arrivals"
                className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background font-light rounded-full hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition duration-500 text-sm tracking-widest uppercase"
              >
                Explore New Arrivals
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-accent text-accent font-light rounded-full hover:bg-accent/10 transition duration-300 text-sm tracking-wide"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="/south-indian-woman-elegant-textile-saree.jpg"
              alt="Puvan Tex Premium Collection"
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition duration-500 group-hover:shadow-[0_0_40px_rgba(0,217,255,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
