import React from 'react';
import OrderCard, { statusColorMap } from './cards/order-card';
import { BsBuildingCheck } from 'react-icons/bs';
import { Link } from '@/i18n/routing';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Breadcrumbs } from '@/components/common/breadcrumd';
import { TbSmartHome } from 'react-icons/tb';
import { ReadOrder, TOrder } from '@/types/models/order.model';
const OrderListingViewPage = ({ orders, relatedServices }: { orders: ReadOrder[]; relatedServices: any[] }) => {
  const items = [
    { title: <TbSmartHome size={30} color="#EA8D09" />, link: '/' },
    { title: 'طلباتي', link: '/' },
  ];
  console.log({ relatedServices });

  return (
    <section className="px-7">
      <Breadcrumbs items={items} />
      <div className="my-5 flex flex-col gap-10">
        {orders?.map((order) => (
          <OrderCard
            showStatus={true}
            title={order?.category?.name}
            key={order.id}
            code={order.code}
            id={order.id}
            icon={<BsBuildingCheck className="mx-5 text-[30px] lg:text-[50px]" color="#004267" />}
            label={order?.status?.name}
            status={order.status.id as keyof typeof statusColorMap}
          />
        ))}
      </div>
      <div className="my-20 flex flex-col items-center justify-center gap-14">
        <div className="flex w-[92%] justify-between">
          <h1 className="font-bold lg:text-2xl">خدمات أخرى ذات صلة</h1>
          <span className="flex items-center gap-2 text-xl font-medium text-[#EA8D09]">
            <Link href={'/companies'}>عرض الكل</Link>
            <IoIosArrowRoundBack />
          </span>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="flex w-full items-center justify-center"
        >
          <CarouselContent className="xl:gap-14">
            {relatedServices?.map((v, index) => (
              <Link href={'/companies'} key={index} className="xl:w-[400px]">
                <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex aspect-square flex-col items-center p-0">
                      <img className="h-full w-full object-fill" src={v?.img ?? ''} alt="" />
                      <h1 className="my-5 font-bold xl:text-2xl"> {v?.name}</h1>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default OrderListingViewPage;
