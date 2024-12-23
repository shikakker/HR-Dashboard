import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', employees: 200 },
  { month: 'Feb', employees: 210 },
  { month: 'Mar', employees: 220 },
  { month: 'Apr', employees: 218 },
  { month: 'May', employees: 225 },
  { month: 'Jun', employees: 248 },
];

const EmployeeChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="employees"
          stroke="#3b82f6"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmployeeChart;