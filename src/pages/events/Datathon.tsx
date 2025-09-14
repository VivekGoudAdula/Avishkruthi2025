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
  evaluation: {
    title: string;
    criteria: Array<{name: string; weight: number}>;
  };
  rewards: {
    title: string;
    items: string[];
  };
  registrationLink: string;
  contact: {
    name: string;
    number: string;
  };
};

// Event data
const eventData: EventData = {
  title: 'Datathon – Aurora Techfest 2025',
  date: '15th September 2025',
  venue: 'Aurora University, Room No: 202, 203',
  timings: '11:10 AM – 4:10 PM',
  description: 'A machine learning competition where participants preprocess, analyze, and model a given dataset to deliver accurate predictions. An event to showcase data science innovation, problem-solving, and coding excellence.',
  
  rules: [
    {
      title: 'Participation Rules',
      items: [
        'Open to all (inside & outside college)',
        'Teams up to 3 members',
        'Dataset will be provided on event day',
        'No external datasets or pre-trained models allowed',
        'Code must be original and reproducible (no plagiarism)',
        'Participants must bring their own laptops with internet access',
        'Ethical behavior is required; violations will result in disqualification'
      ]
    },
    {
      title: 'Submission Requirements',
      items: [
        'Final code implementation',
        'Prediction results',
        'Short report explaining the approach',
        'All files must be submitted before the deadline'
      ]
    }
  ],
  
  evaluation: {
    title: 'Evaluation Criteria',
    criteria: [
      { name: 'Accuracy', weight: 40 },
      { name: 'Model Selection', weight: 20 },
      { name: 'Code Quality', weight: 15 },
      { name: 'Data Handling', weight: 15 },
      { name: 'Presentation', weight: 10 }
    ]
  },
  
  rewards: {
    title: 'Prizes & Recognition',
    items: [
      'Top 2 Teams – Certificates of Recognition',
      'All participants – Certificates of Participation'
    ]
  },
  
  registrationLink: 'https://forms.gle/wbs6qzSDAM7L7DeJ8',
  contact: {
    name: 'Sampreeth',
    number: '9505698747'
  }
};

const DatathonPage: React.FC = () => {
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
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">{eventData.evaluation.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventData.evaluation.criteria.map((criterion, index) => (
                    <div key={index} className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-purple-200">{criterion.name}</span>
                        <span className="text-cyan-300 font-medium">{criterion.weight}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full" 
                          style={{ width: `${criterion.weight}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-amber-300">{eventData.rewards.title}</h3>
                <ul className="space-y-2">
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

export default DatathonPage;
