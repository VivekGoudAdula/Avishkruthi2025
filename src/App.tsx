import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { ClubsSection } from './components/ClubsSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { Footer } from './components/Footer';
import GitWorkshopPage from './pages/GitWorkshop';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <EventsSection />
            <ClubsSection />
            <CoordinatorsSection />
            <Footer />
          </>
        } />
        <Route path="/events/gitws" element={<GitWorkshopPage />} />
      </Routes>
    </div>
  );
}

export default App;
