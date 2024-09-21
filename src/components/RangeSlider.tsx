// components/RangeSlider.tsx
import { Box, Slider } from "@mui/material";
import React from "react";

interface RangeSliderProps {
  label: string;
  defaultValue: number[];
  min: number;
  mes: string;
  max: number;
}
function valuetext(value: number) {
  return `${value}`;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  label,
  defaultValue,
  min,
  max,
  mes,
}) => {
  const [value, setValue] = React.useState<number[]>(defaultValue);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(event);

    setValue(newValue as number[]);
  };
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{label}</h3>
      <div className="flex justify-between mt-2">
        <div className="flex justify-between w-full">
          <span className=" font-bold">
            {value[1]}
            {mes}
          </span>
          <span className=" font-bold">
            {value[0]}
            {mes}
          </span>
        </div>
      </div>
      <Box sx={{ width: 300 }}>
        <Slider
          sx={{ width: 420, color: "#004267", height: 8 }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="primary"
          min={min}
          max={max}
        />
      </Box>
    </div>
  );
};

export default RangeSlider;
