'use client';
import { parseAsInteger, useQueryState } from 'nuqs';
import React from 'react';
import { Button } from '../ui/button';
import { Category } from '@/types/models/home.model';
interface CategorySectionProps {
  title?: string;
  categories: Category[];
  defaultStyle?: string;
  selectedStyle?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories, selectedStyle }) => {
  const [category, setCategory] = useQueryState('category', parseAsInteger.withOptions({ shallow: false }).withDefault(0));
  return (
    <>
      {categories?.map((c, index) => (
        <Button
          onClick={() => {
            setCategory(c.id);
          }}
          key={index}
          className={
            'h-[3rem] min-w-[7rem] rounded-full border bg-white px-8 text-[10px] text-black shadow-none transition hover:bg-[#004267] hover:text-white sm:text-lg lg:h-[5rem] lg:text-lg' +
            (index === category ? ' ' + selectedStyle : '')
          }
        >
          {c?.name}
        </Button>
      ))}
    </>
  );
};

export default CategorySection;
