import React, { useState } from 'react';
import { parseAsInteger, parseAsJson, parseAsString, useQueryState } from 'nuqs';
import CategorySection from './company-section';
import { PriceRange } from './price-range';
import DropdownMenu from './dropdown';
import { Category } from '@/types/models/home.model';
import SubCategoryFilter from './sub-category-filter';
import { RateRange } from './rate-range';

const CategoryFilter = ({ categories, subCategories }: { categories: Category[]; subCategories: Category[] }) => {
  const [category, setCategory] = useQueryState('category', parseAsInteger.withOptions({ shallow: false }).withDefault(1));
  const [subCategory, setSubCategory] = useQueryState('subCategories', parseAsString.withOptions({ shallow: false }).withDefault(''));
  const [minPrice, setMinPrice] = useQueryState('minPrice', parseAsInteger.withOptions({ shallow: false }).withDefault(0));
  const [maxPrice, setMaxPrice] = useQueryState('maxPrice', parseAsInteger.withOptions({ shallow: false }).withDefault(10000));
  const [minRate, setMinRate] = useQueryState('minRate', parseAsInteger.withOptions({ shallow: false }).withDefault(0));
  const [maxRate, setMaxRate] = useQueryState('maxRate', parseAsInteger.withOptions({ shallow: false }).withDefault(3));
  const [city, setCity] = useQueryState('city_id', parseAsInteger.withOptions({ shallow: false }).withDefault(1));

  console.log(subCategory);
  
  return (
    <aside className="mx-auto w-[350px] space-y-10 p-3 sm:w-[430px] lg:w-[500px]">
      <CategorySection title="القسم الرئيسي" categories={categories} dataFilter={category} setDataFilter={setCategory} />
      <SubCategoryFilter title="القسم الفرعي" categories={subCategories} dataFilter={subCategory} setDataFilter={setSubCategory} />
      <PriceRange
        label="السعر"
        defaultValue={[100, 5000]}
        mes=""
        min={0}
        max={10000}
        step={10}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <RateRange
        label="التقييم"
        defaultValue={[1, 3]}
        mes=""
        min={0}
        max={5}
        step={1}
        minRate={minRate}
        maxRate={maxRate}
        setMinRate={setMinRate}
        setMaxRate={setMaxRate}
      />
      <DropdownMenu dataFilter={city} setDataFilter={setCity} />
    </aside>
  );
};

export default CategoryFilter;
