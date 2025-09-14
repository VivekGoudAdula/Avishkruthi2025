import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { EventData } from '@/types/event';

// Event data mapping
const eventData: EventData = {
  title: 'AU Shark Tank',
  date: '16/09/2025',
  venue: 'A-Block, Room No. 219, 220',
  timings: '1:30 PM – 4:00 PM',
  description: 'AU Shark Tank is an activity where participants present their business or startup ideas in front of judges. They will act like entrepreneurs who pitch their idea, product, or service in a simple and clear way. The aim is to check creativity, problem-solving, and presentation skills.',
  participation: 'Group and Individual can participate – Group size: Minimum 2, Maximum 4',
  rules: [
    {
      title: 'General Rules',
      items: [
        'Each team/individual gets limited time to pitch (decided by organizers).',
        'Ideas must be original (no direct copying).',
        'Use of slides, props, or demos is allowed.',
        'Every member of the group should take part in the pitch.',
        'Judges\' decision is final.'
      ]
    }
  ],
  rewards: [
    '🏆 Winner: Certificates',
    '🥈 Runner-up: Certificates',
    '🎖 Participation: Certificates'
  ],
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdmYjsDb-BlHmS2Ud6jZ0KZdZKQCN1g-zhWgPu8fsMKwq73Iw/viewform?usp=sharing&ouid=118445173454149978455',
  contact: {
    name: 'Event Coordinator',
    number: '+91 XXXXXXXXXX'
  },
  registrationFee: '₹100 per participant'
};

const AUSharkTankPage: React.FC = () => {
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
                <p> <span className="font-medium">Timings:</span> {eventData.timings}</p>
                <p> <span className="font-medium">Venue:</span> {eventData.venue}</p>
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
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Event Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {eventData.description}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Rules and Guidelines</h3>
              <div className="space-y-4">
                {eventData.rules.map((rule, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-cyan-300 mb-2">{rule.title}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      {rule.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rewards</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {eventData.rewards.map((reward, index) => {
                  // Extract emoji and text from the reward string
                  const emoji = reward.match(/^[\p{Emoji}]+/u)?.[0] || '🏆';
                  const text = reward.replace(/^[\p{Emoji}\s]+/u, '');
                  
                  return (
                    <div 
                      key={index}
                      className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30 flex flex-col items-center text-center"
                      style={{
                        borderColor: index === 0 ? 'rgba(234, 179, 8, 0.3)' : 
                                     index === 1 ? 'rgba(156, 163, 175, 0.3)' : 
                                     'rgba(168, 85, 247, 0.3)'
                      }}
                    >
                      <div className="text-3xl mb-2">{emoji}</div>
                      <p className="text-gray-300">{text}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="pt-4">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3>
              <div className="text-gray-300 space-y-1">
                <p>Dhruva - 8106749991</p>
                <p>Sudheendra - 7780572634</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AUSharkTankPage;
