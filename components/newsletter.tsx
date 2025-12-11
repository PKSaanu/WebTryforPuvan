"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.15em]">Stay Updated</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Get Exclusive Updates</h2>
          <p className="text-background/70 text-lg">
            Subscribe to be the first to know about new arrivals, special collections, and exclusive offers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 bg-background text-foreground rounded-full placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-full hover:opacity-90 transition"
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </form>

        <p className="text-sm text-background/60">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
