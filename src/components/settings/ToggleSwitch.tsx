import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div className={`
        w-11 h-6 
        bg-gray-200 
        peer-focus:outline-none 
        rounded-full 
        peer 
        peer-checked:after:translate-x-full 
        peer-checked:after:border-white 
        after:content-[''] 
        after:absolute 
        after:top-[2px] 
        after:left-[2px] 
        after:bg-white 
        after:border-gray-300 
        after:border 
        after:rounded-full 
        after:h-5 
        after:w-5 
        after:transition-all 
        peer-checked:bg-blue-600
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}></div>
    </label>
  );
};

export default ToggleSwitch;