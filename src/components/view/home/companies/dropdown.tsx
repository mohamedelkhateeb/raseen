import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { getCities } from '@/services/authService';
import { Cities } from '@/types/app';
import { useDirection } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl'; // Import useTranslations

const DropdownMenu = ({ dataFilter, setDataFilter, triggerStyle }: any) => {
  const [cities, setCities] = useState<Cities[]>([]);
  useEffect(() => {
    const getData = async () => {
      const cities = await getCities();
      setCities(cities || []);
    };
    getData();
  }, []);

  const t = useTranslations()
  return (
    <div>
      <p className="py-4 text-xl font-semibold">{t('city')}</p>
      <Select
        defaultValue={dataFilter?.city?.id?.toString()}
        required
        onValueChange={(value) => setDataFilter({ ...dataFilter, city_id: value })}
        name="city_id"
      >
        <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
          <SelectValue className={cn('text-xl', triggerStyle)} placeholder={t('selectCity')} />
        </SelectTrigger>
        <SelectContent dir={useDirection()}>
          <SelectGroup>
            {cities?.map((city) => (
              <SelectItem className="text-xl" value={city.id.toString()} key={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownMenu;
