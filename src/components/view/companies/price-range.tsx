import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

export function PriceRange({ mes, label, defaultValue, max, min, step, dataFilter, setDataFilter }: any) {
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-bold">{label}</h3>
      <div className="mt-2 flex justify-between">
        <div className="mb-14 flex w-[400px] justify-between xl:mb-12">
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setDataFilter({ ...dataFilter, max_price: e.target.value.toString() })}
            min={min}
            max={max}
            step={step}
            value={dataFilter?.max_price}
          />
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setDataFilter({ ...dataFilter, min_price: e.target.value.toString() })}
            min={min}
            max={max}
            step={step}
            value={dataFilter?.min_price}
          />
        </div>
      </div>
      <Slider
        value={[dataFilter.min_price || defaultValue[0], dataFilter.max_price || defaultValue[1]]}
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        onValueChange={(value: any) => setDataFilter({ ...dataFilter, min_price: value[0], max_price: value[1] })}
        color="red"
        className={cn('w-[100%] text-darkBlue')}
      />
    </div>
  );
}
