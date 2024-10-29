import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

export function RateRange({ mes, label, defaultValue, max, min, step, dataFilter, setDataFilter }: any) {
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-bold">{label}</h3>
      <div className="mt-2 flex justify-between">
        <div className="mb-14 flex w-[400px] justify-between xl:mb-12">
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setDataFilter({ ...dataFilter, max_avg_rates: e.target.value.toString() })}
            maxLength={1}
            minLength={1}
            max={5}
            value={dataFilter.min_avg_rates}
          />
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setDataFilter({ ...dataFilter, min_avg_rates: e.target.value.toString() })}
            maxLength={1}
            minLength={1}
            value={dataFilter.max_avg_rates}
          />
        </div>
      </div>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        onValueChange={(value: any) => setDataFilter({ ...dataFilter, max_avg_rates: value[0], min_avg_rates: value[1] })}
        color="red"
        className={cn('w-[100%] text-darkBlue')}
      />
    </div>
  );
}
