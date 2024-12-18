'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Title from '@/components/ui/title';
import { Link } from '@/i18n/routing';
import React, { useState } from 'react';
import { Category } from '@/types/models/home.model';
import { Button } from '@/components/ui/button';
import { parseAsInteger, useQueryState } from 'nuqs';
import useCarousel from '@/hooks/use-carousel';
import { useTranslations } from 'next-intl';

const Categories = ({ categories }: { categories: Category[] }) => {
  const [category, setCategory] = useQueryState('category', parseAsInteger.withOptions({ shallow: false }).withDefault(1));
  const [subCategories, setSubCategories] = useState<any[]>(categories[0]?.subCategories || []);
  const { setApi, current, plugin } = useCarousel();
    const t = useTranslations();


  return (
    <section className="my-10 flex flex-col items-center justify-center gap-10 p-4 px-8 lg:mt-8">
      <Title content={t('raseenServices')} />
      <div className="grid grid-cols-3 gap-5">
        {categories?.map((c, index) => (
          <Button
            onClick={() => {
              setCategory(c.id);
              setSubCategories(c.subCategories);
            }}
            key={index.toString()}
            className={
              'h-[3rem] min-w-[7rem] rounded-full border bg-white px-8 text-[10px] text-black shadow-none transition hover:bg-[#004267] hover:text-white sm:text-lg lg:h-[5rem] lg:text-lg' +
              (index + 1 === category ? ' ' + 'bg-[#004267] text-white transition' : '')
            }
          >
            {c?.name}
          </Button>
        ))}{' '}
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
        className="m-auto max-w-[95%]"
        dir="ltr"
      >
        <CarouselContent>
          {subCategories?.map((cat, index) => (
            <CarouselItem key={index.toString()} className="basis-1/3 lg:basis-1/4">
              <Link
                prefetch={true}
                className="flex w-full flex-col items-center justify-center"
                href={`/companies?category=${category}&subCategories=${cat.id}`}
                key={index}
              >
                <div className="flex w-full flex-col items-center justify-center">
                  <img className="w-full object-cover" src={cat?.img} alt="" />
                </div>
                <p className="text-md mt-5 font-bold">{cat?.name}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-row-reverse items-center gap-2 py-2 text-center text-sm text-muted-foreground">
        {Array.from({ length: subCategories?.length <= 4 ? 1 : subCategories?.length })?.map((_, index) => (
          <div key={index} className={`${index + 1 === current ? 'h-3 w-3 rounded-full bg-darkBlue' : 'h-2 w-2 rounded-full bg-[#D9D9D9]'}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
