export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  startDate: string;
  status: 'active' | 'inactive';
  avatar?: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'present' | 'absent' | 'late';
}

export interface PerformanceMetric {
  id: string;
  employeeId: string;
  date: string;
  rating: number;
  notes: string;
}