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
    title?: string;
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
  title: 'Sell It in Seconds',
  date: '18th September 2025',
  venue: 'Room No: 210',
  timings: '2:30 PM - 4:00 PM',
  description: 'Sell It in Seconds is the ultimate test of persuasion, creativity, and quick thinking. Participants must transform random everyday objects into "must-have" products with engaging, on-the-spot sales pitches. The challenge lies in convincing the audience and securing the most mock "sales" to emerge as the master salesperson.',
  rules: [
    {
      title: 'Competition Guidelines',
      items: [
        'Each participant will be given a random box item to sell',
        'Preparation time: 10 minutes to plan the pitch',
        'Participants must convince audience/staff to make mock purchases (proof of sales required)',
        'The winner will be decided based on maximum buyers convinced or highest mock earnings',
        'The decision of the judges is final'
      ]
    },
    // {
    //   title: 'Judging Criteria',
    //   items: [
    //     'Creativity in product presentation',
    //     'Persuasiveness and sales technique',
    //     'Audience engagement and interaction',
    //     'Overall presentation skills',
    //     'Number of successful mock sales'
    //   ]
    // }
  ],
  rewards: [
    // {
    //   emoji: '🏆',
    //   title: 'Master Salesperson',
    //   description: 'Trophy and certificate'
    // },
    // {
    //   emoji: '🥈',
    //   title: 'Runner-up',
    //   description: 'Certificate of excellence'
    // },
    // {
    //   emoji: '🎯',
    //   title: 'Most Creative Pitch',
    //   description: 'Special mention and certificate'
    // }
  ],
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform',
  contacts: [
    { name: 'Harith', number: '7569184064' },
    { name: 'Nikith', number: '9182146707' }
  ]
};

const SellItInSecondsPage: React.FC = () => {
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
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Competition Details</h3>
              <div className="space-y-6">
                {eventData.rules.map((section, index) => (
                  <div key={index} className="bg-gray-700/30 p-5 rounded-lg border border-cyan-500/20">
                    {section.title && (
                      <h4 className="text-xl font-semibold text-cyan-200 mb-3">{section.title}</h4>
                    )}
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
              {/* <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rewards</h3> */}
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

            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Ready to showcase your sales skills? Register now and get ready to sell anything to anyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItInSecondsPage;
