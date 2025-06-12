
import { DollarSign, BookOpen, Target, Calendar, Clock } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      type: 'expense',
      icon: DollarSign,
      text: 'Logged $30 expense at Target',
      time: '2 minutes ago',
      color: 'text-jarvis-glow'
    },
    {
      type: 'study',
      icon: BookOpen,
      text: 'Completed 2 hours of study',
      time: '1 hour ago',
      color: 'text-jarvis-glow'
    },
    {
      type: 'habit',
      icon: Target,
      text: 'Completed morning exercise',
      time: '3 hours ago',
      color: 'text-jarvis-glow'
    },
    {
      type: 'reminder',
      icon: Calendar,
      text: 'Added reminder for team meeting',
      time: '5 hours ago',
      color: 'text-jarvis-glow'
    },
    {
      type: 'system',
      icon: Clock,
      text: 'Daily backup completed',
      time: '1 day ago',
      color: 'text-muted-foreground'
    }
  ];

  return (
    <div className="space-y-3 max-h-64 overflow-y-auto">
      {activities.map((activity, index) => {
        const Icon = activity.icon;
        
        return (
          <div key={index} className="flex items-start space-x-3 p-3 bg-jarvis-surface rounded-lg hover:bg-jarvis-surface-elevated transition-colors">
            <div className="p-2 bg-jarvis-glow/20 rounded-lg flex-shrink-0">
              <Icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-foreground">{activity.text}</div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
