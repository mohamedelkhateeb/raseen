'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import React from 'react';
import useCarousel from '@/hooks/use-carousel';
export function CarouselSize({ children, showArrows = false, delay = 5000 }: { children: React.ReactNode; showArrows?: boolean; delay?: number }) {
  const { setApi, current, count, plugin } = useCarousel();
  return (
    <>
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
        <CarouselContent className="gap-2">{children}</CarouselContent>
        {showArrows && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {showArrows && (
        <div className="flex flex-row-reverse items-center gap-2 py-2 text-center text-sm text-muted-foreground">
          {Array.from({ length: count })?.map((_, index) => (
            <div key={index} className={`${index + 1 === current ? 'h-3 w-3 rounded-full bg-darkBlue' : 'h-2 w-2 rounded-full bg-[#D9D9D9]'}`}></div>
          ))}
        </div>
      )}
    </>
  );
}
