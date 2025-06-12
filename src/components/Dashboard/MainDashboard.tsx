
import { ExpenseChart } from '@/components/Charts/ExpenseChart';
import { HabitProgress } from '@/components/Dashboard/HabitProgress';
import { RecentActivity } from '@/components/Dashboard/RecentActivity';
import { UpcomingReminders } from '@/components/Dashboard/UpcomingReminders';

interface MainDashboardProps {
  currentView: string;
}

export const MainDashboard = ({ currentView }: MainDashboardProps) => {
  if (currentView !== 'dashboard') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-jarvis-glow mb-4">
            {currentView.charAt(0).toUpperCase() + currentView.slice(1)} Module
          </h2>
          <p className="text-muted-foreground">
            This module is under development. Coming soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 h-full">
      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expense Overview */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-border">
          <h3 className="text-lg font-semibold text-jarvis-glow mb-4">Expense Overview</h3>
          <ExpenseChart />
        </div>

        {/* Habit Progress */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-border">
          <h3 className="text-lg font-semibold text-jarvis-glow mb-4">Today's Habits</h3>
          <HabitProgress />
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-border">
          <h3 className="text-lg font-semibold text-jarvis-glow mb-4">Recent Activity</h3>
          <RecentActivity />
        </div>

        {/* Upcoming Reminders */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-border">
          <h3 className="text-lg font-semibold text-jarvis-glow mb-4">Upcoming</h3>
          <UpcomingReminders />
        </div>
      </div>
    </div>
  );
};
