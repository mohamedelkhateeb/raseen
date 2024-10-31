import { CarouselSize } from '@/components/common/carousel';
import { CarouselItem } from '@/components/ui/carousel';
import Title from '@/components/ui/title';
import { Link } from '@/i18n/routing';
import CategorySection from '@/components/common/category-btns';
import React from 'react';
import { Category } from '@/types/models/home.model';
import { getSubCategories } from '@/services/homeService';
import { searchParamsCache } from '@/utils/searchparams';

const Categories = async ({ categories }: { categories: Category[] }) => {
  categories.unshift({ name: 'الكل', id: 0, img: '' });
  const catNum = searchParamsCache.get('category');
  const data: Category[] = await getSubCategories(catNum);
  return (
    <section className="my-10 flex flex-col items-center justify-center gap-10 p-4 px-8 lg:mt-8">
      <Title content={'خدمات رصين'} />
      <div className="grid grid-cols-3 gap-5">
        <CategorySection selectedStyle="bg-[#004267] text-white transition" categories={categories} />
      </div>
      <CarouselSize showArrows={true}>
        {data?.map((category, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
            <Link
              className="flex w-full flex-col items-center justify-center"
              href={`/companies?category=${catNum}&subCategories=${category.id}`}
              key={index}
            >
              <div className="flex w-full flex-col items-center justify-center">
                <img className="w-full object-cover" src={category?.img} alt="" />
              </div>
              <p className="text-md mt-5 font-bold">{category?.name}</p>
            </Link>
          </CarouselItem>
        ))}
      </CarouselSize>
    </section>
  );
};

export default Categories;
