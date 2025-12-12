"use client"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "94771103133"
    const message =
      "Hello! I'd like to inquire about Puvan Tex new arrivals and collections."
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="fixed bottom-8 right-8 z-30">
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <lord-icon
          // src="https://cdn.lordicon.com/vyyhrdzw.json"
          src="https://cdn.lordicon.com/dhcosedn.json"
          trigger="loop"
          style={{ width: "72px", height: "72px" }}
        />
      </button>

    </div>
  )
}
