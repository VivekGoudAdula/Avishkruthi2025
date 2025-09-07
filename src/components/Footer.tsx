import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* University Info - Full width on mobile, 5 columns on desktop */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                AVISHKRUTI 2025
              </h3>
              <p className="text-gray-300 font-rajdhani text-lg">
                A National Level Technical Fest
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="font-rajdhani">Aurora University, Uppal, Hyderabad, Telangana - 500010</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Full width on mobile, 3 columns on desktop */}
          <div className="md:col-span-3 md:col-start-8 space-y-4">
            <h4 className="text-xl font-bold font-rajdhani text-white">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#events" className="block text-gray-300 hover:text-cyan-400 transition-colors font-rajdhani text-lg">
                Events
              </a>
              <a href="#clubs" className="block text-gray-300 hover:text-purple-400 transition-colors font-rajdhani text-lg">
                Clubs
              </a>
              <a href="#coordinators" className="block text-gray-300 hover:text-green-400 transition-colors font-rajdhani text-lg">
                Coordinators
              </a>
            </nav>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 font-rajdhani text-center md:text-left">
            © {currentYear} Aurora University - Avishkruti Technical Fest. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400 font-rajdhani text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};