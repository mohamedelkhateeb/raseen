import React, { useState } from 'react';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import CategorySection from './company-section';
import { PriceRange } from './price-range';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { getCities } from '@/services/authService';
import { Cities } from '@/types/app';
import { useDirection } from '@/utils/helpers';
import { useEffect } from 'react';
import { Category } from '@/types/models/home.model';
import SubCategoryFilter from './sub-category-filter';
import { RateRange } from './rate-range';

const CategoryFilter = ({ categories, subCategories }: { categories: Category[]; subCategories: Category[] }) => {
  const [category, setCategory] = useQueryState('category', parseAsString.withOptions({ shallow: false }).withDefault(''));
  const [subCategory, setSubCategory] = useQueryState('subCategories', parseAsString.withOptions({ shallow: false }).withDefault(''));
  const [minPrice, setMinPrice] = useQueryState('minPrice', parseAsInteger.withOptions({ shallow: false }).withDefault(0));
  const [maxPrice, setMaxPrice] = useQueryState('maxPrice', parseAsInteger.withOptions({ shallow: false }).withDefault(100000));
  const [minRate, setMinRate] = useQueryState('minRate', parseAsInteger.withOptions({ shallow: false }).withDefault(0));
  const [maxRate, setMaxRate] = useQueryState('maxRate', parseAsInteger.withOptions({ shallow: false }).withDefault(5));
  const [city, setCity] = useQueryState('city_id', parseAsInteger.withOptions({ shallow: false }).withDefault(1));
  const [cities, setCities] = useState<Cities[]>([]);
  useEffect(() => {
    const getData = async () => {
      const cities = await getCities();
      setCities(cities || []);
    };
    getData();
  }, []);

  return (
    <aside className="mx-auto w-[350px] space-y-10 p-3 sm:w-[430px] lg:w-[500px]">
      <CategorySection title="القسم الرئيسي" categories={categories} dataFilter={category} setDataFilter={setCategory} />
      <SubCategoryFilter title="القسم الفرعي" categories={subCategories} dataFilter={subCategory} setDataFilter={setSubCategory} />
      <PriceRange
        label="السعر"
        min={0}
        max={100000}
        step={10}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <RateRange label="التقييم" min={0} max={5} step={1} minRate={minRate} maxRate={maxRate} setMinRate={setMinRate} setMaxRate={setMaxRate} />
      <div>
        <p className="py-4 text-xl font-bold">المدينة</p>
        <Select value={city.toString()} required onValueChange={(value) => setCity(+value)} name="city_id">
          <SelectTrigger dir={useDirection()} className={cn('rounded-2xl px-5 py-9 text-xl')}>
            <SelectValue className={cn('text-xl')} placeholder="اختار مدينتك" />
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
      </div>{' '}
    </aside>
  );
};

export default CategoryFilter;
