import React from 'react';
import { Badge } from '../ui/badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPWhatIsThis = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 bg-[#1e2a4a]">
      <div className="container mx-auto max-w-4xl text-center">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              What is Claudia?
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            An ADHD management platform,
            <br />
            That <span className="italic">actually</span> works.
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0" style={{ fontWeight: 400 }}>
            <span className="font-medium text-white" style={{ fontWeight: 700 }}>Not</span> another "ADHD friendly" hack. <span className="font-medium text-white" style={{ fontWeight: 700 }}>Not</span> another course you abandon.
            <br />
            Claudia is an <span className="font-medium text-white" style={{ fontWeight: 700 }}>ADHD-centric platform</span> for doing. For getting
            <br />
            organized, regaining control of your life, and thriving.
          </p>
        </div>
        
        <div 
          ref={imageRef}
          className={`flex justify-center transition-all duration-700 ease-out ${
            imageVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="relative max-w-full sm:max-w-4xl w-full">
            <video 
              src="https://NeuroNotionPullZonw.b-cdn.net/Claudia%20Demo%20v4.mp4"
              controls
              autoPlay
              muted
              loop
              className={`w-full h-auto rounded-lg shadow-lg px-2 sm:px-0 ${
                imageVisible ? 'animate-[float_4s_ease-in-out_infinite]' : ''
              }`}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Sound On Arrow - positioned bottom-right of video */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 flex items-center space-x-2 bg-[#30bcd9] text-black px-3 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
              <svg 
                className="w-4 h-4 transform rotate-[225deg]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold" style={{ fontWeight: 700 }}>Sound on!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 