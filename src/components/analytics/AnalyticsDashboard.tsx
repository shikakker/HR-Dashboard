import React from 'react';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';
import MetricCard from './cards/MetricCard';
import EmployeeGrowthChart from './charts/EmployeeGrowthChart';
import DepartmentChart from './charts/DepartmentChart';
import { DEPARTMENT_COLORS } from '../../utils/analytics';
import type { ChartData, DepartmentData } from '../../types/analytics';

const employeeData: ChartData[] = [
  { month: 'Jan', employees: 200 },
  { month: 'Feb', employees: 210 },
  { month: 'Mar', employees: 220 },
  { month: 'Apr', employees: 218 },
  { month: 'May', employees: 225 },
  { month: 'Jun', employees: 248 },
];

const departmentData: DepartmentData[] = [
  { name: 'Engineering', value: 40, color: DEPARTMENT_COLORS.Engineering },
  { name: 'Product', value: 25, color: DEPARTMENT_COLORS.Product },
  { name: 'Marketing', value: 20, color: DEPARTMENT_COLORS.Marketing },
  { name: 'Sales', value: 15, color: DEPARTMENT_COLORS.Sales },
];

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Employees"
          value={248}
          change={12}
          Icon={Users}
          color="bg-blue-500"
        />
        <MetricCard
          title="Average Attendance"
          value={96}
          change={3}
          Icon={Clock}
          color="bg-green-500"
          format="percentage"
        />
        <MetricCard
          title="Productivity"
          value={87}
          change={-2}
          Icon={TrendingUp}
          color="bg-purple-500"
          format="percentage"
        />
        <MetricCard
          title="Performance Score"
          value={4.2}
          change={5}
          Icon={Award}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmployeeGrowthChart data={employeeData} />
        <DepartmentChart data={departmentData} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;