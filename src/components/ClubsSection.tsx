import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Brain, Settings, Code, Palette, Gamepad2, Coins, Eye } from 'lucide-react';

interface Club {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const clubs: Club[] = [
  { name: 'Cyber Crytix Club', icon: <Shield className="w-12 h-12" />, color: 'from-red-500 to-orange-600' },
  { name: 'AI Innovators Club', icon: <Brain className="w-12 h-12" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'System Design Club', icon: <Settings className="w-12 h-12" />, color: 'from-green-500 to-teal-600' },
  { name: 'CodeVerse Club', icon: <Code className="w-12 h-12" />, color: 'from-purple-500 to-indigo-600' },
  { name: 'Creativerse Club', icon: <Palette className="w-12 h-12" />, color: 'from-pink-500 to-rose-600' },
  { name: 'Game Development Club', icon: <Gamepad2 className="w-12 h-12" />, color: 'from-yellow-500 to-orange-600' },
  { name: 'Algorand Club', icon: <Coins className="w-12 h-12" />, color: 'from-emerald-500 to-green-600' },
  { name: 'Mirage', icon: <Eye className="w-12 h-12" />, color: 'from-violet-500 to-purple-600' }
];

export const ClubsSection: React.FC = () => {
  return (
    <section id="clubs" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-4">
            OUR CLUBS
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani">
            Explore the vibrant community of technical clubs at Aurora University
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clubs.map((club, index) => (
            <Card 
              key={club.name}
              className="glass-card border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 fade-in stagger-animation group cursor-pointer"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <CardContent className="p-6 text-center">
                <div className={`bg-gradient-to-br ${club.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {club.icon}
                  </div>
                </div>
                <h3 className="text-lg font-rajdhani font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {club.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Club Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center glass-card p-6 rounded-lg">
            <div className="text-4xl font-bold font-orbitron text-cyan-400 mb-2">8</div>
            <div className="text-gray-300 font-rajdhani">Active Clubs</div>
          </div>
          <div className="text-center glass-card p-6 rounded-lg">
            <div className="text-4xl font-bold font-orbitron text-purple-400 mb-2">500+</div>
            <div className="text-gray-300 font-rajdhani">Club Members</div>
          </div>
          <div className="text-center glass-card p-6 rounded-lg">
            <div className="text-4xl font-bold font-orbitron text-green-400 mb-2">26</div>
            <div className="text-gray-300 font-rajdhani">Total Events</div>
          </div>
        </div>
      </div>
    </section>
  );
};