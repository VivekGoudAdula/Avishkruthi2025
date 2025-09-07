import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { ClubsSection } from './components/ClubsSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <HeroSection />
      <EventsSection />
      <ClubsSection />
      <CoordinatorsSection />
      <Footer />
    </div>
  );
}

export default App;