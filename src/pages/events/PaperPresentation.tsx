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
  judgingCriteria: Array<{name: string; marks: number}>;
  rewards: string[];
  registrationLink: string;
  contact: {
    name: string;
    number: string;
  };
};

// Event data
const eventData: EventData = {
  title: 'Paper Presentation Competition',
  date: '18th September 2025',
  venue: 'Aurora University, Seminar Hall',
  timings: '9:30 AM – 12:30 PM',
  description: 'A platform for students and researchers to present their technical papers in diverse domains. Participants will showcase research, innovation, and communication skills before a panel of judges.',
  
  rules: [
    {
      title: 'Submission Guidelines',
      items: [
        'Individual or team (max 4 members, cross-college allowed)',
        'Papers must follow IEEE/standard academic format',
        'Submit abstract (≤300 words) + full paper before deadline',
        'Bring hard copy + soft copy PPT on event day',
        'Strict adherence to deadlines required',
        'Plagiarism will lead to immediate disqualification'
      ]
    },
    {
      title: 'Presentation Rules',
      items: [
        'Presentation time: 15 minutes + 2 minutes Q&A',
        'Visual/video aids allowed (within time limit)',
        'All team members must be present during the presentation'
      ]
    }
  ],
  
  judgingCriteria: [
    { name: 'Abstract', marks: 20 },
    { name: 'Technical Content', marks: 30 },
    { name: 'Presentation', marks: 20 },
    { name: 'Innovation', marks: 15 },
    { name: 'Q&A', marks: 15 }
  ],
  
  rewards: [
    'Best Paper Presentation',
    'Most Innovative Idea',
    'Best Technical Content',
    'Certificates of Participation for all'
  ],
  
  registrationLink: 'https://forms.gle/6dornBQqZiqsMJtt6',
  
  contact: {
    name: 'K. Snitha Pragna Vaishali',
    number: '7793998371'
  }
};

const PaperPresentationPage: React.FC = () => {
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
                <p className="text-amber-300 mt-2">Submission Deadline: 17th September 2025</p>
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
              <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Judging Criteria (100 Marks)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventData.judgingCriteria.map((criterion, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-purple-200">{criterion.name}</span>
                        <span className="text-cyan-300 font-medium">{criterion.marks} marks</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full" 
                          style={{ width: `${(criterion.marks / 30) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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

export default PaperPresentationPage;
