import { CarouselSize } from '@/components/common/carousel';
import { CarouselItem } from '@/components/ui/carousel';
import Title from '@/components/ui/title';
import { Rate } from '@/types/models/home.model';
import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Rates = ({ rates = [] }: { rates: Rate[] }) => {
  return (
    <section id="articles" className="flex flex-col items-center justify-center gap-5 lg:gap-16">
      <Title content="ماذا قالوا عن رصين" />
      <CarouselSize>
        {rates?.map((rate, index) => (
          <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
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
      </CarouselSize>
    </section>
  );
};

export default Rates;
