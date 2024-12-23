import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EmployeeList from './components/EmployeeList';
import AttendanceTracker from './components/AttendanceTracker';
import PerformanceMetrics from './components/PerformanceMetrics';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';
import SettingsPanel from './components/settings/SettingsPanel';
import Modal from './components/common/Modal';
import AddEmployeeForm from './components/forms/AddEmployeeForm';

function App() {
  const [activeTab, setActiveTab] = useState('employees');
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'employees':
        return <EmployeeList onAddEmployee={() => setIsAddEmployeeModalOpen(true)} />;
      case 'attendance':
        return <AttendanceTracker />;
      case 'performance':
        return <PerformanceMetrics />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <EmployeeList onAddEmployee={() => setIsAddEmployeeModalOpen(true)} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>

      <Modal
        isOpen={isAddEmployeeModalOpen}
        onClose={() => setIsAddEmployeeModalOpen(false)}
        title="Add New Employee"
      >
        <AddEmployeeForm onClose={() => setIsAddEmployeeModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default App;