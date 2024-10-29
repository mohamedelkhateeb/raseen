import { Category } from '@/types/models/home.model';
import React, { useState } from 'react';

interface SubCategoryPropsFilter {
  title: string;
  categories: Category[];
  dataFilter: any;
  setDataFilter: any;
}

const SubCategoryFilter = ({ title, categories, dataFilter, setDataFilter }: SubCategoryPropsFilter) => {
  const handleSubCategoryClick = (id: number) => {
    if (dataFilter.sub_categories.some((sub: any) => sub.id === id)) {
      setDataFilter({ ...dataFilter, sub_categories: dataFilter.sub_categories.filter((sub: any) => sub.id !== id) });
    } else {
      setDataFilter({ ...dataFilter, sub_categories: [...dataFilter.sub_categories, { id }] });
    }
  };
  return (
    <div className="mb-6">
      <h3 className="mb-5 text-lg font-bold">{title}</h3>
      <div className="grid grid-cols-2 gap-6 sm:w-[418px]">
        {categories?.map((c) => (
          <button
            onClick={() => handleSubCategoryClick(c.id)}
            key={c.id}
            className={
              'rounded border bg-[Stroke] px-4 py-4 font-medium transition' +
              (dataFilter.sub_categories.some((sub: any) => sub.id === c.id) ? ' border-primary bg-[#00426708]' : '')
            }
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryFilter;
