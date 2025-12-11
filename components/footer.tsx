"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-card border-t-2 border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/images/logo.webp" alt="Puvan Tex Logo" className="h-12 w-auto" />
            <p className="text-foreground/70 text-sm leading-relaxed font-light mt-0">
              Premium textile collections crafted with tradition and modern elegance for discerning customers.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-light text-foreground/60 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#arrivals" className="text-foreground/70 hover:text-accent transition font-light">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#announcements" className="text-foreground/70 hover:text-accent transition font-light">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-foreground/70 hover:text-accent transition font-light">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="font-serif font-light text-foreground/60 text-sm uppercase tracking-wider">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-foreground/70 font-light">Sarees</li>
              <li className="text-foreground/70 font-light">Salwars</li>
              <li className="text-foreground/70 font-light">Frocks</li>
              <li className="text-foreground/70 font-light">Kids Wear</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-light text-foreground/60 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-foreground/70 font-light">Northern Region, Sri Lanka</p>
              </div>
              <div>
                <a href="tel:+94771103133" className="text-secondary hover:text-secondary/80 font-light text-sm">
                  +94 77 110 3133
                </a>
                <p className="text-foreground/50 text-xs mt-1 font-light">WhatsApp Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-sm text-foreground/60 font-light">
            © {currentYear} Puvan Tex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
