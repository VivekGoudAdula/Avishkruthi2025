import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScheduleBrochure: React.FC = () => {
  const navigate = useNavigate();
  const scheduleImages = [
    '/SCHEDULE/1.png',
    '/SCHEDULE/2.png',
    '/SCHEDULE/3.png',
    '/SCHEDULE/4.png',
    '/SCHEDULE/5.png',
    '/SCHEDULE/6.png',
    '/SCHEDULE/7.png',
    '/SCHEDULE/8.png',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button 
          onClick={() => navigate(-1)}
          variant="ghost" 
          className="mb-6 text-cyan-400 hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">Event Schedule</h1>
          <p className="text-gray-300">Check out the complete schedule for all events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scheduleImages.map((image, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300">
              <img 
                src={image} 
                alt={`Schedule Page ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for? Explore our events for more details.
          </p>
          <Button 
            onClick={() => navigate('/events')}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            View All Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBrochure;
