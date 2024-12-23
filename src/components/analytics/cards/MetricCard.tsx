import React from 'react';
import { LucideIcon } from 'lucide-react';
import { formatMetricValue } from '../../../utils/analytics';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  Icon: LucideIcon;
  color: string;
  format?: 'percentage' | 'number';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  Icon,
  color,
  format = 'number',
}) => {
  const formattedValue = typeof value === 'number' ? formatMetricValue(value, format) : value;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{formattedValue}</h3>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
        <span className="text-sm text-gray-500 ml-1">vs last month</span>
      </div>
    </div>
  );
};

export default MetricCard;