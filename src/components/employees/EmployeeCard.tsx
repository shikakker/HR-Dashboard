import React, { useState } from 'react';
import { Mail, Phone, Building, Calendar } from 'lucide-react';
import { Employee } from '../../types';
import Modal from '../common/Modal';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div className="flex items-center space-x-4">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">{employee.name}</h3>
            <p className="text-gray-600">{employee.position}</p>
            <span className={`px-2 py-1 text-xs rounded-full ${
              employee.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {employee.status}
            </span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Employee Details"
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">{employee.name}</h2>
              <p className="text-gray-600">{employee.position}</p>
              <span className={`px-2 py-1 text-xs rounded-full ${
                employee.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {employee.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400" size={18} />
              <span>{employee.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building className="text-gray-400" size={18} />
              <span>{employee.department}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="text-gray-400" size={18} />
              <span>Started {employee.startDate}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Recent Activity</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Last attendance: Today, 9:00 AM</p>
              <p className="text-sm text-gray-600">Latest performance review: 4.5/5</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EmployeeCard;