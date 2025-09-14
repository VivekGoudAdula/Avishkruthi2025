import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Event data type
type EventData = {
  title: string;
  date: string;
  venue: string;
  timings: string;
  description: string;
  rules: string[];
  rewards: {
    emoji: string;
    title: string;
    description: string;
  }[];
  registrationLink: string;
  participation: string;
};

// Event data
const eventData: EventData = {
  title: 'Code Arena – 2D Game Development with Python',
  date: '17th September 2025',
  venue: 'Rooms 219 & 220',
  timings: '2:00 PM – 4:50 PM',
  participation: 'Individual Participation',
  description: 'Code Arena is a hands-on workshop on 2D Game Development using Python. This activity is designed to introduce students to the fundamentals of game design and programming through the popular Python library Pygame. Participants will learn how to create interactive 2D games by coding player movement, handling collisions, designing levels, and adding sound/graphics. By the end of the workshop, participants will have a working mini-game and a strong foundation to build more advanced projects in the future.',
  rules: [
    'Participants must bring their own laptops with Python and Pygame pre-installed',
    'Basic knowledge of Python programming is recommended',
    'No prior game development experience required',
    'Workshop materials will be provided',
    'Participants should arrive 10 minutes before the scheduled start time'
  ],
  rewards: [
    {
      emoji: '🏆',
      title: 'Winners',
      description: 'Certificate of Excellence'
    },
    {
      emoji: '🥈',
      title: 'Runners-up',
      description: 'Certificate of Achievement'
    },
    {
      emoji: '🎓',
      title: 'All Participants',
      description: 'Certificate of Participation'
    }
  ],
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
};

const CodeArenaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Button 
          onClick={() => navigate(-1)}
          variant="ghost" 
          className="mb-6 text-cyan-400 hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </Button>
        
        <div className="bg-gray-800/50 rounded-xl p-8 shadow-2xl border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-1 text-cyan-400">{eventData.title}</h1>
              <div className="space-y-1 text-sm text-gray-300">
                <p><span className="font-medium">Date:</span> {eventData.date}</p>
                <p><span className="font-medium">Timings:</span> {eventData.timings}</p>
                <p><span className="font-medium">Venue:</span> {eventData.venue}</p>
                <p className="mt-2">{eventData.participation}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href={eventData.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Register Now
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Workshop Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {eventData.description}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {eventData.rules.map((rule, index) => (
                  <li key={index} className="leading-relaxed">
                    {rule}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">What You'll Get</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {eventData.rewards.map((reward, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30"
                    style={{
                      borderColor: 'rgba(14, 165, 233, 0.3)'
                    }}
                  >
                    <div className="text-2xl mb-2">{reward.emoji}</div>
                    <h4 className="font-semibold text-cyan-300">{reward.title}</h4>
                    <p className="text-sm text-gray-300">{reward.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-4">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3>
              <div className="text-gray-300 space-y-1">
                <p>Pavan Lal - 7093594078</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeArenaPage;
