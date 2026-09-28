import React, { useState } from 'react';
import { User, Mail, Building, Calendar, Briefcase } from 'lucide-react';
import { Employee } from '../../types';

interface FormData {
  name: string;
  email: string;
  department: string;
  position: string;
  startDate: string;
}

interface AddEmployeeFormProps {
  onClose: () => void;
  onAdd: (employee: Employee) => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onClose, onAdd }) => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    department: '',
    position: '',
    startDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const position = formData.position.trim();

    if (!name || name.length > 120) {
      setError('Name must be between 1 and 120 characters.');
      return;
    }
    if (!email || email.length > 254 || !email.includes('@')) {
      setError('Enter a valid employee email.');
      return;
    }
    if (!position || position.length > 120) {
      setError('Position must be between 1 and 120 characters.');
      return;
    }
    if (!formData.department || !formData.startDate) {
      setError('Department and start date are required.');
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      name,
      email,
      department: formData.department,
      position,
      startDate: formData.startDate,
      status: 'active',
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-gray-600">
        Demo mode: employee data added here stays in this browser session and is not sent to an external HR backend.
      </p>

      {error && <div role="alert" className="text-sm text-red-600">{error}</div>}

      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <User className="text-gray-400" size={20} />
          <span className="sr-only">Full Name</span>
          <input
            type="text"
            name="name"
            maxLength={120}
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </label>

        <label className="flex items-center space-x-2">
          <Mail className="text-gray-400" size={20} />
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </label>

        <label className="flex items-center space-x-2">
          <Building className="text-gray-400" size={20} />
          <span className="sr-only">Department</span>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </label>

        <label className="flex items-center space-x-2">
          <Briefcase className="text-gray-400" size={20} />
          <span className="sr-only">Position</span>
          <input
            type="text"
            name="position"
            maxLength={120}
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </label>

        <label className="flex items-center space-x-2">
          <Calendar className="text-gray-400" size={20} />
          <span className="sr-only">Start Date</span>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </label>
      </div>

      <div className="flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Cancel
        </button>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Add Employee
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
