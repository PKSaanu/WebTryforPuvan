"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import BusinessHoursRunner from "@/components/business-hours-runner"
import SpecialOfferPopup from "@/components/special-offer-popup"
import NewArrivals from "@/components/new-arrivals-carousel"
import Announcements from "@/components/announcements-hero"
import LocationMap from "@/components/location-map"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <BusinessHoursRunner />
      <SpecialOfferPopup />
      <Header />
      <Hero />
      <NewArrivals />
      <Announcements />
      <LocationMap />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
