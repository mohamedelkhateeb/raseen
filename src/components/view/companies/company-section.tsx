import { Category } from '@/types/models/home.model';
import React from 'react';

interface CategorySectionProps {
  title: string;
  categories: Category[];
  dataFilter: any;
  setDataFilter: any;
}

const CategorySection = ({ title, categories, dataFilter, setDataFilter }: CategorySectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="mb-5 text-lg font-bold">{title}</h3>
      <div className="grid grid-cols-2 gap-6 sm:w-[418px]">
        {categories?.map((c, index) => (
          <button
            onClick={() => setDataFilter(c.id)}
            key={index}
            className={'rounded border bg-[Stroke] px-4 py-4 font-medium transition' + (c.id == dataFilter ? ' border-primary bg-[#00426708]' : '')}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
