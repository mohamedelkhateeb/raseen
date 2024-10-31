'use client';
import Title from '@/components/ui/title';
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';

import { Rate } from '@/types/models/home.model';
import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import useCarousel from '@/hooks/use-carousel';

const Rates = ({ rates = [] }: { rates: Rate[] }) => {
  const { setApi, current, count, plugin } = useCarousel();
  return (
    <section id="articles" className="flex flex-col items-center justify-center gap-5 lg:gap-10">
      <Title content="ماذا قالوا عن رصين" />
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
          {rates?.map((rate, index) => (
            <CarouselItem key={index} className="basis md:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl bg-[#F9F9F9] p-10" dir="rtl">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-3xl font-bold">{rate?.user_rate?.name}</h1>
                    <p className="text-lg font-semibold">{rate?.created_at}</p>
                  </div>
                  <BiSolidQuoteAltLeft size={40} color="#004267" className="mr-auto" />
                </div>
                <p className="mt-10 text-lg font-light">{rate?.msg}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-row-reverse items-center gap-2 py-2 text-center text-sm text-muted-foreground">
        {Array.from({ length: count })?.map((_, index) => (
          <div key={index} className={`${index + 1 === current ? 'h-3 w-3 rounded-full bg-darkBlue' : 'h-2 w-2 rounded-full bg-[#D9D9D9]'}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Rates;
