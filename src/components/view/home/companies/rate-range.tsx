import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

export function RateRange({ mes, label, max, min, step, minRate, maxRate, setMinRate, setMaxRate }: any) {
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-bold">{label}</h3>
      <div className="mt-2 flex justify-between">
        <div className="mb-14 flex w-[400px] justify-between xl:mb-12">
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setMaxRate(e.target.value.toString())}
            maxLength={1}
            minLength={1}
            value={maxRate}
            max={5}
            min={0}
          />
          <input
            type="number"
            className="w-32 rounded-xl border p-2 text-center font-bold lg:w-28 lg:px-2"
            onChange={(e) => setMinRate(e.target.value.toString())}
            maxLength={1}
            minLength={1}
            value={minRate}
            max={5}
            min={0}
          />
        </div>
      </div>
      <Slider
        value={[minRate, maxRate]}
        min={min}
        max={max}
        step={step}
        onValueChange={(value: any) => {
          setMinRate(value[0].toString());
          setMaxRate(value[1].toString());
        }}
        color="red"
        className={cn('w-[100%] text-darkBlue')}
      />
    </div>
  );
}
