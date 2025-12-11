"use client"

export default function BusinessHoursRunner() {
  return (
    <div className="w-full bg-gradient-to-r from-accent via-secondary to-accent text-background py-3 px-4 overflow-hidden">
      <div className="flex items-center justify-center relative">
        <style>{`
          @keyframes scroll-rtl {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .runner-text {
            animation: scroll-rtl 20s linear infinite;
            white-space: nowrap;
          }
          .runner-text:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="runner-text">
          <span className="inline-block mr-12">
            <span className="font-semibold">🕐 Open Monday - Saturday:</span> 8:30 AM - 8:00 PM &nbsp;
            <span className="font-semibold">🕐 Open Monday - Saturday:</span> 8:30 AM - 8:00 PM &nbsp;
            <span className="font-semibold">🕐 Open Monday - Saturday:</span> 8:30 AM - 8:00 PM
          </span>
        </div>
      </div>
    </div>
  )
}
