"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      {/* ------------------- RUNNER STRIP ------------------- */}
      <div className="w-full bg-slate-900 text-neutral-100 overflow-hidden">
        <div className="relative py-[2px] sm:py-[3px] leading-none">

          <style>{`
            @keyframes scroll-runner {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .runner-line {
              animation: scroll-runner 22s linear infinite;
              white-space: nowrap;
            }
            .runner-line:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="runner-line text-[10px] sm:text-[11px] font-semibold tracking-wide">
            <span className="inline-block mr-20">
              Business Hours: Monday to Saturday, 8:30 AM – 8:00 PM &nbsp; • &nbsp;
              Open on Sundays during festival seasons &nbsp; • &nbsp;
              Serving our customers with trusted quality for over a decade &nbsp; • &nbsp;
              Reach us anytime for inquiries and assistance
            </span>
          </div>
        </div>
      </div>


      {/* ─────────────── MAIN HEADER ─────────────── */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border/40 border-t-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <style>
              {`
                @keyframes slideDown {
                  0% { opacity: 0; transform: translateY(-10px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .menu-animate {
                  animation: slideDown 0.25s ease-out forwards;
                }

                .rotate-open {
                  transform: rotate(90deg);
                }
              `}
            </style>

            <Link href="#intro" className="flex items-center gap-2">
              <img
                src="/images/logo.webp"
                alt="Puvan Tex Logo"
                className="h-14 w-auto opacity-90 hover:opacity-100 transition"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              <Link href="#arrivals" className="text-sm font-light text-foreground/70 hover:text-accent transition">New Arrivals</Link>
              <Link href="#announcements" className="text-sm font-light text-foreground/70 hover:text-accent transition">Collections</Link>
              <Link href="#location" className="text-sm font-light text-foreground/70 hover:text-accent transition">Location</Link>
              <Link href="#contact" className="text-sm font-light text-foreground/70 hover:text-accent transition">Contact</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">

              <a
                href="https://www.facebook.com/PuvanTex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-accent hover:text-secondary transition"
              >
                Facebook
              </a>
              <a href="tel:+94771103133" className="text-sm font-light text-accent hover:text-secondary transition">
                +94 77 110 3133
              </a>
            </div>

            <button
              className={`md:hidden p-2 hover:bg-muted rounded-lg transition ${isMenuOpen ? "rotate-open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 border-t border-border/40 menu-animate">
              <Link href="#arrivals" onClick={() => setIsMenuOpen(false)} className="block text-sm font-light text-foreground/70 hover:text-accent transition py-3">
                New Arrivals
              </Link>

              <Link href="#announcements" onClick={() => setIsMenuOpen(false)} className="block text-sm font-light text-foreground/70 hover:text-accent transition py-3">
                Collections
              </Link>

              <Link href="#location" onClick={() => setIsMenuOpen(false)} className="block text-sm font-light text-foreground/70 hover:text-accent transition py-3">
                Location
              </Link>

              <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-light text-foreground/70 hover:text-accent transition py-3">
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
