import React from 'react';
import { performanceMetrics, employees } from '../data/mockData';

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Performance Metrics</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {performanceMetrics.map((metric) => {
          const employee = employees.find((e) => e.id === metric.employeeId);
          return (
            <div
              key={metric.id}
              className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src={employee?.avatar}
                  alt={employee?.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{employee?.name}</h3>
                  <p className="text-sm text-gray-500">{employee?.position}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Rating</span>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold">{metric.rating}</span>
                    <span className="text-sm text-gray-500">/5</span>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium">Notes</span>
                  <p className="text-sm text-gray-600 mt-1">{metric.notes}</p>
                </div>
                <div className="text-sm text-gray-500">
                  Review Date: {metric.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceMetrics;