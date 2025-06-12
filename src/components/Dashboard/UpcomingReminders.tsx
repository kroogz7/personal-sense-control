
import { Calendar, Clock, AlertCircle, GraduationCap } from 'lucide-react';

export const UpcomingReminders = () => {
  const reminders = [
    {
      title: 'Team Meeting',
      time: 'Today, 3:00 PM',
      priority: 'high',
      icon: Calendar,
      type: 'meeting'
    },
    {
      title: 'Submit Assignment',
      time: 'Tomorrow, 11:59 PM',
      priority: 'high',
      icon: GraduationCap,
      type: 'academic'
    },
    {
      title: 'Grocery Shopping',
      time: 'Friday, 6:00 PM',
      priority: 'medium',
      icon: Clock,
      type: 'personal'
    },
    {
      title: 'Doctor Appointment',
      time: 'Next Monday, 10:00 AM',
      priority: 'medium',
      icon: AlertCircle,
      type: 'health'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-jarvis-alert border-jarvis-alert/50';
      case 'medium': return 'text-yellow-400 border-yellow-400/50';
      default: return 'text-jarvis-glow border-jarvis-glow/50';
    }
  };

  return (
    <div className="space-y-3 max-h-64 overflow-y-auto">
      {reminders.map((reminder, index) => {
        const Icon = reminder.icon;
        const priorityColor = getPriorityColor(reminder.priority);
        
        return (
          <div key={index} className={`flex items-center space-x-3 p-3 bg-jarvis-surface rounded-lg border-l-4 ${priorityColor} hover:bg-jarvis-surface-elevated transition-colors`}>
            <div className="p-2 bg-jarvis-glow/20 rounded-lg">
              <Icon className={`w-4 h-4 ${priorityColor.split(' ')[0]}`} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{reminder.title}</div>
              <div className="text-xs text-muted-foreground">{reminder.time}</div>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full bg-opacity-20 ${
              reminder.priority === 'high' ? 'bg-jarvis-alert text-jarvis-alert' :
              reminder.priority === 'medium' ? 'bg-yellow-400 text-yellow-400' :
              'bg-jarvis-glow text-jarvis-glow'
            }`}>
              {reminder.priority}
            </div>
          </div>
        );
      })}
    </div>
  );
};
