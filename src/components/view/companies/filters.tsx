import React, { useState } from 'react';
import { parseAsInteger, parseAsJson, useQueryState } from 'nuqs';
import CategorySection from './company-section';
import { PriceRange } from './price-range';
import DropdownMenu from './dropdown';
import { Category } from '@/types/models/home.model';
import SubCategoryFilter from './sub-category-filter';
import { filterSchema } from '@/types/schema/order';
import { RateRange } from './rate-range';

const CategoryFilter = ({ categories, subCategories }: { categories: Category[]; subCategories: Category[] }) => {
  const [category, setCategory] = useQueryState('category', parseAsInteger.withOptions({ shallow: false }).withDefault(1));
  const [dataFilter, setDataFilter] = useQueryState(
    'filter',
    parseAsJson(filterSchema.parse)
      .withDefault({
        category_id: category.toString(),
        sub_categories: [{ id: 1 }],
        city_id: '1',
        min_price: 0,
        max_price: 10000,
        min_avg_rates: 0,
        max_avg_rates: 3,
      })
      .withOptions({ shallow: false }),
  );
  return (
    <aside className="mx-auto w-[350px] space-y-10 p-3 sm:w-[430px] lg:w-[500px]">
      <CategorySection title="القسم الرئيسي" categories={categories} dataFilter={dataFilter} setDataFilter={setDataFilter} />
      <SubCategoryFilter title="القسم الفرعي" categories={subCategories} dataFilter={dataFilter} setDataFilter={setDataFilter} />
      <PriceRange
        label="السعر"
        defaultValue={[100, 5000]}
        mes=""
        min={0}
        max={10000}
        step={10}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
      />
      <RateRange label="التقييم" defaultValue={[1, 3]} mes="" min={0} max={5} step={1} dataFilter={dataFilter} setDataFilter={setDataFilter} />
      <DropdownMenu dataFilter={dataFilter} setDataFilter={setDataFilter} />
    </aside>
  );
};

export default CategoryFilter;
