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
  rounds: Array<{
    name: string;
    description: string;
    preparationTime: string;
  }>;
  rules: string[];
  rewards: string[];
  registrationLink: string;
  contacts: Array<{
    name: string;
    number: string;
  }>;
};

// Event data
const eventData: EventData = {
  title: 'Case Crackdown',
  date: '17/09/2025',
  venue: 'Room no. 210',
  timings: '9:30 AM - 1:00 PM',
  description: 'Case Crackdown is a battle of analytical minds where participants tackle real-world business challenges. Teams will analyze case studies, identify critical issues, and present structured, impactful solutions under time pressure. This is the ultimate test of problem-solving, critical thinking, and presentation skills—just like true business leaders.',
  
  rounds: [
    {
      name: 'Round 1',
      description: 'Easy Case (short case)',
      preparationTime: '30 minutes'
    },
    {
      name: 'Round 2',
      description: 'Difficult Case (complex case)',
      preparationTime: '30 minutes'
    }
  ],
  
  rules: [
    'Each team will get 30 minutes of preparation time per round',
    'Presentation time: 5 – 7 minutes',
    'Teams may use charts, PPTs, or handwritten notes for their presentation',
    'Judging will be based on analysis, communication, problem-solving, and presentation skills',
    'The decision of the judges is final'
  ],
  
  rewards: [
    'Participation certificates',
    'Winner and Runner-up trophies'
  ],
  
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform',
  
  contacts: []
};

const CaseCrackdownPage: React.FC = () => {
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
                {/* <p className="text-amber-300 mt-2">Registration Deadline: 16th September 2025</p> */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventData.rounds.map((round, index) => (
                  <div key={index} className="bg-gray-700/30 p-5 rounded-lg border border-cyan-500/20">
                    <h4 className="text-xl font-semibold text-cyan-200 mb-2">{round.name}</h4>
                    <p className="text-gray-300 mb-2">{round.description}</p>
                    <p className="text-sm text-cyan-100">
                      <span className="font-medium">Preparation Time:</span> {round.preparationTime}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Rules and Guidelines</h3>
              <div className="bg-gray-700/30 p-5 rounded-lg border border-cyan-500/20">
                <ul className="space-y-3">
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

            <section className="pt-4">
              {/* <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Contact Information</h3> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventData.contacts.map((contact, index) => (
                  <div key={index} className="bg-gray-800/30 p-4 rounded-lg">
                    <p className="text-cyan-300">{contact.name}</p>
                    <a 
                      href={`tel:${contact.number}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
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

export default CaseCrackdownPage;
