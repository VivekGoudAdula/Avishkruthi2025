import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface Event {
  name: string;
  description: string;
  icon?: React.ReactNode;
  registrationLink?: string;
}

const events: Event[] = [
  { 
    name: 'Build-a-thon', 
    description: 'A Web Development hackathon where teams compete to design and build functional, creative, and user-friendly web applications around real-world themes. Participants will code using modern web technologies, showcase their projects, and present live demos to judges. Bonus points for innovation, UI/UX, and responsiveness.',
    registrationLink: 'https://forms.gle/Gbm4Hh4Jdr5HKee3A'
  },
  {
    name: 'Code Arena',
    description: 'Unleash your creativity and coding prowess at our Mini Hackathon! Whether you\'re a beginner or a seasoned developer, this event is the perfect platform to collaborate, innovate, and build prototypes in a competitive yet supportive environment. Form teams, brainstorm unique game ideas, and bring them to life using cutting-edge tools and technologies. Stand a chance to win exciting prizes and gain recognition from industry experts. Push the boundaries of imagination, and let your code tell a story!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  },
  {
    name: 'Code Battle',
    description: 'Dive into the world of game development with our hands-on Python Game Development Workshop using Pygame! Learn the fundamentals of creating a simple 2D game from scratch. This event is ideal for beginners and enthusiasts eager to explore programming, animation, and interactivity. Get guided through game mechanics, graphics rendering, and event handling while building your own playable game. Walk away with practical experience and the confidence to develop more complex games!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  },
  {
    name: 'Esports',
    description: 'Gear up for the ultimate test of strategy, reflexes, and teamwork in our Esports Event! Experience the thrill of competitive gaming as you face off against fellow gamers in popular titles. Whether you\'re a casual player or a hardcore competitor, this event is designed to foster camaraderie, sharpen skills, and fuel your passion for gaming. Spectators are welcome too—cheer on your friends and enjoy the electrifying atmosphere of high-stakes competition!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  }
];

export const EventsSection: React.FC = () => {
  const handleRegister = (event: Event) => {
    if (event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    }
  };

  return (
    <section id="events" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16 sm:pt-20">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-3 sm:mb-4">
            EVENTS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Participate in exciting competitions and showcase your skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <Card 
              key={event.name} 
              className="glass-card border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-[1.02] fade-in stagger-animation group h-full flex flex-col"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <CardHeader className="flex-1">
                <CardTitle className="text-lg sm:text-xl font-bold font-rajdhani text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {event.name}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors mt-2 whitespace-pre-line">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4 pt-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full text-sm sm:text-base text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 group-hover:border-cyan-300 transition-colors py-2 sm:py-3"
                  onClick={() => handleRegister(event)}
                >
                  Register Now
                  <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};