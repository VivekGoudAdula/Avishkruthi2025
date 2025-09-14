import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Event data type
type EventData = {
  title: string;
  date: string;
  venue: string;
  timings: string;
  description: string;
  participation: string;
  rules: string[];
  rewards: {
    emoji: string;
    title: string;
    description: string;
  }[];
  registrationLink?: string;
};

// Event data mapping
const eventData: { [key: string]: EventData } = {
  'code-battle': {
    title: 'Code Battle',
    date: '15 & 16 September 2025',
    venue: 'Rooms 106 & 107A',
    timings: '11:00 AM – 3:00 PM',
    description: 'The Mini Hackathon – Code Battle is a competitive programming event divided into three progressive levels designed to test participants\' problem-solving skills, coding agility, and ability to create real-world impact simulations. Participants will be evaluated based on accuracy, speed, creativity, and relevance. The entire event is scored out of 100 marks, distributed across the three levels.',
    participation: 'Individual or Team of up to 4 members',
    rules: [
      'Open to all students, developers, and tech enthusiasts with basic coding knowledge.',
      'Participants must bring their own laptops with necessary software installed and bring charger or fully charged Laptop.',
      'Team Composition: Participants may compete individually or in teams of up to 4 members.',
      'All participants must register before the event deadline.',
      'C & Python are allowed unless specified otherwise.',
      'Internet access may be restricted during certain rounds.',
      'Participants are expected to maintain professionalism and refrain from plagiarism, cheating, or disruptive behavior.',
      'Participants may be disqualified for unethical practices or not adhering to guidelines.'
    ],
    rewards: [
      {
        emoji: '🏆',
        title: 'Winners',
        description: 'Certificates for all team members'
      },
      {
        emoji: '🥈',
        title: 'Runners-up',
        description: 'Certificates for all team members'
      },
      {
        emoji: '🎖',
        title: 'Participation',
        description: 'Certificates for all participants'
      }
    ],
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  }
};

const CodeBattlePage: React.FC = () => {
  const navigate = useNavigate();
  const { eventName } = useParams<{ eventName: string }>();
  const [event, setEvent] = useState<EventData | null>(null);

  useEffect(() => {
    // Default to 'code-battle' if no eventName is provided
    const eventKey = eventName || 'code-battle';
    setEvent(eventData[eventKey] || eventData['code-battle']);
  }, [eventName]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-cyan-400 mb-4">Event Not Found</h1>
          <p className="text-gray-300 mb-6">The requested event could not be found.</p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

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
              <h1 className="text-4xl font-bold mb-1 text-cyan-400">{event.title}</h1>
              <div className="space-y-1 text-sm text-gray-300">
                <p><span className="font-medium">Date:</span> {event.date}</p>
                <p><span className="font-medium">Timings:</span> {event.timings}</p>
                <p><span className="font-medium">Venue:</span> {event.venue}</p>
                <p className="mt-2">{event.participation}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Register Now
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Event Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Rules and Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {event.rules.map((rule, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: rule }} />
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Rewards</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {event.rewards.map((reward, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30"
                    style={{
                      borderColor: index === 0 ? 'rgba(34, 211, 238, 0.3)' : 
                                 index === 1 ? 'rgba(234, 179, 8, 0.3)' : 
                                 'rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <div className="text-2xl mb-2">{reward.emoji}</div>
                    <h4 className="font-semibold text-cyan-300">{reward.title}</h4>
                    <p className="text-sm text-gray-300">{reward.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBattlePage;
