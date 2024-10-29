import { CarouselSize } from '@/components/common/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import Title from '@/components/ui/title';
import { Partner } from '@/types/models/home.model';
import React from 'react';

const Partners = ({ partners = [] }: { partners: Partner[] }) => {
  return (
    <section className="my-10 flex flex-col items-center justify-center gap-10 lg:mt-24">
      <Title content="شركاء النجاح" />
      <CarouselSize showArrows={false}>
        {partners?.map((partner, index) => (
          <CarouselItem key={index} className="basis-1/6">
            <div>
              <Card className="border-0 shadow-none">
                <CardContent className="flex aspect-square p-0">
                  <div className="flex flex-col items-center justify-center">
                    <img className="" src={partner?.img} alt="partner" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselSize>
    </section>
  );
};

export default Partners;
