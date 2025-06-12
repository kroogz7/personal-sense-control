
import { Check, X } from 'lucide-react';

export const HabitProgress = () => {
  const habits = [
    { name: 'Morning Exercise', completed: true, streak: 15 },
    { name: 'Read 30 minutes', completed: true, streak: 12 },
    { name: 'Drink 8 glasses water', completed: false, streak: 8 },
    { name: 'Meditate 10 minutes', completed: true, streak: 22 },
    { name: 'No social media after 9pm', completed: false, streak: 5 }
  ];

  return (
    <div className="space-y-3">
      {habits.map((habit, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-jarvis-surface rounded-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              habit.completed 
                ? 'bg-jarvis-glow text-background' 
                : 'border-2 border-jarvis-alert text-jarvis-alert'
            }`}>
              {habit.completed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{habit.name}</div>
              <div className="text-xs text-muted-foreground">{habit.streak} day streak</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`text-xs font-medium ${
              habit.completed ? 'text-jarvis-glow' : 'text-jarvis-alert'
            }`}>
              {habit.completed ? 'Done' : 'Pending'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
