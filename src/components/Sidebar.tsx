import React from 'react';
import { Users, Calendar, BarChart2, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'employees', icon: Users, label: 'Employees' },
    { id: 'attendance', icon: Calendar, label: 'Attendance' },
    { id: 'performance', icon: BarChart2, label: 'Performance' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-white text-xl font-bold">HR Dashboard</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;