
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Food & Dining', value: 300, color: '#00FFFF' },
  { name: 'Transportation', value: 150, color: '#00CCCC' },
  { name: 'Shopping', value: 200, color: '#0099AA' },
  { name: 'Entertainment', value: 100, color: '#006677' },
  { name: 'Bills & Utilities', value: 250, color: '#004455' }
];

export const ExpenseChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--jarvis-surface))',
              border: '1px solid hsl(var(--jarvis-glow) / 0.3)',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))',
              fontSize: '14px',
              fontWeight: '500'
            }}
            labelStyle={{
              color: 'hsl(var(--jarvis-glow))',
              fontWeight: '600'
            }}
            itemStyle={{
              color: 'hsl(var(--foreground))'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-sm" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-muted-foreground">{item.name}</span>
            <span className="text-jarvis-glow font-medium">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
