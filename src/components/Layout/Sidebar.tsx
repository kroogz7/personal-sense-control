
import { 
  Calendar, 
  CreditCard, 
  GraduationCap, 
  Target, 
  Shield, 
  BarChart3,
  Home,
  Clock,
  BookOpen
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'expenses', label: 'Expenses', icon: CreditCard },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'academics', label: 'Academics', icon: GraduationCap },
  { id: 'habits', label: 'Habits', icon: Target },
  { id: 'vault', label: 'Vault', icon: Shield },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'reminders', label: 'Reminders', icon: Clock },
  { id: 'journal', label: 'Journal', icon: BookOpen },
];

export const Sidebar = ({ currentView, setCurrentView }: SidebarProps) => {
  return (
    <div className="w-64 bg-sidebar border-r border-jarvis-glow/20 flex flex-col">
      {/* Logo Area */}
      <div className="p-6 border-b border-jarvis-glow/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-jarvis-glow/20 rounded-lg flex items-center justify-center glow-border">
            <div className="w-6 h-6 bg-jarvis-glow rounded-sm"></div>
          </div>
          <div>
            <h2 className="font-bold text-jarvis-glow">JARVIS</h2>
            <p className="text-xs text-muted-foreground">Personal Assistant</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-jarvis-glow/20 text-jarvis-glow glow-border'
                    : 'text-muted-foreground hover:text-jarvis-glow hover:bg-jarvis-surface-elevated'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-jarvis-glow' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Status Footer */}
      <div className="p-4 border-t border-jarvis-glow/20">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Status</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-jarvis-glow rounded-full animate-pulse"></div>
            <span className="text-jarvis-glow">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
