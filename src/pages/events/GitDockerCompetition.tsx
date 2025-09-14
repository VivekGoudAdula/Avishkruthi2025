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
  title: 'Git/Docker Competition',
  date: '15 September 2025',
  venue: 'Aurora University - Room 219',
  timings: '2:00 PM – 3:30 PM',
  participation: 'Individual or Team of up to 3 members',
  description: 'Test your skills in version control and containerization at our Git & Docker Competition! Participants will face real-world challenges that involve using Git for collaborative coding, branching, and merging, along with Docker for building, running, and deploying containerized applications. This competition is designed to sharpen problem-solving, teamwork, and DevOps skills in a practical, time-bound environment. Compete, learn, and showcase your expertise while standing out as a developer ready for modern tech challenges!',
  rules: [
    'Participants must bring their own laptops',
    'Teams must consist of 1-3 members',
    'All work must be done during the competition time',
    'Internet access will be provided for documentation only',
    'Judges\' decisions are final'
  ],
  rewards: [
    {
      emoji: '🏆',
      title: 'Winner',
      description: 'Winner Certificate'
    },
    {
      emoji: '🥈',
      title: 'Runner-up',
      description: 'Runner-up Certificate'
    },
    {
      emoji: '🎖️',
      title: 'Participation',
      description: 'Participation Certificate'
    }
  ],
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdsw2wRLHWdHA1oo3xopXy1j4xkxX_0y3-Pt5BZ2ksvN1hKCw/viewform?usp=header'
};

const GitDockerCompetitionPage: React.FC = () => {
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
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Competition Overview</h3>
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Prizes</h3>
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
                <p>Atharva Sanpurkar - 8074753280</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitDockerCompetitionPage;
