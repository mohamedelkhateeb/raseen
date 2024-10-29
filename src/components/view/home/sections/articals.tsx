'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Title from '@/components/ui/title';
import { Link } from '@/i18n/routing';
import { Article } from '@/types/models/home.model';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';

const Articals = ({ articals }: { articals: Article[] }) => {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <section id="articles" className="flex flex-col items-center justify-center gap-5 lg:mt-8 lg:gap-16 mb-7">
      <Title content="ابتكر واجهات ملهمة وتجارب لمنزلك" />
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="m-auto min-w-[95%] px-10 lg:p-0"
        dir="ltr"
      >
        <CarouselContent className="gap-4">
          {articals?.map((a, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col justify-center rounded-lg border bg-card text-card-foreground shadow-sm lg:max-h-[723px] lg:max-w-[560px]">
                <img src={a.img} alt="Image" className="rounded-md object-cover" />
                <div className="mt-8 flex w-full justify-end px-4 lg:mt-8">
                  <p className="flex items-center gap-2 rounded-lg bg-[#EA8D09] p-2 py-2 text-[10px] text-white lg:text-sm">
                    {a?.category?.name}
                    <LuLayoutDashboard />
                  </p>
                </div>
                <h1 className="text-md mt-3 px-4 py-4 text-right font-semibold leading-normal lg:text-xl">{a.title}</h1>
                <p className="mt-3 px-4 text-right font-medium">{a.desc}</p>
                <Link href="/" className={'text:xl my-4 flex items-center justify-end gap-4 px-4 font-bold text-[#004267] lg:text-xl'}>
                  قراءة المزيد
                  <IoIosArrowRoundBack size={35} color="#004267" />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Articals;
