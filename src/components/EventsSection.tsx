import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Code, Users, Trophy } from 'lucide-react';

interface Event {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

const technicalEvents: Event[] = [
  { name: 'Buildthon', description: 'Build innovative solutions in 48 hours. Showcase your development skills and creativity.', icon: <Code className="w-5 h-5" /> },
  { name: 'Code Arena', description: 'Competitive programming challenge. Test your algorithmic problem-solving skills.', icon: <Trophy className="w-5 h-5" /> },
  { name: '2D Code Battle', description: 'QR code based technical treasure hunt. Decode, solve, and advance through levels.', icon: <Code className="w-5 h-5" /> },
  { name: 'Paper Presentation', description: 'Present your research and technical papers. Share innovative ideas with experts.', icon: <Users className="w-5 h-5" /> },
  { name: 'Project Presentation', description: 'Showcase your technical projects. Demonstrate real-world applications and solutions.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Poster Presentation', description: 'Visual representation of technical concepts. Design compelling research posters.', icon: <Users className="w-5 h-5" /> },
  { name: 'Venture Verse', description: 'Startup pitch competition. Present your business ideas and entrepreneurial vision.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Case Crackdown', description: 'Business case study analysis. Solve real-world business challenges strategically.', icon: <Code className="w-5 h-5" /> },
  { name: 'Datathon', description: 'Data science competition. Analyze datasets and build predictive models.', icon: <Code className="w-5 h-5" /> },
  { name: 'Git/Docker WS', description: 'Hands-on workshop on version control and containerization technologies.', icon: <Users className="w-5 h-5" /> },
  { name: 'Git/Docker Competition', description: 'Test your DevOps skills in version control and container orchestration.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Smart Contract Sprint', description: 'Blockchain development challenge. Create decentralized applications and smart contracts.', icon: <Code className="w-5 h-5" /> },
  { name: 'AlgoVision', description: 'Algorithm visualization and implementation challenge. Make complex algorithms understandable.', icon: <Code className="w-5 h-5" /> },
  { name: 'Capture the Flag', description: 'Cybersecurity competition. Find vulnerabilities and secure systems from attacks.', icon: <Trophy className="w-5 h-5" /> }
];

const nonTechnicalEvents: Event[] = [
  { name: 'AU Shark Tank', description: 'Pitch your business ideas to investor panel. Secure funding for your startup vision.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Creative Clash', description: 'Unleash your creativity in various artistic challenges. Design, create, and impress.', icon: <Users className="w-5 h-5" /> },
  { name: 'Meme Mania', description: 'Create viral-worthy memes. Show your humor and internet culture knowledge.', icon: <Users className="w-5 h-5" /> },
  { name: 'E-Sports', description: 'Competitive gaming tournaments. Battle in popular games and win exciting prizes.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Biz Whiz Quiz', description: 'Business knowledge quiz competition. Test your understanding of corporate world.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'HR Face Off', description: 'Human resources simulation challenge. Handle workplace scenarios and conflicts.', icon: <Users className="w-5 h-5" /> },
  { name: 'Money Moves Challenge', description: 'Financial literacy and investment strategy competition. Make smart money decisions.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Sell it in Seconds', description: 'Quick sales pitch challenge. Convince customers in minimal time with maximum impact.', icon: <Users className="w-5 h-5" /> },
  { name: "Eagle's Eye", description: 'Observation and detective skills challenge. Find hidden clues and solve mysteries.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'War of Words', description: 'Debate and public speaking competition. Argue your point with eloquence and logic.', icon: <Users className="w-5 h-5" /> },
  { name: 'Strategy Masters', description: 'Strategic thinking and planning competition. Outsmart opponents with tactical brilliance.', icon: <Trophy className="w-5 h-5" /> },
  { name: 'Bargain Bench', description: 'Negotiation skills challenge. Get the best deals through persuasion and strategy.', icon: <Users className="w-5 h-5" /> }
];

export const EventsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const handleRegister = (eventName: string) => {
    // Open a registration form (placeholder)
    const registrationUrl = `https://forms.google.com/register?event=${encodeURIComponent(eventName)}`;
    window.open(registrationUrl, '_blank');
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sticky top-16 sm:top-20 z-20 bg-slate-900 pt-2 pb-4 -mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800 border border-slate-700">
            <TabsTrigger 
              value="technical" 
              className="font-rajdhani text-sm sm:text-base md:text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white py-2 sm:py-3"
            >
              <span className="truncate">Technical ({technicalEvents.length})</span>
            </TabsTrigger>
            <TabsTrigger 
              value="non-technical"
              className="font-rajdhani text-sm sm:text-base md:text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white py-2 sm:py-3"
            >
              <span className="truncate">Non-Tech ({nonTechnicalEvents.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {technicalEvents.map((event, index) => (
                <Card 
                  key={event.name} 
                  className="glass-card border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-[1.02] fade-in stagger-animation group h-full flex flex-col"
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors flex-shrink-0">
                        {event.icon}
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold font-rajdhani text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {event.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors line-clamp-3">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4 pt-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full text-sm sm:text-base text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 group-hover:border-cyan-300 transition-colors py-2 sm:py-3"
                      onClick={() => handleRegister(event.name)}
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-technical" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {nonTechnicalEvents.map((event, index) => (
                <Card 
                  key={event.name} 
                  className="glass-card border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-[1.02] fade-in stagger-animation group h-full flex flex-col"
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0">
                        {event.icon}
                      </div>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-400">
                        Non-Technical
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-rajdhani text-white group-hover:text-purple-300 transition-colors">
                      {event.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4 font-rajdhani">
                      {event.description}
                    </CardDescription>
                    <Button 
                      onClick={() => handleRegister(event.name)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 font-rajdhani"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};