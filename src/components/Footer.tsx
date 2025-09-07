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

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* University Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-2">
                AVISHKRUTI 2025
              </h3>
              <p className="text-gray-300 font-rajdhani text-lg">
                A National Level Technical Fest
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="font-rajdhani">Aurora University, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="font-rajdhani">+91 91000 00112</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="font-rajdhani">info@avishkruti.aurora.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-rajdhani text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#events" className="block text-gray-300 hover:text-cyan-400 transition-colors font-rajdhani">
                Events
              </a>
              <a href="#clubs" className="block text-gray-300 hover:text-purple-400 transition-colors font-rajdhani">
                Clubs
              </a>
              <a href="#coordinators" className="block text-gray-300 hover:text-green-400 transition-colors font-rajdhani">
                Coordinators
              </a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors font-rajdhani">
                Registration
              </a>
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors font-rajdhani">
                Schedule
              </a>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-rajdhani text-white mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400"
                onClick={() => window.open('https://twitter.com/aurora_university', '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 text-blue-400"
                onClick={() => window.open('https://linkedin.com/school/aurora-university', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-pink-400/50 hover:border-pink-400 hover:bg-pink-400/10 text-pink-400"
                onClick={() => window.open('https://instagram.com/aurora_university', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10 text-purple-400"
                onClick={() => window.open('https://github.com/aurora-university', '_blank')}
              >
                <Github className="w-4 h-4" />
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 font-rajdhani mb-2">
                Stay updated with latest announcements
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-rajdhani"
                />
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-rajdhani">
              © {currentYear} Aurora University - Avishkruti Technical Fest. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400 font-rajdhani">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};