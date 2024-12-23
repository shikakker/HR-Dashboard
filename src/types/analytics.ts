export interface AnalyticsMetric {
  title: string;
  value: string | number;
  change: number;
  color: string;
  icon: string;
}

export interface ChartData {
  month: string;
  employees: number;
}

export interface DepartmentData {
  name: string;
  value: number;
  color: string;
}