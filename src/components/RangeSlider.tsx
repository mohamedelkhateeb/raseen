// components/RangeSlider.tsx
import React from 'react';

interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ label, min, max, value, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{label}</h3>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between mt-2">
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
