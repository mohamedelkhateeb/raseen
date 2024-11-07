'use client';
import { Link } from '@/i18n/routing';
import { Article } from '@/types/models/home.model';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';
import Title from '@/components/ui/title';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import React from 'react';
import useCarousel from '@/hooks/use-carousel';
import { useDirection } from '@/utils/helpers';

const Articals = ({ articals = [] }: { articals: Article[] }) => {
  const { setApi, current, count, plugin } = useCarousel();

  return (
    <section id="articles" className="mb-10 flex flex-col items-center justify-center gap-5 lg:gap-10">
      <Title content="ابتكر واجهات ملهمة وتجارب لمنزلك" />
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
        className="m-auto max-w-[90%]"
        dir="ltr"
      >
        <CarouselContent>
          {articals?.map((a, index) => (
            <CarouselItem key={index} className="basis md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col justify-center rounded-lg border bg-card text-card-foreground shadow-sm">
                <img src={a.img} alt="Image" className="rounded-md object-cover" />
                <div className="mt-8 flex w-full justify-end px-4 lg:mt-8">
                  <p className="flex items-center gap-2 rounded-lg bg-[#EA8D09] p-2 py-2 text-[10px] text-white lg:text-sm">
                    {a?.category?.name}
                    <LuLayoutDashboard />
                  </p>
                </div>
                <h1 className="text-md mt-3 px-4 text-right font-semibold leading-normal lg:text-xl">{a.title}</h1>
                <div
                  className="terms-page px-10 pt-4 text-xs leading-7 lg:text-[14px]"
                  dir={useDirection()}
                  dangerouslySetInnerHTML={{ __html: a.desc }}
                />
                <Link
                  prefetch={true}
                  href="/"
                  className={'text:xl mb-4 flex items-center justify-end gap-4 px-4 font-bold text-[#004267] lg:text-xl'}
                >
                  قراءة المزيد
                  <IoIosArrowRoundBack size={35} color="#004267" />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-row-reverse items-center gap-2 py-2 text-center text-sm text-muted-foreground">
        {Array.from({ length: articals?.length })?.map((_, index) => (
          <div key={index} className={`${index + 1 === current ? 'h-3 w-3 rounded-full bg-darkBlue' : 'h-2 w-2 rounded-full bg-[#D9D9D9]'}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Articals;
