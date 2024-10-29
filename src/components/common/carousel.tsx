'use client';
import * as React from 'react';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function CarouselSize({ children, showArrows, delay = 5000 }: { children: React.ReactNode; showArrows?: boolean; delay?: number }) {
  // const plugin = React.useRef();
  const plugin = React.useRef(Autoplay({ delay: delay, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="m-auto max-w-[90%]"
      dir="ltr"
    >
      <CarouselContent className="gap-1">{children}</CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
