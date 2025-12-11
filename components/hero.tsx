"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 md:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 md:gap-20">
        <div className="text-center space-y-2" style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>
          <p className="text-xs md:text-sm font-semibold text-accent uppercase tracking-[0.3em] animate-fade-in-up">
            Discover Puvan Tex
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-accent via-secondary to-accent mx-auto"></div>
        </div>

        <div className="text-center space-y-6 md:space-y-8 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-foreground leading-tight tracking-tight">
            Where Tradition
            <br />
            <span className="text-gradient-cyan-gold font-normal glow-accent inline-block">Meets Modern</span>
            <br />
            Design
          </h1>

          <p className="text-sm md:text-base text-foreground/50 font-light leading-relaxed max-w-xl mx-auto tracking-wide">
            Premium textiles crafted with heritage techniques and contemporary vision. Each collection tells a story of
            elegance, authenticity, and timeless style.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center">
          <a
            href="#arrivals"
            className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background font-light rounded-full hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition duration-500 text-sm tracking-widest uppercase"
          >
            Explore New Arrivals
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-accent/40 text-accent font-light rounded-full hover:border-accent hover:bg-accent/5 transition duration-300 text-sm tracking-widest uppercase"
          >
            Get in Touch
          </a>
        </div>

        <div
          className="mt-16 md:mt-24 flex flex-col items-center gap-3 animate-bounce"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <p className="text-xs text-foreground/40 uppercase tracking-[0.2em]">Scroll to explore</p>
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="w-full max-w-4xl pt-12 md:pt-20">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent via-transparent to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 rounded-3xl"></div>

            <div
              className="relative rounded-3xl overflow-hidden border border-accent/10 group-hover:border-accent/30 transition duration-500"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <img
                src="/elegant-textile-woman-traditional-saree.jpg"
                alt="Puvan Tex Collections"
                className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-accent via-secondary to-accent mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
