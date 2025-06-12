
import { TrendingUp, TrendingDown, DollarSign, BookOpen, Target, Shield } from 'lucide-react';

export const QuickStats = () => {
  const stats = [
    {
      label: 'Monthly Budget',
      value: '$1,247',
      change: '+12%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-jarvis-glow'
    },
    {
      label: 'Study Hours',
      value: '24.5h',
      change: '+8%',
      trend: 'up',
      icon: BookOpen,
      color: 'text-jarvis-glow'
    },
    {
      label: 'Habit Streak',
      value: '15 days',
      change: 'Active',
      trend: 'up',
      icon: Target,
      color: 'text-jarvis-glow'
    },
    {
      label: 'Vault Items',
      value: '23',
      change: 'Secure',
      trend: 'up',
      icon: Shield,
      color: 'text-jarvis-glow'
    }
  ];

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-border animate-fade-in">
      <h2 className="text-lg font-semibold text-jarvis-glow mb-4">Quick Stats</h2>
      
      <div className="space-y-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-jarvis-surface rounded-lg hover:bg-jarvis-surface-elevated transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-jarvis-glow/20 rounded-lg">
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div>
                  <div className="font-medium text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <TrendIcon className={`w-3 h-3 ${stat.color}`} />
                <span className={`text-xs ${stat.color}`}>{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
