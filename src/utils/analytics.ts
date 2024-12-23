import { ChartData, DepartmentData } from '../types/analytics';

export const DEPARTMENT_COLORS = {
  Engineering: '#3b82f6',
  Product: '#10b981',
  Marketing: '#8b5cf6',
  Sales: '#f59e0b',
};

export const getGrowthPercentage = (current: number, previous: number): number => {
  return Math.round(((current - previous) / previous) * 100);
};

export const formatMetricValue = (value: number, type: 'percentage' | 'number'): string => {
  return type === 'percentage' ? `${value}%` : value.toLocaleString();
};