import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { ClubsSection } from './components/ClubsSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { Footer } from './components/Footer';
import CodeBattlePage from './pages/events/CodeBattle';
import AUSharkTankPage from './pages/events/AUSharkTank';
import MemeManiaPage from './pages/events/MemeMania';
import CreativeClashPage from './pages/events/CreativeClash';
import GitDockerWorkshopPage from './pages/events/GitDockerWorkshop';
import GitDockerCompetitionPage from './pages/events/GitDockerCompetition';
import AlgoNautsPage from './pages/events/AlgoNauts';
import AlgoVisionPage from './pages/events/AlgoVision';
import CodeArenaPage from './pages/events/CodeArena';
import PosterPresentationPage from './pages/events/PosterPresentation';
import EchoIdeasPage from './pages/events/EchoIdeas';
import DatathonPage from './pages/events/Datathon';
import ProjectPresentationPage from './pages/events/ProjectPresentation';
import BGMITournamentPage from './pages/events/BGMITournament';
import FreeFireTournamentPage from './pages/events/FreeFireTournament';
import ZeroDayDashCTFPage from './pages/events/ZeroDayDashCTF';
import PaperPresentationPage from './pages/events/PaperPresentation';
import VentureVersePage from './pages/events/VentureVerse';
import CaseCrackdownPage from './pages/events/CaseCrackdown';
import BizWhizQuizPage from './pages/events/BizWhizQuiz';
import HRFaceOffPage from './pages/events/HRFaceOff';
import MoneyMovesChallengePage from './pages/events/MoneyMovesChallenge';
import SellItInSecondsPage from './pages/events/SellItInSeconds';
import EagleEyePage from './pages/events/EagleEye';
import WarOfWordsPage from './pages/events/WarOfWords';
import StrategyMastersPage from './pages/events/StrategyMasters';
import BargainBenchPage from './pages/events/BargainBench';
import ScheduleCarousel from './components/ScheduleCarousel';
import './App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <ScheduleCarousel />
      <EventsSection />
      <ClubsSection />
      <CoordinatorsSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/code-battle" element={<CodeBattlePage />} />
          <Route path="/events/au-shark-tank" element={<AUSharkTankPage />} />
          <Route path="/events/meme-mania" element={<MemeManiaPage />} />
          <Route path="/events/creative-clash" element={<CreativeClashPage />} />
          <Route path="/events/git-docker-workshop" element={<GitDockerWorkshopPage />} />
          <Route path="/events/git-docker-competition" element={<GitDockerCompetitionPage />} />
          <Route path="/events/algonauts" element={<AlgoNautsPage />} />
          <Route path="/events/algovision" element={<AlgoVisionPage />} />
          <Route path="/events/code-arena" element={<CodeArenaPage />} />
          <Route path="/events/poster-presentation" element={<PosterPresentationPage />} />
          <Route path="/events/paper-presentation" element={<PaperPresentationPage />} />
          <Route path="/events/venture-verse" element={<VentureVersePage />} />
          <Route path="/events/case-crackdown" element={<CaseCrackdownPage />} />
          <Route path="/events/echo-ideas" element={<EchoIdeasPage />} />
          <Route path="/events/datathon" element={<DatathonPage />} />
          <Route path="/events/project-presentation" element={<ProjectPresentationPage />} />
          <Route path="/events/bgmi-tournament" element={<BGMITournamentPage />} />
          <Route path="/events/free-fire-tournament" element={<FreeFireTournamentPage />} />
          <Route path="/events/zero-day-dash-ctf" element={<ZeroDayDashCTFPage />} />
          <Route path="/events/biz-whiz-quiz" element={<BizWhizQuizPage />} />
          <Route path="/events/hr-face-off" element={<HRFaceOffPage />} />
          <Route path="/events/money-moves-challenge" element={<MoneyMovesChallengePage />} />
          <Route path="/events/sell-it-in-seconds" element={<SellItInSecondsPage />} />
          <Route path="/events/eagle-eye" element={<EagleEyePage />} />
          <Route path="/events/war-of-words" element={<WarOfWordsPage />} />
          <Route path="/events/strategy-masters" element={<StrategyMastersPage />} />
          <Route path="/events/bargain-bench" element={<BargainBenchPage />} />
          <Route path="/events/:eventName" element={<CodeBattlePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;