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
  participation: string;
  rules: string[];
  rewards: {
    emoji: string;
    title: string;
    description: string;
  }[];
  registrationLink: string;
};

// Event data mapping
const eventData: EventData = {
  title: 'Creative Clash',
  date: '16/09/2025',
  venue: 'A-Block, Room No. 202, 203',
  timings: '9:30 AM – 12:30 PM',
  description: 'Creative Clash is a poster designing competition where participants use Canva to create posters. The posters should be creative, meaningful, and visually appealing. Participants must design using only Canva with the default sizes available on the platform.',
  participation: 'Group and Individual can participate – Group size: Minimum 2, Maximum 4',
  rules: [
    'Posters must be designed only in Canva.',
    'Participants should use the default size available in Canva (no custom sizes).',
    'Only original work is allowed – no plagiarism or copying from online templates.',
    'Internet resources like stock images, icons, and fonts available inside Canva can be used.',
    'Participants must submit their design within the given time limit.',
    'Posters should not include offensive, political, or inappropriate content.',
    'Each team/individual can submit only one final poster.',
    'Judges\' decision will be final.'
  ],
  rewards: [
    {
      emoji: '🏆',
      title: 'Winner',
      description: 'Certificates'
    },
    {
      emoji: '🥈',
      title: 'Runner-up',
      description: 'Certificates'
    },
    {
      emoji: '🎖',
      title: 'Participation',
      description: 'Certificates'
    }
  ],
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdmYjsDb-BlHmS2Ud6jZ0KZdZKQCN1g-zhWgPu8fsMKwq73Iw/viewform?usp=sharing&ouid=118445173454149978455'
};

const CreativeClashPage: React.FC = () => {
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
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Event Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {eventData.description}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Rules and Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {eventData.rules.map((rule, index) => (
                  <li key={index} className="leading-relaxed">
                    {rule}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rewards</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {eventData.rewards.map((reward, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30"
                    style={{
                      borderColor: index === 0 ? 'rgba(234, 179, 8, 0.3)' : 
                                 index === 1 ? 'rgba(156, 163, 175, 0.3)' : 
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

            <section className="pt-4">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3>
              <div className="text-gray-300 space-y-1">
                <p>Dhruva - 8106749991</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeClashPage;
