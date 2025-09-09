import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, PhoneCall } from 'lucide-react';

interface Coordinator {
  name: string;
  role: 'Faculty' | 'Student';
  phone: string;
}

const coordinators: Coordinator[] = [
  // Faculty Coordinators
  { name: 'Mr. K. Ravikanth', role: 'Faculty', phone: '9100000112' },
  { name: 'Mr. R.K. Raman', role: 'Faculty', phone: '9550147310' },
  { name: 'Dr. Shameem Begum', role: 'Faculty', phone: '9100000141' },
  
  // Student Coordinators
  { name: 'D. Sudheendra', role: 'Student', phone: '7780572634' },
  { name: 'G. Dhruvanand', role: 'Student', phone: '8106749991' },
  { name: 'S. Meghana', role: 'Student', phone: '6302171848' },
  { name: 'J. Kiran', role: 'Student', phone: '9347371085' }
];

export const CoordinatorsSection: React.FC = () => {
  return (
    <section id="coordinators" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600 mb-4">
            COORDINATORS
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani">
            Meet the team behind Avishkruti 2025
          </p>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-rajdhani text-purple-400 mb-6 flex items-center gap-2">
            <User className="w-6 h-6" />
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coordinators.filter(coord => coord.role === 'Faculty').map((coordinator, index) => (
              <Card key={coordinator.name} 
                    className="glass-card border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 fade-in stagger-animation"
                    style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-rajdhani text-white">
                      {coordinator.name}
                    </CardTitle>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-400">
                      {coordinator.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-purple-900/30 rounded-full">
                      <PhoneCall className="w-4 h-4 text-purple-400" />
                    </div>
                    <a href={`tel:${coordinator.phone}`} className="font-rajdhani hover:text-white transition-colors">
                      {coordinator.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div>
          <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Student Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coordinators.filter(coord => coord.role === 'Student').map((coordinator, index) => (
              <Card key={coordinator.name}
                    className="glass-card border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 fade-in stagger-animation"
                    style={{ '--delay': `${index * 0.3}s` } as React.CSSProperties}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-rajdhani text-white">
                      {coordinator.name}
                    </CardTitle>
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                      {coordinator.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-cyan-900/30 rounded-full">
                      <PhoneCall className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a href={`tel:${coordinator.phone}`} className="font-rajdhani hover:text-white transition-colors">
                      {coordinator.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};