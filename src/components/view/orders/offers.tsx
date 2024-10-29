'use client';
import React, { useRef } from 'react';
import OfferCard from './cards/offer-card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { TOffer } from '@/types/models/order.model';
const Offers = ({ offers, isAccepted }: { offers: TOffer[]; isAccepted: boolean }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col gap-4 rounded-2xl px-10 py-12">
      <h1 className="my-4 text-2xl font-bold">عروض الشركات</h1>
      {offers?.length == 0 && <h1>لا يوجد عروض حتى الان</h1>}
      <div className="flex w-full flex-col justify-between gap-10 xl:flex-row">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="max-w-[100%]"
          dir="ltr"
        >
          <CarouselContent className="gap-10">
            {offers?.map((offer, index) => (
              <CarouselItem key={index} className="lg:basis-1/2">
                <OfferCard
                  companyImage={offer?.company?.img}
                  companyName={offer?.company?.name}
                  stars={offer?.company?.avg_rates}
                  description={offer?.note}
                  price={offer?.price}
                  isAccepted={isAccepted}
                  offerId={offer?.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Offers;
