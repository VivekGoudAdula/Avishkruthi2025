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
  rules: {
    title: string;
    items: string[];
  }[];
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
  title: 'Poster Presentation 2025',
  date: '19th September 2025',
  venue: 'Room 314, A Block, Aurora Deemed to be University',
  timings: '9:30 AM – 12:30 PM',
  participation: 'Individual or Team (max 3 members)',
  description: 'Showcase your creativity, research, and innovative thinking through impactful posters! Present your ideas in trending domains and let your vision inspire change, encourage discussion, and promote innovation. It\'s an opportunity to combine knowledge with creativity and make your ideas visible to peers and experts alike.',
  rules: [
    {
      title: 'Participation Guidelines',
      items: [
        'Open to both individual and team participation (maximum 3 members per team)',
        'Posters should clearly present a problem, solution, and potential impact',
        'Use a combination of visuals and brief explanations',
        'Creativity, clarity, research depth, and presentation style will be judged',
        'Participants must submit their poster files in advance',
        'Printed copies must be brought for display on the event day'
      ]
    },
    {
      title: 'Judging Criteria',
      items: [
        'Originality and creativity of the concept',
        'Clarity of presentation and visual appeal',
        'Depth of research and analysis',
        'Relevance to current trends and real-world applications',
        'Effectiveness in communicating the core message'
      ]
    }
  ],
  rewards: [
    {
      emoji: '🏆',
      title: 'Best Posters',
      description: 'Recognition and certificates'
    },
    {
      emoji: '📜',
      title: 'All Participants',
      description: 'Participation certificates'
    },
    {
      emoji: '✨',
      title: 'Networking',
      description: 'Opportunities with fellow innovators and experts'
    }
  ],
  registrationLink: 'https://forms.gle/kL5MfCs8F8SmJkvg6'
};

const PosterPresentationPage: React.FC = () => {
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Event Guidelines</h3>
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rewards & Benefits</h3>
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
                <p>Thanuja Sree - 8639802087</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterPresentationPage;
