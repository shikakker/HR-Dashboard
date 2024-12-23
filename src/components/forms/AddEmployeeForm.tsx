import React, { useState } from 'react';
import { User, Mail, Building, Calendar, Briefcase, Phone } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import LoadingAnimation from '../animations/LoadingAnimation';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormData {
  name: string;
  email: string;
  department: string;
  position: string;
  phone: string;
  startDate: string;
}

const AddEmployeeForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    department: '',
    position: '',
    phone: '',
    startDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('employees')
        .insert([{
          ...formData,
          status: 'active',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
        }]);

      if (error) throw error;
      onClose();
    } catch (error) {
      console.error('Error adding employee:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <LoadingAnimation width={100} height={100} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <User className="text-gray-400" size={20} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Mail className="text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="text-gray-400" size={20} />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Building className="text-gray-400" size={20} />
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
        </div>

        <div className="flex items-center space-x-2">
          <Briefcase className="text-gray-400" size={20} />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Calendar className="text-gray-400" size={20} />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;