import React from 'react';

export const LPSupportedBy = () => {
  const logos = [
    { id: 1, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/1.webp', alt: 'Supported by logo 1' },
    { id: 2, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/2.webp', alt: 'Supported by logo 2' },
    { id: 7, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/7.webp', alt: 'Supported by logo 7' },
    { id: 6, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/6.webp', alt: 'Supported by logo 6' },
    { id: 10, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/10.webp', alt: 'Supported by logo 10' },
    { id: 4, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/4.webp', alt: 'Supported by logo 4' },
    { id: 5, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/5.webp', alt: 'Supported by logo 5' },
    { id: 8, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/8.webp', alt: 'Supported by logo 8' },
    { id: 3, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/3.webp', alt: 'Supported by logo 3' },
    { id: 9, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/9.webp', alt: 'Supported by logo 9' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#1e2a4a] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-white mb-8 sm:mb-10" style={{ fontWeight: 600 }}>
          Supported by
        </h2>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#1e2a4a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#1e2a4a] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={`first-${logo.id}`}
                className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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
