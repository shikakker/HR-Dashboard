import React from 'react';
import { LucideIcon } from 'lucide-react';
import ToggleSwitch from './ToggleSwitch';

interface SettingItemProps {
  icon: LucideIcon;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon: Icon,
  label,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <Icon className="text-gray-400" size={20} />
        <span className={disabled ? 'text-gray-400' : 'text-gray-700'}>
          {label}
        </span>
      </div>
      <ToggleSwitch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default SettingItem;