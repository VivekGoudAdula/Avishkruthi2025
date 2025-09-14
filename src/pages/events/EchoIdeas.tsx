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
    title: string;
    items: string[];
  };
  registrationLink: string;
  registrationFee: string;
  contact: {
    name: string;
    number: string;
  }[];
};

// Event data
const eventData: EventData = {
  title: 'Echo Ideas (Ideathon)',
  date: '15th September 2025',
  venue: 'Aurora Deemed to be University, Peerzadiguda – Room 306 (A-Block)',
  timings: 'Starts at 1:30 PM',
  description: 'Echo Ideas is a dynamic platform where young innovators get the stage to pitch their business ideas in front of an enthusiastic crowd and expert panel. With just 5 minutes per pitch, participants must deliver their vision with clarity, creativity, and confidence. This is your shot to transform raw ideas into real opportunities with guidance, recognition, and rewards.',
  registrationFee: '₹100 per head (paid on the spot)',
  rules: [
    {
      title: 'Event Guidelines',
      items: [
        'Team Size: Maximum 3 members per team',
        'Pitch Duration: 5 minutes per team',
        'Registration Fee: ₹100 per head (cash only, paid on the spot)',
        'Dress Code: Formal attire is mandatory',
        'All ideas must be original',
        'Presentations must be made by registered team members only',
        'Teams must report 30 minutes before the event start time'
      ]
    },
    {
      title: 'Judging Criteria',
      items: [
        'Innovation and creativity of the idea',
        'Feasibility and business potential',
        'Clarity and effectiveness of the pitch',
        'Market understanding and problem-solution fit',
        'Quality of presentation and delivery'
      ]
    }
  ],
  rewards: {
    title: 'Prizes & Benefits',
    items: [
      'Cash Prizes for 1st, 2nd & 3rd place winners',
      'Certificates for winners & participants',
      'Direct Mentorship from T-Hub Startups',
      'Technology Development Support for winning teams',
      'Networking opportunities with industry experts',
      'Potential incubation support for outstanding ideas'
    ]
  },
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdPt643PNTwpVQ1K1mMzgC0bpVgqDKuZ2mOY1vLqFKqDWusoQ/viewform?usp=sharing&ouid=112729422460956689523',
  contact: [
    { name: 'Sreesha Thummalapalli', number: '9052126897' },
    { name: 'Mokshesh Goud', number: '8499856776' }
  ]
};

const EchoIdeasPage: React.FC = () => {
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
                <p className="text-amber-300 mt-2">Registration Fee: {eventData.registrationFee}</p>
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
              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-300">{eventData.rewards.title}</h3>
                <ul className="space-y-3">
                  {eventData.rewards.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pt-4">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3>
              <div className="text-gray-300 space-y-2">
                {eventData.contact.map((person, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-cyan-300">{person.name}</span>
                    <span className="text-gray-400">-</span>
                    <a 
                      href={`tel:${person.number}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {person.number}
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

export default EchoIdeasPage;
