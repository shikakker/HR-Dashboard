import React from 'react';
import { employees } from '../../data/mockData';
import EmployeeCard from './EmployeeCard';

const EmployeeGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeGrid;