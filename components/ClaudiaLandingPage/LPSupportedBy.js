import React from 'react';

export const LPSupportedBy = () => {
  const logos = [
    { id: 1, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/1.webp', alt: 'Supported by logo 1' },
    { id: 2, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/2.webp', alt: 'Supported by logo 2' },
    { id: 7, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/7.webp', alt: 'Supported by logo 7' },
    { id: 6, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/6.webp', alt: 'Supported by logo 6' },
    { id: 11, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/11.webp', alt: 'Supported by logo 11' },
    { id: 10, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/10.webp', alt: 'Supported by logo 10' },
    { id: 4, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/4.webp', alt: 'Supported by logo 4' },
    { id: 5, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/5.webp', alt: 'Supported by logo 5' },
    { id: 8, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/8.webp', alt: 'Supported by logo 8' },
    { id: 3, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/3.webp', alt: 'Supported by logo 3' },
    { id: 9, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/9.webp', alt: 'Supported by logo 9' },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#1e2a4a] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-white mb-8 sm:mb-10" style={{ fontWeight: 600 }}>
          Supported by
        </h2>
        
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll" style={{ transform: 'translateX(-50%)' }}>
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={`first-${logo.id}`}
                className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-18 sm:h-21 lg:h-24 w-auto object-contain transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`second-${logo.id}`}
                className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-18 sm:h-21 lg:h-24 w-auto object-contain transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
