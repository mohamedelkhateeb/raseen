// components/Dropdown.tsx
import React from "react";

interface DropdownProps {
  label: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{label}</h3>
      <select className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
