
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Award, Users, GitMerge, Docker, Code, Target, Trophy, BookOpen } from 'lucide-react';

const GitWorkshopPage: React.FC = () => {
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdsw2wRLHWdHA1oo3xopXy1j4xkxX_0y3-Pt5BZ2ksvN1hKCw/viewform?usp=header";

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-rajdhani">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
            Dock the Git
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300">
            Workshop & Competition
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Workshop */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-card p-8 rounded-lg fade-in stagger-animation" style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <h2 className="text-3xl font-bold font-orbitron text-cyan-400 mb-6 flex items-center">
                <BookOpen className="mr-4" /> Workshop Details
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Ever wondered how developers across the globe collaborate seamlessly? Or how apps magically run anywhere without breaking? That's Git & Docker in action! In this workshop, we'll take you from commits to containers.
                </p>
                <div className="flex items-center gap-4">
                  <Calendar className="text-cyan-400" />
                  <span>Date: September 15, 2025</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-cyan-400" />
                  <span>Time: 10:00 AM - 12:50 PM</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Learning Objectives</h3>
                <ul className="space-y-3 list-inside list-disc text-gray-300">
                  <li>Understand version control with Git.</li>
                  <li>Manage local and remote repositories on GitHub.</li>
                  <li>Perform essential Git operations like branching, committing, and merging.</li>
                  <li>Collaborate effectively using GitHub workflows.</li>
                  <li>Grasp the basics of containerization with Docker.</li>
                  <li>Create and manage Docker images and containers.</li>
                  <li>Write Dockerfiles for containerized applications.</li>
                  <li>Understand container orchestration fundamentals.</li>
                </ul>
              </div>
            </div>

            {/* Competition Details */}
            <div className="glass-card p-8 rounded-lg fade-in stagger-animation" style={{ '--delay': '0.4s' } as React.CSSProperties}>
              <h2 className="text-3xl font-bold font-orbitron text-purple-400 mb-6 flex items-center">
                <Trophy className="mr-4" /> Competition Details
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Put your newly acquired skills to the test in a real-world scenario. The competition will challenge you to apply your knowledge of Git and Docker in a simulated environment.
                </p>
                <div className="flex items-center gap-4">
                  <Calendar className="text-purple-400" />
                  <span>Date: September 15, 2025</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-purple-400" />
                  <span>Time: 1:30 PM - 4:00 PM</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Competition Challenges</h3>
                <ul className="space-y-3 list-inside list-disc text-gray-300">
                  <li><span className="font-semibold text-purple-300">Debugging a Repository:</span> Identify and fix bugs in a provided codebase using a structured Git workflow.</li>
                  <li><span className="font-semibold text-purple-300">Containerizing the Application:</span> Write a Dockerfile to containerize the application.</li>
                  <li><span className="font-semibold text-purple-300">Deployment with Docker:</span> Provide instructions on how to build and run the containerized application.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Meta Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg fade-in stagger-animation" style={{ '--delay': '0.6s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold text-white mb-4">Prizes</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="text-yellow-400 mt-1" />
                  <div>
                    <p className="font-bold text-yellow-400">First Prize</p>
                    <p className="text-gray-300">Rs. 500 worth of Alephtex coupon.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-gray-400 mt-1" />
                  <div>
                    <p className="font-bold text-gray-300">Second Prize</p>
                    <p className="text-gray-300">70% off on Alephtex, an AI-powered LaTeX editor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg fade-in stagger-animation" style={{ '--delay': '0.8s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold text-white mb-4">Evaluation Criteria</h3>
              <ul className="space-y-2 text-gray-300">
                <li><span className="font-semibold text-green-400">Collaboration (60%):</span> Git workflow, commit history, pull requests, and teamwork.</li>
                <li><span className="font-semibold text-green-400">Technical Implementation (40%):</span> Bug fixes, Dockerfile quality, and containerization.</li>
              </ul>
            </div>
            
            <div className="mt-8 fade-in stagger-animation" style={{ '--delay': '1s' } as React.CSSProperties}>
              <Button 
                onClick={() => window.open(registrationLink, '_blank')}
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GitWorkshopPage;
