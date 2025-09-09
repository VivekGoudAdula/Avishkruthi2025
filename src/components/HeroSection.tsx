import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import Galaxy from './Galaxy';

export const HeroSection: React.FC = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full">
        <Galaxy 
          density={0.8}
          glowIntensity={0.3}
          saturation={0.6}
          hueShift={240}
          mouseRepulsion={true}
          mouseInteraction={true}
          twinkleIntensity={0.3}
          rotationSpeed={0.05}
          transparent={true}
        />
      </div>

      {/* Logos - Top Corners */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 fade-in">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-12 sm:h-16 md:h-20 w-auto"
        />
      </div>
      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 fade-in">
        <img 
          src="/AU.png" 
          alt="Aurora University" 
          className="h-16 sm:h-20 md:h-24 w-auto"
        />
      </div>

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 px-2 sm:px-4">
        {/* Main Title */}
        <div className="fade-in mb-6 sm:mb-8">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-orbitron neon-glow text-cyan-400 mb-2 sm:mb-4">
            AVISHKRUTI
          </h1>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            2025
          </div>
        </div>

        {/* Tagline */}
        <div className="fade-in mb-12 stagger-animation" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-rajdhani text-gray-300 mb-4 sm:mb-6 px-2">
            A National Level Technical and Management Fest
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xl sm:text-2xl font-rajdhani">
            <div className="flex items-center text-cyan-400">
              <Calendar className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
              <span>September 15<sup>th</sup> - 19<sup>th</sup>, 2025</span>
            </div>
            <div className="flex items-center text-pink-400">
              <MapPin className="mr-3 h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" />
              <span>Aurora University, Uppal</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons and Scroll Indicator */}
        <div className="fade-in stagger-animation px-2 mb-8 sm:mb-12" style={{ '--delay': '0.4s' } as React.CSSProperties}>
          <div className="w-full max-w-xs mx-auto">
            <Button 
              onClick={scrollToEvents}
              className="w-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Explore Events
            </Button>
            
            {/* Scroll Indicator */}
            <div className="mt-8 flex justify-center">
              <div className="animate-bounce">
                <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};