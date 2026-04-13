export function SocialMarquee() {
  const images = Array.from({ length: 16 }, (_, i) => `social_${String(i + 1).padStart(2, "0")}.jpg`);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-gradient-to-b from-transparent via-violet-50/30 to-transparent py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-600 mb-12">
          Success Stories
        </p>
        
        <div className="relative overflow-hidden">
          {/* Marquee Container */}
          <div className="flex animate-marquee space-x-6">
            {duplicatedImages.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-48 w-48 sm:h-56 sm:w-56 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`/assets/img/social/${image}`}
                  alt={`Social media ${idx + 1}`}
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-50 to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
