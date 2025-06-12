
import { Calendar, Clock, Target } from 'lucide-react';

export const DailyBrief = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const motivationalQuotes = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower."
  ];

  const todayQuote = motivationalQuotes[new Date().getDate() % motivationalQuotes.length];

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-border animate-fade-in">
      <h2 className="text-xl font-bold text-jarvis-glow mb-4">Daily Brief</h2>
      
      {/* Date */}
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="w-5 h-5 text-jarvis-glow" />
        <span className="text-sm text-muted-foreground">{currentDate}</span>
      </div>

      {/* Quick Overview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-jarvis-surface rounded-lg">
          <div className="text-2xl font-bold text-jarvis-glow">3</div>
          <div className="text-xs text-muted-foreground">Tasks Today</div>
        </div>
        <div className="text-center p-3 bg-jarvis-surface rounded-lg">
          <div className="text-2xl font-bold text-jarvis-glow">$47.50</div>
          <div className="text-xs text-muted-foreground">Spent Today</div>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="bg-jarvis-surface-elevated rounded-lg p-4 border-l-4 border-jarvis-glow">
        <p className="text-sm italic text-foreground mb-2">"{todayQuote}"</p>
        <div className="flex items-center space-x-1">
          <Target className="w-4 h-4 text-jarvis-glow" />
          <span className="text-xs text-jarvis-glow">Daily Inspiration</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 space-y-2">
        <button className="w-full text-left p-2 rounded-lg bg-jarvis-surface hover:bg-jarvis-surface-elevated transition-colors">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-jarvis-glow" />
            <span className="text-sm">Next meeting in 2 hours</span>
          </div>
        </button>
      </div>
    </div>
  );
};
