import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg tech-grid overflow-hidden">
      {/* Logos - Top Corners */}
      <div className="absolute top-8 left-8 z-20 fade-in">
        <img 
          src="/src/components/logo.png" 
          alt="Logo" 
          className="h-24 w-auto"
        />
      </div>
      <div className="absolute top-8 right-8 z-20 fade-in">
        <img 
          src="/src/components/AU.png" 
          alt="Aurora University" 
          className="h-24 w-auto"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-32">
        
        {/* Main Title */}
        <div className="fade-in mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-orbitron neon-glow text-cyan-400 mb-4">
            AVISHKRUTI
          </h1>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            2025
          </div>
        </div>

        {/* Tagline */}
        <div className="fade-in mb-12 stagger-animation" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <p className="text-xl md:text-2xl lg:text-3xl font-rajdhani text-gray-300 mb-6">
            A National Level Technical Fest
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg font-rajdhani">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span>15th - 19th September 2025</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Aurora University</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fade-in stagger-animation" style={{ '--delay': '0.4s' } as React.CSSProperties}>
          <Button 
            onClick={scrollToEvents}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-rajdhani text-lg px-8 py-4 rounded-full pulse-glow border-0 transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore Events
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};