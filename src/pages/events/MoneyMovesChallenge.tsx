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
  contacts: {
    name: string;
    number: string;
  }[];
};

// Event data
const eventData: EventData = {
  title: 'Money Moves Challenge',
  date: '19th September 2025',
  venue: 'Room No: 210',
  timings: '9:30 AM - 11:30 AM',
  participation: 'Individual or Teams (2-3 members)',
  description: 'Money Moves Challenge is a fast-paced financial simulation where participants must make smart investment and budgeting decisions under unpredictable business scenarios. From market crashes to sudden opportunities, every choice matters. This challenge tests your financial literacy, strategic thinking, and risk management skills as you balance logic, accuracy, and adaptability.',
  rules: [
    {
      title: 'Round 1: Easy Scenario',
      items: [
        'Introduction to financial concepts and basic scenarios',
        'Participants make initial investment and budgeting decisions',
        'Focus on fundamental financial principles',
        'Time limit: 45 minutes'
      ]
    },
    {
      title: 'Round 2: Harder Scenario',
      items: [
        'Complex financial scenarios with market fluctuations',
        'Advanced investment options and budget constraints',
        'Participants must justify their financial decisions',
        'Time limit: 1 hour'
      ]
    },
    {
      title: 'General Rules & Guidelines',
      items: [
        'Participants must allocate resources within given constraints',
        'Decisions should be justified with sound financial reasoning',
        'Judging criteria: Logic, risk management, reasoning, and accuracy',
        'The decision of the judges is final'
      ]
    }
  ],
  rewards: [
    {
      emoji: '🏆',
      title: 'Winner',
      description: 'Trophy and certificate'
    },
    {
      emoji: '🥈',
      title: 'Runner-up',
      description: 'Trophy and certificate'
    },
    {
      emoji: '📜',
      title: 'All Participants',
      description: 'Participation certificates'
    }
  ],
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform',
  contacts: [
    { name: 'Harith', number: '7569184064' },
    { name: 'Rishi', number: '8639244022' }
  ]
};

const MoneyMovesChallengePage: React.FC = () => {
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Competition Rounds</h3>
              <div className="space-y-6">
                {eventData.rules.map((round, roundIndex) => (
                  <div key={roundIndex} className="bg-gray-700/30 p-5 rounded-lg border border-cyan-500/20">
                    <h4 className="text-xl font-semibold text-cyan-200 mb-3">{round.title}</h4>
                    <ul className="space-y-2">
                      {round.items.map((item, itemIndex) => (
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rewards</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventData.contacts.map((contact, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-gray-300">{contact.name}</p>
                    <a 
                      href={`tel:${contact.number}`} 
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      {contact.number}
                    </a>
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

export default MoneyMovesChallengePage;
