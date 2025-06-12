
import { useState } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { MainDashboard } from '@/components/Dashboard/MainDashboard';
import { ChatInterface } from '@/components/Chat/ChatInterface';
import { DailyBrief } from '@/components/Dashboard/DailyBrief';
import { QuickStats } from '@/components/Dashboard/QuickStats';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background gradient-animate">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="bg-card/50 backdrop-blur-sm border-b border-jarvis-glow/20 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-jarvis-glow text-glow">
                JARVIS Assistant
              </h1>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-jarvis-glow rounded-full animate-pulse-glow"></div>
                <span className="text-sm text-muted-foreground">System Online</span>
              </div>
            </div>
          </header>

          {/* Main Content Grid */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              {/* Left Column - Daily Brief & Quick Stats */}
              <div className="space-y-6">
                <DailyBrief />
                <QuickStats />
              </div>

              {/* Center Column - Main Dashboard */}
              <div className="lg:col-span-2">
                <MainDashboard currentView={currentView} />
              </div>
            </div>
          </div>

          {/* Chat Interface - Fixed at bottom */}
          <div className="border-t border-jarvis-glow/20 bg-card/50 backdrop-blur-sm">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
