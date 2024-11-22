import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

export function PriceRange({ label, max, min, step, maxPrice, minPrice, setMaxPrice, setMinPrice }: any) {
  const [localValue, setLocalValue] = useState([minPrice, maxPrice]);
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-bold">{label}</h3>
      <div className="mt-2 flex justify-between">
        <div className="mb-14 flex w-[400px] justify-between xl:mb-12">
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => {
              setMaxPrice(e.target.value.toString());
              setLocalValue([localValue[0], e.target.value]);
            }}
            min={min}
            max={max}
            step={step}
            value={localValue[1]}
          />
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => {
              setMinPrice(e.target.value.toString());
              setLocalValue([
                localValue[0],
                e.target.value,
              ]);
            }}
            min={min}
            max={max}
            step={step}
            value={localValue[0]}
          />
        </div>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        onValueChange={(value: any) => {
          setMinPrice(value[0].toString());
          setMaxPrice(value[1].toString());
          setLocalValue(value);
        }}
        color="red"
        className={cn('w-[100%] text-darkBlue')}
        value={localValue}
      />
    </div>
  );
}
