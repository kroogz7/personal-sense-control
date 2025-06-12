
import { useState } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recentMessages, setRecentMessages] = useState([
    { type: 'user', text: 'I spent $30 at Target today' },
    { type: 'assistant', text: 'Expense logged: $30 at Target. Added to your shopping category.' },
    { type: 'user', text: 'What\'s my GPA this semester?' },
    { type: 'assistant', text: 'Your current GPA is 3.7 based on 5 courses completed.' }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const newMessages = [...recentMessages, { type: 'user', text: message }];
    
    // Simulate AI response
    setTimeout(() => {
      setRecentMessages([...newMessages, { 
        type: 'assistant', 
        text: 'I understand. Let me process that information for you.' 
      }]);
    }, 1000);
    
    setMessage('');
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  return (
    <div className="p-4">
      {/* Recent Messages (scrollable) */}
      <div className="mb-4 max-h-32 overflow-y-auto space-y-2">
        {recentMessages.slice(-4).map((msg, index) => (
          <div key={index} className={`text-sm p-2 rounded-lg max-w-xs ${
            msg.type === 'user' 
              ? 'bg-jarvis-glow/20 text-jarvis-glow ml-auto' 
              : 'bg-jarvis-surface text-foreground'
          }`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything... (e.g., 'I spent $20 on lunch' or 'Show my study progress')"
            className="pr-12 bg-jarvis-surface border-jarvis-glow/30 text-foreground placeholder:text-muted-foreground focus:border-jarvis-glow focus:ring-jarvis-glow/20"
          />
          <Button
            onClick={toggleVoice}
            size="sm"
            variant="ghost"
            className={`absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 p-0 ${
              isListening ? 'text-jarvis-alert bg-jarvis-alert/20' : 'text-jarvis-glow hover:bg-jarvis-glow/20'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
        </div>
        
        <Button 
          onClick={handleSendMessage}
          className="bg-jarvis-glow hover:bg-jarvis-glow/80 text-background"
          disabled={!message.trim()}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Quick Commands */}
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          'Show expenses this week',
          'What\'s my GPA?',
          'Habit progress today',
          'Upcoming reminders'
        ].map((command, index) => (
          <button
            key={index}
            onClick={() => setMessage(command)}
            className="text-xs px-3 py-1 bg-jarvis-surface hover:bg-jarvis-surface-elevated text-jarvis-glow rounded-full border border-jarvis-glow/30 transition-colors"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
};
