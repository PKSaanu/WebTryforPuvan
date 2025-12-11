"use client"

export default function LocationMap() {
  return (
    <section id="location" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="text-xs font-semibold text-accent/70 uppercase tracking-[0.2em]">Visit Us</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground">
            Our
            <br />
            <span className="text-gradient-cyan-gold">Location</span>
          </h2>
          <p className="text-foreground/60 max-w-lg font-light text-base leading-relaxed">
            Located in the vibrant northern region of Sri Lanka, serving our community with excellence and authenticity.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] lg:h-[600px] bg-muted border-2 border-accent/30 hover:border-accent/60 transition duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4403.735640572341!2d80.69252077546356!3d9.31407578446057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afeb13e67f8d035%3A0x507cca78f916a6e0!2sPuvan%20Tex!5e1!3m2!1sen!2slk!4v1765394411525!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-6 rounded-xl bg-card border-2 border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition">
            <p className="text-xs font-semibold text-accent uppercase tracking-wide">Address</p>
            <p className="text-accent hover:text-secondary font-light text-base transition">Puthukudiyiruppu Town, Mullaitiv, Sri Lanka</p>
          </div>
          <div className="space-y-3 p-6 rounded-xl bg-card border-2 border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition">
            <p className="text-xs font-semibold text-accent uppercase tracking-wide">Phone</p>
            <a href="tel:+94771103133" className="text-accent hover:text-secondary font-light text-base transition">
              +94 77 110 3133
            </a>
          </div>
          <div className="space-y-3 p-6 rounded-xl bg-card border-2 border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition">
            <p className="text-xs font-semibold text-accent uppercase tracking-wide">WhatsApp</p>
            <a
              href="https://wa.me/94771103133"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondary font-light text-base transition"
            >
              Message Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
