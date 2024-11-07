import { CarouselSize } from '@/components/common/carousel';
import { buttonVariants } from '@/components/ui/button';
import { CarouselItem } from '@/components/ui/carousel';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Banner } from '@/types/models/home.model';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

const Banners = ({ banners }: { banners: Banner[] }) => {
  const t = useTranslations('HomePage');
  return (
    <CarouselSize indicators={true} delay={10000}>
      {banners?.map((banner, index) => (
        <CarouselItem key={index}>
          <section dir="rtl" className="flex w-full flex-col justify-between gap-10 lg:flex-row">
            <div className="flex flex-col justify-center gap-8">
              <h1 className={cn('w-full text-2xl font-semibold leading-normal md:text-3xl xl:w-[728px] xl:text-5xl xl:leading-normal')}>
                {banner?.title}
              </h1>
              <p className={cn('w-full text-lg font-semibold leading-7 md:w-[500px] xl:w-[710px] xl:text-2xl')}>{banner?.desc}</p>
              <Link
                href={'/orders/new'}
                className={cn(
                  buttonVariants({ variant: 'default', size: 'default' }),
                  'mt-2 w-[220px] rounded-full bg-[#004267] px-5 py-8 text-xl font-[600] text-white md:w-[280px]',
                )}
              >
                <Plus className="ml-2" size={20} />
                {t('getOffer')}
              </Link>
            </div>
            <div className="w-full lg:ml-16 lg:w-[750px]">
              <img src={banner.img} alt="Card image" className="h-full w-full rounded-2xl object-cover" />
            </div>
          </section>
        </CarouselItem>
      ))}
    </CarouselSize>
  );
};

export default Banners;
