import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { EventData } from '@/types/event';

// Event data
const eventData: EventData = {
  title: 'BGMI Tournament',
  date: '16th September 2025',
  venue: 'Aurora University, Room No: 306, 314',
  timings: '09:30 AM – 04:30 PM',
  description: 'A thrilling BGMI squad-format tournament where 4-player teams battle for glory. Strategy, teamwork, and reflexes will determine the ultimate champions.',
  registrationFee: ' ',
  
  rules: [
    {
      title: 'Tournament Rules',
      items: [
        'Teams must consist of exactly 4 players (squad format)',
        'Only Android/iOS smartphones allowed. No tablets, iPads, or emulators',
        'Strictly no hacks, macros, or unfair tools (except GFX Tool)',
        'In-game voice chat must be used. No external communication apps once match starts',
        'Connectivity issues are participants\' responsibility',
        'Late entries not allowed; be ready 15 minutes before scheduled time',
        'Abusive behavior, bug exploits, or match-fixing will result in immediate disqualification',
        'Organizers\' decision is final in all matters'
      ]
    },
    {
      title: 'Match Format',
      items: [
        'Classic Squad Mode (TPP)',
        'Erangel, Miramar, and Sanhok maps',
        'Custom Room with password protection',
        'Multiple qualifying rounds leading to finals',
        'Point system: 1st (15), 2nd (12), 3rd (10), 4th-5th (8), 6th-10th (5), 11th-16th (3), 17th-25th (1)',
        'Each kill: 1 point'
      ]
    }
  ],
  rewards: [
    '🏆 1st Place: Cash Prize + Certificates',
    '🥈 2nd Place: Gaming Accessories + Certificates',
    '🥉 3rd Place: In-game Currency + Certificates',
    '🎖 Participation Certificates for all participants'
  ],
  registrationLink: 'https://forms.gle/hC6ALVFCRkME49rw6',
  contact: {
    name: 'Ganesh',
    number: '7842329947'
  }
};

const BGMITournamentPage: React.FC = () => {
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
                <p className="text-green-400 mt-2">{eventData.registrationFee}</p>
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Tournament Guidelines</h3>
              <div className="space-y-6">
                {eventData.rules.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-gray-700/30 p-5 rounded-lg border border-cyan-500/20">
                    <h4 className="text-xl font-semibold text-cyan-200 mb-3">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-amber-300">Prizes & Rewards</h3>
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

                {/* <section className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-green-300">Registration Details</h3>
                <ul className="space-y-2 text-gray-200">
                    <li>• Registration is free of cost</li>
                    <li>• Limited slots available (first-come, first-served)</li>
                    <li>• All team members must be registered individually</li>
                    <li>• Teams must check-in 30 minutes before the tournament starts</li>
                </ul>
                </section> */}

            <section className="pt-4">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3>
              <div className="text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-300">Event Coordinator: {eventData.contact.name}</span>
                  <span className="text-gray-400">|</span>
                  <a 
                    href={`tel:${eventData.contact.number}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {eventData.contact.number}
                  </a>
                </div>
                <p className="mt-2 text-sm text-gray-400">For any queries regarding the tournament format or rules, please contact the event coordinator.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGMITournamentPage;
