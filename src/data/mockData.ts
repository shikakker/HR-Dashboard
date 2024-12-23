import { Employee, AttendanceRecord, PerformanceMetric } from '../types';

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Senior Developer',
    department: 'Engineering',
    email: 'sarah.j@company.com',
    startDate: '2023-01-15',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Product Manager',
    department: 'Product',
    email: 'michael.c@company.com',
    startDate: '2022-11-01',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
];

export const attendanceRecords: AttendanceRecord[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2024-03-10',
    checkIn: '09:00',
    checkOut: '17:00',
    status: 'present',
  },
  {
    id: '2',
    employeeId: '2',
    date: '2024-03-10',
    checkIn: '09:15',
    checkOut: '17:30',
    status: 'late',
  },
];

export const performanceMetrics: PerformanceMetric[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2024-03-01',
    rating: 4.5,
    notes: 'Excellent project delivery and team collaboration',
  },
  {
    id: '2',
    employeeId: '2',
    date: '2024-03-01',
    rating: 4.2,
    notes: 'Strong leadership skills and product vision',
  },
];