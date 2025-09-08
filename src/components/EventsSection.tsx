import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Event {
  name: string;
  description: string;
  icon?: React.ReactNode;
  registrationLink?: string;
}

// Coding & Development
const codingEvents: Event[] = [
  { 
    name: 'Build-a-thon', 
    description: 'A Web Development hackathon where teams compete to design and build functional, creative, and user-friendly web applications around real-world themes. Participants will code using modern web technologies, showcase their projects, and present live demos to judges. Bonus points for innovation, UI/UX, and responsiveness.',
    registrationLink: 'https://forms.gle/Gbm4Hh4Jdr5HKee3A'
  },
  {
    name: 'Code Arena',
    description: 'Unleash your creativity and coding prowess at our Mini Hackathon! Whether you\'re a beginner or a seasoned developer, this event is the perfect platform to collaborate, innovate, and build prototypes in a competitive yet supportive environment. Form teams, brainstorm unique game ideas, and bring them to life using cutting-edge tools and technologies. Stand a chance to win exciting prizes and gain recognition from industry experts. Push the boundaries of imagination, and let your code tell a story!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  },
  {
    name: 'Code Battle',
    description: 'Dive into the world of game development with our hands-on Python Game Development Workshop using Pygame! Learn the fundamentals of creating a simple 2D game from scratch. This event is ideal for beginners and enthusiasts eager to explore programming, animation, and interactivity. Get guided through game mechanics, graphics rendering, and event handling while building your own playable game. Walk away with practical experience and the confidence to develop more complex games!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  }
];

// Blockchain & Technology
const blockchainEvents: Event[] = [
  {
    name: 'AlgoNauts – Blockchain Quiz / Challenge',
    description: 'AlgoNauts is an exciting blockchain quiz designed to test your knowledge, speed, and presence of mind in the ever-evolving world of Algorand and decentralized technologies. Just like astronauts exploring space, participants here become AlgoNauts, navigating through challenging rounds of questions and rapid-fire challenges.',
    registrationLink: 'https://forms.gle/Zh5aLui2bu4xgbvS8'
  },
  {
    name: 'AlgoVision 2025 – Project Expo',
    description: 'AlgoVision 2025 is your stage to showcase creativity, innovation, and problem-solving through blockchain technology. This project expo invites students and developers to present their blockchain-based ideas, prototypes, and solutions built on Algorand.',
    registrationLink: 'https://forms.gle/knTGKPA5JTRkwvwH7'
  }
];

// Business & Entrepreneurship
const businessEvents: Event[] = [
  {
    name: 'AU Shark Tank',
    description: 'Do you have a million-dollar idea? Step into the tank and pitch your innovative business concept to our panel of "sharks"! This is your opportunity to develop and present a real-world solution, product, or service. Your idea doesn\'t need to be technical—any creative, money-making idea is welcome. You\'ll need to showcase your creativity, business acumen, and presentation skills to convince the judges that your idea is worth their investment. Get ready to negotiate, persuade, and maybe even secure a deal!',
    registrationLink: 'https://forms.gle/XQoH14tx8QagKL4Q7'
  },
  {
    name: 'Venture Verse',
    description: 'Think like an entrepreneur! Pitch a product/service idea, craft a brand identity, and showcase it with a creative ad concept. Convince the judges with your pitch, wow them with branding, and entertain them with your ad.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'Money Moves Challenge',
    description: 'A thrilling financial simulation! Make investment and budgeting decisions under unpredictable scenarios like market crashes and sudden opportunities. Test your logic, risk management, and adaptability.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'Bargain Bench',
    description: 'The ultimate negotiation battle! Step into the role of buyer, seller, or investor and strike the most favorable deal. Persuasion, strategy, and compromise will crown the best negotiators.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  }
];

// Creative & Design
const creativeEvents: Event[] = [
  {
    name: 'Meme Making Competition',
    description: 'Ready to turn your humor into a masterpiece? Join Creative Verse for a meme-making showdown! This is your chance to show off your wit and creativity by crafting the funniest, most relatable, or most insightful memes. Whether you\'re a seasoned memelord or a total beginner, bring your A-game and get ready to create viral-worthy content. We\'ll provide the themes; you bring the laughs. Bonus points for originality and impeccable comedic timing.',
    registrationLink: 'https://forms.gle/XQoH14tx8QagKL4Q7'
  },
  {
    name: 'Designing Competition',
    description: 'Unleash your inner artist! Creative Verse presents a design competition where you\'ll get to flex your creative muscles and bring your vision to life. This event is open to designers of all skill levels. We\'ll give you a theme, and you\'ll have the chance to create stunning visual art, from digital illustrations to graphic designs. Your work will be judged on creativity, skill, and how well you capture the essence of the theme.',
    registrationLink: 'https://forms.gle/XQoH14tx8QagKL4Q7'
  }
];

// Gaming & Entertainment
const gamingEvents: Event[] = [
  {
    name: 'Esports',
    description: 'Gear up for the ultimate test of strategy, reflexes, and teamwork in our Esports Event! Experience the thrill of competitive gaming as you face off against fellow gamers in popular titles. Whether you\'re a casual player or a hardcore competitor, this event is designed to foster camaraderie, sharpen skills, and fuel your passion for gaming. Spectators are welcome too—cheer on your friends and enjoy the electrifying atmosphere of high-stakes competition!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXgviglo2rgB9iyX_G-oSkjmhZql5XtkqihcsXLcHiHa4Jbg/viewform?usp=header'
  }
];

// Analytical & Problem Solving
const analyticalEvents: Event[] = [
  {
    name: 'Case Crackdown',
    description: 'Battle of analytical minds! Teams will analyze real-world case studies, identify problems, and present impactful solutions under time pressure. A true test of problem-solving, critical thinking, and presentation skills.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'Biz Whiz Quiz',
    description: 'The ultimate business quiz! From taglines and logos to jingles and entrepreneur trivia—test your knowledge, reflexes, and business acumen in this fast-paced, exciting quiz showdown.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'HR Face Off',
    description: 'Step into the shoes of HR leaders! Teams first participate in a team-building activity, then roleplay real workplace scenarios to test communication, negotiation, and leadership skills.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'Sell It in Seconds',
    description: 'Got the gift of gab? Convince the crowd by selling random everyday items with quick, creative sales pitches. The most persuasive participant with maximum "sales" wins!',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'Eagle Eye',
    description: 'Sharpen your observation skills! Spot errors, hidden details, and patterns in images, videos, and clues against the clock. Accuracy and speed decide who has the sharpest eyes.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'War of Words',
    description: 'A high-stakes crisis simulation! Teams face unexpected scenarios like PR disasters or supply chain failures and must present quick, actionable strategies to minimize damage.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  },
  {
    name: 'Strategy Masters',
    description: 'Design bold and innovative strategies for business challenges. From launching products to navigating industries, this competition tests creativity, analytical skills, and strategic thinking.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Iyhb3x_qYXrAyKnR8gL1UKT_36Pq3WutPW-VieSxJglb0Q/viewform?usp=header'
  }
];

// Combine all events into a single array
const allEvents = [
  ...codingEvents,
  ...blockchainEvents,
  ...businessEvents,
  ...creativeEvents,
  ...gamingEvents,
  ...analyticalEvents
];


interface EventCategory {
  name: string;
  events: Event[];
  icon?: React.ReactNode;
}

export const EventsSection: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({
    'Coding & Development': true,
    'Blockchain & Technology': true,
    'Business & Entrepreneurship': true,
    'Creative & Design': true,
    'Gaming & Entertainment': true,
    'Analytical & Problem Solving': true
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleRegister = (event: Event) => {
    if (event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    }
  };

  const eventCategories: EventCategory[] = [
    {
      name: 'Coding & Development',
      events: codingEvents
    },
    {
      name: 'Blockchain & Technology',
      events: blockchainEvents
    },
    {
      name: 'Business & Entrepreneurship',
      events: businessEvents
    },
    {
      name: 'Creative & Design',
      events: creativeEvents
    },
    {
      name: 'Gaming & Entertainment',
      events: gamingEvents
    },
    {
      name: 'Analytical & Problem Solving',
      events: analyticalEvents
    }
  ];

  return (
    <section id="events" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16 sm:pt-20">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-3 sm:mb-4">
            EVENTS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Participate in exciting competitions and showcase your skills
          </p>
        </div>

        <div className="space-y-8">
          {eventCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="flex items-center w-full text-left group"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-rajdhani text-white group-hover:text-cyan-300 transition-colors">
                  {category.name}
                  <span className="ml-2 text-gray-400 text-sm">
                    ({category.events.length} {category.events.length === 1 ? 'event' : 'events'})
                  </span>
                </h3>
                <span className="ml-auto text-gray-400 group-hover:text-cyan-300 transition-transform">
                  {expandedCategories[category.name] ? '−' : '+'}
                </span>
              </button>
              
              {expandedCategories[category.name] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.events.map((event, index) => (
                    <Card 
                      key={event.name} 
                      className="glass-card border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-[1.02] fade-in stagger-animation group h-full flex flex-col"
                      style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                    >
                      <CardHeader className="flex-1">
                        <CardTitle className="text-lg sm:text-xl font-bold font-rajdhani text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {event.name}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors mt-2 whitespace-pre-line">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-4 pt-0">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full text-sm sm:text-base text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 group-hover:border-cyan-300 transition-colors py-2 sm:py-3"
                          onClick={() => handleRegister(event)}
                        >
                          Register Now
                          <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              <div className="border-b border-gray-700/50 my-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};