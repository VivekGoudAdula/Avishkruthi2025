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
  rewards: string[];
  registrationLink: string;
  contact: {
    name: string;
    number: string;
  };
};

// Event data
const eventData: EventData = {
  title: 'Zero-Day Dash CTF',
  date: '18th September 2025',
  venue: 'Aurora University, Room No: 106, 107',
  timings: '9:30 AM – 12:30 PM',
  description: 'A fast-paced Capture The Flag competition where individuals or teams solve challenges in Web Exploitation, Cryptography, Forensics, OSINT, and Reverse Engineering to capture "flags" and earn points.',
  
  rules: [
    'Open to all; teams up to 4 members allowed',
    'Challenges hosted on CTFd platform',
    'Points: Easy (25), Medium (50), Hard (100). Dynamic scoring may apply',
    'Flags must be submitted on the portal only. Incorrect attempts may incur penalties',
    'Prohibited: attacking platform, brute force, DoS, flag sharing',
    'Professional behavior and fair play required',
    'Time limit: 3 hours (9:30 AM – 12:30 PM)',
    'Tie-breakers: accuracy → speed → challenge coverage → organizers\' decision'
  ],
  
  rewards: [
    'Top 3 Teams/Participants – Certificates of Recognition + Leaderboard Feature',
    'All Participants – Certificates of Participation'
  ],
  
  registrationLink: 'https://forms.gle/NUFjKyKtkMDF1xCH7',
  
  contact: {
    name: 'T. Vignesh',
    number: '7093316784'
  }
};

const ZeroDayDashCTFPage: React.FC = () => {
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rules and Guidelines</h3>
              <div className="bg-gray-700/30 p-5 rounded-lg border border-cyan-500/20">
                <ul className="space-y-2">
                  {eventData.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-amber-300">Rewards</h3>
                <ul className="space-y-2">
                  {eventData.rewards.map((reward, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span className="text-gray-200">{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pt-4">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3>
              <div className="text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-300">{eventData.contact.name}</span>
                  <span className="text-gray-400">-</span>
                  <a 
                    href={`tel:${eventData.contact.number}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {eventData.contact.number}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroDayDashCTFPage;
