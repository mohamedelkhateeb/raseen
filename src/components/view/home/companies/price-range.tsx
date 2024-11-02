import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

export function PriceRange({ label, max, min, step, maxPrice, minPrice, setMaxPrice, setMinPrice }: any) {
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-bold">{label}</h3>
      <div className="mt-2 flex justify-between">
        <div className="mb-14 flex w-[400px] justify-between xl:mb-12">
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setMaxPrice(e.target.value.toString())}
            min={min}
            max={max}
            step={step}
            defaultValue={maxPrice}
          />
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setMinPrice(e.target.value.toString())}
            min={min}
            max={max}
            step={step}
            defaultValue={minPrice}
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
        }}
        color="red"
        className={cn('w-[100%] text-darkBlue')}
        defaultValue={[minPrice, maxPrice]}
      />
    </div>
  );
}
